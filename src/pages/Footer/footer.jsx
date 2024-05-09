import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <div id='Footer' className='Footer'>
            <div className="Footer-left">
                <div className="Footer-left-top-section">
                    <img className='Footer-left-top-section-logo' src="./images/logo2.png" alt="logo" />
                    <div className="Footer-left-top-section-right">
                        <img style={{ width: "40%" }} src="./images/instagram.png" alt="Revive-insta" />
                        <img style={{ width: "40%" }} src="./images/telegram.png" alt="Revive-teleshka" />

                    </div>
                </div>

                <div className="Footer-left-bottom-section">
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore </li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>


            <div className="Footer-right">
                <div className="Footer-right-contact">
                    <div className="Footer-right-contact-phone">
                        <BsTelephone className='Footer-right-contact-icon' />
                        <p>+998-33-235-35-23</p>
                    </div>
                    <div className="Footer-right-contact-email">
                        <MdOutlineMailOutline className='Footer-right-contact-icon' />
                        <p>ReviveMebel@gmail.com</p>
                    </div>
                </div>
                <ul className='Footer-right-ul'>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>ул. Балыкчи 18, Tashkent, Toshkent Shahri, Узбекистан</li>
                </ul>

                <iframe className='Footer-right-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5993.508589434012!2d69.20278186158514!3d41.31420851084524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9d6af7e961%3A0xd4d4bacf786a27d!2sIslom%20shashlik!5e0!3m2!1sru!2s!4v1715087551941!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
