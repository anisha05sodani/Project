import React from 'react'
import './Home.css'
import Leftbar from '../../Components/Leftbar/Leftbar.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Feed from '../../Components/Feed/Feed.jsx'
import Rightbar from '../../Components/Rightbar/Rightbar.jsx'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home;
