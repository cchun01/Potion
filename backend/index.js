const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const connection_url = `mongodb+srv://
${process.env.MONGO_USERNAME}
:
${process.env.MONGO_PASSWORD}
@cluster0.2ul0y.mongodb.net/
${process.env.MONGO_DB}
?retryWrites=true&w=majority`;

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected :)"))
  .catch((error) => console.error(`connection error ${error}:(`));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    username: String,
    email: String,
    password: String,
  },
  { collection: "Users" }
);

const User = mongoose.model("Users", UserSchema);

// adds new user with information given in request body
app.post("/api/newUser", async (req, res) => {
  const { firstName, username, email, password } = req.body;
  let person = new User({
    firstName: firstName,
    username: username,
    email: email,
    password: password,
  });
  try {
    person = await person.save();
    res.send(`User named ${firstName} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// returns all current users
app.get("/api/users", async (req, res) => {
  res.send(await User.find({}));
});

// returns first user with the first name given
app.get("/api/users/:firstName", async (req, res) => {
  const user = await User.findOne({
    firstName: req.params.firstName,
  });
  res.send(user);
});

app.listen(3001);
