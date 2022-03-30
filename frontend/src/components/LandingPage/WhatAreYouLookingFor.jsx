import React, { useEffect, useState } from 'react'
import styles from "./LandingPage.module.css";

export const WhatAreYouLookingFor = () => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/landingPageArray")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.whatAreYouLookingFor);
            setImages(res.whatAreYouLookingFor);
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <h3>Hi, What are you looking for?</h3>
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
