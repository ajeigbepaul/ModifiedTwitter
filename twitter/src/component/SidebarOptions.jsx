import React from "react";
import "./Sidebaroptions.css";

function SidebarOptions({ active, text, Icon }) {
  return (
    <div className={`sidebaroptions ${active && "sidebaroptions--active"}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOptions;
