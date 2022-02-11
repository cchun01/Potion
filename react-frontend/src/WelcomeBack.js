import React from "react";
import "./WelcomeBack.css";

const name = "Bestie!";
const existingLists = [
  "photo inspo",
  "csc 307",
  "travel plans",
  "add new list",
];
const imageSources = [
  "https://ih1.redbubble.net/image.1349919081.4716/st,small,507x507-pad,600x600,f8f8f8.jpg",
  "https://data.whicdn.com/images/318586601/original.jpg?t=1535649338",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
];
function imageClicked() {
  console.log("An image was clicked");
}

function createElements(n) {
  var elements = [];
  if (n === 0) {
    elements.push(
      <div class="allOptions">
        <div class="column">
          <img
            src={imageSources[3]}
            alt="Mountains"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[3]}</figcaption>
        </div>
      </div>
    );
  } else if (n === 1) {
    elements.push(
      <div class="allOptions">
        <div class="column">
          <img
            src={imageSources[0]}
            alt="Snow"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[0]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[3]}
            alt="Mountains"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[3]}</figcaption>
        </div>
      </div>
    );
  } else if (n === 2) {
    elements.push(
      <div class="allOptions">
        <div class="column">
          <img
            src={imageSources[0]}
            alt="Snow"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[0]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[1]}
            alt="Forest"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[1]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[3]}
            alt="Mountains"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[3]}</figcaption>
        </div>
      </div>
    );
  } else {
    elements.push(
      <div class="allOptions">
        <div class="column">
          <img
            src={imageSources[0]}
            alt="Snow"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[0]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[1]}
            alt="Forest"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[1]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[2]}
            alt="Mountains"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[2]}</figcaption>
        </div>
        <div class="column">
          <img
            src={imageSources[3]}
            alt="Mountains"
            className="test"
            onClick={imageClicked}
          />
          <figcaption>{existingLists[3]}</figcaption>
        </div>
      </div>
    );
  }
  return elements;
}

function WelcomeBack() {
  return (
    <div>
      <div className="headerSU">Welcome Back, {name}</div>
      <div>{createElements(3)}</div>
    </div>
  );
}

export default WelcomeBack;
