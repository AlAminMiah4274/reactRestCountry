import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my react website</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;