import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import Person4Icon from '@mui/icons-material/Person4';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EventIcon from '@mui/icons-material/Event';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
 const { dispatch } = useContext(DarkModeContext);
 const userLinks = [
  { path: "/users/student", label: "Students", icon: <PersonOutlineIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/users/almuni", label: "Almuni", icon: <PeopleOutlineRoundedIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/users/faculty", label: "Faculty", icon: <Person4Icon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/users/coordinator", label: "Coordinator", icon: <SupportAgentIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
];

const contentLinks = [
  { path: "/contents/post", label: "Posts", icon: <FeedIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/contents/news", label: "News", icon: <NewspaperIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/contents/announcment", label: "Announcement", icon: <AnnouncementIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/contents/event", label: "Event", icon: <EventIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
];

const serviceLinks = [
  { path: "/service/profile", label: "Profile", icon: <AccountCircleOutlinedIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/service/notification", label: "Notification", icon: <NotificationsNoneRoundedIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/service/setting", label: "Settings", icon: <SettingsApplicationsIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
  { path: "/service/logout", label: "Logout", icon: <ExitToAppIcon style={{color: "rgb(77, 71, 253)", fontSize: "20px" }}/> },
];

return (
  <div className="sidebar">
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">UniNET</span>
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