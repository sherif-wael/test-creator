import React from "react"
import Login from "../register/Login"
import Signup from "../register/Signup"
import { connect } from "react-redux";
import Footer from "./Footer"

//ladnig page 
//containing the login and signup form

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: true
        }
    }
    componentDidMount(){
        if(this.props.isAuthenticated){
            this.props.history.push("/dashboard")
        }
    }
    render(){
        let {history} = this.props
        return (
            <div>
              <div className="text-center headline container">
                    <h1>Create your tests with <span>Test Creator</span></h1>
                    <p className="lead">Share it with your colleagues and have fun together</p>
              </div>
              <div className="row home jumbotron">
                    <div className="col-md-6 text-lg-left text-sm-center">
                        <p className="lead">Let's start, Its super easy</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Create an account</li>
                            <li><i className="fas fa-check"></i> Create your test</li>
                            <li><i className="fas fa-check"></i> Share test link with colleagues</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {
                        this.state.login ? <Login history={history} /> :
                            <Signup history={history} />
                        }
                        <div className="text-center toggle-form text-muted">
                            {
                                this.state.login ? 
                                  <p>Don't have an account? <a onClick={() => this.setState({login: false})} className="text-primary">Signup</a></p> :
                                  <p>Have an account? <a onClick={() => this.setState({login: true})} className="text-primary">Login</a></p>
                            }
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
        )
    }
}



export default connect(state => {
    return {isAuthenticated: state.auth.isAuthenticated}
})(Home)