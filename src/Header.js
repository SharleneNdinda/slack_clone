import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header_avatar" alt="Ndinda" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Here" />
      </div>
      <div className="header__right"></div>
      <HelpOutlineIcon />
    </div>
  );
}

export default Header;
