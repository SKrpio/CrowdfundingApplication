import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CreateAccountForm() {
    // use state hooks to store the input values
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // use history hook to navigate to /adminhome after creating account
    const history = useHistory();

    // handle the change of each input field
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // handle the submit of the form
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default behavior of form submit
        // create a new admin user object with the input values
        const newUser = {
            name: name,
            username: username,
            password: password,
            email: email,
        };
        // send a post request to the server with the new user object
        fetch('/api/create-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                // if the server returns a success message, redirect to /adminhome
                if (data.message === 'success') {
                    history.push('/adminhome');
                } else {
                    // otherwise, display an error message
                    alert(data.message);
                }
            })
            .catch((error) => {
                // handle any network error
                console.error(error);
                alert('Something went wrong. Please try again later.');
            });
    };

    return (
        <div id="create-account-form">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccountForm;
