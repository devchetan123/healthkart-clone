import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import Styles from "./Reuse.module.css"

export const Reuse = () => {
  const navigate = useNavigate()  
  const pa1=[
      {
        name:"My Order",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/order_new.svg",
        link:"/order"
      },
      {
        name:"Re Order",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/re_order.svg",
        link:"/"
      }
  ]
  const pa2=[
      {
        name:"Personal Info",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/per_info.svg",
        link:"/profile"
      },
      {
        name:"Profile",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/profile_new.svg",
        link:"/profile"
      },
      {
        name:"Change Password",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/chang_pass.svg",
        link:"/"
      },
      {
        name:"My Wishlist",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/my_wish.svg",
        link:"/wishlist"
      },
      {
        name:"Hk Cash",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/hk_cash.svg",
        link:"/"
      },
      {
        name:"Saved Cards",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/save_card.svg",
        link:"/"
      },
      {
        name:"Subscription",
        image:"https://img10.hkrtcdn.com/react/static/media/common/menu/subscription_new.svg",
        link:"/"
      },
      {
        name:"Refer & Earn",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/refer_earn.svg",
        link:"/"
      },
      {
        name:"Rewards",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/crown.svg",
        link:"/"
      },
      {
        name:"Change Email",
        image:"https://img2.hkrtcdn.com/react/static/media/common/menu/email.svg",
        link:"/"
      }
  ]

  const handleNav = (id)=>{
      navigate(`${id}`)
  }

  return (
    <div style={{padding:"1%",margin:"10%"}}>
        <div className={Styles.p1} >
            {
                pa1.map((p)=>{
                    return(
                        <div className={Styles.content1} >
                                <button onClick={()=>handleNav(p.link)} ><img src={p.image} alt="" />{p.name}</button>
                        </div>    
                    )
                })
            }
        </div>
        <div className={Styles.p2} >
            {
                pa2.map((p)=>{
                    return(
                        <div className={Styles.content2} >
                                <button  onClick={()=>handleNav(p.link)} ><img src={p.image} alt="" />{p.name}</button>
                        </div>    
                    )
                })
            }
        </div>
    </div>
  )
}
