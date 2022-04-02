import React, { useEffect, useState } from 'react'
import { FlashSale } from './FlashSale'
import { TrendingNow } from './TrendingNow'
import { SwiperSlider } from './SwiperSlider'
import { TrendingInWheyProtein } from './TrendingInWheyProtein'
import { TrendingInMassGainer } from './TrendingInMassGainer'
import { TrendingInPremiumSupplements } from './TrendingInPremiumSupplements'
import { JustLaunchedProducts } from './JustLaunchedProducts'
import { WhatAreYouLookingFor } from './WhatAreYouLookingFor'
import { PopularsContainer } from './PopularsContainer'
import { DownloadWrapper } from './DownloadWrapper'
import { Footer } from '../Footer/Footer'
import { Navbar } from "../Navbar"
import NavbarTopSec from '../NavbarTopSec'
import Home from '../Home'


export const LandingPage = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      fetch("http://localhost:3000/landingPageArray")
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res);
          setData(res)
          console.log(data)
      })
      .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <NavbarTopSec/>
    <Navbar/>
    <div style={{background: "#F7F7F7"}}>
        <SwiperSlider />
        <FlashSale />
        <TrendingNow />
        <WhatAreYouLookingFor />
        <PopularsContainer items = {data.popularInSportsNutrition} tag={"Popular In Sports Nutrition"}/>
        <PopularsContainer items = {data.popularInWeightLoss} tag={"Popular In Weight Loss"}/>
        <TrendingInWheyProtein />
        <PopularsContainer items = {data.popularInHealthFoodsDrinks} tag={"Popular in Health Foods & Drinks"}/>
        <TrendingInMassGainer />
        <PopularsContainer items = {data.popularInFitness} tag={"Popular in Fitness"}/>
        <TrendingInPremiumSupplements />
        <JustLaunchedProducts />
        <DownloadWrapper />
        <Footer />
    </div>
    </>
  )
}
