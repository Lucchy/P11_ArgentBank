const profileUrl = 'http://localhost:3001/api/v1/user/profile';
const apiUrl = 'http://localhost:3001/api/v1/user/login';


export const loginSuccess = (token, profile) => ({
    type: 'LOGIN_SUCCESS',
    payload: {token, profile},
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});

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
        console.log('reponse 1 : ', data.body.token);
        dispatch(loginSuccess(data.body.token));
        navigate("/profile");

    }catch (error){
        console.error('Error in loginUser:', error);
        dispatch(loginFailure('Identifiants ou mot de passe incorrects'));
    }
};

export const fetchUserProfileSuccess = (profile) => ({
    type: 'FETCH_PROFILE_SUCCESS',
    payload: profile,
})
export const fetchUserProfileFailure = (error) => ({
    type: 'FETCH_PROFILE_FAILURE',
    payload: error,
})


export const fetchUserProfile = () => async (dispatch) => {
    try {
        const lsToken = window.localStorage.getItem('token');
        console.log('vérification du token : ', lsToken);

        const profileResponse = await fetch(profileUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${lsToken}`,
            },
        });

        if (!profileResponse.ok) {
            throw new Error('Erreur lors de la récupération des détails du profil :');
        }

        const profileData = await profileResponse.json();
        console.log('profileReponse :', profileData);

        dispatch(fetchUserProfileSuccess(profileData.body));
 
    } catch (error) {
        console.error('Erreur lors de la récupération des details du profil : ', error);
        dispatch(fetchUserProfileFailure('Erreur lors de la récupération du profil'));
    }
}

export const updateUsernameSuccess = (username) => ({
    type: 'UPDATE_USERNAME_SUCCESS',
    payload: username,
});

export const updateUsernameFailure = (error) => ({
    type: 'UPDATE_USERNAME_FAILURE',
    payload: error, 
});

export const updateUsername = (newUsername) => async (dispatch) => {
    try {
        const lsToken = window.localStorage.getItem('token');
        console.log('envoie de : ', JSON.stringify({ username: newUsername }));
        
        const response = await fetch(profileUrl, {
            method: 'PUT',
            body: JSON.stringify({ userName: newUsername }),
            headers: {
                'Content-Type':'application/json',
                'accept':'application/json',
                'Authorization':`Bearer ${lsToken}`,
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour du nom d\'utilisateur');
        }
        console.log('unMaj reponse ', await response.json());
        dispatch(updateUsernameSuccess(newUsername));
    }catch (error){
        console.log('Erreur lors de la MAJ du username', error);
        dispatch(updateUsernameFailure('Erreur lors de la MAJ du username')); 
    }
};

export const logout = (navigate) => (dispatch) => {
    dispatch({type: 'LOGOUT',});
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    navigate("/");
};