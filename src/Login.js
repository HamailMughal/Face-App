import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import Button from '@mui/material/Button';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";



function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
//SignIn
auth.signInWithPopup(provider).then((result) => {
    
    dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
    });

})
.catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo" />

            <img src='https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png'/>
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
           
        </div>
    )
}

export default Login
