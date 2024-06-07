import React from 'react'
import "./upload.scss";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import {auth, db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const CSVUploader = () => {

    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      try {
        const parsedData = await parseCSV(file);
        await uploadUsersToFirebaseAuth(parsedData);
        await uploadUsersToFirestore(parsedData);
        console.log('Users uploaded successfully');
      } catch (error) {
        console.error('Error uploading users:', error);
      }
    };
  
    const parseCSV = (file) => {
      return new Promise((resolve, reject) => {
        Papa.parse(file, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            resolve(results.data);
          },
          error: (error) => {
            reject(error);
          },
        });
      });
    };
  
    const uploadUsersToFirebaseAuth = async (userData) => {
      for (const user of userData) {
        try {
          await createUserWithEmailAndPassword(auth, user.email, user.password);
          console.log(`User ${user.email} created successfully`);
        } catch (error) {
          console.error(`Error creating user ${user.email}:`, error);
        }
      }
    };
  
    const uploadUsersToFirestore = async (userData) => {
      try {
        const { email, password, ...dataWithoutPassword } = user;
        const { user: createdUser } = await createUserWithEmailAndPassword(Auth, email, password);
  
        // Add the additional user data to Firestore
        await addDoc(usersCollection, {
          uid: createdUser.uid,
          ...dataWithoutPassword,
          connections: [],
          totalConnection: 0,
          totalPosts: 0,
          timeStamp: serverTimestamp(),
        });
  
        console.log(`User ${email} created successfully`);
      } catch (error) {
        console.error(`Error creating user ${user.email}:`, error);
      }
    };
  return (
    <div className="uploader">
      <Sidebar />
      <div className="uploaderContainer">
        <Navbar />
      <div className='Title'>Multiple Users Upload</div>
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload Users</button>
        </div>
    </div>
    </div>
  )
}

export default CSVUploader