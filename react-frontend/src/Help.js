import "./Help.css";

function Help() {
  return (
    <div>
      <div className="myHeader">Help</div>
      <div className="subHeader">Learn to become a Potion wizard</div>
      <div className="helpRow">
        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle">Step 1</div>
            <div className="subText">
              Create an account if you haven’t yet. You will be prompted to make
              a username, provide your email, and create a password.
            </div>
          </div>
        </div>

        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle">Step 2</div>
            <div className="subText">
              Select from a list of provided templates or create your one. You
              can create a grocery list, to do list, study guide, and more.
            </div>
          </div>
        </div>

        <div className="helpContainer">
          <div className="helpBoxStyle">
            <div className="helpTitle">Step 3</div>
            <div className="subText">
              Start brewing your very own potion notes!
            </div>
          </div>
        </div>
      </div>

      <img
        className="bottomLine2"
        alt=""
        src={require("./helpImages/bLine2.png")}
      />

      <img
        className="copyright2"
        alt=""
        src={require("./helpImages/copyright2.png")}
      />

      <img
        className="socialMedia2"
        alt=""
        src={require("./helpImages/socialMedia2.png")}
      />

      <div className="address2">{"2022 Potion, Inc"}</div>
    </div>
  );
}

export default Help;
