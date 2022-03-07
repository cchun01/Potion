import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="overlap-group2-4">
          <div className="overlap-group1-3">
            <img
              className="image-27"
              alt=""
              src={require("./homeImages/image-27@1x.png")}
            />
            <img
              className="poison"
              alt=""
              src={require("./homeImages/poison_green.jpg")}
            />

            <h1 className="true-minimalism-meets-productivity">
              {
                <>
                  True Minimalism
                  <br />
                  Meets Productivity.
                </>
              }
            </h1>

            <h2 className="toxic">{<>Productivity shouldn't be toxic.</>}</h2>

            <h3 className="keep-simple">
              {<>We keep things simple, all you have to do is add a note.</>}
            </h3>
          </div>
          <div className="text-10">
            <div className="where-things-get-don">
              {"Where things get done and magic happens."}
            </div>
            <button onClick className="try-notion">
              {" "}
              Try Potion Free{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="helpRow">
        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle">Grocery List</div>
            <div className="subText"></div>
          </div>
        </div>

        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle"> Homework </div>
            <div className="subText"></div>
          </div>
        </div>

        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle"> Hikes to Try </div>
            <div className="subText"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
