"use strict";

const express = require("express");
const exh = require("express-handlebars");
const app = express();
const axios = require("axios");
const API_KEY = require("./sources/keys.json").API_KEY;

app.set("view engine", "handlebars");
app.engine("handlebars", exh({ defaultLayout: "main" }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/weather", (req, res) => {
  axios(
    `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${req.body.cityName}&units=metric`
  )
    .then(data => {
      res.render("index", {
        weatherText: `${data.data.name} - ${data.data.main.temp} C`
      });
    })
    .catch(() => {
      res.render("index", { weatherText: "City is not found!" });
    });
});

app.listen(3000, () => {
  console.log("server started");
});
