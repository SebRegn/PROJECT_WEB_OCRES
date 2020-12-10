
const { MongoClient } = require("mongodb");

// Connexion bdd
const uri =
  "mongodb+srv://Tableau:0000@cluster0.8spdg.mongodb.net/Tableau?retryWrites=true&w=majority";

// Create a new MongoClient
const connected = new MongoClient(uri, {
  useUnifiedTopology: true
});

exports.run = async function run() {
  try {
    // Connect the client to the server
    await connected.connect();
    // Establish and verify connection
    await connected.db("Tableau").command({ ping: 1 });
    console.log("Connexion réussie");
    return connected;
  } catch(e) {
    console.error(e)
  }
}

exports.connected = connected