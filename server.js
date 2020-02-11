const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const keys = require("./config/keys")
const path = require("path")

// mongodb://localhost:27017/test-creator connecting locally
mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("mongodb connected")
        })
        .catch(err => console.log(err));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.use(passport.initialize())
require("./utils/passport")(passport);


app.use("/api/user", require("./routes/api/user"))
app.use("/api/test", require("./routes/api/test"))
// app.use(express.static("./client/public"));

if(process.env.NODE_ENV == "production"){
    app.use(express.static("./client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
 }else{
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
}

app.listen(process.env.PORT || 5000, () => console.log("server is listening to port 5000"))