import React from "react";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
const Profile = () => {
  
  return (
    <div className="twitter">
     <Sidebar />
      <center><h1>This is Profile page.</h1></center>
      <Trends/>
    </div>
  );
};

export default Profile;