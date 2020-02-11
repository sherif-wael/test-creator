import React, {useState} from "react";

const RadioButton = ({value, name, checked, answer, onChange}) => {
    return !checked ? 
           <input type="radio" value={value} name={name} onChange={onChange}/> : 
           value == answer ? 
           <i className="fas fa-check"></i> : 
           <i className="fas fa-times"></i>
}

const Question = ({question, idx}) =>{
    let {answer} = question
    let [checked, setChecked] = useState(false);
    let change = () => setChecked(true)
    return (
        <div className="question">
            <p><b>{idx+1}.Question:</b> {question.header}</p>
            <div className="question-choices row">
                <div className="col-6">
                   <div><RadioButton name={idx} value={"0"} onChange={change} checked={checked} answer={answer}/> {question.choices[0]}</div>
                   <div><RadioButton name={idx} value={"1"} onChange={change} checked={checked} answer={answer}/> {question.choices[1]}</div>
                </div>
                <div className="col-6">
                   <div><RadioButton name={idx} value={"2"} onChange={change} checked={checked} answer={answer}/> {question.choices[2]}</div>
                   <div><RadioButton name={idx} value={"3"} onChange={change} checked={checked} answer={answer}/> {question.choices[3]}</div>
                </div>
            </div>
        </div>
    )
}

export default Question