let initialState={
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

function AuthReducer (state = initialState, action) {

    switch(action.type){
        case 'EMAIL_CHANGED': {
            return {
                ...state,
                email: action.payload
            }
        }

        case 'PASSW0RD_CHANGED': {
            return {
                ...state,
                password: action.payload
            }
        }

        case 'LOGIN_USER': {
            return {
                ...state, loading: true,
                error: '',
                email: action.payload,
                password: action.payload
            }
        }

        case 'LOGIN_USER_SUCCESS': {
            return {
                ...state,
                ...initialState,
                user: action.payload
                // user: action.payload,
                // error: '',
                // loading: false,
                // email: '',
                // password: ''
            }
        }

        case 'LOGIN_USER_FAIL': {
            return {
                ...state,
                error: 'Invaid Email or Password.',
                password: '',
                loading: false
            }
        }

        default:
            return state;
    }
}

export default AuthReducer;