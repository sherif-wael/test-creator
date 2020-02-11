const express = require("express");
const router = express.Router();
const Test = require("../../models/test");
const passport = require("passport")
const User = require("../../models/user")

//fetching a test using id
//GET method
//doesn't require authenticating

router.get("/testId/:id", (req, res) => {
    Test.findById(req.params.id)
        .then(test => {
            if(!test){
                res.status(400).json({notestfound: "No Test Found"})
            }else{
                res.json(test)
            }
        })
        .catch(err => {
            res.status(400).json({notestfound: "No Test Found"})
        })
})


router.post("/create", passport.authenticate("jwt", {session: false}), 
                  (req, res) => {
                        let newTest = new Test({
                            name: req.body.name,
                            questions: req.body.questions,
                            user: req.user.id
                        })
                        newTest.save()
                            .then(test => {
                                    res.json({success: true})
                            })
                            .catch(err => console.log(err))
                  })

router.delete("/:id",  
               (req, res) => {
                           Test.findOneAndDelete({_id: req.params.id})
                               .then(deletedTest => {
                                   res.json({
                                       success: true,
                                       test: deletedTest
                                   })
                               })
                       .catch(err => console.log(err))
               })
//get current authenticated user tests
//GET Request
//private route

router.get("/tests", passport.authenticate("jwt", {session: false}),
         (req, res) => {
             Test.find({user: req.user._id})
                 .then(tests => {
                    if(tests.length == 0){
                        res.status(400).json({notestsfound: "No Tests Found"})
                    }else{
                        res.json({tests})
                    }
                 })
                 .catch(err => {
                    res.status(400).json({notestsfound: "No Tests Found"})
                 })
         })

module.exports = router;
