import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from "../css/navbartopsec.module.css"
import CustomerDrop from './CustomerDrop'
import AccountDrop from './Dropdowns/AccountDrop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MobileView } from './MobileView'
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "50%",
    background: "white",
    height: "100%"
  },
}));


function NavbarTopSec() {
  const cart = useSelector((state) => state.cart.cart)
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <MobileView/>
    </Box>
  );

  return (
    <div className={style.navContainer} >
        <div  className={style.navtopsection} >
        <img onClick={() => navigate("/")}  src="https://i.ibb.co/NWKgftw/Screenshot-13.png" alt="" height={"60px"} />
        <div className={style.searchDiv} >
            <img src="https://i.ibb.co/nMQ6VKT/icons8-search-30.png" alt="" height={"24px"} />
            <input type="text" placeholder='Search for products, brands or Health Goals'/>
        </div>
        <div className={style.rightNavdiv} >
            <p>Loyalty Rewards</p>
            <hr />
            <div>
                <CustomerDrop/>
                <img className={style.arrownav} src="https://i.ibb.co/D5gvVwF/icons8-expand-arrow-50-1.png" alt=""  height={"15px"}  />
            </div>
            <hr />
            <div >
                <img src="https://i.ibb.co/M2B90Lj/icons8-user-64.png" alt=""  height={"18px"}  />
                
                    <AccountDrop/>
                
                <img className={style.arrownav} src="https://i.ibb.co/D5gvVwF/icons8-expand-arrow-50-1.png" alt="" height={"15px"} />
            </div>
            <hr />
            <div>
            <div className={style.cartdiv} onClick={() => navigate("/cart")} >
                <img src="https://i.ibb.co/92FKTv3/icons8-cart-96.png" alt="" height={"35px"} />
                <h5>{cart.length}</h5>
            </div>
            </div>
            
            
        </div>
    </div>
        <div className={style.mobileView} >
        <CssBaseline />

        <Box  component="nav">
            <AppBar position="static">
                    <Toolbar style={{width:"100vh",display:"flex",gap:"4%",backgroundColor:"white",color:"black"}} >
                            <IconButton onClick={toggleSlider}>
                                      <Menu />
                            </IconButton>
                            <Typography>
                            <img onClick={() => navigate("/")}  src="https://i.ibb.co/NWKgftw/Screenshot-13.png" alt="" height={"30px"} />
                            </Typography>
                            
                            <Typography>
                            <ChatBubbleOutlineIcon/>
                            </Typography>
                            <Typography>
                            <SearchIcon/>
                            </Typography>
                            <Typography>
                            <ShoppingCartIcon onClick={() => navigate("/cart")} />
                            </Typography>
                            <Drawer open={open} anchor="left" onClose={toggleSlider}>
                                      {sideList()}
                            </Drawer>
                    </Toolbar>
            </AppBar>
        </Box>
        </div>
    </div>
  )
}

export default NavbarTopSec