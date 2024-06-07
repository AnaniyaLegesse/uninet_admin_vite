import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AvaterPopover from "../popover/AvaterPopover";
import NotificationPopover from "../popover/NotificationPopover"

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationPopover />
          </div>
          <div className="item">
            <AvaterPopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
