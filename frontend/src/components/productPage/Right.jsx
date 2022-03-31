import React from 'react'
import styles from "../../css/productsPage/right.module.css";
import {Box} from "@mui/material";

import { FaRupeeSign,FaStar,FaStarHalfAlt} from 'react-icons/fa';
import { Sortcomponent } from './Sortcomponent';

export const Right = ({items,setItems}) => {
  return (
    <div>
        <div>
            <span >
            <img src = "https://img2.hkrtcdn.com/10922/bnr_1092171_o.jpg" alt = "Protein img" claaName={styles.proteinimg} />
            </span>
            <div className={styles.discountandheart}>
                <div><h2>Whey Protein </h2></div>
                <div   >
                <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/misc/authenticity.svg" alt = "auth img"/>
                <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/misc/delivery_icon.svg" alt = "auth img"/> 
                </div>
            </div>
            <div className={styles.toptext}>
                <p>
                For your bodybuilding goals, you can completely rely on the whey protein. Whey protein provides all the necessary protein and nutrients and helps in 
                improving great energy levels and allows you to achieve your bodybuilding goals safely and effectively. It also benefits the overall health of the body. At
                HealthKart, we have some of the trusted protein supplement brands such as DYMATIZE, MuscleBlaze, ON, MyProtein, Ultimate Nutrition, MuscleTech etc 
                at a very affordable price. So, what are you waiting for? Visit HealthKart and grab the best whey protein powder from the domestic and international 
                brands and enjoy some amazing offers, deals, and discounts.
                </p>
            </div>
            <hr/>
            <div className={styles.sorting}>
            <Sortcomponent items={items} setItems={setItems} />
            </div>
            <hr/>
            <div className={styles.productswrapper}>
            <Box  className = {styles.singleprodwrapper} sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 3,
                gridTemplateColumns: 'repeat(3, 1fr)',
              }}>
                  {items.map((item) => (
                        <div id = {item.id}>
                              <div className = {styles.card}>
                                  <div className={styles.discountandheart}>
                                      <span className={styles.discount}>
                                          {item.discount}%Off
                                      </span>
                                      {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp; &nbsp; &nbsp;   */}
                                      

                                      <div  className={styles.iconContainer}>
                                      {/* <FaRegHeart className={styles.heart}/> */}
                                      <img src= "	https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/whistlist.svg"alt="heart"/>
                                      <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/hover-heart.svg" 
                                      alt="heart"
                                       />                        
                                      </div>
                                     
                                  </div>
                                  <span className={styles.vegimgspan}>
                                      <img src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/Vegetarian.svg" 
                                         alt="veg"
                                         className={styles.vegimg}/>
                                      </span>
                                  
                                  <div>
                                      
                                 <img src={item.image} alt = "Product" className={styles.prodimg}/>
                                 </div>
                                 <p className={styles.title}>{item.title}</p>
                                {/* <span><Rating name="size-medium" defaultValue={4} className={styles.rating}/>
                                 {item.rating}</span> */}
                                <p className={styles.star}><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><span style={{color:"black"}}>{item.rating}</span></p>
                                 
                                 <div>
                                 <p><FaRupeeSign/><span className={styles.pricebold}>{item.price}</span>&nbsp;&nbsp;
                                 <span className={styles.pricelinethrough}><FaRupeeSign/>{`${item.price+2000}`}</span>
                                 <span>
                                     <button className={styles.quickbuy}>
                                         <img src="	https://static1.hkrtcdn.com/hknext/static/media/pdp/thunder-buy.svg" alt="flash"/>
                                         Quickbuy
                                     </button>
                                 </span>
                                 </p>
                                 <button className={styles.premiumprice}>
                                     <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/premium-logo-new.svg" alt="crown" className={styles.crownimg}/>
                                     Premium Member Price: <FaRupeeSign/>{item.price-400}
                                 </button>
                                
                                 </div>

                              </div>
                        </div>
                  ))}

            </Box>

            </div>
        </div>
    </div>
  )
}
