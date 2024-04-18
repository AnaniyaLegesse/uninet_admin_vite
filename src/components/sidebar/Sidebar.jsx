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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">UniNET</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <p className="title">Users</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Students</span>
            </li>
          </Link>
          <Link to="/almuni" style={{ textDecoration: "none" }}>
            <li>
              <PeopleOutlineRoundedIcon  className="icon" />
              <span>Almuni</span>
            </li>
          </Link>
          <Link to="/faculty" style={{ textDecoration: "none" }}>
            <li>
              <Person4Icon  className="icon" />
              <span>Faculty</span>
            </li>
          </Link>
          <Link to="/coordinator" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="icon" />
              <span>Coordinator</span>
            </li>
          </Link>
          
         
          <p className="title">Contents</p>
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <li>
                <FeedIcon className="icon" />
                <span>Posts</span>
              </li>
            </Link>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <li>
                <NewspaperIcon className="icon" />
                <span>News</span>
              </li>
            </Link>
            <Link to="/announcment" style={{ textDecoration: "none" }}>
              <li>
                <AnnouncementIcon  className="icon" />
                <span>Announcment</span>
              </li>
            </Link>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <li>
                <EventIcon className="icon" />
                <span>Event</span>
              </li>
            </Link>


          <p className="title">SERVICE</p>

            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
              </li>
            </Link>
            <Link to="/almuni" style={{ textDecoration: "none" }}>
              <li>
                <NotificationsNoneRoundedIcon className="icon" />
                <span>Notification</span>
              </li>
            </Link>
            <Link to="/faculty" style={{ textDecoration: "none" }}>
              <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Settings</span>
              </li>
            </Link>
            <Link to="/coordinator" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>  
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
