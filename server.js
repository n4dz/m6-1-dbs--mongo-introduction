"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getUsers } = require("./__workshop/exercises/exercise-1.3");
const { postUsers } = require("./__workshop/exercises/exercise-1.4");
const { postGreetings } = require("./__workshop/exercises/exercise-2.1");
const { getGreeting } = require("./__workshop/exercises/exercise-2.3");
const { getGreetings } = require("./__workshop/exercises/exercise-2.4");
const { deleteGreeting } = require("./__workshop/exercises/exercise-2.5");
const { updateGreeting } = require("./__workshop/exercises/exercise-2.6");

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // exercise 1.3 endpoint
  .get("/exercise-1/users", getUsers)
  //exercise 1.4 endpoint
  .post("/exercise-1/users", postUsers)

  // exercise 2.1 endpoint
  .post("/exercise-2/greetings", postGreetings)

  // exercise 2.3 endpoint
  .get("/exercise-2/greetings/:_id", getGreeting)

  // exercise 2.4 endpoint
  .get("/exercise-2/greetings", getGreetings)

  // exercise 2.5 endpoint
  .delete("/exercise-2/greetings/:_id", deleteGreeting)

  // exercise 2.6 endpoint
  .put("/exercise-2/greetings/:_id", updateGreeting)

  // handle 404s
  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
