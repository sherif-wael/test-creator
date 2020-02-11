import React from "react";
import {signupUser} from "../../actions/user";
import { connect } from "react-redux";

//the signup form

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }
    render(){
        let {errors, signupUser, history} = this.props;
        let {email, password, name} = this.state
        return (
            <form>
                <div className="form-group">
                    <label for="signupName">Enter Name</label>
                    <input type="text" onChange={event => this.setState({name: event.target.value})}
                       id="signupName" aria-describedBy="nameError" className="form-control" 
                       placeholder="Enter Your Name" value={name} />
                       <small id="nameError" class="form-text text-warning">{errors.name}</small>
                </div>
                <div className="form-group">
                    <label for="signupEmail">Enter address</label>
                    <input type="email" onChange={event => this.setState({email: event.target.value})}
                       id="signupEmail" aria-describedBy="emailError" className="form-control"
                       placeholder="Enter Your Email" value={email}/>
                       <small id="emailError" class="form-text text-warning">{errors.email}</small>
                </div>
                <div className="form-group">
                    <label for="signupPassword">Enter password</label>
                    <input type="password" onChange={event => this.setState({password: event.target.value})}
                       id="signupPassowrd" aria-describedBy="passwordError" className="form-control"
                       placeholder="Enter Your Password" value={password} />
                       <small id="passwordError" class="form-text text-warning">{errors.name}</small>
                </div>
                <div className="text-center">
                    <button onClick={() => signupUser(this.state, history)} type="button"
                    className="btn btn-success">Signup</button>
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

export default connect(mapStateToProps, {signupUser})(Signup)