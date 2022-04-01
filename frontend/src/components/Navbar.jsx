import React from 'react'
import styles from '../css/nav.module.css'






export const Navbar = () => {
    
  return (
    
    <div>
        {/* header strats here */}
        <header className={styles.header}>
            <div className={styles.container}>
            
                <div className={[styles.row, styles.vCenter].join(' ')}>
                    {/* <div className={[styles.header-item, styles.item-left].join(' ')}>

                    </div> */}
                    {/* menu start here */}
                    <div className={[styles.headerItem, styles.itemCenter].join(' ')}>
                        <nav className={styles.menu}>
                            <ul className={styles.menuMain}>
                                <li  className={styles.menuItemHasChildren}>
                                    <a href = "/products">Category</a>
                                    <div className={[styles.subMenu, styles.megaMenu, styles.megaMenuColumn4].join(' ')}>
                                       <div className={styles.listItem}>
                                          <h4 className={styles.title}>Proteins</h4>
                                          <ul>
                                              <li><a href="/products">Whey Proteins</a></li>
                                              <li><a href="/products">Begginer's Whey Protein</a></li>
                                              <li><a href="/products">Whey Protein Isolate</a></li>
                                              <li><a href="/products">Raw Whey Proteins</a></li>
                                              <li><a href="/products">Plant Proteins</a></li>
                                              <li><a href="/products">Protein for Women</a></li>
                                              <li><a href="/products">Protein Blends</a></li>
                                              <li><a href="/products">Soy Protein</a></li>
                                          </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Gainers</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Weight Gainers</a></li>
                                              <li><a href="/#">Mass Gainers</a></li>
                                              <li><a href="/#">Herbal Weight Gainerst</a></li>
                                              
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Protein Foods</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Protein Bars</a></li>
                                              <li><a href="/#">Protein Cookies</a></li>
                                              <li><a href="/#">Peanut Butter</a></li>
                                              <li><a href="/#">Protein Shakes</a></li>
                                              
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Pre/Post Workout</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Pre Workoutt</a></li>
                                              <li><a href="/#">Creatine</a></li>
                                              <li><a href="/#">BCCAs</a></li>
                                              <li><a href="/#">Carb Blends</a></li>
                                              <li><a href="/#">Electrolytes</a></li>
                                              <li><a href="/#">Nitric Oxide</a></li>
                                              <li><a href="/#">Other Supports</a></li>
                                              <li><a href="/#">Citrulline Malate</a></li>
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Workout Essentials</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Fat Burners</a></li>
                                              <li><a href="/#">Consult Services</a></li>
                                              <li><a href="/#">L Carnitine</a></li>
                                              <li><a href="/#">Multi Vitamins For </a></li>
                                              <li><a href="/#">Bodybuilding </a></li>
                                              <li><a href="/#">Pre Harmone</a></li>
                                              <li><a href="/#">ZMA</a></li>
                                              </ul>
                                       </div>
                                       {/* <div className={styles.listItem}>
                                      
                                      <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/header/man-2.svg" alt="img"/>
                                       </div> */}
                                    </div>
                                </li>
                                <li className={styles.menuItemHasChildren}>
                                    <a href = "/#">Brand</a>
                                    <div className={[styles.subMenu, styles.megaMenu, styles.megaMenuColumn4].join(' ')}>
                                       <div className={styles.listItem}>
                                          <h4 className={styles.title}>Sports Nutrition</h4>
                                          <ul>
                                              <li><a href="/#">Muscleblaze</a></li>
                                              <li><a href="/#">MB Fuelone</a></li>
                                              <li><a href="/#">bGREEN</a></li>
                                              <li><a href="/#">Optimum Nutrition</a></li>
                                              <li><a href="/#">Ultimate Nutrition</a></li>
                                              <li><a href="/#">MuscleTech</a></li>
                                              <li><a href="/#">MyProtein</a></li>
                                              <li><a href="/#">isoPure</a></li>
                                              <li><a href="/#">Dymatize</a></li>
                                              <li><a href="/#">GNC</a></li>
                                          </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Vitamins & Supplements</h4>
                                       <ul>
                                       
                                              <li><a href="/#">HealhKart</a></li>
                                              <li><a href="/#">True Basics</a></li>
                                              <li><a href="/#">GNC</a></li>
                                              <li><a href="/#">NOW</a></li>
                                              <li><a href="/#">Healthvit</a></li>
                                              <li><a href="/#">INLIFE</a></li>
                                              <li><a href="/#">Natures Velvet</a></li>
                                              <li><a href="/#">Swissie</a></li>
                                              <li><a href="/#">Nutrafirst</a></li>
                                              
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Health Food and Drinks</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Nourzia</a></li>
                                              <li><a href="/#">Muscle Blaze</a></li>
                                              <li><a href="/#">HealthKart</a></li>
                                              <li><a href="/#">Health viva</a></li>
                                              <li><a href="/#">True Elements</a></li>
                                              <li><a href="/#">Incredio</a></li>
                                              <li><a href="/#">Yogabar</a></li>
                                              <li><a href="/#">Amway</a></li>
                                              <li><a href="/#">Alpino</a></li>
                                              
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Fitness</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Struss</a></li>
                                              <li><a href="/#">SportSoul</a></li>
                                              <li><a href="/#">Greenbee</a></li>
                                              <li><a href="/#">Hstle Fitness</a></li>
                                              <li><a href="/#">Biofit</a></li>
                                              <li><a href="/#">Gym Brute</a></li>
                                              <li><a href="/#">Omtex</a></li>
                                              <li><a href="/#">GHC</a></li>
                                              <li><a href="/#">B fit USA</a></li>
                                              </ul>
                                       </div>
                                       <div className={styles.listItem}>
                                       <h4 className={styles.title}>Wellness</h4>
                                       <ul>
                                       
                                              <li><a href="/#">Ustraa</a></li>
                                              <li><a href="/#">Nutra First</a></li>
                                              <li><a href="/#">Oriental Botanics</a></li>
                                              <li><a href="/#">Amway </a></li>
                                              <li><a href="/#">St.Botanica</a></li>
                                              <li><a href="/#">Himalayan Organics</a></li>
                                              <li><a href="/#">Organic Harvest</a></li>
                                              <li><a href="/#">Man Arden</a></li>
                                              <li><a href="/#">INLIFE</a></li>
                                              <li><a href="/#">Hi9</a></li>
                                              </ul>
                                       </div>
                                       
                                    </div>
                                   
                                </li>







                                <li  className={styles.menuItemHasChildren}>
                                    <a href = "/#">Gender</a>
                                    <div className={styles.listItem}>
                                        <div className={[styles.subMenu, styles.megaMenu2, styles.singleColumnMenu].join(' ')}>
                                        <ul className={styles.genderrow}>
                                            <li  >
                                            <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/header/man-2.svg" alt="img"/>
                                            <div className={styles.listItem}>Male</div></li>
                                            <li  ><img src = "https://static1.hkrtcdn.com/hknext/static/media/common/header/woman-2.svg" alt="img"/>
                                            <div className={styles.listItem}>Female</div></li>
                                        </ul>
                                        </div>
                                    </div>
                                </li>
                                <li  className={styles.menuItemHasChildren}>
                                    <a href = "/#">Goal</a>
                                    <div className={styles.listItem}>
                                        <div className={[styles.subMenu, styles.megaMenu, styles.megaMenuColumn4].join(' ')}>
                                        <ul className={styles.genderrow}>
                                            <li  >
                                            <img src = "https://img6.hkrtcdn.com/14784/normal_1478355_o.png" alt="img"/>
                                            <div className={styles.listItem}>Immunity&Wellbeing</div></li>
                                            <li  ><img src = "https://img8.hkrtcdn.com/14784/normal_1478357_o.png" alt="img"/>
                                            <div className={styles.listItem}>Lean Muscle Mass</div></li>
                                            <li  ><img src = "https://img10.hkrtcdn.com/14784/normal_1478359_o.png" alt="img"/>
                                            <div className={styles.listItem}>Weightloss</div></li>
                                            <li  ><img src = "https://img2.hkrtcdn.com/14784/normal_1478361_o.png" alt="img"/>
                                            <div className={styles.listItem}>Bulkgain</div></li>
                                            <li  ><img src = "https://img4.hkrtcdn.com/14784/normal_1478363_o.png" alt="img"/>
                                            <div className={styles.listItem}>Stress&Relaxation</div></li>
                                        </ul>
                                        </div>
                                    </div>
                                </li>
                                <li  className={styles.menuItemHasChildren}>
                                    <a href = "/#">Bestsellers</a>
                                </li>
                                <li  className={styles.menuItemHasChildren}>
                                    <a href = "/#">Deals</a>
                                </li>
                                <li>
                                    <a href = "/#">Gift Card</a>
                                </li>
                                <li>
                                    <a href = "/#">Blogs,Videos & More</a>
                                </li>

                            </ul>

                        </nav>

                    </div>
                    {/* menu end here */}
                    <div className={[styles.headerItem, styles.itemRight].join(' ')}>
                        <div className={styles.rightdiv1}>
                           <a href = "/#" className={styles.righta}>
                               
                              
                                   <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/header/hk-consult.svg" alt = "msg"/>
                               &nbsp;&nbsp;HK consult </a>
                        </div>
                        <div className={styles.rightdiv2}>
                          <a href = "/#" className={styles.righta}>
                              <img src = "https://static1.hkrtcdn.com/hknext/static/media/common/header/location-pin.svg" alt="loc"/>
                              &nbsp;&nbsp;Find a store</a>
                        </div>

                    </div>

                </div>
                
            </div>
        </header>
        {/* header ends here */}

        {/* banner starts here */}
        <section className={styles.bannerSection}>

        </section>
        {/* banner ends here */}
    </div>
  )
}
