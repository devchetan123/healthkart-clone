import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Styles from "./Profiles.module.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Profile from './Profile';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  sx={{ p: 3 }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: 'flex'}}
    >
      <Tabs
        
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <p style={{borderTop:"1px solid black",fontWeight:"700"}} >Order</p>
        <Tab className={Styles.tabs}  iconPosition="start" label="Order" {...a11yProps(0)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Re-order" {...a11yProps(1)} />

        <p style={{borderTop:"1px solid black",fontWeight:"700",paddingTop:"50px"}}>Profile</p>
        <Tab className={Styles.tabs}  iconPosition="start" label="Personal Information" {...a11yProps(2)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Profile" {...a11yProps(3)} />

        <Tab className={Styles.tabs}  iconPosition="start" label="Change Password" {...a11yProps(4)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Address" {...a11yProps(5)} />

        <Tab className={Styles.tabs}  iconPosition="start" label="My Wishlist" {...a11yProps(6)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Hk Cash" {...a11yProps(7)} />

        <Tab className={Styles.tabs}  iconPosition="start" label="Saved Card" {...a11yProps(8)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Re-order" {...a11yProps(9)} />

        <Tab className={Styles.tabs}  iconPosition="start" label="Subscription" {...a11yProps(10)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Refer & Earn" {...a11yProps(11)} />

        <Tab className={Styles.tabs}  iconPosition="start" label="Rewards" {...a11yProps(12)} />
        <Tab className={Styles.tabs}  iconPosition="start" label="Change Email" {...a11yProps(13)} />


      </Tabs>
      <TabPanel value={value} index={1}>
        Order
      </TabPanel>
      <TabPanel value={value} index={2}>
        ReOrder
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}