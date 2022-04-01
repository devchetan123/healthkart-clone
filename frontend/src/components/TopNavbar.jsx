import React from 'react'
import styles from "../css/topnav.module.css"
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';

import { GrCart } from "react-icons/gr";

export const TopNavbar = () => {
    let navigate = useNavigate();
  return (
    <div>
        <div className={styles.navwrapper}>
            <ul className={styles.listnav}>
                <li className = {styles.logo}>
                    <div onClick={() => navigate('/')}>
                    <img src = "data:image/png;base64,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" className={styles.logoimg}alt="logo"/>
                    </div>
                </li>
                <li className={styles.search}>
                    <div >
                        <input type = "text" placeholder =" Search for Products, brands or health goals" className={styles.inputsearch}/>
                    </div>
                    
                </li>
                <li>
                    <div>
                        <p>Loyality Rewards</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Customer Support</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>My account and orders</p>
                    </div>
                </li>
                <li>
                    <div>
                    <Badge color="secondary" 
            sx={{
              "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#00c2c1",
                marginTop:1,
                width:2,
                height:15,
               
              }
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}

            badgeContent={0} showZero>
          <GrCart/>
        </Badge>
                    </div>
                </li>
            </ul>
        </div>


    </div>
  )
}
