var express = require("express");
var router = express.Router();
const {connected} = require("../db");

router.get("/", async function (req, res) {
  try {
    const db = connected.db("Tableau");
    const collections = await db.collection("affluance").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


router.post("/add", async function (req, res) {
  try {
    const db = connected.db("Tableau");
    const result = await db.collection("affluance").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

module.exports = router;