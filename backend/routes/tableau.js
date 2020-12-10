var express = require("express");
var router = express.Router();
const {connected} = require("../db");

router.get("/", async function (req, res, next) {
  try {
    const db = connected.db("Tableau");
    const collections = await db.collection("operations").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

module.exports = router;