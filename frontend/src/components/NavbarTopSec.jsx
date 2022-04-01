import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from "../css/navbartopsec.module.css"
import CustomerDrop from './CustomerDrop'
import AccountDrop from './Dropdowns/AccountDrop'

function NavbarTopSec() {

  
  const cart = useSelector((state) => state.cart.cart)
  const navigate = useNavigate();


  return (
    <div  className={style.navtopsection} >
        <img onClick={() => navigate("/")}  src="https://i.ibb.co/NWKgftw/Screenshot-13.png" alt="" height={"60px"} />
        <div className={style.searchDiv} >
            <img src="https://i.ibb.co/nMQ6VKT/icons8-search-30.png" alt="" height={"24px"} />
            <input type="text" placeholder='Search for products, brands or Health Goals'/>
        </div>
        <div className={style.rightNavdiv} >
            <p>Loyalty Rewards</p>
            <hr />
            <div>
                <CustomerDrop/>
                <img className={style.arrownav} src="https://i.ibb.co/D5gvVwF/icons8-expand-arrow-50-1.png" alt=""  height={"15px"}  />
            </div>
            <hr />
            <div >
                <img src="https://i.ibb.co/M2B90Lj/icons8-user-64.png" alt=""  height={"18px"}  />
                
                    <AccountDrop/>
                
                <img className={style.arrownav} src="https://i.ibb.co/D5gvVwF/icons8-expand-arrow-50-1.png" alt="" height={"15px"} />
            </div>
            <hr />
            <div>
            <div className={style.cartdiv} onClick={() => navigate("/cart")} >
                <img src="https://i.ibb.co/92FKTv3/icons8-cart-96.png" alt="" height={"35px"} />
                <h5>{cart.length}</h5>
            </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default NavbarTopSec