import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';
import Styles from "../../css/Products/EachProduct.module.css"

export default function EachProduct() {
  const [user, setUser] = useState({});
  const [count,setCount] = useState(0)
  const pharms = useParams();
  useEffect(() => {
    if (pharms.id) {
      fetch(
        `https://json-practice.herokuapp.com/product/${pharms.id}`
      )
        .then((r) => r.json())
        .then((data) => setUser(data));
    }
  }, [pharms]);
  return (
    <div className={Styles.container} >
      <div className={Styles.containerImage} >
        <img src={user.image} alt="" />
      </div>
      <div className={Styles.containerData}>
        <div>
            <h3 className={Styles.byProduct}>{user.title}</h3>
            <p className={Styles.byProduct}>By <span>MuscleBlaze</span></p>
            <h5 className={Styles.rate}>{user.rating} <span><StarIcon className={Styles.star} /></span> </h5>
            <button className={Styles.offer} >{`${user.discount}% OFF`}</button>
            <div className={Styles.price} >
                <h2>{`₹${user.price}`}</h2>
                <p>₹{user.price+(user.price*(user.discount/100))}</p>
                <p>Get HK Cash</p>
            </div>
            <div>
              <p>3 interent free payments of ₹175</p>
              <ErrorOutlineIcon/>
            </div>
            <div>
              <p>+ Get 10% cashback up to ₹500</p>
              <ErrorOutlineIcon/>
            </div>
            <div>
              <div>
                <button onClick={()=>setCount(count-1)} >-</button>
                {count}
                <button onClick={()=>setCount(count+1)} >+</button>  
              </div>  
              <button><ShoppingCartIcon/> ADD TO CART</button>
              <button><BoltIcon/> QUICK BUY</button>
            </div>  
            <div>
              <h5>WEIGHT</h5>
              {
                ["1.1","11","2.2"].map((r)=>{
                  return(
                    <button>{`${r} lb`}</button>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  );
}