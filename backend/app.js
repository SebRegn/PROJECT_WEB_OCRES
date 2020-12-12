var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
const port = 8000; //on peut changer de port
const bodyParser= require('body-parser')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tableauRouter = require("./routes/tableau");
const { run, connected } = require("./db");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

run().then(connected => {

    app.use("/", indexRouter);
    app.use("/users", usersRouter);
    app.use("/tableau", tableauRouter);

app.listen(port,() => {console.log(`App listening at http://localhost:${port}`);

    })
})
.catch(console.dir);


module.exports = app;