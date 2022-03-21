import React from "react";
import "./Twitter.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function Twitter() {
  return (
    <div className="twitterapp">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default Twitter;
