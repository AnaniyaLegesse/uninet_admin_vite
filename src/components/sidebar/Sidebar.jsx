import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
 const { dispatch } = useContext(DarkModeContext);
 const userLinks = [
  { path: "/users/student", label: "Students", icon: <PersonOutlineIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/users/almuni", label: "Almuni", icon: <PeopleOutlineRoundedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/users/faculty", label: "Faculty Representative", icon: <Person4OutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/users/campus", label: "Campus Communicator", icon: <AccountCircleOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },

];

const contentLinks = [
  { path: "/contents/post", label: "Posts", icon: <FeedOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/contents/news", label: "News", icon: <NewspaperOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/contents/announcment", label: "Announcement", icon: <AnnouncementOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
];

const serviceLinks = [
  { path: "/service/addUser", label: "Add User", icon: <PersonAddAltOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/service/uploadCsv", label: "UploadCSV", icon: <CloudUploadOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
  { path: "/service/setting", label: "Settings", icon: <SettingsOutlinedIcon style={{color: "rgb(76, 76, 195)", fontSize: "20px" }}/> },
];

return (
  <div className="sidebar">
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">UniLink</span>
      </Link>
    </div>
    <div className="center">
      <ul>
      <p className="title">USERS</p>
        {userLinks.map((link) => (
          
            <Link to={link.path} style={{ textDecoration: "none" }}>
              <li key={link.path}>
              {link.icon}
              <span>{link.label}</span>
              </li>
            </Link>
          
        ))}
        <p className="title">CONTENTS</p>
        {contentLinks.map((link) => (
           <Link to={link.path} style={{ textDecoration: "none" }}>
           <li key={link.path}>
           {link.icon}
           <span>{link.label}</span>
           </li>
         </Link>
        ))}
        <p className="title">SERVICE</p>
        {serviceLinks.map((link) => (
           <Link to={link.path} style={{ textDecoration: "none" }}>
           <li key={link.path}>
           {link.icon}
           <span>{link.label}</span>
           </li>
         </Link>
        ))}
      </ul>
    </div>
  </div>
);
};


export default Sidebar;