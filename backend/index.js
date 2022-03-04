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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { collection: "Users2" }
);

const User = mongoose.model("Users2", UserSchema);

// adds new user with information given in request body
app.post("/api/newUser", async (req, res) => {
  const { username, email, password } = req.body;
  let person = new User({
    username: username,
    email: email,
    password: password,
  });
  try {
    person = await person.save();
    res.send(`${username} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// returns all current users
app.get("/api/users", async (req, res) => {
  res.send(await User.find({}));
});

// returns first user with the email given
app.get("/api/users/:email", async (req, res) => {
  const user = await User.findOne({
    email: req.params.email,
  });
  res.send(user);
});

app.delete("/api/usersDel/:username", async (req, res) => {
  const user = await User.findOneAndRemove({
    username: req.params.username,
  });
  res.send(user);
});

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    myid: Number,
    emoji: String,
    username: String,
  },
  { collection: "Notes2" }
);

const Note = mongoose.model("Notes2", NoteSchema);

//returns all notes
app.get("/api/notes", async (req, res) => {
  res.send(await Note.find({}));
});

//returns all notes
app.get("/api/notesMax", async (req, res) => {
  const notes = await Note.find({});
  let max = 0;
  for (const n of notes) {
    if (max < n.myid) {
      max = n.myid;
    }
  }
  res.send({ max: max });
});

// returns first note with the title given
app.get("/api/notes/:title", async (req, res) => {
  const user = await Note.findOne({
    title: req.params.title,
  });
  res.send(user);
});

app.get("/api/notesU/:username", async (req, res) => {
  const user = await Note.find({
    username: req.params.username,
  });
  res.send(user);
});

// returns first note with the myid given
app.get("/api/notesID/:myid", async (req, res) => {
  const user = await Note.findOne({
    myid: req.params.myid,
  });
  res.send(user);
});

// adds new note with information given in request body
app.post("/api/newNote", async (req, res) => {
  const { title, description, myid, emoji, username } = req.body;
  let note = new Note({
    title: title,
    description: description,
    myid: myid,
    emoji: emoji,
    username: username,
  });
  try {
    note = await note.save();
    res.send(`User named ${title} added to collection`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// returns first note with the myid given
app.delete("/api/notesID2/:myid", async (req, res) => {
  const user = await Note.findOneAndRemove({
    myid: req.params.myid,
  });
  res.send(user);
});

app.listen(3001);
