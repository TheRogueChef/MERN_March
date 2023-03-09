import React, { useState } from  'react';
import './App.css';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        const newUser = { firstName, fnameError, lastName, lnameError, email, emailError, password, passwordError, verifyPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setFnameError("");
        setLastName("");
        setLnameError("");
        setEmail("");
        setEmailError("");
        setPassword("");
        setPasswordError("");
        setVerifyPassword("");
        setHasBeenSubmitted( false );
    };
    
    const handleFName = (e) => {
            setFirstName(e.target.value);
        if(e.target.value.length < 3)  {
            setFnameError("First name must contain at least 3 characters.");
        } else {
            setFnameError("");
        }
    }

    const handleLName = (e) => {
            setLastName(e.target.value);
        if(e.target.value.length < 3)  {
            setFnameError("Last name must contain at least 3 characters.");
        } else {
            setFnameError("");
        }
    }

    const handleEmail = (e) => {
            setEmail(e.target.value);
        if(e.target.value.length < 5)  {
            setEmailError("Email must contain at least 5 characters.");
        } else {
            setEmailError("");
        }   
    }
    const handlePassword = (e) => {
            setPassword(e.target.value);
        if(e.target.value.length < 8)  {
            setPasswordError("Password must contain at least 8 characters.");
        } else {
            setPasswordError("");
        }
    }

    return(
        <form onSubmit={ createUser }> {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ handleFName } />
                {
                    fnameError ?
                    <p>{fnameError}</p>:
                    "" 
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handleLName } />
                {
                    lnameError ?
                    <p>{lnameError}</p>:
                    "" 
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{emailError}</p>:
                    "" 
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    "" 
                }
            </div>
            <div>
                <label>Verify Password: </label>
                <input type="password" value={verifyPassword} onChange={ (e) => setVerifyPassword(e.target.value) } />
            </div>
            {
                Error ?
            <input type="submit" value="Create User" disabled />:
            <input type="submit" value="Create User" />
            }
            <h1>Your Form Data</h1>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p> Confirm Password: { verifyPassword }</p>
        </form>
    ); 
};
export default UserForm;