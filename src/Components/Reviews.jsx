import React from "react";
import Footer from "./Footer";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import img5 from "../images/Las.jpeg";
import img6 from "../images/T.jpeg";

function Reviews() {
  return (
    <div>
      <div className="head">
        <h1>Testimonals</h1>
      </div>
      <div className="allboxes">
        <div className="box1">
          <h1>Fresh ingredients!</h1>
          <div className="combo1">
            <h4>Kayla 04/21</h4>
            <img className="fimg" src={user1}></img>
          </div>
        </div>
        <div className="box2">
          <h1>The Best Resturant!</h1>
          <div className="combo1">
            <h4>John 04/21</h4>
            <img src={user2}></img>
          </div>
        </div>
        <div className="box3">
          <h1>Very Declicous! </h1>
          <div className="combo1">
            <h4>Rachel 04/21</h4>
            <img src={user3}></img>
          </div>
        </div>
      </div>
      <div className="lowimgs">
        <img className="img5" src={img5}></img>
        <img className="img6" src={img6}></img>
      </div>
    </div>
  );
}

export default Reviews;
