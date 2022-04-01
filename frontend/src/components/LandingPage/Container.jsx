import React, { useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./LandingPage.module.css"
import DoneIcon from '@mui/icons-material/Done';
import { add_cart } from '../../redux/Cart/cart.actions';
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom"

export const Container = ({item}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const addCartFunc = (x) => {
      const obj = {
        id : x._id,
        title : x.title,
        price : x.originalPrice,
        img : x.img_url,
        qty : 1,
        initPrice : x.originalPrice
      }
 
      dispatch(add_cart(obj))
    }

  return (
    <div>
        <div key={item._id} >
            <div className={styles.container} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                {open?(<div className={styles.benefitsWrapper}>
                    <h5>Benefits</h5>
                    <div className={styles.benefitsTitles}>
                        {item.Benefits.map((benefit)=><div className={styles.benefitsList}><DoneIcon sx={{color: "#00AFAE", fontSize: "12px"}}/> <p>{benefit}</p></div>)}
                    </div>
                    <div className={styles.ingredientsWrapper}>
                        <p>{item.productDetails}</p>
                        <div className={styles.ingredients}>
                            {item.containsWeight.map((val)=><h6>{val}</h6>)}
                        </div>
                        <div className={styles.ingredients}>
                            {item.containsCal.map((val)=><h5>{val}</h5>)}
                        </div>
                    </div>
                </div>):(<div className={styles.imageWrapper}>
                        <div className={styles.wishlistIcon}><img src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart_plus.svg" alt="wishlist-icon" /></div>
                        <img src={item.img_url} className={styles.itemImage} alt="Item-Images"></img>
                        <div><button className={styles.discountBtn}>{item.discount} off</button></div>
                    </div>)} 
                    
                    <div className={styles.detailsWrapper}>
                        <h5 onClick={() => navigate(`/products/${item._id}`)} className={styles.title}>{item.title}</h5>
                        <div className={styles.ratingstardiv} >
                          <Rating style={{color : "rgb(0,132,151)"}} readOnly name="size-small" defaultValue={item.rating} size="small" />
                          <h6 className={styles.rating}>{item.rating}</h6>
                        </div>
                        <div className={styles.priceAndAdd}>
                            <div className={styles.price}>
                                <h5 className={styles.discountPrice}><CurrencyRupeeIcon sx={{color: "black", fontSize: "12px"}}/>{item.discountedPrice}</h5>
                                <h5 className={styles.originalPrice}><CurrencyRupeeIcon sx={{color: "#929495", fontSize: "10px"}}/>{item.originalPrice}</h5>
                            </div>
                            <div>
                                <button onClick={() => addCartFunc(item)} className={styles.addBtn}><div style={{display: "flex", width: "35px", margin: "auto"}}><AddShoppingCartIcon sx={{color: "#004b5d", fontSize: "12px"
                            }}/><p style={{margin: "2px" }}>ADD</p></div></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.premiumPriceBox}>
                    <h5 style={{margin: "0px"}}>Premium Price: <CurrencyRupeeIcon sx={{color: "black", fontSize: "14px"}}/>{item.premiumPrice}</h5>
                    <LockOutlinedIcon sx={{fontSize: "12px"}}/>
                </div>
                </div>           
        </div>
    )
}
