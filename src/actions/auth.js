export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token,
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});

const apiUrl = 'http://localhost:3001/api/v1/user/login';

export const loginUser = (email, password, navigate) => async (dispatch) => {
    try {
        console.log('loggin in...');
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            },
        });

        if (!response.ok){
            console.error('Request failed:', response.statusText);
            throw new Error('identifiant ou mot de passe incorrect');
        }

        const data = await response.json();
        dispatch(loginSuccess(data.body.token));
        navigate("/profile");

    }catch (error){
        console.error('Error in loginUser:', error);
        dispatch(loginFailure('Identifiants ou mot de passe incorrects'));
    }
};