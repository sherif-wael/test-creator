import axios from "axios";
import {setErrors} from "./user";

//fetching tests created by current user
//using data sent with Token
export const getCurrentUserTests = () => dispatch => {
    dispatch(setCurrentLoading())
    axios
      .get("/api/test/tests")
      .then(res => {
          dispatch(setTests(res.data.tests))
      })
      .catch(err => dispatch(setErrors(err.response.data)))
}

//fetching a specfic test using its id
//id is obtained from url path
//No Authentication required
export const getTest = id => dispatch => {
    dispatch(setCurrentLoading())
    axios
      .get(`/api/test/testId/${id}`)
      .then(res => {
          dispatch(setTest(res.data))
      })
      .catch(err => dispatch(setErrors(err.response.data)))
}

//deleting a specfic test using its id
//id is obtained from url path
//Authenticared required
export const deleteTest = id => dispatch => {
    axios
      .delete(`/api/test/${id}`)
      .then(res => {
          dispatch({type: "DELETE_TEST", payload: res.data.test._id})
      })
      .catch(err => dispatch(setErrors(err.response.data)))
}

//Authentication required;
export const createTest = (testData, history) => dispatch => {
    axios
       .post("/api/test/create", testData)
       .then(() => {
           history.push("/dashboard")
       })
       .catch(err => dispatch(setErrors(err.response.data)))
}


const setCurrentLoading = () => {
    return {type: "SET_CURRENT_LOADING"}
}

//payload is a test object
const setTest = payload => {
    return {type: "SET_TEST", payload}
}

//payload is an array of tests
const setTests = payload => {
    return {type: "SET_TESTS", payload}
}