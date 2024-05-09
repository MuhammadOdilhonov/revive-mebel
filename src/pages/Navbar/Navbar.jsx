import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <div style={{ position: 'fixed', top: '0px', zIndex: '5' }} className='navbar'>
            <div className="navbar-left-section">
                <img src="./images/logo.png" alt="Logo" className='navbar-left-section-img' />
            </div>
            <div className="navbar-right-section">
                <ul className='navbar-right-section-ul'>
                    <a href="#carouselExampleDark"><li>Bosh sahifa |</li></a>
                    <a href="#Cards"><li>Xususiy Texnika va Uskunalar |</li></a>
                    <a href="#Portfolio"><li>Portfoliya (Loyiha) |</li></a>
                    <a href="#Footer"><li>Biz bilan Bog'lanish |</li></a>
                </ul>
            </div>

            <div className='navbar_hamburger' onClick={toggleMenu}>
                <BsList />
            </div>
            <div onClick={toggleMenu} className={openMenu ? "navbar_menu" : "navbar_menunone"}>
                <ul className='navbar-menu-ul'>
                    <a style={{ textDecoration: "none", color: "white" }} href="#carouselExampleDark"><li>Bosh sahifa</li></a>
                    <a style={{ textDecoration: "none", color: "white" }} href="#Cards"><li>Xususiy Texnika va Uskunalar</li></a>
                    <a style={{ textDecoration: "none", color: "white" }} href="#Portfolio"><li>Portfoliya (Loyiha)</li></a>
                    <a style={{ textDecoration: "none", color: "white" }} href="#Footer"><li>Biz bilan Bog'lanish</li></a>
                </ul>
            </div>
        </div>
    );
}
