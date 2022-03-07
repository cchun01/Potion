import React from "react";
import "./Home.css";
import "./TryNotionButton";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
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
            <button
              onClick={() => {
                navigate("/try-notion-free");
              }}
              className="try-notion"
            >
              Try Notion Free
            </button>
          </div>
        </div>
      </div>
      <div className="helpRow2">
        <div className="helpContainer2">
          <div className="helpBoxStyle2">
            <div className="helpTitle2">Grocery List</div>
            <div className="subText2"></div>
          </div>
        </div>

        <div className="helpContainer2">
          <div className="helpBoxStyle2">
            <div className="helpTitle2"> Homework </div>
            <div className="subText2"></div>
          </div>
        </div>

        <div className="helpContainer2">
          <div className="helpBoxStyle2">
            <div className="helpTitle2"> Hikes to Try </div>
            <div className="subText2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
