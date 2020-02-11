import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken"

//if user data is valid we use the returned token and 
//keep sending it every request container user id, name, email
export const loginUser = (loginData, history) => dispatch => {
    axios
       .post("/api/user/login", loginData)
       .then(res => {
           let token = res.data.token;
           setAuthToken(token);
           localStorage.setItem("jwt", token);
           dispatch(setCurrentUser(jwt_decode(token)));
           history.push("/dashboard");
       })
       .catch(err =>{
           dispatch(setErrors(err.response.data))
       })
}

export const signupUser = (signupData, history) => dispatch => {
    axios
      .post("/api/user/signup", signupData)
      .then(res => {
          history.push("/dashboard")
      })
      .catch(err => dispatch(setErrors(err.response.data)))
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwt");
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}


export function setCurrentUser(payload){
    return {type: "SET_USER", payload}
}

export function setErrors(payload ){
    return {type: "SET_ERRORS", payload}
}