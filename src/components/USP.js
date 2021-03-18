import React from "react";
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";
function uspComp() {
  return (
    <div className="usp-container">
      <h1 className="usp-title">
        One of India's Best Premium Service for Owners
      </h1>
      <img
        src={process.env.PUBLIC_URL + "/uspimages.jpg"}
        className="usp-images"
        alt="USP-images"
      />
      <ul className="usp-lists">
        <li>
          <FaCheckCircle className="check-icons" />
          Best in class responses to owners
        </li>
        <li>
          <FaCheckCircle className="check-icons" />
          Get more attention with with Professional Photoshoot & Content
          Description
        </li>
        <li>
          <FaCheckCircle className="check-icons" />
          Save time & close deals faster with a Relationship manager
        </li>
      </ul>
      <button className="explore">Explore</button>
    </div>
  );
}
export default uspComp;
