import React from 'react';
import Searchbar from "./Searchbar";

const Navbar = () => {
    return (
        <div className="Navbar_container container">
            <a className="logo_container">
                <img className="logo_image" src="../../public/img/Pexels.png"/>
                <div className="logo_text">Pexels</div>
            </a>

        </div>
    );
};

export default Navbar;