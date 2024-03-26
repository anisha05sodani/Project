import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../Assets/assets';
import LoginForm from '../../Components/LoginForm/LoginForm.jsx';

const Navbar = () => {
    const [menu, setMenu] = useState("Posts");
    const [showLoginForm, setShowLoginForm] = useState(false);

    const onClickHandler = () => {
        setShowLoginForm(true);
    };

    return (
        <div className='navbar'>
            <div className="logocontainer">
                <img src={assets.logo} alt="" className="logo" />
            </div>
            <div className="search">
                <input type='text' placeholder='Search' className='search-text'></input>
                <img src={assets.search} alt='' className='search-symbol' />
            </div>

            <div onClick={() => setMenu("Posts")} className={menu === "Posts" ? "active" : ""}>Posts</div>
            <div onClick={() => setMenu("Discussion Forums")} className={menu === "Discussion Forums" ? "active" : ""}>Discussion Forums</div>
            <div onClick={() => setMenu("Chats")} className={menu === "Chats" ? "active" : ""}>Chats</div>
            <div onClick={() => setMenu("Account")} className={menu === "Account" ? "active" : ""}>Account</div>
            <img src={assets.account} alt='' className='account-symbol' onClick={onClickHandler} />

            {showLoginForm && <LoginForm className='open' />}
        </div>
    )
}

export default Navbar;
