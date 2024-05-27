import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../../firebase';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const profileImageRef = ref(storage, `profileImages/${userId}.jpg`);
          try {
            const profileImageUrl = await getDownloadURL(profileImageRef);
            setUserData({ ...userData, profileImageUrl });
          } catch (err) {
            if (err.code === 'storage/object-not-found') {
              setUserData({ ...userData, profileImageUrl: null });
            } else {
              setError(`Error fetching profile image: ${err.message}`);
            }
          }
        } else {
          setError(`User document with ID ${userId} does not exist.`);
        }
      } catch (err) {
        setError(`Error fetching user data: ${err.message}`);
      }
    };

    fetchUserData();
  }, [userId, storage]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {userData && userData.profileImageUrl ? (
                <img src={userData.profileImageUrl} alt="" className="itemImg" />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="itemImg"
                />
              )}
              {userData ? (
                <div className="details">
                  <h2>{userData.username}</h2> 
                  <p>bio: {userData.bio}</p>
                  <p>Email: {userData.email}</p>
                  <p>University: {userData.university}</p>
                  <p>Department: {userData.department}</p>
                  <p>UserType: {userData.userType}</p>
                  <p>profileUrl: {userData.profileUrl}</p>
                  <p>totalPost: {userData.totalPost}</p>
                  <p>totalConnection: {userData.totalConnection}</p>
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;

