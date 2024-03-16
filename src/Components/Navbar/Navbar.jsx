import React from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <input type='text' placeholder='Search' className='search'></input>
            <p>Posts</p>
            <div>Chats</div>
        </div>
    )
}

export default Navbar
