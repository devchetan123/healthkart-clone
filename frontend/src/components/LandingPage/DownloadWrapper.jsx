import React from 'react'
import styles from "./LandingPage.module.css"

export const DownloadWrapper = () => {
  return (
    <div className={styles.wrapperDiv}>
        <div className={styles.wrapper}>
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/hk-cash-icon.svg" alt="HK Cash" />
            <h6 className={styles.wrapperTitle}>Earn HK Cash</h6>
            <p className={styles.wrapperDetail}>Shop with us and get HK Cash to redeem on your next purchase. Know more about <a href='#'>HK Cash</a></p>
        </div>
        <div className={styles.wrapper}>
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/safe-payment-icon.svg" alt="Safe Payments" />
            <h6 className={styles.wrapperTitle}>Safe Payments</h6>
            <p className={styles.wrapperDetail}>Pay with the world’s most popular and secure payment methods.</p>
        </div>
        <div className={styles.wrapper}>
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authenticity-icon.svg" alt='Authenticity Guaranteed'/>
            <h6 className={styles.wrapperTitle}>Authenticity Guaranteed</h6>
            <p className={styles.wrapperDetail}>100% authentic products for our customers.</p>
        </div>
        <div className={styles.wrapper}>
            <div>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/andriod-icon.svg" alt="android-icon" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/apple-icon.svg" alt="apple-icon" />
            </div>
            <h6 className={styles.wrapperTitle}>Download Healthkart App</h6>
            <p className={styles.wrapperDetail}>Get the best experience of Healthkart at your fingertips</p>
            <div className={styles.getOnIcons}>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/playstore-icon.svg" alt="get on goole play store" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/appstore-icon.svg" alt="get on app store" />
            </div>
        </div>
    </div>
  )
}
