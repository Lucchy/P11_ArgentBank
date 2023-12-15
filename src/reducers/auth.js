const initialState = {
    token: null,
    error: null,
    profile: null,
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('TOKEN : storing in LS:', action.payload.token);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                profile: action.payload.profile,
                error: null,
            };
        
        case 'LOGIN_FAILURE':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null, 
                profile: null,
                error: action.payload,
            };

        case 'FETCH_PROFILE_SUCCESS':
            return {
                ...state,
                profile: action.payload,
                error: null,
            };

        case 'FETCH_PROFILE_FAILURE':
            localStorage.removeItem('profile');
            return {
                ...state,
                profile: null,
                error: action.payload,
            }; 

        case 'UPDATE_USERNAME_SUCCESS':
            console.log('username3 : ', action.payload);
            return {
                ...state,
                profile: {
                    ...state.profile,
                    userName: action.payload,
                },
            };
        
        case 'UPDATE_USERNAME_FAILURE':
            return {
                ...state,
                error: action.payload,
            };

        case 'LOGOUT':
            return {
                ...state,
                token: null,
                profile: null,
                error: null,
            };

            default:
                return state;
    }
};

export default authReducers;