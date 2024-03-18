import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@emotion/react';
import {signOutUser} from '../components/authentication/auth-services.js';
import {signIn} from '../components/authentication/auth-services.js';
import { AuthContext } from '../contexts/isAuth.jsx';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default function MenuAppBar({
  paddingRightLeft,
  paddingBottom,
  avatarImage,//Avatar image from firebase
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoUrl, setLogoUrl] = useState('');
  const logoPath = 'gs://match-medic-p0.appspot.com/resources/vector_images/logos/logo_gray.svg';
/* 
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; */
  const getItemFromFirebase = (path) => {
    const storage = getStorage();
    const itemRef = ref(storage, path);
    getDownloadURL(itemRef)
      .then((url) => {
        setLogoUrl(url);
      })
      .catch((error) => {
        console.error("Error loading logo image:", error);
      });
  }
  
  useEffect(() => {
    getItemFromFirebase(logoPath);
  }, [])
  
  const theme = useTheme();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  console.log(logoUrl);
  return (
    <Box sx={{
      paddingBottom:paddingBottom,
       }}

       >
      <AppBar
      sx={{
        paddingLeft: paddingRightLeft, 
        paddingRight: paddingRightLeft, // Adjust this value as necessary
        borderBottom: '1px solid ' + theme.palette.primary.borderColor,
        // Ensure the AppBar fills the width of the page
        width: '100%', 
        boxSizing: 'border-box'
      }}
      >
       <Toolbar 
      disableGutters
      sx={{
        justifyContent: 'space-between',
        paddingRight: 0, 
        paddingLeft: 0,
      }}
    >
          <Box
          style={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'flex-start',
          }}
        >
          {logoUrl && (
            <img
            src={logoUrl}
            alt="Match Medic Logo"
            style={{
              transform: 'scale(0.7)',
              transformOrigin: 'center left', // Adjust this if necessary
              
              }}
            />
          )}
          <Typography 
            component="span" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: 14,
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }
            }}>
            Contact affordable hair transplant clinics of Turkey
          </Typography>
        </Box>
          {(
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // Add paddingRight here to push the content to the left
              // Use the developer tools to find the exact value needed
              paddingRight: 'valueThatAlignsWithGreenLine',
            }}
            disableGutters
            >
                <IconButton
                size="large"
                color="inherit"
                >
                <Typography component="div" sx={{ fontWeight: 'bold', fontSize:18 }}>
                  About Us
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Typography omponent="div" sx={{ fontWeight: 'bold', fontSize:18 }}>
                  FAQ
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                color="inherit"
                onClick={() => {isAuthenticated ? signOutUser() : signIn()}}
              >
                <Typography  component="div" sx={{ fontWeight: 'bold', fontSize:18 }}>
                  {isAuthenticated ? 'Logout' : 'Login'}
                </Typography>
              </IconButton>

              {isAuthenticated && <IconButton>
               <Avatar/>
              </IconButton>}
              
{/*               <Menu
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
              </Menu> */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
