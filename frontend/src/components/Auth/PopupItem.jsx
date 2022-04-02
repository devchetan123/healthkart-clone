import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PhoneSignUp } from './components/PhoneSignUp';
import { Login } from './components/Login';
import Styles from "../../css/LoginSignup/Popup.module.css"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PopupItem() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box >
      <div>
        <div className={Styles.login}>
        <div className={Styles.loginLeft} >
              <h2>Why Login?</h2>
              <p><img src="https://static1.hkrtcdn.com/hknext/static/media/signupFlow/white-bg-tick.svg" alt="" /> Manage Your Order</p>
              <p><img src="https://static1.hkrtcdn.com/hknext/static/media/signupFlow/white-bg-tick.svg" alt="" /> Get exclusive deals and offers</p>
              <p><img src="https://static1.hkrtcdn.com/hknext/static/media/signupFlow/white-bg-tick.svg" alt="" /> Personalized Recommendations</p>
        </div>
        
        <div>
        <AppBar position="static">
        <Tabs
          className={Styles.tabnav}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="LogIn" {...a11yProps(0)} />
          <Tab label="SignUp" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className={Styles.tab} value={value} index={0} dir={theme.direction}>
        <div>
        <Login/>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <Login/>
        </TabPanel>
      </SwipeableViews>
        </div>
      </div></div>
    </Box>
  );
}

