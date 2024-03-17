import React from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logocontainer">
                <img src={assets.logo} alt="" className="logo" />
            </div>
            <div className="search">
                <input type='text' placeholder='Search' className='search-text'></input>
                <img src={assets.search} alt='' className='search-symbol' />
            </div>
            <div>Posts</div>
            <div>Discussion Forums</div>
            <div>Chats</div>
        </div>
    )
}

export default Navbar
