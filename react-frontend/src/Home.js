import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group2-4">
          <div className="overlap-group1-3">
            <img className="image-27" src={require("./homeImages/image-27@1x.png")} />
            <h1 className="true-minimalism-meets-productivity">
              {<>True Minimalism<br />Meets Productivity.</>}
            </h1>
          </div>
          <div className="text-10">
            <div className="where-things-get-don">{"Where things get done and magic happens."}</div>
          </div>
        </div>
        <img className="line-3-3" src={require("./homeImages/line-3@1x.png")} />
        <div className="flex-row-4">
          <img className="image-2" src={require("./homeImages/image-2@2x.png")} />
          <div className="address-5">{"2022 Potion, Inc"}</div>
          <img className="image-3" src={require("./homeImages/line-3@1x.png")} />
        </div>
      </div>
    </div>
  );
}

export default Home;
