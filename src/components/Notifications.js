import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
const Notifications = () => {
  
  return (
    <div className="twitter">
      <Sidebar />
      <center><h1>This is Notifications page.</h1></center>
      <Trends/>
     
    </div>
  );
};

export default Notifications;