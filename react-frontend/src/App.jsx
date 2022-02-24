import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SampleListGroceryList from "./components/SampleListGroceryList";
import SampleNoteHikes from "./components/SampleNoteHikes";
import MyNotesFirstTimeUser from "./components/MyNotesFirstTimeUser";
import NewNote from "./components/NewNote";
import Home from "./components/Home";
import TryNotionFree from "./components/TryNotionFree";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import MyNotes from "./components/MyNotes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/log-in">
          <LogIn {...logInData} />
        </Route>
        <Route path="/sample-list-grocery-list">
          <SampleListGroceryList {...sampleListGroceryListData} />
        </Route>
        <Route path="/sample-note-hikes">
          <SampleNoteHikes {...sampleNoteHikesData} />
        </Route>
        <Route path="/my-notes-first-time-user">
          <MyNotesFirstTimeUser {...myNotesFirstTimeUserData} />
        </Route>
        <Route path="/new-note">
          <NewNote {...newNoteData} />
        </Route>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/try-notion-free">
          <TryNotionFree {...tryNotionFreeData} />
        </Route>
        <Route path="/help">
          <Help {...helpData} />
        </Route>
        <Route path="/about-us">
          <AboutUs {...aboutUsData} />
        </Route>
        <Route path="/my-notes">
          <MyNotes {...myNotesData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const signInBoxData = {
    overlapGroup1: "/img/rectangle-2@1x.png",
    email: "Email",
    overlapGroup3: "/img/rectangle-2@1x.png",
    password: "Password",
    rectangle4: "/img/rectangle-4@1x.png",
    signIn: "Sign In",
    line7: "/img/line-7@2x.png",
    or: "or",
    line8: "/img/line-7@2x.png",
    rectangle5: "/img/rectangle-5@1x.png",
    signUp: "Sign Up",
};

const logInData = {
    image1: "/img/image-1@2x.png",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    logIn: "Log in",
    tryPotionFree: "Try Potion free",
    line1: "/img/line-1@2x.png",
    line2: "/img/line-3@1x.png",
    image7: "/img/image-7@2x.png",
    line10: "/img/line-3@1x.png",
    imageContainer1: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    image8: "/img/image-2@2x.png",
    image11: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    address3: "2022 Potion, Inc",
    address4: "2022 Potion, Inc",
    imageContainer2: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
    image10: "/img/image-3@2x.png",
    image12: "/img/image-3@2x.png",
    signInBoxProps: signInBoxData,
};

const signInBox3Data = {
    signIn: "Sign Up",
    email: "",
    or: "",
};

const tryNotionFreeData = {
    logIn: "Log in",
    tryPotionFree: "Try Potion free",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    image1: "/img/image-1@2x.png",
    line5: "/img/line-3@1x.png",
    line4: "/img/line-1@2x.png",
    image8: "/img/image-8@1x.png",
    rectangle6: "/img/rectangle-5@1x.png",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    signUp: "Sign Up",
    line3: "/img/line-3@1x.png",
    image2: "/img/image-2@2x.png",
    address: "2022 Potion, Inc",
    image3: "/img/image-3@2x.png",
    signInBox3Props: signInBox3Data,
};

const daniData = {
    overlapGroup3: "/img/image-12@1x.png",
    dani_Picture: "/img/dani-picture@2x.png",
    stick_Taped1: "/img/image-23@2x.png",
    sticky_Taped2: "/img/image-23@2x.png",
    sticky_Taped3: "/img/image-23@2x.png",
    dani: "Dani",
};

const alexaData = {
    alexa: "/img/image-10@1x.png",
    sticky_Tapea1: "/img/image-15@2x.png",
    stick_Tapea2: "/img/image-15@2x.png",
    sticky_Tapea3: "/img/image-15@2x.png",
    alexa_Picture: "/img/rectangle-15@2x.png",
    name: "Alexa",
};

const topTextData = {
    title: "Meet the crew.",
    fourPeopleJustTry: "Four people just trying to do their best....",
};

const pictureColinData = {
    src: "/img/picture-colin@2x.png",
};

const colinData = {
    overlapGroup1: "/img/image-11@1x.png",
    sticky_Tapec1: "/img/image-17@2x.png",
    sticky_Tapec2: "/img/image-17@2x.png",
    sticky_Tapec3: "/img/image-17@2x.png",
    name: "Colin",
    pictureColinProps: pictureColinData,
};

const pictureAlexaData = {
    src: "/img/picture-alexa-1@2x.png",
};

const rachelData = {
    rachel: "/img/image-10@1x.png",
    sticky_Taper3: "/img/image-20@2x.png",
    sticky_Taper2: "/img/image-20@2x.png",
    sticky_Taper1: "/img/image-20@2x.png",
    name: "Rachel",
    pictureAlexaProps: pictureAlexaData,
};

const bottomDescriptionData = {
    image14: "/img/image-14@1x.png",
    weBuiltThisApplic: <>We built this application with the belief that organization and productivity<br />should be easy. Potion is a flexible tool where you can store your notes in a<br />simple way that suites you best.</>,
    itsEasyToGetSta: "It’s easy to get started, and even easier to use.",
    andTheyWantToHel: <>And they want to help you<br />do your best too.</>,
};

const bottomBarData = {
    line3: "/img/line-3@1x.png",
    address: "2022 Potion, Inc",
};

const aboutUsData = {
    logIn: "Log in",
    tryPotionFree: "Try Potion free",
    line1: "/img/line-1@2x.png",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    line2: "/img/line-3@1x.png",
    image1: "/img/image-1@2x.png",
    copyright: "/img/image-2@2x.png",
    socialMedia: "/img/image-3@2x.png",
    daniProps: daniData,
    alexaProps: alexaData,
    topTextProps: topTextData,
    colinProps: colinData,
    rachelProps: rachelData,
    bottomDescriptionProps: bottomDescriptionData,
    bottomBarProps: bottomBarData,
};

const sampleListGroceryListData = {
    image1: "/img/image-1@2x.png",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    spanText3: "My Notes",
    spanText4: "",
    line9: "/img/line-9@1x.png",
    spanText5: "🍎️ ",
    spanText6: "Grocery List",
    imRunningOutOfFoodInMyKitchen: "I’m running out of food in my kitchen",
    pastaBaguetteGarli: <>Pasta<br />Baguette<br />Garlic<br />Apples<br />Flour<br />Eggs<br />Strawberries</>,
    rectangle7: "/img/rectangle-7@1x.png",
    line3: "/img/line-3@1x.png",
    overlapGroup3: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup2: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

const sampleNoteHikesData = {
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    spanText3: "My Notes",
    spanText4: "",
    image1: "/img/image-1@2x.png",
    line8: "/img/line-3@1x.png",
    line7: "/img/line-3@1x.png",
    hikesToTry: "⛰️ Hikes To Try",
    hikesAroundCalifornia: "Hikes around California",
    spanText5: <>San Luis Obispo<br /></>,
    spanText6: <>Bishop’s Peak<br />Laguna Lake Trail<br />Cuesta Ridge<br /><br /></>,
    spanText7: <>Bay Area<br /></>,
    spanText8: <>Mount Diablo<br />Mori Point<br />Twin Peaks<br />Glen Canyon Park</>,
    flexRow: "/img/line-3@1x.png",
    line3: "/img/line-3@1x.png",
    overlapGroup2: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup3: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

const myNotesFirstTimeUserData = {
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    spanText3: "My Notes",
    spanText4: "",
    line5: "/img/line-3@1x.png",
    image1: "/img/image-1@2x.png",
    myNotes: "My Notes",
    getStartedWithPot: "Get started with Potion by creating your first note.",
    overlapGroup1: "/img/rectangle-2@2x.png",
    newNote: "+ New Note",
    text1: "📝️",
    flexRow: "/img/line-3@1x.png",
    line3: "/img/line-3@1x.png",
    overlapGroup3: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup5: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

const newNoteData = {
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    spanText3: "My Notes",
    spanText4: "",
    image1: "/img/image-1@2x.png",
    line5: "/img/line-3@1x.png",
    newNote: "New Note",
    editingANewNote: "Editing a new note, the world is your oyster.",
    makeANewNoteMakeANewList: <>+ Make a new note<br />+ Make a new list</>,
    line6: "/img/line-3@1x.png",
    overlapGroup3: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup1: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

const homeData = {
    logIn: "Log in",
    tryPotionFree: "Try Potion free",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    image1: "/img/image-1@2x.png",
    line2: "/img/line-3@1x.png",
    line1: "/img/line-1@2x.png",
    image27: "/img/image-27@1x.png",
    trueMinimalismMeetsProductivity: <>True Minimalism<br />Meets Productivity.</>,
    whereThingsGetDon: "Where things get done and magic happens.",
    line3: "/img/line-3@1x.png",
    image2: "/img/image-2@2x.png",
    address: "2022 Potion, Inc",
    image3: "/img/image-3@2x.png",
};

const helpData = {
    line2: "/img/line-3@1x.png",
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help1: "Help",
    logIn: "Log in",
    tryPotionFree: "Try Potion free",
    line4: "/img/line-1@2x.png",
    image1: "/img/image-1@2x.png",
    help2: "Help",
    learnToBecomeAPotionWizard: "Learn to become a Potion wizard",
    createAnAccountIf: "Create an account if you haven’t yet. You will be prompted to make a username, provide your email, and create a password.",
    rectangle2: "/img/rectangle-2-5@2x.png",
    step1: "Step 1",
    selectFromAListO: "Select from a list of provided templates or create your one. You can create a grocery list, to do list, study guide, and more.",
    rectangle31: "/img/rectangle-2-5@2x.png",
    step2: "Step 2",
    startBrewingYourV: "Start brewing your very own potion notes!",
    rectangle32: "/img/rectangle-2-5@2x.png",
    step3: "Step 3",
    overlapGroup6: "/img/line-3@1x.png",
    line3: "/img/line-3@1x.png",
    overlapGroup10: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup9: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

const myNotesData = {
    spanText1: "Potion",
    spanText2: "",
    aboutUs: "About Us",
    help: "Help",
    spanText3: "My Notes",
    spanText4: "",
    line8: "/img/line-3@1x.png",
    image1: "/img/image-1@2x.png",
    myNotes: "My Notes",
    jumpBackInWithA: "Jump back in with a previously created note, or get started with a new one.",
    overlapGroup1: "/img/rectangle-2-1@2x.png",
    groceryList: "Grocery List",
    text2: "🍎",
    overlapGroup: "/img/rectangle-2-2@2x.png",
    homework: "Homework",
    text3: "🎓",
    overlapGroup2: "/img/rectangle-2-3@2x.png",
    hikesToTry: "Hikes To Try",
    text4: "⛰️",
    overlapGroup3: "/img/rectangle-2@2x.png",
    newNote: "+ New Note",
    text5: "📝️",
    overlapGroup6: "/img/line-3@1x.png",
    line3: "/img/line-3@1x.png",
    overlapGroup8: "/img/image-2@2x.png",
    image4: "/img/image-2@2x.png",
    address1: "2022 Potion, Inc",
    address2: "2022 Potion, Inc",
    overlapGroup7: "/img/image-3@2x.png",
    image5: "/img/image-3@2x.png",
};

