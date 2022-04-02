import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";
import { Button } from '@mui/material';
import { PhoneSignUp } from './PhoneSignUp';
import { useNavigate } from 'react-router-dom';

export const GoogleAuthLogin = () => {
    const { logIn, googleSignIn } = useUserAuth();
     const navigate = useNavigate()
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div>
        <div>
          <button
            style={{margin:"10px 20px 10px 80px"}}
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          >
            <div style={{display:"flex",gap:"10px",margin:"5px"}}>
            <img  src="https://static1.hkrtcdn.com/hknext/static/media/common/Logo%20Google.svg" alt="" /> <span> Google</span>
            </div>
          </button>
        </div>
    </div>
  )
}
