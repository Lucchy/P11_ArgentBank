import React from "react";
import Navigation from "./Navigation";
// import '../styles/header.css';

const Header = () => {
    return(
        <header>
        <nav className="main-nav">
            <Navigation className ="main-nav-logo" chemin='/'>
                <img
                    className="main-nav-logo-image"
                    src="src/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
            <h1 className="sr-only">Argent Bank</h1>
            </Navigation>
            <div>
                <Navigation className="main-nav-item" chemin='/login'>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Navigation>
            </div>
        </nav>
        </header>
    );
}

export default Header;