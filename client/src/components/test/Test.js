import React from "react";
import Question from "./Question";
import {getTest} from "../../actions/test"
import {connect} from "react-redux";
import Spinner from "../spinner/Spinner"

//displays the test after fetching it

class Test extends React.Component{
    componentDidMount(){
        this.props.getTest(this.props.match.params.id);
    }
    render(){
        let {loading, test, errors} = this.props;
        console.log(test)
        if(errors.notestfound && !test){
            return <div className="text-center no-test-found">{errors.notestfound}</div>
        }
        return (
            <div className="display-test">
                {
                    loading || test == null? 
                     <Spinner /> : 
                     <div>
                        <div className="container text-center test-info">
                           <h4>name: {test.name}</h4>
                           <h4>questions: {test.questions.length}</h4>
                        </div>
                          <div className="jumbotron">
                            <div className="narrow">
                                {
                                    test.questions.map((question, idx) => {
                                        return <Question question={question} idx={idx} key={idx}/>
                                    })
                                }
                            </div>
                        </div>
                     </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        loading: state.test.loading,
        test: state.test.test,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {getTest})(Test)