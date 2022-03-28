import React from 'react'
import style from "../../css/addresspage.module.css";

function AddressPage() {
  return (
    <div className={style.background} >
        <div className={style.maxScreenNav}>
          <div className={style.navMain}>
            <img
              src="https://i.ibb.co/NWKgftw/Screenshot-13.png"
              alt="logo"
              height={"60px"}
            />
            <div className={style.process}>
              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>CART</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>ADDRESS</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>PAYMENT</p>
            </div>
          </div>
        </div>

        <div>
            
        </div>

    </div>
  )
}

export default AddressPage