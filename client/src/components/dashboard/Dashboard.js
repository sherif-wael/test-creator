import React from "react"
import { connect } from "react-redux";
import {logoutUser} from "../../actions/user";
import {Link} from "react-router-dom";
import DashboardTest from "./DashboardTest";
import {getCurrentUserTests} from "../../actions/test";
import Spinner from "../spinner/Spinner"

//Private Route 

class Dashboard extends React.Component{
    componentDidMount(){
        this.props.getCurrentUserTests()
    }
    render(){
        let {loading, user, tests, logoutUser, history, errors} = this.props;
        let testIcons;
        if(tests.length === 0 && errors.notestsfound){
            testIcons = (<h3 className="text-center" style={{color: "gray"}}>No Tests Created</h3>)
        }else{
            testIcons = (<div className="dashboard-tests jumbotron">
                <div className="narrow">
                    {
                        tests.map(test => <DashboardTest test={test} history={history} />)
                    }
                </div>
           </div>)
        }
        return (
            <div className="dashboard">
                <div className="user-nav-links container">
                    <div className="user-name"><p>{user.name}</p></div>
                    <div className="links">
                        <a onClick={() => logoutUser()}>Logout</a>
                        <Link to="/create">Add Test</Link>
                    </div>
                </div>
                {
                    loading && !errors.notestsfound ? 
                       <Spinner /> :
                       testIcons
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.auth.user,
        loading: state.test.loading,
        tests: state.test.tests,
        errors: state.errors    
    }
}

export default connect(mapStateToProps, {getCurrentUserTests, logoutUser})(Dashboard)