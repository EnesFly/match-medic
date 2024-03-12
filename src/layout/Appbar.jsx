import * as React from 'react';
import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@emotion/react';
import {signOutUser} from '../components/authentication/auth-services.js';
import {signIn} from '../components/authentication/auth-services.js';
import { AuthContext } from '../contexts/isAuth.jsx';

export default function MenuAppBar({
  paddingRightLeft,
  paddingBottom,
  avatarImage,//Avatar image from firebase
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  return (
    <Box sx={{
      
      paddingBottom:paddingBottom,
       }}

       >
      <AppBar
      sx={{
        paddingLeft: paddingRightLeft,  // Adjust the value as needed
        paddingRight: paddingRightLeft,  // Adjust the value as needed
        borderBottom: '1px solid ' + theme.palette.primary.borderColor,
      }}
      >
        <Toolbar 
        disableGutters
        >
          <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
            Contact affordable hair transplant clinics of turkey
          </Typography>
          {(
            <Box
            disableGutters
            >
                <IconButton
                size="large"
                color="inherit"
                >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  About Us
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  FAQ
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                color="inherit"
                onClick={() => {isAuthenticated ? signOutUser() : signIn()}}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {isAuthenticated ? 'Logout' : 'Login'}
                </Typography>
              </IconButton>

              {isAuthenticated && <IconButton>
               <Avatar/>
              </IconButton>}
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
