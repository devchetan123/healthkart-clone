import React, { useEffect, useState } from 'react'
import { Reuse } from '../Reuse/Reuse'
import Styles from "./Wishlist.module.css"

export const Wishlist = () => {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        fetch("https://json-practice.herokuapp.com/watchlist")
        .then((r)=>r.json())
        .then((r)=>setProduct(r))
    },[])


  return (
    <div style={{display:"flex",gap:"5%"}}>
        <div>
            <Reuse/>
        </div>
        <div>
            {
                product?.map((item)=>{
                    return(
                        <div className={Styles.contentWishlist} key={item.id} >
                            <div>
                                <img height="90" src={item.image} alt="" />
                            </div>
                            <div>
                                <h5>{item.title}</h5>
                                <button> <img src="https://img2.hkrtcdn.com/react/static/media/common/empty-delete-icon.svg" alt="" /> Remove</button>
                                <button><img src="https://img2.hkrtcdn.com/react/static/media/common/cart-icon.svg" alt="" /> Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
