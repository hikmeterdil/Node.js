"use strict";
const fetch = require("node-fetch");
const url = " https://restapiabasicauthe-sandbox.mxapps.io/api/books";

fetch(url, {
  headers: { Authorization: "Basic YWRtaW46aHZnWDhLbFZFYQ==" }
})
  .then(data => data.json())
  .then(res => console.log(res))
  .catch(err => console.log(err + "error message"));

("use strict");
const fetch = require("node-fetch");
const url = " https://restapiabasicauthe-sandbox.mxapps.io/api/books";

fetch(url, {
  headers: {
    Authorization: `Basic ${Buffer.from("admin:hvgX8KlVEa").toString("base64")}`
  }
})
  .then(data => data.json())
  .then(res => console.log(res))
  .catch(err => console.log(err + "error message"));
