"use strict";
const fetch = require("node-fetch");
const url = "https://reservation100-sandbox.mxapps.io/api/reservations";

fetch(url, {
  method: "POST",
  body: JSON.stringify({ name: "ali", numberOfPeople: 2 }),
  headers: { "Content-Type": "application/json" }
})
  .then(data => data.text())
  .then(res => console.log(res))
  .catch(err => console.log(err + "error message"));
