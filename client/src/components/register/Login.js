import React from "react";
import {loginUser} from "../../actions/user";
import { connect } from "react-redux";

//the login form

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render(){
        let {errors, loginUser, history} = this.props;
        let {email, password} = this.state
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="loginEmail">Enter address</label>
                    <input type="email" onChange={event => this.setState({email: event.target.value})} 
                     id="loginEmail" className="form-control" aria-describedby="emailError" 
                     placeholder="Enter Your Email" value={email} />
                     <small id="emailError" className="form-text text-warning">{errors.email}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="loginPassword">Enter password</label>
                    <input type="password" onChange={event => this.setState({password: event.target.value})} 
                     id="loginPassword" className="form-control" aria-describedby="passwordError" 
                     placeholder="Enter Your Password"  value={password} />
                     <small id="passwordError" className="form-text text-warning">{errors.password}</small>
                </div>
                <div className="text-center">
                    <button onClick={() => loginUser(this.state, history)} type="button" 
                    className="btn btn-success ">Login</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {loginUser})(Login)