import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Cont = () => {
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
      <div>
        Hello Welcome <br />
        {user && user.email }
        {user && user.displayName }
        <p>{user.displayName}</p>
        {console.log(user)}
      </div>
      <div>
        <button  onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Cont;