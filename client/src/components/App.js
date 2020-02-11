import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "../reducers/index";
import jwt_decode from "jwt-decode";
import {setCurrentUser, logoutUser} from "../actions/user";
import setAuthToken from "../utils/setAuthToken";
import Routes from "./routes/Routes";
import Navbar from "./layout/Navbar";
// import Footer from "./layout/Footer";

let token = localStorage.getItem("jwt");
if(token){
  let decoded = jwt_decode(token);
  setAuthToken(token);
  store.dispatch(setCurrentUser(decoded));
  if(decoded.exp > Date.now() / 1000){
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
            <Navbar />
            <Routes />
            {/* <Footer /> */}
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App