import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../../firebase';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table"

const SingleContent = () => {
  const { postId } = useParams();
  const [contentData, setContentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const contentDocRef = doc(db, 'contents', postId);
        const contentDoc = await getDoc(contentDocRef);
  
        if (contentDoc.exists()) {
          const data = contentDoc.data();
          // Convert the 'createAt' object to a string
          const formattedCreateAt = data.createAt
            ? new Date(data.createAt.seconds * 1000).toLocaleString()
            : '';
          setContentData({ ...data, createAt: formattedCreateAt });
        } else {
          setError(`Content document with ID ${postId} does not exist.`);
        }
      } catch (err) {
        setError(`Error fetching content data: ${err.message}`);
      }
    };
  
    fetchContentData();
  }, [postId]);

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
            {contentData && contentData.postImageUrl ? (
              <img src={contentData.postImageUrl} alt="" className="contentImg" />
            ) : (
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="contentImg"
              />
            )}
          </div>

          <div className="right">
            <div className="details">
              <div className="editButton">Edit</div>
              
              {/* <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div> */}
              <h2 className="itemTitle">Detail Informations</h2>

              <div className="detailItem ">
                <h3 className="itemKey">Description: </h3>
                <h3 className="itemValue">{contentData?.description || ''}</h3>
              </div>  
              <div className="detailItem ">
                <h3 className="itemKey">Created at: </h3>
                <h3 className="itemValue">{contentData?.createAt || ''}</h3>
              </div>  
              <div className="detailItem ">  
                <h3 className="itemKey">Posted By: </h3>
                <h3 className="itemValue">{contentData?.username || ''}</h3>
              </div>
              <div className="detailItem ">  
                <h3 className="itemKey">Content Type: </h3>
                <h3 className="itemValue">{contentData?.postType || ''}</h3>
              </div>             
              <div className="detailItem">
                <h3 className="itemKey">TotalComments: </h3>
                <h3 className="itemValue">{contentData?.totalComments || 0}</h3>
              </div>
              <div className="detailItem">
                <h3 className="itemKey">TotalLikes: </h3>
                <h3 className="itemValue">{contentData?.totalLikes || 0}</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleContent;