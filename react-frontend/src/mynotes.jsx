import React from "react";
import { Link } from "react-router-dom";
import "./MyNotes.css";

function MyNotes(props) {
  const {
    spanText1,
    spanText2,
    aboutUs,
    help,
    spanText3,
    spanText4,
    line8,
    image1,
    myNotes,
    jumpBackInWithA,
    overlapGroup1,
    groceryList,
    text2,
    overlapGroup,
    homework,
    text3,
    overlapGroup2,
    hikesToTry,
    text4,
    overlapGroup3,
    newNote,
    text5,
    overlapGroup6,
    line3,
    overlapGroup8,
    image4,
    address1,
    address2,
    overlapGroup7,
    image5,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="my-notes-5 screen">
        <div className="rectangle-15-3"></div>
        <div className="nav-bar-9">
          <div className="overlap-group5-2">
            <div className="text-21">
              <Link to="/home">
                <div className="potion-9 montserrat-bold-black-20px">
                  <span className="montserrat-bold-envy-20px">{spanText1}</span>
                  <span className="montserrat-medium-envy-20px">{spanText2}</span>
                </div>
              </Link>
              <Link to="/about-us">
                <div className="about-us-10 montserrat-medium-black-20px">{aboutUs}</div>
              </Link>
              <Link to="/help">
                <div className="help-11 montserrat-medium-black-20px">{help}</div>
              </Link>
              <div className="my-notes-6 montserrat-bold-black-20px">
                <span className="montserrat-bold-envy-20px">{spanText3}</span>
                <span className="montserrat-medium-envy-20px">{spanText4}</span>
              </div>
            </div>
            <img className="line-8-1" src={line8} />
          </div>
          <Link to="/home">
            <img className="image-1-10" src={image1} />
          </Link>
        </div>
        <div className="my-notes-7 montserrat-extra-bold-black-50px">{myNotes}</div>
        <div className="jump-back-in-with-a montserrat-medium-nobel-20px">{jumpBackInWithA}</div>
        <div className="flex-row-7">
          <Link to="/sample-list-grocery-list">
            <div className="grocery-list-2">
              <div className="overlap-group-10">
                <div className="overlap-group1-7" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <div className="grocery-list-3 montserrat-extra-bold-white-20px">{groceryList}</div>
                </div>
                <div className="text-19 montserrat-extra-bold-black-72px">{text2}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group2-6">
            <div className="overlap-group-11" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="homework montserrat-extra-bold-white-20px">{homework}</div>
            </div>
            <div className="text-19 montserrat-extra-bold-black-72px">{text3}</div>
          </div>
          <Link to="/sample-note-hikes">
            <div className="hikes-to-try-2">
              <div className="overlap-group-10">
                <div className="overlap-group-12" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                  <div className="hikes-to-try-3 montserrat-extra-bold-white-20px">{hikesToTry}</div>
                </div>
                <div className="text-20 montserrat-extra-bold-black-72px">{text4}</div>
              </div>
            </div>
          </Link>
          <Link to="/new-note">
            <div className="hikes-to-try-4">
              <div className="overlap-group-10">
                <div className="overlap-group-13" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                  <div className="new-note-3 montserrat-extra-bold-white-20px">{newNote}</div>
                </div>
                <div className="text-20 montserrat-extra-bold-black-72px">{text5}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-2" style={{ backgroundImage: `url(${overlapGroup6})` }}>
          <img className="line-3-7" src={line3} />
        </div>
        <div className="overlap-group-container-8">
          <div className="overlap-group8-2" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <img className="image-4-5" src={image4} />
          </div>
          <div className="address-container-6 montserrat-medium-black-15px">
            <div className="address-9">{address1}</div>
            <div className="address-9">{address2}</div>
          </div>
          <div className="overlap-group7-2" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <img className="image-5-5" src={image5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNotes;
