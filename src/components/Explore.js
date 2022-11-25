import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Trends from "./Trends";
const Explore = () => {
  
  return (
    <div className="twitter">
      <Sidebar />
      <center><h1>This is explore page.</h1></center>
      <Trends/>

      
    </div>
  );
};

export default Explore;
