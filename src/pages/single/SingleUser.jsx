import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../../firebase';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table"

const SingleUser = () => {
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
          {userData && userData.profileUrl ? (
                <img src={userData.profileUrl} alt="" className="itemImg" />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="itemImg"
                />
              )}
              <h1 >{userData?.username || 'Unknown'}</h1>
              <p>{userData?.userType || 'Unknown'}</p>  
              <div className="summary">
                <div className="item">
                    <h2>{userData?.totalConnection || 0}</h2>
                    <div className="itemTitle">Connection</div>
                </div>
                <div className="item">
                    <h2>{userData?.totalConnection || 0}</h2>
                    <div className="itemTitle">Posts</div>
                </div>
        </div>
          </div>

          <div className="right">
          <div className="details">
            <div className="editButton">Edit</div>
            <h2 className="itemTitle">Detail Informations</h2>

            <div className="detailItem ">
                <h3 className="itemKey">Full Name: </h3>
                <h3 className="itemValue">{userData?.name || ''}</h3>
            </div>    
            <div className="detailItem ">  
              <h3 className="itemKey">Email: </h3>
              <h3 className="itemValue">{userData?.email || ''}</h3>
            </div>
            <div className="detailItem ">  
              <h3 className="itemKey">Bio: </h3>
              <h3 className="itemValue">{userData?.bio || ''}</h3>
            </div>

             
              <div className="detailItem ">
              <h3 className="itemKey">University: </h3>
              <h3 className="itemValue">{userData?.university || ''}</h3>
              </div>

              <div className="detailItem ">
              <h3 className="itemKey">Department: </h3>
              <h3 className="itemValue">{userData?.department || ''}</h3>
              </div>
              
            </div>
          </div>
        </div>

        <div className="bottom">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;

