import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import style from "../../css/addresspage.module.css";
import { remove_address, select_address } from "../../redux/Address/address.actions";

function AddressBox({ x }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
      <div  className={style.addressTopMainBox} >
        <div className={style.addressMainBox}>
          <img
            src="https://i.ibb.co/64DTvBW/icons8-location-50.png"
            alt=""
            height={"25px"}
          />
          <div className={style.addressbox}>
            <p>
              {x.name } { x.mobile}
            </p>
            <p>{x.address}</p>
            <p>{x.pincode}</p>
          </div>
          <div className={style.delandeditbtns}>
            <button>
              <img src="https://i.ibb.co/sPxc0rD/icons8-edit-24.png" alt="" height={"14px"} />
            </button>
            <button onClick={() => dispatch(remove_address(x.id))} >
              <img
                src="https://i.ibb.co/vjq4cHD/icons8-delete-24-1.png"
                alt=""
                height={"14px"}
              />
            </button>
          </div>
        </div>
        <button className={style.buttonDelhere} onClick={() => {
           dispatch(select_address({
            id : x.id,
            name : x.name,
            mobile : x.mobile,
            address : x.address,
            pincode : x.pincode
        }))
        navigate("/payment")
        }} >Deliver Here</button>
      </div>
    </>
  );
}

export default AddressBox;
