import React from "react";
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";
import {Card, CardImg, CardImgOverlay, Input, Button} from 'reactstrap';
function uspComp() {
  return (
    <div>
      <Card>
        <CardImg width = "100%" object src="/Search.png" alt="Search buildings" />
        <CardImgOverlay>
          <div className="row justify-content-center">
            <div className = "col-3 col-sm-2">
              <select id = "type" name = "rent" className = "type" >
                <option value = "Commercial">COMMERCIAL</option>
                <option value = "Residential">RESIDENTIAL</option>
              </select>
            </div>
            <div className="col-7 col-sm-5">
              <Input type="text" name="search" className="search-bar" />
            </div>
            <div className="col-2 col-sm-2">
              <Button type="submit" className="search-btn" onClick = "">Search</Button>
            </div>
          </div>
          </CardImgOverlay>
      </Card>
    <div className="container-fluid" id="usp-container">
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
    </div>
  );
}
export default uspComp;
