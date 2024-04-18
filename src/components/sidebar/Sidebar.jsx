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
  { path: "/users", label: "Students", icon: <PersonOutlineIcon /> },
  { path: "/almuni", label: "Almuni", icon: <PeopleOutlineRoundedIcon /> },
  { path: "/faculty", label: "Faculty", icon: <Person4Icon /> },
  { path: "/coordinator", label: "Coordinator", icon: <SupportAgentIcon /> },
];

const contentLinks = [
  { path: "/posts", label: "Posts", icon: <FeedIcon /> },
  { path: "/news", label: "News", icon: <NewspaperIcon /> },
  { path: "/announcment", label: "Announcement", icon: <AnnouncementIcon /> },
  { path: "/event", label: "Event", icon: <EventIcon /> },
];

const serviceLinks = [
  { path: "/users", label: "Profile", icon: <AccountCircleOutlinedIcon /> },
  { path: "/notifications", label: "Notification", icon: <NotificationsNoneRoundedIcon /> },
  { path: "/settings", label: "Settings", icon: <SettingsApplicationsIcon /> },
  { path: "/logout", label: "Logout", icon: <ExitToAppIcon /> },
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