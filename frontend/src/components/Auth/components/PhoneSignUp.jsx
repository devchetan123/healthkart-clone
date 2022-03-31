import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { GoogleAuthLogin } from './GoogleAuthLogin'
import Styles from "../../../css/LoginSignup/PhoneSignup.module.css"
import { TextField } from '@mui/material'

export const PhoneSignUp = () => {
    const [number,setNumber] = useState("")
    const [otp,setOtp] = useState("")
    const [error, setError] = useState("");
    const [flag,setFlag] = useState(false)
    const [confirmObj,setConfirmObj] = useState("")
    const {setUpRecaptcha} = useUserAuth();
    const navigate = useNavigate()

    const getOtp = async (e)=>{
        e.preventDefault()
        setError("")
        if(number === " " || number === undefined) return setError("Please enter a valid phone number")
        try{
            const response = await setUpRecaptcha(number)
            console.log(response);
            setConfirmObj(response)
            setFlag(true)
        }catch(err){
            setError(err.message)
        }
        console.log(number);
    }

    const verifyOtp = async(e)=>{
        e.preventDefault()
        console.log(otp);
        if(otp === "" || otp === null) return;
        try{
            setError("")
            await confirmObj.confirm(otp)
            navigate("/content")
        }catch(err){
            setError(err.message)
        }


    }

  return (
    <div>
      <div >
        {error && <p>{error}</p>}
        <form onSubmit={getOtp} style={{display:!flag?"block":"none"}} >
          <div  controlId="formBasicPhoneNumber">
            <PhoneInput
            style={{height:"50px"}}
            className={Styles.phoneInput}
            defaultCountry='IN'
            value={number}
            onChange={setNumber}
            placeholder="Phone Number"
            />
            
            <div id="recaptcha-container"/>
          </div>
           <div>
                <button className={Styles.button}  type="submit" >sendOtp</button>
           </div>
           <div className={Styles.gouth}>
             
           </div>
          </form>

          <form onSubmit={verifyOtp} style={{display:flag?"block":"none"}} >
          <div  controlId="formBasicotp">
           <input
               type="text"
               placeholder="Otp"
               onChange={(e)=>setOtp(e.target.value)}
           />
          </div>
           <div  >
                <Link to="/home" ><button >Cancel</button></Link>
                <button  type="submit" >VerifyOtp</button>
           </div>
          </form>
          </div>
          <div className={Styles.gouth}>
             <GoogleAuthLogin  />
           </div>
    </div>
  )
}
