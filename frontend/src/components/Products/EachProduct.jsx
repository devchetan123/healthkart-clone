import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function EachProduct() {
  const [user, setUser] = useState({});
  const pharms = useParams();
  useEffect(() => {
    if (pharms.id) {
      fetch(
        `https://json-practice.herokuapp.com/product/${pharms.id}`
      )
        .then((r) => r.json())
        .then((data) => setUser(data));
    }
  }, [pharms]);
  return (
    <div>
      <div>
        <img src={user.image} alt="" />
      </div>
      <div>
        <div>
            <h2>{user.title}</h2>
            <p>By <span>MuscleBlaze</span></p>
            <h5>{user.rating} <StarOutlineIcon/> </h5>
        </div>
      </div>
    </div>
  );
}