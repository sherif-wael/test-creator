import React from "react"
import {createTest} from "../../actions/test"
import { connect } from "react-redux";
import isValidQuestion from "../../utils/isValidQuestion";
import CreateTestForm from "./CreateTestForm"
import Question from "../test/Question"

//dispalying the form
//the question created
class CreateTestPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            questions: [],
            errors: {}
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.addTest = this.addTest.bind(this);
    }
    addQuestion(question){
        let {isValid, errors} = isValidQuestion(question);
        if(isValid){
            let questions = [...this.state.questions, question];
            this.setState({questions})
        }else{
            this.setState({errors});
        }
    }
    deleteQuestion(idx){
        let questions = this.state.questions.filter((ques, quesIdx) => quesIdx !== idx);
        this.setState({questions})
    }
    addTest(test){
        if(this.state.questions.length !== 0 && this.state.name.length){
            this.props.createTest(test, this.props.history)
        }else{
            alert("enter questions and test name")
        }
    }
    render(){
        let {name, questions, errors} = this.state;
        return (
            <div>
                <CreateTestForm addQuestion={this.addQuestion} errors={errors}/>
                <div className="text-center test-name">
                    <label>Enter Test Name: <input type="text" onChange={event => this.setState({name: event.target.value})}/>
                    </label>
                </div>
                <div className="jumbotron questions">
                    <div className="narrow">
                        <div className="row">
                            <h2 className="text-left col-6">Questions</h2>
                            <div className="col-6 text-right align-middle">
                                <button className="btn btn-success" type="button" 
                                onClick={() => this.addTest({name, questions})}>Submit</button>
                            </div>
                        </div>
                        {
                            questions.map((question, idx) => {
                                return (
                                   <Question question={question} idx={idx}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {createTest})(CreateTestPage)