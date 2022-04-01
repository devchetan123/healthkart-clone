/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import styles from "./LandingPage.module.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const PopularsContainer = ({items, tag}) => {
    const [val, setVal] = useState([]);
    // useEffect(()=>{
    //     setVal(items)
    //     console.log({items})
    // })
    useEffect(()=>{
        fetch("https://healthkartdatabase.herokuapp.com/products/popularsportsnut")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setVal(res)
        })
        .catch((err)=>console.log(err))
    }, [])  
  return (
    <div className={styles.tagBoxOfPopularItems}>
        <div className={styles.tag}>
            <div className={styles.tagName}>
                <h3 style={{margin: "0px"}}>{tag}</h3>
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
                items: 5,
                partialVisibilityGutter: 40
            },
            mobile: {
                breakpoint: {
                max: 460,
                min: 0
                },
                items: 2,
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
            className={styles.carouselBoxOfPopularItems}
            >
            {val.map((item) => (
                <div key={item.id} className={styles.imageBox}>
                    <div className={styles.itemsList}>
                        <img src={item.img_url} alt="titles" className={styles.imageSize}/>
                        <p className={styles.imageName}>{item.title}</p>
                    </div>
                    <div className={styles.borderLine}>
                        <br/>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
  )
}
