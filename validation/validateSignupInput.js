const validator = require("validator");
const isEmpty = require("../utils/isEmpty");

function validateSignupInput(data){
    let errors = {};

    data.name = isEmpty(data.name) ? "" : data.name;
    data.email = isEmpty(data.email) ? "" : data.email;
    data.password = isEmpty(data.password) ? "" : data.password;

    if(validator.isEmpty(data.name)){
        errors.name = "Enter your name";
    }
    if(validator.isEmpty(data.email)){
        errors.email = "Enter your email"
    }
    if(!validator.isEmail(data.email)){
        errors.email = "Enter a valid email"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "Enter your password"
    }
    if(!validator.isLength(data.password, {min: 7, max: 14})){
        errors.password = "Password length should be 7 to 14 characters"
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

module.exports = validateSignupInput