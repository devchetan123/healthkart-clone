import React, { useEffect, useState } from 'react'
import styles from "./LandingPage.module.css"

export const FlashSale = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("")
    }, [])
  return (
    <div className={styles.flashSalePage}>
        <div className={styles.tag}>
            <div className={styles.tagName}>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/flash-sale-black.svg" className={styles.tagImg}/>
                <h3 style={{margin: "0px"}}>Flash Sale</h3>
            </div>
            <div>
                <button className={styles.viewAllBtn}>View All</button>
            </div>
        </div>

    </div>
  )
}
