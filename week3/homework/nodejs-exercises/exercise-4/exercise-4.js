"use strict";
const handlebar = require("handlebars");
const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon"
];
const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing"
];

const source = `<p>{{subject}} is great to {{punchline}}</p>`;
const template = handlebar.compile(source);
const result = templateFunction({
  subject: subjects[Math.floor(Math.random() * subjects.length)],
  punchline: punchlines[Math.floor(Math.random() * punchlines.length)]
});

console.log(result);
