const initialState = {
    token: null,
    error: null,
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success:', action.payload);
            return {
                ...state,
                token: action.payload,
                error: null,
            };
        
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null, 
                error: action.payload,
            };
            default:
                return state;
    }
};

export default authReducers;