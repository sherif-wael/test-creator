import React from "react";
import {connect} from "react-redux";
import {deleteTest} from "../../actions/test"
import maxLength from "../../utils/maxLength"

// displays the tests created by the user
//user can visit the test and delete it 
//use the link to share it 

const DashboardTest = ({test, history, deleteTest}) => {
    return (
        <div className="test-icon">
            <p><b>Name:</b>{test.name}</p>
            <p><b>ID:</b>{test._id}</p>
            <div class="test-icon-btns">
                <button type="button" className="btn btn-success btn-sm"
                    onClick={() => history.push(`/test/${test._id}`)}>Visit</button>
                <button type="button" className="btn btn-danger delete-btn btn-sm   "
                    onClick={() => deleteTest(test._id)}>Delete</button>    
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, {deleteTest})(DashboardTest)