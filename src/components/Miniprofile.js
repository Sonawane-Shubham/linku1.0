import React from "react";
import "./Miniprofile.css";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import { FaFacebookSquare,
    FaGithub,
    FaLinkedin,
    FaInstagramSquare
 } from "react-icons/fa";

const Miniprofile = () => {
	return (
		<div>
			<div className="card-container">
            <button className="pro">
						Edit profile
					</button>
				<img className="round" src="/images/profile.jpg" alt="user" />
				<h3>shubham Sonawane</h3>
				<h6>Aurangabad</h6>
                <h6>PES College Of Engineering Aurangabad</h6>
				<p>User interface designer and <br /> front-end developer</p>
                <FaFacebookSquare className="icons" />
                <FaGithub className="icons" />
                <FaLinkedin className="icons" />
                <FaInstagramSquare className="icons" />
				<div className="buttons">
                
					<button className="primary">
						Message
					</button>
					<button className="primary ghost">
						Follow
					</button>
				</div>
				<div className="skills">
					<h6>Skills</h6>
					<ul>
						<li>UI / UX</li>
						<li>Front End Development</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
					</ul>
				</div>
				<div className="skills">
					<h6>Skills</h6>
					<ul>
						<li>UI / UX</li>
						<li>Front End Development</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
					</ul>
				</div>
                <div className="skills">
					<h6>Skills</h6>
					<ul>
						<li>UI / UX</li>
						<li>Front End Development</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
					</ul>
				</div>
                <div className="skills">
					<h6>Skills</h6>
					<ul>
						<li>UI / UX</li>
						<li>Front End Development</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
					</ul>
				</div>
			</div>

			
		</div>
	);
};

export default Miniprofile;
