"use strict";

const Archetype = require("archetype-js");

module.exports = new Archetype({
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  firstName: {
    $type: "string",
    $required: true
  },
  email: {
    $type: "string",
    $required: true
  },
  title: {
    $type: "string",
    $required: true
  },
  body: {
    $type: "string",
    $required: true
  }
}).compile("PageType");
