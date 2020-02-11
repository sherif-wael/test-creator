const validator = require("validator");
const isEmpty = require("../utils/isEmpty");

function validateLoginInput(data){
    let errors = {};

    data.email = isEmpty(data.email) ? "" : data.email;
    data.password = isEmpty(data.password) ? "" : data.password;

    if(validator.isEmpty(data.email)){
        errors.email = "please enter an email";
    }
    if(!validator.isEmail(data.email)){
        errors.email = "please enter a valid email"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "please enter a password"
    }
    return {
        isValid: isEmpty(errors),
        errors
    }
}

module.exports = validateLoginInput