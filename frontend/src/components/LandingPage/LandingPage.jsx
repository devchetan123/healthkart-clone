import React from 'react'
import { FlashSale } from './FlashSale'
import { TrendingNow } from './TrendingNow'
import { SwiperSlider } from './SwiperSlider'
import { TrendingInWheyProtein } from './TrendingInWheyProtein'
import { TrendingInMassGainer } from './TrendingInMassGainer'
import { TrendingInPremiumSupplements } from './TrendingInPremiumSupplements'
import { JustLaunchedProducts } from './JustLaunchedProducts'

export const LandingPage = () => {
  return (
    <div style={{background: "#F7F7F7"}}>
        <SwiperSlider />
        <FlashSale />
        <TrendingNow />
        <TrendingInWheyProtein />
        <TrendingInMassGainer />
        <TrendingInPremiumSupplements />
        <JustLaunchedProducts />
    </div>
  )
}
