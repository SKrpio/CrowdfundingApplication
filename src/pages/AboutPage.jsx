import React from 'react';
import logo from '../images/logo.png';
import '../pages/CSS/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <img src={logo} alt="Company Logo" />
            <h1>About Us</h1>
            <p>Helping Hand allows those experiencing homelessness to receive financial support relevant to their needs. Helping Hand provides a safe and secure platform to those who need it most whilst ensuring 100% of the funds get to the right place.</p>
            <p>Helpers can make one-time or recurring payments, based off the needs outlined on pledgee's profiles. These contributions are typically small, affordable amounts, making it easy for anyone to become a Helper.</p>
        </div>
    );
}

export default AboutPage;

