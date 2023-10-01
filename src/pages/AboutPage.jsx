import React from 'react';
import logo from '../images/logo.png';
import '../pages/CSS/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <img src={logo} alt="Company Logo" />
            <h1>About Us</h1>
            <p>HELPING HAND ALLOWS THOSE EXPERIENCING HOMELESSNESS TO RECEIVE FINANCIAL SUPPORT RELEVANT TO THEIR NEEDS. HELPING HAND PROVIDES A SAFE AND SECURE PLATFORM TO THOSE WHO NEED IT MOST WHILST ENSURING 100% OF THE FUNDS GET TO THE RIGHT PLACE.</p>
            <p>HELPERS CAN MAKE ONE-TIME OR RECURRING PAYMENTS, BASED OFF THE NEEDS OUTLINED ON PLEDGEE'S PROFILES. THESE CONTRIBUTIONS ARE TYPICALLY SMALL, AFFORDABLE AMOUNTS, MAKING IT EASY FOR ANYONE TO BECOME A HELPER.</p>
        </div>
    );
}

export default AboutPage;

