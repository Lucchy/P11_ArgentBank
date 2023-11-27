import React from "react";
import { Link } from 'react-router-dom';

const Navigation = ({chemin, children}) => {
    return (
        <Link to={chemin}>{children}</Link>
    );
}

export default Navigation;