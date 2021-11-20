import React from "react";
import "./Header.css";

function Header(props) {
  const { logoutIcon, kozipro, setting } = props;

  return (
    <div className="header border-1px-my-pink">
      <img className="logout-icon" src={logoutIcon} />
      <div className="kozipro sfpro-bold-black-20px">{kozipro}</div>
      <img className="setting" src={setting} />
    </div>
  );
}

export default Header;
