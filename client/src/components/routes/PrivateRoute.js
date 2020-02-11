import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux"

const PrivateRoute = ({component, path, isAuthenticated}) => {
    return (
        isAuthenticated ? 
          <Route exact path={path}  component={component} /> :
          <Redirect to="/" />
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(PrivateRoute)