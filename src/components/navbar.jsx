import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StickyFooter from './stickyFooter';

const drawerWidth = 240;
const navItems = ['About us', 'Training & Certification', 'University Outreach Program', 'Contact us'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'white' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Panacea Infosec
      </Typography> */}
      <Box>
           <img src="logo.png" height='80px'/>
          </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', padding: '16px 24px' }}>
              <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white', color: '#252525' }} elevation={0}>
    <StickyFooter />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none', lg:'none' }, color: '#252525' }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, color: '#252525', textTransform: 'none' }}
          >
            Panacea Infosec
          </Typography> */}
          <Box 
           sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, color: '#252525', textTransform: 'none' }}
          >
           <img src="logo.png" height='80px'/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#252525', textTransform: 'none', fontSize: '16px', marginLeft: '20px' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: drawerWidth, md: 180 }, // Shrink for mid screens
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    </React.Fragment>
  );
}

export default Navbar;
