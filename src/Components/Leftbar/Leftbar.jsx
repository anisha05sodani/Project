import React from 'react'
import './Leftbar.css'
import { MdOutlineAdd } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import { useState } from 'react';


const Leftbar = () => {

    const [ShowHome, setShowHome] = useState(false);

    const onClickHandler = () => {
        setShowHome(true);
    }

    return (
        <div className="leftbar">
            {/* <div className="home">
                <FaHome className='home-icon' />
                <a onClick={onClickHandler}>Home{ShowHome && <Home />}</a>
            </div>
            <div className="community">
                <p>COMMUNITIES</p>
                <MdOutlineAdd className='add-icon' />
                Create your Community
            </div> */}
            left
        </div>
    )
}

export default Leftbar
