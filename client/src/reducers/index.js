import {createStore, applyMiddleware, combineReducers} from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import testReducer from "./testReducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    auth: authReducer,
    test: testReducer,
    errors: errorsReducer
})

export default createStore(rootReducer, middleware);