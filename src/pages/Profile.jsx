import React, { useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Profile.css';
import Card from '../components/Card';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUsername } from '../actions/auth';


const Profile = () => {
    const dispatch = useDispatch();
    const { token, profile } = useSelector((state) => state.auth);

    useEffect (() => {
        console.log('Entrée dans le useEffect');
        dispatch(fetchUserProfile(token));

    }, [dispatch, token]);
    
    const lsProfile = JSON.parse(window.localStorage.getItem('profile'));

    const username = profile?.userName || '';
    const lastname = profile?.lastName || '';
    const firstname = profile?.firstName || '';

    const [newUsername, setNewUsername] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        console.log('lsProfile :', JSON.parse(window.localStorage.getItem('profile')));
    }

    const handleSaveClick = () => {
        console.log('newusername: ', newUsername);
        dispatch(updateUsername(newUsername));
        setIsEditing(false);
    };

    return (
        <div className="user">
            <Header/>
            <main className="main bg-dark">
                <div className="header">
                    {isEditing ? (
                        <form>
                            <h2>Edit user Info</h2>
                            <input className='f-name' type='text'value={`Lastname : ${lastname}`}/><br/>
                            <input className='f-name' type='text'value={`Firstname : ${firstname}`}/><br/>
                            <input className='f-username' placeholder='Entrer nouveau pseudo' 
                            type='text'value={newUsername} onChange={(e)=> setNewUsername(e.target.value)}/><br/>
                            <button className='save-button' onClick={handleSaveClick}>
                                Save
                            </button>
                        </form>
                    
                    ):(
                        <>
                            <Title username={username}/>
                            <button className="edit-button" onClick={handleEditClick}>
                                Edit Name
                            </button>
                        </>
                    )}
                    
                </div>
                <h2 className="sr-only">Accounts</h2>
                    <Card title='Argent Bank Cheking (x3123)' desc='Available balance' amount='48,098.42'/>
                    <Card title='Argent Bank Cheking (x3796)' desc='Available balance' amount='8,298.13'/>
                    <Card title='Argent Bank Cheking (x3459)' desc='Available balance' amount='1,028.46'/>
                
                <Footer/>
            </main>
        </div>
        
    )
}

export default Profile;