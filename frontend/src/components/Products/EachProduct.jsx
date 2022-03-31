import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import StarIcon from '@mui/icons-material/Star';
import Styles from "../../css/Products/EachProduct.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import CircleIcon from '@mui/icons-material/Circle';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DoneIcon from '@mui/icons-material/Done';
import { Reviews } from "./Reviews";
import NavbarTopSec from "../NavbarTopSec";
import { Navbar } from "../Navbar";

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

  const handleWatchList = (id,title,image)=>{
    const payload = {
      id,
      title,
      image
  }
  const con ={
      url: `https://json-practice.herokuapp.com/watchlist`,
      method:"post",
      data:payload
  }
  console.log(con)
  return axios(con)
  }

  return (
    <div>
      <NavbarTopSec />
      <Navbar/>
      <div className={Styles.container} >
      <div className={Styles.containerImage} >
        <img src={user.image} alt=""/>
        <div className={Styles.imgDisp} >
        <img src={user.image} alt="" />
        <img src={user.image} alt="" />
        <img src={user.image} alt="" />
        <img src={user.image} alt="" />
        </div>
      <button className={Styles.watchlist} onClick={()=>{
        handleWatchList(user.id,user.title,user.image)
      }}
      >
        <FavoriteBorderIcon className={Styles.watchlistLogo} />
        Add to wishlist
      </button>  
      </div>
      <div className={Styles.containerData}>
        <div>
            <h3 className={Styles.byProduct}>{user.title}</h3>
            <p className={Styles.byProduct}>By <span>HealthKart</span></p>
            <h5 className={Styles.rate}>{user.rating} <span><StarIcon style={{fontSize:"15px",color:"rgb(196, 196, 96)"}} /></span> </h5>
            <button className={Styles.offer} >{`${user.discount}% OFF`}</button>
            <div className={Styles.price} >
                <h2>{`₹${user.price}`}</h2>
                <p>₹{Math.floor(user.price+(user.price*(user.discount/100)))}</p>
                <p>+ <span><CircleIcon style={{fontSize:"15px",color:"rgb(196, 196, 96)",marginTop:"10px",marginLeft:"2px",marginRight:"2px"}} /></span>Get HK Cash +₹175</p>
            </div>
            <div className={Styles.offers} >
              <p>3 interent free payments of ₹175</p>
              <ErrorOutlineIcon className={Styles.eme} />
            </div>
            <div className={Styles.offers}>
              <p >+ Get 10% cashback up to ₹500</p>
              <ErrorOutlineIcon className={Styles.eme}/>
            </div>
            <div className={Styles.buy}>
              <div className={Styles.counter} >
                <button onClick={()=>setCount(count-1)} >-</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count+1)} >+</button>  
              </div>  
              <button className={Styles.cartAdd} ><ShoppingCartIcon className={Styles.cont} /> ADD TO CART</button>
              <button className={Styles.directBuy}><BoltIcon className={Styles.cont1} /> QUICK BUY</button>
            </div>  
            <div className={Styles.weight} >
              <p>WEIGHT</p>
              {
                ["1.1","11","2.2"].map((r)=>{
                  return(
                    <button className={Styles.weightButton} >{`${r} lb`}</button>
                  )
                })
              }
            </div>
        </div>

        <div className={Styles.delivery} >
              <p>Delivery Option</p>
              <div className={Styles.input} >
                   <input type="text" placeholder="Enter Pincode" />
                   <button>Check</button>
              </div>
              <p><GpsFixedIcon style={{fontSize:"13px"}} /> USE MY LOCATION</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> Free Shiping</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> Cash on Delivery Available</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> 14 days Return</p>
        </div>      
        <div className={Styles.sponsor}>
              <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fssai.png" alt="" />
              <p>10015064000576</p>
        </div>
      </div>
      
    </div>
    {/* content ends */}
      <Reviews/>
    </div>
  );
}