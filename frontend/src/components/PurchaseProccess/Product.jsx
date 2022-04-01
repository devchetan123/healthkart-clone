import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_qty, remove_cart, remove_qty } from '../../redux/Cart/cart.actions';
import style from "../../css/product.module.css"
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from "react-icons/ai"
import axios from "axios"

function Product({ product }) {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [hkcash, sethkcash] = useState(0)
    const navigate = useNavigate()

    const calculateDiscount = (price) => {
      let percent = price  * (25/100)
      let totalamt = percent + price
      let partPercent = (percent / totalamt) * 100
      let hkcash = Math.floor(price * (2/100))
      setTotalPrice(totalamt)
      setDiscount(partPercent)
      sethkcash(hkcash)
    }

    useEffect(()=>{
      calculateDiscount(product.price)
    },[product.price])

    const handleWatchList = (x)=>{
      const payload = {
        title : x.title,
        img_url : x.img_url,
        originalPrice : x.originalPrice,
        rating : x.rating,
        discountedPrice : x.discountedPrice
    }
    const con ={
        url: `https://json-practice.herokuapp.com/watchlist`,
        method:"post",
        data:payload
    }
    return axios(con)
    }
    
  return (
    <div className={style.mainProductDiv} >
      <div className={style.mainDiv} >
        <div>
            <img className={style.productImg} src={product.img} alt="" height={"100px"}  />
            <div className={style.deliveryDate} >
              <p>Delivery by</p>
              <p>5 Apr</p>
            </div>
        </div>

        <div className={style.middlesection} >
          <h5 onClick={() => navigate(`/products/${product.id}`)} className={style.phead} >{product.title}</h5>
          <div className={style.priceLine} >
            <img src="https://i.ibb.co/1mzp32d/premium-logo-new.png" height={"22px"} alt="" />
            <h5 className={style.price} >₹{product.price}</h5>
            <h3 className={style.totalP} >₹{totalPrice}</h3>
            <h3 className={style.discount} >{discount}% Off</h3>
            <div className={style.hkcashline} >
              <img src="https://i.ibb.co/w0bmRn3/hkcash.png" alt="" height={"12px"} />
              <div className={style.internalhk} >
                <h3 className={style.hktitle}>HK Cash</h3>
                <h3 className={style.hkcash} >₹{hkcash}</h3>
              </div>
            </div>
          </div>

          <div className={style.addminusbtns} >
            <button className={style.addbtn} onClick={() => product.qty > 1 && dispatch(remove_qty(product.id))} ><AiOutlineMinus/></button>
            <input className={style.qtyinput} type="text" value={product.qty}/>
            <button  className={style.minusbtn}  onClick={() => dispatch(add_qty(product.id))}><FiPlus/></button>
          </div>
        </div>

        <div className={style.delwishbtns} >
          <button><img src="https://i.ibb.co/1675Lqn/icons8-heart-24-3.png " height={"20.2px"} /></button>
          <button onClick={() => dispatch(remove_cart(product.id))} ><img src="https://i.ibb.co/PMXXZZz/icons8-delete-24.png" height={"19px"} /></button>
        </div>      
      </div>
      <div className={style.delandwishbtnsmaller} >
        <button onClick={() => dispatch(remove_cart(product.id))} > <img src="https://i.ibb.co/PMXXZZz/icons8-delete-24.png" height={"20.2px"} /> Remove</button>
        <button onClick={() => handleWatchList(product)} ><img src="https://i.ibb.co/1675Lqn/icons8-heart-24-3.png " height={"19px"} /> Move to Wishlist</button>
      </div>
      
    </div>
  )
  // https://i.ibb.co/NWWXC6p/icons8-plus-48-1.png
// https://i.ibb.co/bNxLvfZ/icons8-minus-48.png
}

export default Product