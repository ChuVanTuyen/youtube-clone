import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import Logo from './image/Logo.png';
import SearchBar from './SearchBar';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <div className='NavBar'>
            <div className='wrapper'>
                <div className='containers'>
                    <nav className="navbar navbar-light justify-content-between">
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <img className='logo' src={Logo} alt="logo youtube" />
                            <span className='logo-text'>YouTube</span>
                        </Link>
                        <SearchBar />
                        <div className='switch-bg-color'>
                            <span>Light
                                <span><BsFillSunFill /></span>
                            </span>
                            <label className="switch">
                                <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
                                <span className="slider round"></span>
                            </label>
                            <span>Dark
                                <span style={{ fontSize: '14px', color: 'white' }}>
                                    <BsMoonStarsFill />
                                </span>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar