import { Button } from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from "../css/MobileViwe.module.css"
import { useUserAuth } from './Auth/context/UserAuthContext';
import LoginSIgnup from './Auth/LoginSIgnup'

export const MobileView = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div className={Styles.mobileView}>
        <div>
        {
              user?"":<LoginSIgnup/>
            }
        </div>
        <div className={Styles.head1}>
            <div><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/account.svg" alt="" />Account</div>
            <div><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/orders.svg" alt="" />Order</div>
            <div><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/wishlist.svg" alt="" />Wishlist</div>
            <div><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/loyalty.svg" alt="" />Loyality</div>
        </div>
        <div className={Styles.head2} >
            <div>
                <h4><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/shop-by.svg" alt="" /> Shop By</h4>
                <p>Deals</p>
                <p>Gift Card</p>
            </div>
            <div>
                <h4><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/hk-consult.svg" alt="" /> HK Consultant</h4>
                <p>Health Profile</p>
                <p>Book a Consultation</p>
                <p>Recomand a Product</p>
                <p>Servicce Product</p>
            </div>
            <div>
                <h4><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/location.svg" alt="" /> Store Locator</h4>
                <h4><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/mobile/blogs.svg" alt="" /> Blogs, Videos & More</h4>
            </div>
            <div>
                <p>Refer & Earn</p>
                <p>Return Policy</p>
                <p>Terms & Condition</p>
                <p>Contact Us</p>
            </div>
            {
              user?<Button style={{width:"200px",border:"1px solid grey",margin:"5px 15px",color:"black",fontSize:"10px"}} onClick={handleLogout} >Logout</Button>:""
            }
        </div>
    </div>
  )
}
