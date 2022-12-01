import React from "react";
import "./ChatContainer.css";

const ChatContainer = () => {
    return (
        <div className="MainChatContainer">
            <div>
                <div className="chatReceiver" >
                    <img src="/images/profile.jpg" className="userProfile" alt="/" />
                    <p className="chatReceiverName" style={{ textAlign: "start", marginTop: "10px", marginLeft: "10px" }}>shubham sonawane</p>
                </div>
                <div className="msgContainer">
                <div className="msgSend" >
                        
                        <p className="msgtxt"> hii
                        </p>

                    </div>
                    <div className="msgReceive">
                        <img src="" className="chatuserprofile" alt="/" />
                        <p className="msgtxt">hello
                        </p>

                    </div>
                    <div className="msgSend" >
                        
                        <p className="msgtxt"> i am starting a new project on ML Would you like to join me
                        </p>

                    </div>
                    <div className="msgReceive" >
                        <img src="" className="chatuserprofile" alt="/" />
                        <p className="msgtxt"> can You little bit explain about Your project
                        </p>

                    </div>
                    <div className="msgSend" >
                        
                        <p className="msgtxt"> this project is about gernrating a text using sign language for those people who cant read and understand sign language
                        
                        </p>

                    </div>
                    <div className="msgReceive" >
                        <img src="" className="chatuserprofile" alt="/" />
                        <p className="msgtxt"> looks intresting!!!!!!!!
                        </p>

                    </div>
                    <div className="msgSend" >
                      
                        <p className="msgtxt"> yahhhh.
                        </p>

                    </div>
                    <div className="msgReceive" >
                        <img src="" className="chatuserprofile" alt="/" />
                        <p className="msgtxt"> yes i would like to join you when to start project currently i am doing nothing
                        </p>

                    </div>
                    <div className="msgSend" >
                        
                        <p className="msgtxt"> ok we will start project from monday
                        </p>

                    </div>
                    <div className="msgSend" >
                        
                        <p className="msgtxt"> hello how are you i hope you are fine i am fine here
                        </p>

                    </div>
                    <div className="msgSend" >
                        
                        <p className="msgtxt"> hello how are you i hope you are fine i am fine here
                        </p>

                    </div>
                    
                    


                </div>
                <div className="msgSenderContainer">
                    <input type="text" name="" placeholder="Message " className="msginput" />
                    <button className="msgbutton">send</button>
                </div>
            </div>
        </div>

    );
};

export default ChatContainer;