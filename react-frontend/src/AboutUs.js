import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="headerAbout">Meet the crew.</div>
      <div className="headerBelow">
        Four people just trying to do their best...
      </div>
      <img
        className="alexaPolariod"
        alt=""
        src={require("./aboutusImages/Alexa.png")}
      />
      <img
        className="colinPolariod"
        alt=""
        src={require("./aboutusImages/Colin.png")}
      />
      <img
        className="daniPolariod"
        alt=""
        src={require("./aboutusImages/Dani.png")}
      />

      <img
        className="rachelPolariod"
        alt=""
        src={require("./aboutusImages/Rachel.png")}
      />

      <img
        className="plane"
        alt=""
        src={require("./aboutusImages/plane.png")}
      />

      <div className="bestPart1">And they want to help you</div>
      <div className="bestPart2">do your best too.</div>
      <div className="description1">
        We built this application with the belift that organization and
        productivity
      </div>
      <div className="description2">
        should be easy. Potion is a flexible tool where you can store your notes
        in
      </div>
      <div className="description3">simple way that suites you best.</div>
      <div className="description4">
        It's easy to get started, and even easier to use.
      </div>
    </div>
  );
}

export default AboutUs;
