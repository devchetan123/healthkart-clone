import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "../../css/Sidenav/SidenavOne.module.css"

export const SidenavOne = () => {
  return (
    <div className={Styles.containerOne}>
      <h5>Orders</h5>
      <Link to={"/orders"} >
      <div className={Styles.content} >
          <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/order_new.svg" alt="" />
          <p>My Order</p>
      </div>
      </Link>
      <Link to={"/orders"} >
      <div className={Styles.content} >
        <img src="https://img2.hkrtcdn.com/react/static/media/common/menu/re_order.svg" alt="" />
        <p>Re-order</p>
      </div>
      </Link>
    </div>
  )
}
