import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
import "./Notifications.css";

import {
  
  FaRegBell
 
} from "react-icons/fa";



const Notifications = () => {
  
  return (
    <div className="linku">
      <Sidebar />
      <div className="container">
      <header>
        <div className="notif_box">
          <h2 className="title">Notifications  </h2>
          <FaRegBell className="icons" />
        </div>
        <p id="mark_all">Mark all as read</p>
      </header>
      <main>
        <div className="notif_card unread">
          <img src="./assets/images/avatar-mark-webber.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Mark Webber</strong> reacted to your recent post
              <b>My first tournament today!</b>
            </p>
            <p className="time">1m ago</p>
          </div>
        </div>
        <div className="notif_card unread">
          <img src="./assets/images/avatar-angela-gray.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Angela Gray</strong> followed you
            </p>
            <p className="time">5m ago</p>
          </div>
        </div>
        <div className="notif_card unread">
          <img src="./assets/images/avatar-jacob-thompson.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Jacob Thompson</strong> has joined your group
              <strong className="link">Chess Club</strong>
            </p>
            <p className="time">1 day ago</p>
          </div>
        </div>
        <div>
          <div className="notif_card">
          <div className="message_card">
            <img
            src="./assets/images/avatar-rizky-hasanuddin.webp"
            alt="avatar"
          />
          <div className="description">
            <p className="user_activity">
              <strong>Rizky Hasanuddin</strong> sent you a private message
            </p>
            <p className="time">5 days ago</p>
          </div>
          </div>
        </div>
        <div className="message">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
        </div>
        
        <div className="notif_card">
          <img src="./assets/images/avatar-kimberly-smith.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Kimberly Smith</strong> commented on your picture
            </p>
            <p className="time">1 week ago</p>
          </div>
          <img src="./assets/images/image-chess.webp" className="chess_img" alt="chess" />
        </div>
        <div className="notif_card">
          <img src="./assets/images/avatar-nathan-peterson.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Nathan Pererson</strong> reacted to your recent post
              <b>5 end-game strategies to increase your win rate</b>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>
        <div className="notif_card">
          <img src="./assets/images/avatar-anna-kim.webp" alt="avatar" />
          <div className="description">
            <p className="user_activity">
              <strong>Anna Kim</strong> left the group
              <strong className="link">Chess Club</strong>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>
      </main>
      </div>
      <Trends/>
    </div>
  );
};

export default Notifications;