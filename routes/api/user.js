const User = require("../../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const validateLoginInput = require("../../validation/validateLoginInput");
const validateSignupInput = require("../../validation/validateSignupInput");
const bcrypt = require("bcryptjs")
const keys = require("../../config/keys");
//handle user login to the site

router.post("/login", (req, res) => {
    let {isValid, errors} = validateLoginInput(req.body);
    
    if(!isValid){
        res.status(400).json(errors)
        return;
    }
    User.findOne({email: req.body.email})
         .then(user => {
             if(!user){
                 errors.email = "email.does not exist";
                 res.status(400).json(errors)
             }else{
                 bcrypt.compare(req.body.password, user.password)
                       .then(result => {
                           if(result){
                               let payload = {
                                   name: user.name,
                                   id: user.id,
                                   email: user.email
                               }
                               jwt.sign(payload, keys.secret, (err, token) => {
                                   res.json({
                                       success: true,
                                       token: "Bearer"+ " "+ token
                                   })
                               })
                           }else{
                               errors.password = "invalid password";
                               res.status(400).json(errors)
                           }
                       })
             }
         })
         .catch(err => console.log(err))
})

//handling signup of the user into site


router.post("/signup", (req, res) => {
    let {isValid, errors} = validateSignupInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = "this email already exists";
                res.status(400).json(errors)
            }else{
                let newUser = new User({
                    email: req.body.email,
                    password: req.body.email,
                    name: req.body.name
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser.save()
                               .then(() => {
                                   res.json({success: true})
                               })
                    })
                })
            }
        })
})




module.exports = router;