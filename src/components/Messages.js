import React from "react";
import Home from "./Home";
import Trends from "./Trends";
import Sidebar from "./Sidebar";
import Contact from "./chat/Contact";
import ChatContainer from "./chat/ChatContainer";
const Messages = () => {
  
  return (
    <div className="linku">
      
      <Sidebar />
      <Contact/>
      <ChatContainer/>
     
    </div>
  );
};

export default Messages;