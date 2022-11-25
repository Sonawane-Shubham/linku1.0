import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
  FaSearchPlus,
  FaHubspot
} from "react-icons/fa";
import Twittes from "./Twittes";
import Tredn from "./Trends";

const Home = () => {
  let log="Logout";
  return (
    <div className="linku">
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHubspot className="icons logo" />
            <h1>LinkU</h1>
          
          </Link>
        
        </li>
        <br/>
        <li>
          <Link to="/">
            <FaHome className="icons logo" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/explore">
            <FaSearchPlus className="icons" /> Explore
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <FaRegBell className="icons" /> Notifications
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FaRegEnvelope className="icons" /> Messages
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <FaRegBookmark className="icons" /> Bookmarks
          </Link>
        </li>
        <li>
          <Link to="/connections">
            <FaClipboardList className="icons" /> Connections
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUserAlt className="icons" /> Profile
          </Link>
        </li>
        {/* <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li> */}
        <div className="sidebar__Btn">
          <Link href="">{log}</Link>
        </div>
      </ul>
    </div>
    <Twittes/>
    <Tredn/>
    </div> 
  );
};

export default Home;
