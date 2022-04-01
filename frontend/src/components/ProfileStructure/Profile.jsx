import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Auth/context/UserAuthContext";

const Profile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div style={{display:"flex",gap:"5%",width:"110%",backgroundColor:"grey",padding:"5%"}} >
        <div>
          <img style={{width:"70px",borderRadius:"50%",margin:"auto"}} src={user.photoURL} alt="" />
        </div>
        <div>
          <h5 style={{margin:"0px",padding:'0px',color:"white"}}>{user.displayName}</h5>
          <p style={{margin:"0px",padding:'0px',color:"white"}} >{user.email}</p>
        </div>
      </div>
      <div>
        <button  onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Profile;