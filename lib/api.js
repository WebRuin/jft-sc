"use strict";

const Archetype = require("archetype-js");
const PageType = require("./page");
const { ObjectId } = require("mongodb");
const express = require("express");

module.exports = db => {
  const router = express.Router();

  const wrapAsync = handler => (req, res) =>
    handler(req)
      .then(result => res.json(result))
      .catch(error => res.status(500).json({ error: error.message }));

  router.get(
    "/",
    wrapAsync(async function(req) {
      return db
        .collection("Page")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
    })
  );

  router.post(
    "/",
    wrapAsync(async function(req) {
      const page = new PageType(req.body);
      await db.collection("Page").insertOne(page);
      return { page };
    })
  );

  router.delete(
    "/:id",
    wrapAsync(async function(req) {
      const { result } = await db.collection("Page").deleteOne({
        _id: Archetype.to(req.params.id, ObjectId)
      });
      return { result };
    })
  );

  return router;
};
