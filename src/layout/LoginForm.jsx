import React, { useState } from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { signUp, signIn, googleSignUp } from '../components/authentication/auth-services';
import { useTheme } from '@emotion/react';

const LoginForm = (
  backgroundColor
) => {
  // State for sign-up
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  // Separate state for log-in
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  const inputProps = {
    textInput: {
      style: {
        borderRadius: "3em",
      }
    }
  };

  const styles = {
    textInput: { 
      width: "20rem",
      backgroundColor: "white"
     }
  };

  const handleSignUp = async () => {
    console.log('Sign up button clicked, email:', signUpEmail, 'password:', signUpPassword);
    try {
      await signUp(signUpEmail, signUpPassword);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleSignIn = async () => {
    console.log('Log in button clicked, email:', signUpEmail, 'password:', signUpPassword);
    try {
      const userCredential = await signIn(signUpEmail, signUpPassword);
      console.log('User logged in successfully:', userCredential.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await googleSignUp();
      console.log('Google signup attempt.')
    } catch (error) {
      console.log('Google signup attempt failed:', error.message);
    }

  };

  const theme = useTheme();
  return (
    <Box sx={{
      padding: "2rem",
      backgroundColor: backgroundColor,
      borderTop: "1px solid rgb(204, 204, 204)",
      borderBottom: "1px solid rgb(204, 204, 204)",
    }}
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      >

      <Stack
        justifyContent="center"
        direction="row"
        gap={5}
      >
        <Stack sx={{
          border: "1px solid rgb(204, 204, 204)",
          padding: "2rem",
          borderRadius: "3em",
        }}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
      <Typography variant="boldHeader" align='center'>Get Started</Typography>

          <Button
            onClick={(e) => handleGoogleSignUp()}
            sx={{
              width:"20rem",
              borderRadius: "3em",
              height: "3em",
              transition: 'background-color .3s, box-shadow .3s',
              padding: '12px 16px 12px 42px',
              border: '1px solid ' + theme.palette.primary.borderColor,
              color: '#757575',
              backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)',
              backgroundColor: 'white',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '12px 11px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '&:hover': {
                border: "1px solid black",
              }
              }
            }
          >
            <Typography
            sx={{
              textTransform: 'none',
            }}
            >Sign in w/Google</Typography>
          </Button>

          <TextField
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            label="Email Address"
            variant="outlined"
            size='small'
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />

          <TextField
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            label="Password"
            variant="outlined"
            size='small'
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <Box
           direction="row"
           sx={{
            mt:"1.5rem"
           }}
          >
            <Button 
            variant="contained" 
            color="inherit" 
            sx={{ 
              borderRadius: "3em",
              marginLeft: "1.5rem",
              marginRight: "2rem",
           }} 
            onClick={handleSignUp}>Sign up
            </Button>

            <Button 
            variant="contained" 
            color="inherit" 
            sx={{ 
              borderRadius: "3em",
              marginLeft: "2rem",
              marginRight: "1.5rem",
             }} 
            onClick={handleSignIn}>Log in
            </Button>
          </Box>
      </Stack>

      <Stack sx={{
        border: "1px solid rgb(204, 204, 204)",
        padding:"2rem",
        borderRadius:"3em",
        }}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
        >
            <Stack
            sx={{
              width: "20rem",
            }}
            >
            </Stack>
            
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginForm;
