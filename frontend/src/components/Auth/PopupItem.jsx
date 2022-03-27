import React from 'react'
import styles from "../../css/LoginSignup/Popup.module.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const PopupItem = () => {
  return (
    <div>
        <div className={styles.leftBar} >
            <div className={styles.login} >

            </div>
            <div className={styles.signin}>
                <h1>Why Sign Up?</h1>
                <p><CheckCircleOutlineIcon/> Over 1.5 millions satisfied customers</p>
                <p><CheckCircleOutlineIcon/> Earn HK cash on every order</p>
                <p><CheckCircleOutlineIcon/> Get Personal fitness expert advice</p>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}
