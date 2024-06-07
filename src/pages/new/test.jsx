import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [generatedPassword, setGeneratedPassword] = useState('');
  const navigate = useNavigate()

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const generatePassword = () => {
    const password = Math.random().toString(36).slice(2, 10);
    setGeneratedPassword(password);
    console.log(password);
    setData((prevData) => ({
      ...prevData,
      password,
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const { password, ...dataWithoutPassword } = data;
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        ...dataWithoutPassword,
        connections: [],
        totalConnection: 0,
        totalPosts: 0,
        timeStamp: serverTimestamp(),
      });

      admin.firestore().collection('mail').add({
        to: data.email,
        message: {
          subject: `Hello from ${data.name}`,
          html: `Use this Password Login ${generatedPassword} and change your password 
          after you have succefully Loged in`,
        },
      })

      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar /> 
          <div className="Title">
           {title} 
        </div>
        <div className="bottom">
              
          <form onSubmit={handleAdd}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <div className="select-wrapper">
                      <select
                        id={input.id}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                      >
                        <option value="">{input.placeholder}</option>
                        {input.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : input.id === "password" ? (
                    <div className="password-field">
                      <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                        value={generatedPassword}
                        readOnly
                        className="password-input"
                      />
                      {input.generateButton && (
                        <button
                          type="button"
                          onClick={generatePassword}
                          className="generate-password-btn">
                          Generate 
                        </button>
                      )}
                    </div>
                  ) : (
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  )}
                </div>
              ))}
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;