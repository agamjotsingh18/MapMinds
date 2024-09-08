import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TableChartIcon from '@mui/icons-material/TableChart';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import avatar from "./assets/avatar.png"
import CenteredButtons from './CenteredButtons';
import { pink } from '@mui/material/colors';
import SearchComponent from './SearchComponent';
import DataTable from './DataTable';
import Menu from '@mui/material/Menu';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff', // White background color for the AppBar
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(null); // Drawer state
  const [activeItem, setActiveItem] = useState('View Mind Map'); // Active item state
  const [org, setOrg] = useState('Select Org'); // Organization state
  const [anchorEl, setAnchorEl] = useState(null); // For avatar menu


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setActiveItem('View Mind Map');
  }, []);

  const handleMenuClick = (text) => {
    setActiveItem(text);
  };

  const handleOrgChange = (event) => {
    setOrg(event.target.value);
  };

  // Avatar menu handlers
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        <IconButton
  color="inherit"
  aria-label="open drawer"
  onClick={handleDrawerOpen}
  edge="start"
  sx={{ 
    marginRight: 5, 
    ...(open && { display: 'none' }),
    color: 'rgba(0, 0, 0, 0.54)'  // Set hamburger menu icon color
  }}
>
  <MenuIcon />
</IconButton>

          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 552,
                fontSize: '1.4rem',
                lineHeight: 1.2,
                color: "black"
              }}
            >
              Chatbot Mind Map
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '0.8rem',
                color: 'black',
                lineHeight: '1.3',
              }}
            >
              This is the brain and the memory of the chatbot. You can add, edit, and analyze <br /> the source data being used to answer user queries from here.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{ marginLeft: 2, fontSize:"0.9rem", fontWeight:530, paddingTop:1, paddingBottom:1 }}
          >
            Guided Tour
          </Button>
          <Select
            value={org}
            onChange={handleOrgChange}
            sx={{ marginLeft: 2,  border: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 }, // Removes border on focus
    '&:focus': { border: 'none' },  // Ensures no border on focus
    boxShadow: 'none',  
             }}
          >
            <MenuItem value="Select Org" sx={{ border:'none' }}>Select Org</MenuItem>
            <MenuItem value="Org 1" sx={{ border:'none' }}></MenuItem>
          </Select>
          <IconButton
  color="inherit"
  aria-label="open profile menu"
  edge="end"
  onClick={handleAvatarClick}
  sx={{ color:'primary.main'}}
>
  <img 
    src={avatar} 
    alt="profile" 
    style={{ 
      width: '40px', 
      height: '40px', 
      borderRadius: '50%', 
      border: '2px solid',
    }} 
  />        
</IconButton>
<Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 3,
              style: {
                width: '200px',
              },
            }}
          >
            <MenuItem onClick={() => { handleMenuClick('Explore Chats'); handleMenuClose(); }}>
              <ListItemIcon><MoveToInboxIcon /></ListItemIcon>
              <ListItemText primary="Explore Chats" />
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClick('Business Leads'); handleMenuClose(); }}>
              <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
              <ListItemText primary="Business Leads" />
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClick('View Mind Map'); handleMenuClose(); }}>
              <ListItemIcon><TableChartIcon /></ListItemIcon>
              <ListItemText primary="View Mind Map" />
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClick('Manage Team'); handleMenuClose(); }}>
              <ListItemIcon><GroupsIcon /></ListItemIcon>
              <ListItemText primary="Manage Team" />
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClick('Configure Chatbot'); handleMenuClose(); }}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Configure Chatbot" />
            </MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {['Explore Chats', 'Business Leads', 'View Mind Map', 'Manage Team', 'Configure Chatbot'].map((text, index) => (
  <ListItem
    key={text}
    disablePadding
    sx={{ display: 'block', bgcolor: activeItem === text ? 'rgb(227, 242, 255)' : 'transparent' }}
  >
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={() => handleMenuClick(text)}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
          color: activeItem === text ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.54)'
        }}
      >
        {index === 0 ? <MoveToInboxIcon /> :
         index === 1 ? <ContactPhoneIcon /> :
         index === 2 ? <TableChartIcon /> :
         index === 3 ? <GroupsIcon /> :
         index === 4 ? <SettingsIcon /> : null}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
))}
        </List>
        <Divider />
        {/* Additional Sidebar Menu Items */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />
        {activeItem === 'View Mind Map' && (
          <>
           <CenteredButtons />
           <hr style={{ 
  width: '70%', 
  margin: '20px auto', // Centers the line horizontally
  border: 'none', 
  borderTop: `2px solid grey` // Same color as button
}} />
<SearchComponent />
<DataTable />
          </>
        )}
        {/* Add other active content sections based on selected menu */}
      </Box>
    </Box>
  );
}
