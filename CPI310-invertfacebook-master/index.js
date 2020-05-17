const express = require("express");
const exphbs = require("express-handlebars");
const url = require("url");
const sqlite = require("sqlite");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const uuidv4 = require("uuid/v4");

var path = require("path");

const saltRounds = 10;

const app = express();
const dbPromise = sqlite.open("./data.sqlite");


app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
var hbs = require('handlebars');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

console.log("server is running");

const authorize = async (req, res, next) => {
  const db = await dbPromise;
  const token = req.cookies.authToken;
  console.log("token from authorize:", token);
  if (!token) {
    return next();
  }

  const authToken = await db.get(
    "SELECT * FROM authTokens WHERE token=?",
    token
  );
  console.log("authToken from authorize", authToken);
  if (!authToken) {
    return next();
  }
const infoDump = await db.all("SELECT * FROM users");
console.log(infoDump);
  const user = await db.get(
    "SELECT name, id FROM users WHERE id=?",
    authToken.userID
  );
  console.log("user from authorize", user);

  req.user = user;
  next();
};

app.use(authorize);

app.get('/Sudoku.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/Sudoku.html'));
});

app.get('/WordSearch.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/WordSearch.html'));
});

app.get('/MineSweeper.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/MineSweeper.html'));
});

app.get('/Fishing.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/Fishing.html'));
});


app.get('/WelcomePage.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/WelcomePage.html'));
});

app.get('/ProjectPage.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/ProjectPage.html'));
});

app.get('/TeamPage.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/TeamPage.html'));
});

app.get('/ProjectPlan.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/ProjectPlan.html'));
});

app.get('/SpecificationsPage.html', function(request, response){
    response.sendFile(path.join(__dirname + '/views/SpecificationsPage.html'));
});

app.get("/",  async (req, res) => {
  const db = await dbPromise;
  const messages = await db.all("SELECT * FROM messages");
  res.render("Index", { messages: messages, user: req.user });
});

app.post("/message", async (req, res) => {
  const db = await dbPromise;
  if (!req.user) {
    return res.render("Index", { error: "not logged in" });
  }
  if (!req.body || !req.body.message) {
    return res.render("Index", { error: "message not provided" });
  }
  await db.run(
    "INSERT INTO messages (message) VALUES (?)",
    req.body.message,
  );
  res.redirect("/");
});

app.get ('/Login', (req, res) => {
	res.render("Login");
	})

app.post("/Login", async (req, res) => {
  const db = await dbPromise;
  const { email, password } = req.body;
  const user = await db.get("SELECT * FROM users WHERE email=?", email);
  if (!user) {
    return res.render("Login", { error: "USER NOT FOUND" });
  }
  const matches = await bcrypt.compare(password, user.password);
  if (!matches) {
    return res.render("Login", { error: "PASSWORD IS INCORRECT" });
  }
  const token = uuidv4();
  await db.run(
    "INSERT INTO authTokens (token, userId) VALUES (?, ?)",
    token,
    user.id
  );
  res.cookie("authToken", token);
  res.redirect("/");
});

app.get('/Register',  (request, response) => {
    response.render("Register");
});

app.post("/Register", async (req, res) => {
  const db = await dbPromise;
  const { name, email, password } = req.body;
  let error = null;
  if (!name) {
    error = "name field is required";
  }
  if (!email) {
    error = "email field is required";
  }
  if (!password) {
    error = "password field is required";
  }
  if (error) {
    return res.render("Register", { error: error });
  }
	const existingUser = await db.get(
    "SELECT email FROM users WHERE email=?",
    email
  );
  if (existingUser) {
    return res.render("Register", { error: "USER ALREADY EXISTS" });
  }
  const pwHash = await bcrypt.hash(password, saltRounds);
  await db.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?);",
    name,
    email,
    pwHash
  );
  const user = await db.get("SELECT * FROM users WHERE email=?", email);
  const token = uuidv4();
  await db.run(
    "INSERT INTO authTokens (token, userId) VALUES (?, ?)",
    token,
    user.id
  );
  res.cookie("authToken", token);
  res.redirect("Login");
});

const setup = async () => {
  const db = await dbPromise;
  db.migrate({ force: "last" });
  app.listen(3000, () => console.log("listening on http://localhost:3000"));
};
app.listen(3000)