import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { logout } from "../actions/auth";
import '../styles/Header.css';

const Header = () => {
    const user = useSelector(state => state.auth.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout(navigate));
    }
    return(
        <header>
        <nav className="main-nav">
            <Link className ="main-nav-logo" to='/'>
                <img
                    className="main-nav-logo-image"
                    src="src/assets/img/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
            <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user ? (
                    <div className="main-nav">
                        <i className="fa fa-user-circle"></i>
                        <p>{user?.userName}</p>
                        <div className="main-nav-item" onClick={handleLogout}>
                            Sign Out
                        </div>
                    </div>
                ):(
                    <Link className="main-nav" to='/login'>
                        <p>Sign In</p>
                    </Link>
                )}
                
            </div>
        </nav>
        </header>
    );
}

export default Header;