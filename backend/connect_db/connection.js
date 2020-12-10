const mongoose = require('mongoose');


const db_url = "mongodb+srv://Tableau:0000@cluster0.8spdg.mongodb.net/Tableau?retryWrites=true&w=majority";

mongoose.connect(db_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//Deprecated

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connexion database réussie');
});

module.exports = db;