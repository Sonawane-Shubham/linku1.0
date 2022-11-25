import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
const Connections = () => {
  
  return (
    <div className="twitter">
     <Sidebar />
      <center><h1>This is connections page.</h1></center>
      <Trends/>
    </div>
  );
};

export default Connections;