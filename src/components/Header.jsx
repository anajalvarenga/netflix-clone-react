import React from "react";
import "./Header.css";

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header__logo">
                <a href="/">
                    <img
                        src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
                        alt="logo Netflix"
                    />
                </a>
            </div>
            <div className="header__user">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="usuário"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
