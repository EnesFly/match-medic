import * as React from 'react';
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

export default function MenuAppBar({
  paddingBottom,
  isAuth,
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
  return (
    <Box sx={{ 
      flexGrow: 1,
      paddingBottom:paddingBottom,
       }}

       >
      <AppBar
      sx={{
        borderBottom: '1px solid ' + theme.palette.primary.borderColor,
      }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
            Contact affordable hair transplant clinics of turkey
          </Typography>
          {(
            <div >
                <IconButton
                size="large"
                color="inherit"
                sx={{m:1}}
                >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  About Us
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                sx={{m:1}}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  FAQ
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                color="inherit"
                sx={{m:1}}
                onClick={() => {isAuth ? signOutUser() : signIn()}}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {isAuth ? 'Login' : 'Logout'}
                </Typography>
              </IconButton>

              <IconButton>
              {isAuth && <Avatar/>}
              </IconButton>
              
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
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
