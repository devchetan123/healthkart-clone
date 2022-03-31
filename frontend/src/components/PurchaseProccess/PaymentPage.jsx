import React, { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../css/paymenttab.css";
import style from "../../css/paymentpage.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { totalCalculate } from "../../redux/Cart/cart.actions";
import { useNavigate } from "react-router-dom";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { update_otp } from "../../redux/Address/address.actions";

function PaymentPage() {
  const dispatch = useDispatch();

  const [modalOn, setModalOn] = useState(false)

  const address = useSelector((state) => state.address.selectAddress);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hkcash, sethkcash] = useState(0);
  const [totalDiscount, setTotalDis] = useState(0);
  const [loyalty, setLoyalty] = useState(0);
  const [totalSave, setTotalSave] = useState(0);
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  const calculateDiscount = (totalprice) => {
    let percent = totalprice * (25 / 100);
    let totalamt = percent + totalprice;
    let hkcash = Math.floor(totalprice * (2 / 100));
    setTotalPrice(totalamt);
    sethkcash(hkcash);
  };

  const calculation = () => {
    let totalDis = totalPrice - total;
    let loyal = Math.floor((totalDis * 12) / 100);
    let rem = totalDis - loyal;
    setTotalDis(rem);
    setLoyalty(loyal);
    setTotalSave(totalDis);
  };


  const [isloading, setisLoad] = useState(false)
  const otp = useSelector((state) => state.address.otp);

  const payClick = () => {

    let otp = Math.random() * 100000000
    otp = otp.toString();
    otp = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5]
    dispatch(update_otp(otp))

    setisLoad(true)
    setTimeout(() => {
      setisLoad(false)
      setModalOn(true)
      setTimeout(() => {
        alert("OTP" + " " + otp)
      }, 1500)
    }, 1500)
  }

  const [enteredOtp, setEnterOtp] = useState("")

  const checkOtp = () => {
    if(enteredOtp === otp){
      setisLoad(true)
      setTimeout(() => {
        setisLoad(false)
        navigate("/success")
      }, 2000);
    }
    else{
      alert("Wrong OTP Entered")
    }
  }


  useEffect(() => {
    dispatch(totalCalculate());
    calculateDiscount(total);
    calculation();
  }, [total, cart, totalPrice]);

  return (

    <>
    <div className={ !modalOn ? style.wholebackground : style.backgorundBlue}>
      <div className={style.maxScreenNav}>
        <div className={style.navMain}>
          <img onClick={() => navigate("/")}
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

      <div className={style.navforsmaller}>
        <div className={style.navfirstLine}>
          <div className={style.cartleftNav}>
            <AiOutlineArrowLeft onClick={() => navigate("/address")} />
            <p>Payment</p>
          </div>
        </div>
        <div className={style.navsecline}>
          <div className={style.mobileprocess}>
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

      <div className={style.mainContainer}>
        <div className={style.mainpaymentbox}>
          <div className={style.choosePaymentHead}>
            <p>Choose Paymnent Options</p>
          </div>
          <Tabs className={style.mainLine}>
            <div className={style.tablist}>
              <TabList>
                <Tab>
                  <p>Simpl</p>
                </Tab>
                <Tab>
                  <p>Pay Using UPI</p>
                </Tab>
                <Tab>
                  <p>Debit Cart</p>
                </Tab>
                <Tab>
                  <p>Credit Cart</p>
                </Tab>
                <Tab>
                  <p>Wallets</p>
                </Tab>
                <Tab>
                  <p>Internet Banking</p>
                </Tab>
                <Tab>
                  <p>EMI or Pay Later</p>
                </Tab>
                <Tab>
                  <p>Cash On Delivery</p>
                </Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className={style.simpl}>
                <div className={style.firstlinesimpl}>
                  <input type="radio" />
                  <img
                    src="https://static1.hkrtcdn.com/hknext/static/media/logos/simpl.png"
                    alt=""
                    height={"28px"}
                  />
                </div>
                <div className={style.seclinesimpl}>
                  <p>3 interest free payment of ₹1745.68 with</p>
                  <img
                    src="https://static1.hkrtcdn.com/hknext/static/media/logos/simpl.png"
                    alt=""
                    height={"15px"}
                  />
                  <AiOutlineInfoCircle />
                </div>
                <div className={style.threelinesimpl}>
                  <p>+ Get 10% cashback up to ₹500</p>
                  <AiOutlineInfoCircle />
                </div>
                <div className={style.fourlinesimpl}>
                  <button onClick={() => payClick()} >Pay Securely ₹{total}</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.upimethoddiv}>
                <p>Please enter your UPI ID</p>
                <img src="https://img1.hkrtcdn.com/1179/paytm-upi.png" alt="" />
                <br />
                <input type="text" placeholder="MobileNumber@upi" />
                <button>Verify</button>
                <br />
                <label>
                  <input type="checkbox" /> Securely saved for faster payments{" "}
                </label>
                <br />
                <button>Pay Securely ₹{total}</button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.debitcartmethod}>
                <p>Enter Card Details</p>
                <div className={style.cardholderandnumberdiv}>
                  <input type="text" placeholder="Card holder name" />
                  <input type="text" placeholder="Card Number" />
                  {/* <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/ic_generic_card.webp" alt="" /> */}
                </div>
                <div className={style.mmyycvvdiv}>
                  <select>
                    <option value="" disabled selected>
                      Expiry MM
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>

                  <select>
                    <option value="" disabled selected>
                      Expiry YY
                    </option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                    <option value="">2026</option>
                    <option value="">2027</option>
                    <option value="">2028</option>
                    <option value="">2029</option>
                    <option value="">2030</option>
                    <option value="">2031</option>
                    <option value="">2032</option>
                    <option value="">2033</option>
                  </select>
                  <input type="password" placeholder="CVV" />
                </div>

                <label>
                  <input type="checkbox" /> Securely saved for faster payments{" "}
                </label>
                <div className={style.imgsinpaysec}>
                  <img
                    src="https://img1.hkrtcdn.com/1718/RuPay-Icon.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383075_o.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383073_o.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/ic_maestro.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/Maestro_logo.png"
                    alt=""
                  />
                </div>

                <button className={style.paysecdebit} onClick={() => {
                    payClick()
                }} >
                  Pay Securely ₹{total}
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.debitcartmethod}>
                <p>Enter Card Details</p>
                <div className={style.cardholderandnumberdiv}>
                  <input type="text" placeholder="Card holder name" />
                  <input type="text" placeholder="Card Number" />
                  {/* <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/ic_generic_card.webp" alt="" /> */}
                </div>
                <div className={style.mmyycvvdiv}>
                  <select>
                    <option value="" disabled selected>
                      Expiry MM
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>

                  <select>
                    <option value="" disabled selected>
                      Expiry YY
                    </option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                    <option value="">2026</option>
                    <option value="">2027</option>
                    <option value="">2028</option>
                    <option value="">2029</option>
                    <option value="">2030</option>
                    <option value="">2031</option>
                    <option value="">2032</option>
                    <option value="">2033</option>
                  </select>
                  <input type="password" placeholder="CVV" />
                </div>

                <label>
                  <input type="checkbox" /> Securely saved for faster payments{" "}
                </label>
                <div className={style.imgsinpaysec}>
                  <img
                    src="https://img1.hkrtcdn.com/1718/RuPay-Icon.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383075_o.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383073_o.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/ic_maestro.png"
                    alt=""
                  />
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/Maestro_logo.png"
                    alt=""
                  />
                </div>

                <button className={style.paysecdebit}>
                  Pay Securely ₹{total}
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.walletmethod}>
                <div className={style.walletboxes} >
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/wallet/Paytm.png" alt="" height={"22px"} />
                      <p>Paytm & Paytm Postpaid</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="http://hkprod.s3.amazonaws.com/12891/normal_1289001_o.png" alt="" height={"17px"} />
                      <p>Amazon Pay</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/13670/normal_1366935_o.png" alt="" height={"33px"} />
                      <p>FreeCharge</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/wallet/pay_zapp.png" alt="" height={"25px"} />
                      <p>HDFC Bank - PayZapp</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/1179/mobikwiknew.png" alt="" height={"20px"} />
                      <p>Mobikwik Wallet</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/wallet/airtel-payment-bank.png" alt="" height={"18px"} />
                      <p>Airtel Money</p>
                  </div>
                  <div>
                      <input type="radio" name="wallet" />
                      <img src="https://s3-ap-southeast-1.amazonaws.com/hkprod/12028/normal_1202725_o.jpg" alt="" height={"25px"} />
                      <p>PhonePe</p>
                  </div>
                </div>
                <button className={style.walletpaybtn}>
                  Pay Securely ₹{total}
                </button>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <div className={style.rightsidepaymentdet}>
          <div className={style.addressdivpaypage}>
            <div className={style.addfirstpaypage}>
              <img
                src="https://i.ibb.co/C7p2R7F/icons8-location-48.png"
                alt=""
                height={"18px"}
              />
              <p>
                Delivery to <b>{address.pincode}</b>
              </p>
              <button onClick={() => navigate("/address")}>Chnage</button>
            </div>
            <div className={style.addwithname}>
              <p>{address.name}</p>
              <p>{address.address}</p>
              <p>
                {address.pincode}, Phone: {address.mobile}
              </p>
            </div>
          </div>

          <div className={style.ordersumbox} id="ordersum">
            <div className={style.ordersumdiv}>
              <p>Order Summary</p>
            </div>

            <div className={style.orderinnerdiv}>
              <div className={style.leftOrderdet}>
                <p>Total MRP</p>
                <p>
                  Total Discounts{" "}
                  <img
                    src="https://i.ibb.co/pyq0ZMG/icons8-info-50-1.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                </p>
                <p>Loyalty Savings</p>
                <p>Shipping Charges</p>
              </div>
              <div className={style.rightOrderdet}>
                <p>₹{totalPrice}</p>
                <p className={style.discountRed}>- ₹{totalDiscount}</p>
                <p className={style.discountRed}>- ₹{loyalty}</p>
                <p>FREE</p>
              </div>
            </div>
            <hr className={style.hrforsummary} />
            <div className={style.finalPayable}>
              <p>Final Payable</p>
              <p>₹{total}</p>
            </div>
            <p className={style.savetitle}>
              You will Save ₹{totalSave} & Earn ₹{hkcash} HK Cash on this order
            </p>
          </div>

          <div className={style.safetitle}>
            <MdOutlinePrivacyTip />
            <p>100% Safe & Secure Payments</p>
          </div>

          <div className={style.paymentmethod}>
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/visa-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/mastercard-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/amex-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/wallet-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/net-banking-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/emi-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/cod-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div className={isloading ? style.loadingSec: style.loadingOn} >
      <img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="" height={"100px"} />
    </div>
    <div className={ modalOn ? style.optModal : style.offmodal} >
        <div>
            <div className={style.secenterotpDiv} >
                <p>ENTER OTP</p>
                <div>
                  <p>Secured by</p>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Razorpay_logo.svg" alt="" height={"20px"} />
                </div>
            </div>
            <p>One Time Password (OTP) successfully sent to the phone number linked to your card ending with 6828.</p>
            <div className={style.inputotp} >
                <input type="text" onChange={e => setEnterOtp(e.currentTarget.value)}  placeholder="OTP" />
                <button onClick={() => checkOtp()} >Submit</button>
            </div>
            <div className={style.cancelresent} >
                <p onClick={() => setModalOn(false)} >Cancel</p>
                <p onClick={() => payClick()} >Resend OTP</p>
            </div>
        </div>
    </div>

    </>
  );
}

export default PaymentPage;
