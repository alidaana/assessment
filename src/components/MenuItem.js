import React from "react";
import "./MenuItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCross,
  faFileAlt,
  faFileContract,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function MenuItem(props) {
  return (
    <div className="items">
      <div className="icn">
        <FontAwesomeIcon
          style={{ fontSize: "40", color: "red" }}
          icon={faFileAlt}
        ></FontAwesomeIcon>
      </div>

      <div className="msg">{props.message}</div>
      <div className="btn">
        {" "}
        <FontAwesomeIcon
          style={{ fontSize: "40", color: "black" }}
          icon={faPlus}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default MenuItem;
