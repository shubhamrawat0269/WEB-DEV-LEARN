/* Lesson :--> 1  +++++ Modules in NODEJS +++++ */
// -----------------------------------------------------

// const { greeting, printDetails } = require("./modules/utils.modules");

// console.log(greeting("Shubham"));
// console.log(printDetails({ prof: "Web Developer", yearOfExp: "2", age: 26 }));

// -----------------------------------------------------

/* Lesson :--> 2  +++++ How NODEJS works? +++++ */
// -----------------------------------------------------

/* 
   Notes 1): Client makes a request to backend (i.e. NodeJS) in return,
    1. Event Queue -> Lines up client request in the formate of FIFO.
    2. Event Loop  -> Responsible to pick the request which either can be Non - Blocking(Async) & Blocking Request(Sync)
    3. Thread Pool -> Worker who perform a task on behalf of event loop and return the response.
    We have limited thread pool size so, its not advisable to run blocking request.

    Note --> Non-blocking Request doesn't block the request so it's preferable. Why we should do non-blocking request ??
*/

/* Lesson :--> 3  +++++ Creating Server using express +++++ */
// -----------------------------------------------------

// NOTE : --> below code is legacy code to import packages.
// const express = require("express");
import express from "express";
const PORT = 8000;
const app = express();

app.get("/", (req, res) => {
  // const serverInfo = {
  //   serverName: "CRIO wrkspace",
  //   version: "1.0.0",
  //   currentDate: new Date().toLocaleDateString(),
  //   currentTime: new Date().toLocaleTimeString(),
  // };

  res.status(200).json({ message: "You are in Home Page" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "You are in About Page" });
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT NUMBER: ${PORT}`);
});

// -----------------------------------------------------
