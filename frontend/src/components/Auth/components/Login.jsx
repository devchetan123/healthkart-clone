import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";
import { Button } from '@mui/material';
import { PhoneSignUp } from './PhoneSignUp';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
     const { logIn, googleSignIn } = useUserAuth();
     const navigate = useNavigate()
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/content");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div>

        <PhoneSignUp/>
    </div>
  )
}
