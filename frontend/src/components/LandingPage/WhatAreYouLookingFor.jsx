import React, { useEffect, useState } from 'react'
import styles from "./LandingPage.module.css";

export const WhatAreYouLookingFor = () => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch("https://healthkartdatabase.herokuapp.com/products/whatarelooking")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setImages(res);
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <h3 style={{maxWidth: "85%", margin: "auto", paddingBottom: "10px"}}>Hi, What are you looking for?</h3>
        <div className={styles.titleImagesBox}>
            {images.map((image)=>(
                <div key={image.id}>
                    <img src={image.img_url} alt="titles to select" className={styles.titleImages}/>
                </div>
            ))}
        </div>
    </div>
  )
}
