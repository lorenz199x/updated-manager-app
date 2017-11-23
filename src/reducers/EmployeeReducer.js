let initialState={

};

function EmployeeReducer (state = initialState, action) {
    
    switch(action.type) {
        case 'EMPLOYEES_FETCH_SUCCESS':
            // return {
            //     ...state,
            //     [id]: action.payload
            // }
            return action.payload;
        default:
            return state;
    }
};

export default EmployeeReducer;