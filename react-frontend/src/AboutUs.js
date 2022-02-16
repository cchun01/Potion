import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="headerAbout">About Us</div>
      <div className="pinkblock">
        Potion is designed and created by four Cal Poly students in CSC 307.
        Through learning and applying our skills around software engineering, we
        created a productivity platform focusing on minimalism aimed to help
        users feel organized.
      </div>
      <div className="yellowblock">
        Our project is deeply inspired by the Notion app, but we add a unique
        magical spin. Potion brings simplicity, style, and substance to people.
        Our service is truly customizable for all users and thrives based on
        it's versatility. We hope you enjoy Potion as much as we did creating
        it.
      </div>
      <div className="imagecontainer">
        <div className="row">
          <div class="column">
            <figure>
              <img alt="rachel" src={require("./rachel.png")} />
              <figcaption>Rachel</figcaption>
            </figure>
          </div>
          <div class="column">
            <figure>
              <img alt="dani" src={require("./dani.JPEG")} />
              <figcaption>Dani</figcaption>
            </figure>
          </div>
          <div class="column">
            <figure>
              <img alt="alexa" src={require("./alexa.JPG")} />
              <figcaption>Alexa</figcaption>
            </figure>
          </div>
          <div class="column">
            <figure>
              <img alt="colin" src={require("./colin.jpeg")} />
              <figcaption>Colin</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
