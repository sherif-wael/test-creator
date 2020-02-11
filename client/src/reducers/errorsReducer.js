const initialState = {};

function errorsReducer(state = initialState, action){
    switch(action.type){
        case "SET_ERRORS":
            return action.payload;
        case "CLEAR_ERRORS":
            return {};
        default: 
            return state
    }
}

export default errorsReducer