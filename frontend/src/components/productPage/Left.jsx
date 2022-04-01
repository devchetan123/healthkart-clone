import React from 'react'
import styles from "../../css/productsPage/left.module.css";
import { Right } from './Right';
import {FaRegCircle } from "react-icons/fa";



export const Left = ({items,setItems}) => {


  const handleFilters = (info) => {
    if (info.startsWith("discount")) {
      if (info === "discount_1") {
       const newitems = items.filter(
          (item) => item.discount < Number("40") &&
                     item.discount > Number("20")
        );

        setItems([...newitems]);
      }
      if (info === "discount_2") {
       const newitems = items.filter(
          (item) =>
            item.discount >= Number("40") &&
            item.discount <= Number("60")
        );

        setItems(newitems);
      }
      if (info === "discount_3") {
        const newitems = items.filter(
          (item) =>
            item.discount >= Number("60") 
        );

        setItems(newitems);
      }
 
     }
    if (info.startsWith("rating")) {
      if (info === "rating_1") {
        const newitems = items.filter(
           (item) => item.rating > Number("4")                       
         );
 
         setItems([...newitems]);
       }
       if (info === "rating_2") {
        const newitems = items.filter(
           (item) =>
             item.rating >= Number("3") 
             
         );
 
         setItems(newitems);
       }
       if (info === "rating_3") {
         const newitems = items.filter(
           (item) =>
             item.rating >= Number("2") 
         );
 
         setItems(newitems);
       }
    }
    if (info.startsWith("price")) {
      if (info === "price_1") {
        const newitems = items.filter(
           (item) => (item.originalPrice > Number("1000") &&
                     item.originalPrice <= Number("2000") )                      
         );
 
         setItems([...newitems]);
       }
       if (info === "price_2") {
        const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("2001") &&
             item.originalPrice <= Number("3000")
             
         );
 
         setItems(newitems);
       }
       if (info === "price_3") {
         const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("3001") &&
             item.originalPrice <= Number("4000")
         );
 
         setItems(newitems);
       }
       if (info === "price_4") {
         const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("4001") &&
             item.originalPrice <= Number("5000")
         );
 
         setItems(newitems);
       }
       if (info === "price_5") {
         const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("5001") &&
             item.originalPrice <= Number("6000")
         );
 
         setItems(newitems);
       }
       if (info === "price_6") {
         const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("6001") &&
             item.originalPrice <= Number("7000") 
         );
 
         setItems(newitems);
       }
       if (info === "price_7") {
         const newitems = items.filter(
           (item) =>
             item.originalPrice >= Number("7001") &&
             item.originalPrice <= Number("8000")
         );
 
         setItems(newitems);
       }
    }
  };

  return (
    <div className= {styles.mainwrapper}>
      <div className = {styles.leftwrapper}>
          <h3>Browse By</h3>
          <div className={styles.offers}>
            <h4 style={{marginBottom:"5%"}}>Offers</h4>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Extra 10% off on BigFlex use Coupon : BIG10</p>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Extra 16% off on HealthKart Fishoil 60 capsules<br/> use Coupon : HK50F</p>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Additional Rs.35 off on TB MV for Bodybuilding<br/> use Coupon : TBMS</p>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Extra 10% off on BigFlex use Coupon : BIG10</p>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Extra 16% off on HealthKart Fishoil 60 capsules<br/> use Coupon : HK50F</p>
            <p><FaRegCircle className={styles.circle}/> &nbsp;Additional Rs.35 off on TB MV for Bodybuilding<br/> use Coupon : TBMS</p>
          </div>

          <h3>Filters</h3>
          <div
                className={styles.first}
                 onChange={(e) => handleFilters(e.target.name)}
              >
                <b>By discount</b>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="discount_1" />
                  <span>20% and above</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="discount_2" />
                  <span>40% and above</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="discount_3" />
                  <span>60% and above</span>
                </div>
               
              </div>
              <div
                className={styles.first}
                 onChange={(e) => handleFilters(e.target.name)}
              >
                <b>By Rating</b>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="rating_1" />
                  <span>4 ratings and above</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="rating_2" />
                  <span>3 ratings and above</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="rating_3" />
                  <span>2 ratings and above</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="rating_4" />
                  <span>1 rating and above</span>
                </div>
              </div>
              <div
                className={styles.first}
                 onChange={(e) => handleFilters(e.target.name)}
              >
                <b>By Price</b>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_1" />
                  <span>1000-2000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_2" />
                  <span>2001-3000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_3" />
                  <span>30001-4000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_4" />
                  <span>4001-5000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_5" />
                  <span>5001-6000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_6" />
                  <span>6001-7000</span>
                </div>
                <div style={{ flexDirection: "row", margin: "2%" }}>
                  <input type="checkbox" name="price_7" />
                  <span>7001-8000</span>
                </div>
              </div>
        </div>
        <div>
        <Right items={items} setItems={setItems}/>
        
        </div>
        
    </div>
  )
}

