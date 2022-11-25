import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
const Messages = () => {
  
  return (
    <div className="twitter">
      <Sidebar />
      <center><h1>This is Messages page.</h1></center>
      <Trends/>
    </div>
  );
};

export default Messages;