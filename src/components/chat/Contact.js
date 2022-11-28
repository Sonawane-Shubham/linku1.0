import React from 'react';
import ChatContainer from './ChatContainer';
import "./Contact.css";


function Contact() {
    return (
        <div className='mainContactContainer'>
            <div>
                <div style={{ width: "20pc", padding: "10px" }}>
                    <input type="search" placeholder="search your friend" className="searchbarforcontact" />
                </div>
                <div className="usersDetailContainer">
                    <div className="userContainer">
                        <img src="/profile.jpg" className="Chatuserimage" alt="" />
                        <div style={{ marginLeft: "15px" }}>
                            <p style={{ color: "while", textAlign: "start", marginTop: "5px", fontSize: "13px" }}>shubham sonawane</p>
                            <p style={{ color: "while", textAlign: "start", marginTop: "5px", fontSize: "13px" }}>open your message</p>

                        </div> 

                    </div>
                    
                    
                </div>
            </div>
           

        </div>
    )
}


export default Contact;
