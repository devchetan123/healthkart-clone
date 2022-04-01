import React from 'react';
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div>
        <div className={styles.footerWrapper}>
            <div className= {styles.boxes}>
                <h5>HEALTHKART</h5>
                <div>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Refer & Earn</p>
                    <p>Loyality Program</p>
                    <p>HK Consult</p>
                    <p>Blogs, Videos & More</p>
                    <p>Brand Directory</p>
                    <p>Authenticity Guaranteed</p>
                    <p>Careers</p>
                </div>
            </div>
            <div className= {styles.boxes}>
                <h5>BRANDS</h5>
                <div>
                    <p>MuscleBlaze</p>
                    <p>TrueBasics</p>
                    <p>JustHer</p>
                    <p>Nouriza</p>
                    <p>Gritzo</p>
                    <p>bGREEN</p>
                </div>
            </div>
            <div className= {styles.boxes}>
                <h5>HEALTH & FITNESS</h5>
                <div>
                    <p>Bodybuilding</p>
                    <p>Weight Loss</p>
                    <p>Hair & Skin Care</p>
                    <p>Sports Nutrition</p>
                    <p>Vitamins & Supplements</p>
                    <p>Ayurveda & Herbs</p>
                    <p>Health Food & Drinks</p>
                    <p>Fitness</p>
                    <p>Wellness</p>
                    <p>Consult Plans</p>
                </div>
            </div>
            <div className= {styles.boxes}>
                <h5>POLICIES</h5>
                <div>
                    <p>Terms & Conditions</p>
                    <p>Delivery Policy</p>
                    <p>Privacy Policy</p>
                    <p>Returns Policy</p>
                </div>
            </div>
            <div className= {styles.boxes}>
                <h5>QUICK LINKS</h5>
                <div>
                    <p>My Account</p>
                    <p>Track Your Order</p>
                    <p>Store Locator</p>
                    <p>HK Cash</p>
                    <p>HK Coupons</p>
                    <p>FAQs</p>
                    <p>Sell On Healthkart</p>
                </div>
            </div>
            <div className={styles.lastBox}>
                <h5>ABOUT HEALTHKART</h5>
                <p>HealthKart.com is India’s largest online health & fitness store for men and women. Shop online from the latest collections of health, fitness and similar products featuring the best brands.</p>
                <h5>SUBSCRIBE TO OUT NEWSLETTER</h5>
                <p>Be the first one to receive amazing offers, deals and news</p>
                <div>
                    <input type="text" placeholder='Enter your email'/>
                    <button>SUBSCRIBE</button>
                </div>
                <h5>CONTACT WITH US</h5>
                <div>
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/facebook.svg" alt="facebook" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/instagram.svg" alt="instagram" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/linkedIn_logo.png" alt="linkedin" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/twitter.svg" alt="twitter" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/youtube.svg" alt="youtube" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pinterest.svg" alt="pinterest" />
                </div>
            </div>
        </div>
        <hr />
        <div className={styles.disclaimer}>
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/hk-consult.svg" alt="healthkart consult" />
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/A-G.svg" alt="authenticity guaranteed" />
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/RP.svg" alt="return policy" />
            <p><strong>Disclaimer:</strong>The information contained on HealthKart (www.healthkart.com or subdomains) is provided for informational purposes only and is not meant to substitute for the advice provided by your doctor or other healthcare professional. Information and statements regarding products, supplements, programs etc listed on HealthKart have not been evaluated by the Food and Drug Administration or any government authority and are not intended to diagnose, treat, cure, or prevent any disease. Please read product packaging carefully prior to purchase and use. The results from the products will vary from person to person. No individual result should be seen as typical.</p>
        </div>
        <hr />
        <div className={styles.copyright}>
            <div>
                <p>Copyright © 2022, HealthKart.com, or its affiliates</p>
            </div>
            <div>
                <h5>DOWNLOAD OUR APP</h5>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/App-Store.svg" alt="app store" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Google-Play.svg" alt="google play store" />
            </div>
        </div>
    </div>
  )
}
