import React from "react";

//to set a test name
//enter test questions 
//data entered is checked using the isValidQuestion fucntion

class CreateTestForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "",
            choices: [],
            answer: "",
        }
        this.addChoice = this.addChoice.bind(this)
    }
    addChoice(event, idx){
        let choices = this.state.choices.slice();
        choices[idx] = event.target.value;
        this.setState({choices})
    }
    render(){
        let {errors, addQuestion} = this.props
        return (
            <form className="narrow">
                <div className="form-group">
                    <label htmlFor="questionHeader">Enter Header:</label>
                    <input className="form-control form-control-sm" type="text" aria-describedby="headerError"
                     id="questionHeader" placeholder="enter question"
                      onChange={event => this.setState({header: event.target.value})} />
                     <small id="headerEror" className="text-warning">{errors.header}</small>
                </div>
                <div className="choices form-group">
                    <label className="ml-3">Choices:</label>
                    <div className="row">
                      <div className="col-6">
                        <div class="input-group">
                          <label htmlFor="A" className="choices-label">A:</label>
                          <input className="form-control form-control-sm" type="text"  
                          onChange={event => this.addChoice(event, 0)} id="A"/>
                          <input type="radio" value="0" className="mt-2 ml-2" name="answer"
                            onChange={event => this.setState({answer: event.target.value})} />
                        </div>
                      
                        <div class="input-group">
                          <label htmlFor="B" className="choices-label">B:</label>
                          <input className="form-control form-control-sm" type="text"  
                          onChange={event => this.addChoice(event, 1)} id="B"/>
                          <input type="radio" value="1" className="mt-2 ml-2" name="answer"
                            onChange={event => this.setState({answer: event.target.value})} />
                        </div>
                      </div>

                       <div className="col-6">
                          <div class="input-group">
                            <label htmlFor="C" className="choices-label">C:</label>
                            <input className="form-control form-control-sm" type="text"  
                            onChange={event => this.addChoice(event, 2)} id="C"/>
                            <input type="radio" value="2" className="mt-2 ml-2" name="answer"
                              onChange={event => this.setState({answer: event.target.value})} />
                          </div>

                          <div class="input-group">
                            <label htmlFor="D" className="choices-label">D:</label>
                            <input className="form-control form-control-sm" type="text"  
                            onChange={event => this.addChoice(event, 3)} id="D"/>
                            <input type="radio" value="3" className="mt-2 ml-2" name="answer"
                              onChange={event => this.setState({answer: event.target.value})} />
                          </div>
                       </div>
                       <small className="text-warning">{errors.choices}</small>
                </div>
              </div>
                <div className="text-center"><button type="button" className="btn btn-success"
                onClick={() => addQuestion(this.state)}>Add</button></div>
            </form>
        )
    }
}

export default CreateTestForm