import isEmpty from "./isEmpty";

export default question => {
    let errors = {};
    if(isEmpty(question.header)){
        errors.header = "enter a header"
    }
    if(question.choices.some(choice => isEmpty(choice)) || question.choices.length !== 4){
        errors.choices = "enter 4 choices";
    }
    if(isEmpty(question.answer)){
        errors.answer = "check an answer"
    }
    return {
        isValid: isEmpty(errors),
        errors
    }
}