import React from "react";
import "../../styles/popularpost.css";

const PopularPost = ({ imgUrl }) => {
  return (
    <div className="popular_post_container">
      <div className="imgBx">
        <img src={imgUrl} alt="popular" />
      </div>
      <div className="popular_post_title">
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quo?
        </h5>
        <p>31 March 2019</p>
      </div>
    </div>
  );
};

export default PopularPost;
