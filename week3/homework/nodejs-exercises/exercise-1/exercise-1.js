"use strict";
const fetch = require("node-fetch");
const url = "http://api.icndb.com/jokes/random";

fetch(url)
  .then(data => data.json())
  .then(res => console.log(res.value.joke))
  .catch(err => console.log(err + "error message"));
