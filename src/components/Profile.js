import React from "react";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
import Miniprofile from "./Miniprofile";

const Profile = () => {
  
  return (
    <div className="twitter">
     <Sidebar />
     
     <Miniprofile/>
      <Trends/>
    </div>
  );
};

export default Profile;