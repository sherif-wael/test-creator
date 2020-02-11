const initialState = {
    loading: true, 
    test: null,
    tests: []
}

function testReducer(state = initialState, action){
    switch(action.type){
        case "SET_CURRENT_LOADING":
            return {...state, loading: true};
        case  "SET_TEST":
            return {...state, loading: false, test: action.payload};
        case "SET_TESTS":
            return {...state, loading: false, tests: action.payload};
        case "DELETE_TEST":
            return {...state, tests: state.tests.filter(test => test._id !== action.payload)};
        default: 
            return state
    }
}

export default testReducer