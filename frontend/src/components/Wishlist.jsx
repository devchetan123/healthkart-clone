import React, { useEffect, useState } from 'react'
import NavbarTopSec from "../components/NavbarTopSec"
import {Navbar} from "../components/Navbar"
import style from "../css/wishlist.module.css"
import Wishlistitem from "../components/Wishlistitem"
import { useNavigate } from 'react-router-dom'
import { Footer } from "../components/Footer/Footer"

function Wishlist() {

    const navigate = useNavigate()

    const [data, setData] = useState([])

    const dele = (id) => {
        fetch(`https://json-practice.herokuapp.com/watchlist/${id}` , {
            method : "DELETE"
        })
    }

    useEffect(() => {
        fetch("https://json-practice.herokuapp.com/watchlist")
        .then(res => res.json())
        .then(res => setData(res))
    }, [dele])


  return (
    <>
    <NavbarTopSec/>
    <Navbar/>
    <div className={style.mainWishPage} >
        <div className={style.toporderforsmaller} >
            <div className={style.orderbox} >
                <p>Orders</p>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/order_new.svg" alt="" height={"20px"} />
                    <p>My Orders</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/re_order.svg" alt=""  height={"20px"}  />
                    <p>Re-Orders</p>
                </div>
            </div>

            <div className={style.orderbox} >
                <p>Profile</p>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/per_info.svg" alt="" height={"20px"} width={"20px"}  />
                    <p>Personal Information</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/profile_new.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Profile</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/chang_pass.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Change Password</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/address_new.svg" alt=""  height={"20px"} width={"20px"}    />
                    <p>Addresses</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/my_wish.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>My Wishlist</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/hk_cash.svg" alt=""  height={"20px"} width={"20px"}    />
                    <p>HK Cash</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/save_card.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Saved Cards</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img10.hkrtcdn.com/react/static/media/common/menu/subscription_new.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Subscription</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/refer_earn.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Refer & Earn</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/crown.svg" alt=""  height={"20px"} width={"20px"}   />
                    <p>Rewards</p>
                </div>
                <div className={style.menulineinorder} >
                    <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/email.svg" alt=""  height={"20px"} width={"20px"}  />
                    <p>Change Email</p>
                </div>
            </div>
            <img className={style.leftimgbanner} src="https://img10.hkrtcdn.com/react/static/media/common/misc/bannerAppDownloadNew2.webp" alt="" />
            
        </div>


        <div className={style.mainproductwhole} >

            <div className={style.mylist} >
               <p>My Wishlist ({data.length})</p> 
               <p onClick={() => navigate("/")} >CONTINUE SHOPPING</p>
            </div>

            <div>
                {
                    data.map(x => {
                        return <Wishlistitem x={x} dele={dele} />
                    })
                }
            </div>
        </div>

        </div>
        <Footer/>
    </>
  )
}

export default Wishlist