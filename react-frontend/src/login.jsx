import React from "react";
import { Link } from "react-router-dom";
import SignInBox from "../SignInBox";
import "./LogIn.css";

function LogIn(props) {
  const {
    image1,
    spanText1,
    spanText2,
    aboutUs,
    help,
    logIn,
    tryPotionFree,
    line1,
    line2,
    image7,
    line10,
    imageContainer1,
    image4,
    image8,
    image11,
    address1,
    address2,
    address3,
    address4,
    imageContainer2,
    image5,
    image10,
    image12,
    signInBoxProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in screen">
        <div className="overlap-group4">
          <div className="nav-bar">
            <Link to="/home" className="align-self-flex-center">
              <img className="image-1-1" alt="" src={image1} />
            </Link>
            <div className="text">
              <Link to="/home">
                <div className="potion montserrat-bold-black-20px">
                  <span className="montserrat-bold-envy-20px">{spanText1}</span>
                  <span className="montserrat-medium-envy-20px">
                    {spanText2}
                  </span>
                </div>
              </Link>
              x
              <Link to="/about-us">
                <div className="about-us montserrat-medium-black-20px">
                  {aboutUs}
                </div>
              </Link>
              <Link to="/help">
                <div className="help montserrat-medium-black-20px">{help}</div>
              </Link>
            </div>
            <div className="text-1">
              <div className="log-in-1 montserrat-medium-black-20px">
                {logIn}
              </div>
              <Link to="/try-notion-free">
                <div className="try-potion-free montserrat-medium-black-20px">
                  {tryPotionFree}
                </div>
              </Link>
            </div>
          </div>
          <img className="line-1" alt="" src={line1} />
          <img className="line-2" alt="" src={line2} />
        </div>
        <div className="overlap-group8">
          <img className="image-7" alt="" src={image7} />
          <SignInBox {...signInBoxProps} />
          <img className="line-10" alt="" src={line10} />
        </div>
        <div className="overlap-group-container">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${imageContainer1})` }}
          >
            <img className="image" alt="" src={image4} />
            <img className="image" alt="" src={image8} />
            <img className="image" alt="" src={image11} />
          </div>
          <div className="address-container montserrat-medium-black-15px">
            <div className="address">{address1}</div>
            <div className="address">{address2}</div>
            <div className="address">{address3}</div>
            <div className="address">{address4}</div>
          </div>
          <div
            className="image-container-1"
            style={{ backgroundImage: `url(${imageContainer2})` }}
          >
            <img className="image-1" alt="" src={image5} />
            <img className="image-1" alt="" src={image10} />
            <img className="image-1" alt="" src={image12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
