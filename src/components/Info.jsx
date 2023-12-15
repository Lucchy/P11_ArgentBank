import React from "react";

const Info = ({url, title, children}) => {
    return (
        <div className="feature-item">
            <img src={url} alt={title} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Info;
