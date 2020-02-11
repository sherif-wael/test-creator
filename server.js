const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const keys = require("./config/keys")

// mongodb://localhost:27017/test-creator connecting locally
mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            app.listen(process.env.PORT || 5000, () => console.log("server is listening to port 5000"))
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
    app.use(express.static("./client/build"))
}else{
    app.use(express.static("./client/public"))
}