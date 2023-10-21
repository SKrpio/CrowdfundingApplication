import React from "react";
import CreateAccountForm from "../components/CreateAccountForm.jsx";
import "../pages/CSS/CreateAccount.css";
import logo from '../images/logo.png';


function CreateAccount() {
    return (
        <div>
            <img src={logo} className="logo" />
            <div className="create-admin-container"> 
                <CreateAccountForm />
            </div>
        </div>
    );
}

export default CreateAccount;


