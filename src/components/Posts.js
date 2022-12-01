import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Shubham Sonawane</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @Shubh <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          <p><b>Project Description :</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo.</p>
          <p><b>Tech Stack Used :</b> HTML,CSSS,Js</p>

        </div>
        <div className="postss__details__img">
          <img src="/images/post.png" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
