import React from 'react';
import styles from "../../css/productsPage/right.module.css";

export const Sortcomponent = ({items,setItems}) => {
    const sorting = (e) => {
         const tag = e.currentTarget.value
        if (tag === "priceltoh") {
            const updatelist =    [...items].sort((a,b)=>  +(a.originalPrice) - +(b.originalPrice))
            setItems(updatelist)
      
        }
        if (tag === "pricehtol") {
            const updatelist =    [...items].sort((a,b)=>  +(b.originalPrice) - +(a.originalPrice))
         setItems(updatelist)
      
        }
        if (tag === "discountltoh") {
            const updatelist =    [...items].sort((a,b)=>  +(a.discount) - +(b.discount))
         setItems(updatelist)
      
        }
        if (tag === "discounthtol") {
            const updatelist =    [...items].sort((a,b)=>  +(b.discount) - +(a.discount))
         setItems(updatelist)
      
        }
        if (tag === "ratinghtol") {
            const updatelist =    [...items].sort((a,b)=>  +(b.rating) - +(a.rating))
            setItems(updatelist)
      
        }

      };

      

  return (
    <div>
        <div className={styles.sort}>
           

        <select onChange={sorting} className={styles.sortselect}>
            <option value = "popularity">Sort by : Popularity</option>
           <option value = "priceltoh" >Price - Low to high</option>
            <option value = "pricehtol">Price - High to Low</option>
            <option value = "discountltoh">Discount - Low to high</option>
            <option value = "discounthtol">Discount - High to Low</option>
            <option value = "ratinghtol">Rating - High to Low</option>
         </select>


             </div>
    </div>
  )
}
