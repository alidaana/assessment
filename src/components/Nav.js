import React from "react";
import "./Nav.css";
import MenuItem from "./MenuItem";
import { height } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTimes,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "50%";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <div href="javascript:void(0)" className="closebtn">
          <div className="xbtn">
            <a>
              <FontAwesomeIcon
                onClick={closeNav}
                className="fa-icon1"
                icon={faTimes}
              />
            </a>
          </div>

          <div className="xmsg">
            <a>الملحق</a>
            <p>
              <FontAwesomeIcon
                style={{ fontSize: "40", color: "white" }}
                icon={faFileAlt}
              />
            </p>
          </div>
        </div>

        <div
          style={{
            overflow: "auto",
            height: "95%",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
          <MenuItem message="item 1"></MenuItem>
          <MenuItem message="item 2"></MenuItem>
          <MenuItem message="item 3"></MenuItem>
          <MenuItem message="item 4"></MenuItem>
        </div>
      </div>
      <span className="open" onClick={openNav}>
        <FontAwesomeIcon
          style={{ fontSize: "40", color: "white" }}
          icon={faFileAlt}
        />
      </span>
    </div>
  );
}

export default Nav;
