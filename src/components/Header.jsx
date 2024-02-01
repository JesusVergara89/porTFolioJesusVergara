import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [locationHome, setLocationHome] = useState(true);
    const [locationAbout, setLocationAbout] = useState(false);
    const [locationContact, setLocationContact] = useState(false);
    
    const currentUrl = window.location.href

    const About = currentUrl.toString().includes('About')
    const Contact = currentUrl.toString().includes('Contact')

    useEffect(() => {
        if (About) {
            setLocationHome(false);
            setLocationAbout(true);
            setLocationContact(false);
        }
        if (Contact) {
            setLocationHome(false);
            setLocationAbout(false);
            setLocationContact(true);
        }
    }, [locationHome, locationAbout, locationContact])



    const functionSelectHome = () => {
        setLocationHome(true);
        setLocationAbout(false);
        setLocationContact(false);
    };

    const functionSelectAbout = () => {
        setLocationHome(false);
        setLocationAbout(true);
        setLocationContact(false);
    };

    const functionSelectContact = () => {
        setLocationHome(false);
        setLocationAbout(false);
        setLocationContact(true);
    };

    return (
        <header className="header">
            <div className="header_logo">
                <div className="header_logo_name">
                    <div className="header_logo_name_square"></div>
                    <div className="header_logo_name_triangle"></div>
                    <div className="header_logo_name_circle"></div>
                </div>
            </div>
            <nav className="header_nav">
                <button className={locationHome ? 'link-header' : ''} onClick={functionSelectHome}>
                    <Link to='/'>HOME</Link>
                </button>
                <button className={locationAbout ? 'link-header' : ''} onClick={functionSelectAbout}>
                    <Link to='About'>ABOUT</Link>
                </button>
                <button className={locationContact ? 'link-header' : ''} onClick={functionSelectContact}>
                    <Link to='Contact'>CONTACT</Link>
                </button>
            </nav>
        </header>
    );
};

export default Header;
