import React from "react";
import Home from "./Home";

import Sidebar from "./Sidebar";
import Trends from "./Trends";
const Bookmarks = () => {
  
  return (
    <div className="twitter">
      <Sidebar />
      <center><h1>This is Bookmarks page.</h1></center>
      <Trends/>
    </div>
  );
};

export default Bookmarks;