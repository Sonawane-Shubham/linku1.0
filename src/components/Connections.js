import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
import "./Connections.css";
import Contact from "./chat/Contact"
const Connections = () => {

  return (
    <div className="twitter">
      <Sidebar />
      <div className="ConmainContactContainer">
        <div>
          <div className="Consearchbar" >
            <input type="search" placeholder="search your friend" className="Consearchbarforcontact" />
          </div>
          <div className="ConusersDetailContainer">
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >shubham sonawane</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >Rohit</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >Onkareshwar</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >Hrishikesh</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >shubham sonawane</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >Hrishikesh</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >shubham sonawane</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >Hrishikesh</p>

              </div>
            </div>
            <div className="ConuserContainer">
              <img src="/images/profile.jpg" className="ConChatuserimage" alt="" />
              <div style={{ marginLeft: "15px" }}>
                <p className="ConuserName" >shubham sonawane</p>

              </div>
            </div>






          </div>
        </div>


      </div>

      <Trends />
    </div>
  );
};

export default Connections;