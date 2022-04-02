import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_cart } from '../redux/Cart/cart.actions';
import { useNavigate } from 'react-router';

function Home() {
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart)

  const [pro, setPro] = useState([
    {
        id : 1,
        title : "HealthKart HK Vitals Skin Radiance Collagen,  200 g  Orange",
        price : 1648,
        img : "https://img3.hkrtcdn.com/16796/prd_1679532-HealthKart-HK-Vitals-Skin-Radiance-Collagen-200-g-Orange_c_t.jpg",
        qty : 1,
        initPrice : 1648
    },
    {
     id : 2,
       title : "MuscleBlaze Gold Gainer XXL,  6 lb  Chocolate Bliss",
       price : 3394,
       img : "https://img10.hkrtcdn.com/9679/prd_967839_c_t.jpg",
       qty : 1,
       initPrice : 3394
    },
    {
     id : 3,
       title : "Ultimate Nutrition ISO Sensation 93,  5 lb  Chocolate Fudge",
       price : 7124,
       img : "https://img6.hkrtcdn.com/1130/prd_112915_c_t.jpg",
       qty : 1,
       initPrice : 7124
    },
    {
     id : 4,
       title : "TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA,  60 capsules",
       price : 678,
       img : "https://img5.hkrtcdn.com/16537/prd_1653634_c_t.jpg",
       qty : 1,
       initPrice : 678
    }
   ])

   const dispatch = useDispatch();

   const addCartFunc = (x) => {
     const obj = {
       id : x.id,
       title : x.title,
       price : x.price,
       img : x.img,
       qty : x.qty,
       initPrice : x.price
     }

     dispatch(add_cart(obj))
   }

  return (
    <div>
      {
        pro.map(x => {
          return <div key={x.id} >
            <img src={x.img} alt="" />
            <h5>{x.title}</h5>
            <h4>{x.price}</h4>
            <button onClick={() => addCartFunc(x)} >ADD Cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Home