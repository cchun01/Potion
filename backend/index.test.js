const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config();
const baseUrl = `http://localhost:3001`;
const index = require("./index");

describe("Test get endpoints", () => {
  it("get api hello world", async () => {
    const response = await request(baseUrl).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it("get all users", async () => {
    const response = await request(baseUrl).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it("get a user by email", async () => {
    const response = await request(baseUrl).get("/api/users/rachel@gmail.com");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

it("add and delete a user", async () => {
  const response = await request(baseUrl).get("/api/users");
  const length = response.body.length;

  const person = {
    username: "alexa",
    email: "alexa@gmail.com",
    password: "123456",
  };

  await request(baseUrl).post("/api/newUser").send(person);

  const response3 = await request(baseUrl).get("/api/users");
  expect(response3.body.length).toBe(length + 1);

  await request(baseUrl).delete("/api/usersDel/alexa");

  const response5 = await request(baseUrl).get("/api/users");
  expect(response5.body.length).toBe(length);
});

describe("Test get endpoints", () => {
  it("get all notes", async () => {
    const response = await request(baseUrl).get("/api/notes");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it("get the max id", async () => {
    const response = await request(baseUrl).get("/api/notesMax");
    expect(response.statusCode).toBe(200);
    expect(response.body.max).toBeTruthy();
  });

  it("get note by title", async () => {
    const response = await request(baseUrl).get("/api/notes/Homework");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it("get note by username", async () => {
    const response = await request(baseUrl).get("/api/notesU/rachel");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });

  it("get note by myid", async () => {
    const response = await request(baseUrl).get("/api/notesID/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

it("add and delete a note", async () => {
  const response = await request(baseUrl).get("/api/notes");
  const length = response.body.length;

  const note = {
    title: "test123",
    description: "test456",
    myid: 600,
    emoji: "emoj",
    username: "lala",
  };

  await request(baseUrl).post("/api/newNote").send(note);

  const response3 = await request(baseUrl).get("/api/notes");
  expect(response3.body.length).toBe(length + 1);

  await request(baseUrl).delete("/api/notesID2/600");

  const response5 = await request(baseUrl).get("/api/notes");
  expect(response5.body.length).toBe(length);
});
