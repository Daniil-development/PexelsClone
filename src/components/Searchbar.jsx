import React from 'react';

const Searchbar = () => {
    return (
        <form role="search" autoComplete="off" className="Searchbar_form">
            <input className="Searchbar_input"/>
            <button className="Searchbar_button"></button>
        </form>
    );
};

export default Searchbar;