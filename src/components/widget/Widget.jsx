import "./widget.scss";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [totalContent, setTotalContent] = useState(null);

  let data;

  switch (type) {
    case "post":
      data = {
        title: "POSTS",
        link: "See all posts",
        query:"post",
        icon: (
          <FeedOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "news":
      data = {
        title: "NEWS",
        link: "View all news",
        query:"news",
        icon: (
          <NewspaperOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "announcment":
      data = {
        title: "ANNOUNCMENT",
        link: "View all announcments",
        query:"announcements",
        icon: (
          <AnnouncementOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(77, 71, 253, 0.2)", color: "blue" }}
          />
        ),
      };
      break;
    
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const contentQuery = query(collection(db, 'contents'), where('postType', '==', data.query));
      const contentSnapshot = await getDocs(contentQuery);
      setTotalContent(contentSnapshot.size);
    };
    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {totalContent}
        </span>
        <span className="link">
        <Link to={`/contents/${data.query}`} style={{ textDecoration: "none" }}>
          {data.link}
        </Link> 
          </span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
