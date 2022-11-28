import React from 'react';

 function ChatContainer() {
  return (
    <div className="MainChatContainer">
      <div>
        <div style={{ display:'flex', marginLeft: "30px", marginTop:"10px" }}>
          <img src="" className="chatuserprofile" alt="/" />
          <p style={{ textAlign:"start", marginLeft: "10px" }}>hello how are you i hopr you are fine hello how are you i hopr you are fine </p>
        </div>
        <div className="msgSenderContainer">
          <input type="text" name="" placeholder="Message "className="msginput"/>
        </div>
      </div>
    </div>
  )
}
export default ChatContainer;