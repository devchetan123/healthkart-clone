/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import styles from "./LandingPage.module.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const TrendingInPremiumSupplements = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/landingPageArray")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.trendingInPremiumSupplements);
            setData(res.trendingInPremiumSupplements)
        })
        .catch((err)=>console.log(err))
    }, [])
  return (
    <div className={styles.tagBox}>
        <div className={styles.tag}>
            <div className={styles.tagName}>
                <h3 style={{margin: "0px"}}>Trending In Premium Supplements</h3>
            </div>
            <div>
                <button className={styles.viewAllBtn}>View All</button>
            </div>
        </div>
        <Carousel
            // additionalTransfrom={0}
            arrows
            autoPlay={false}
            autoPlaySpeed={20000}
            centerMode={false}
            containerClass="container"
            customLeftArrow={<ArrowCircleLeftIcon sx={{color: "#00AFAE", backgroundColor: "transparent", width: "35px", height:"35px",cursor: "pointer", position: "absolute", left: "0px"}}/>}
            customRightArrow={<ArrowCircleRightIcon sx={{color: "#00AFAE", backgroundColor: "transparent", width: "35px", height:"35px",cursor: "pointer", position: "absolute", right: "0px"}}/>}
            dotListClass=""
            draggable
            focusOnSelect={true}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
            desktop: {
                breakpoint: {
                max: 3000,
                min: 750
                },
                items: 4,
                partialVisibilityGutter: 40
            },
            mobile: {
                breakpoint: {
                max: 460,
                min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
            },
            tablet: {
                breakpoint: {
                max: 750,
                min: 460
                },
                items: 3,
                partialVisibilityGutter: 30
            }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={4}
            swipeable
            className={styles.carouselBox}
            >
            {data.map((item) => (
                <div key={item.id} >
                    <div className={styles.container}>
                        <img src={item.img_url} className={styles.itemImage}></img>
                        <div><button className={styles.discountBtn}>{item.discount} off</button></div>
                        <h5 className={styles.title}>{item.title}</h5>
                        <h6 className={styles.rating}>{item.rating}</h6>
                        <div className={styles.priceAndAdd}>
                            <div className={styles.price}>
                                <h5 className={styles.discountPrice}><CurrencyRupeeIcon sx={{color: "black", fontSize: "12px"}}/>{item.discountedPrice}</h5>
                                <h5 className={styles.originalPrice}><CurrencyRupeeIcon sx={{color: "#929495", fontSize: "10px"}}/>{item.originalPrice}</h5>
                            </div>
                            <div>
                                <button className={styles.addBtn}><div style={{display: "flex", width: "35px", margin: "auto"}}><AddShoppingCartIcon sx={{color: "#004b5d", fontSize: "12px"
                            }}/><p style={{margin: "2px"}}>ADD</p></div></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.premiumPriceBox}>
                        <h5 style={{margin: "0px"}}>Premium Price: <CurrencyRupeeIcon sx={{color: "black", fontSize: "14px"}}/>{item.premiumPrice}</h5>
                        <LockOutlinedIcon sx={{fontSize: "12px"}}/>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
  )
}
