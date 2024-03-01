import React, { useState } from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { signUp, signIn } from '../components/authentication/auth-services';

const LoginForm = () => {
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
    textInput: { width: "20rem" }
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
    console.log('Log in button clicked, email:', logInEmail, 'password:', logInPassword);
    try {
      const userCredential = await signIn(logInEmail, logInPassword);
      console.log('User logged in successfully:', userCredential.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <Box sx={{
      padding: "2rem",
      borderTop: "1px solid rgb(204, 204, 204)",
      borderBottom: "1px solid rgb(204, 204, 204)",
    }}
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={5}>

      <Stack
        justifyContent="center"
        direction="row"
        gap={5}
      >
        <Stack sx={{
          border: "1px solid rgb(204, 204, 204)",
          padding: "2rem",
          borderRadius: "3em",
          boxShadow: " 0 2px 4px rgba(0, 0, 0, .2)",
        }}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
      <Typography variant="boldHeader" align='center'>Get Started</Typography>

          <Button 
            sx={{
              width:"20rem",
              borderRadius: "3em",
              height: "3em",
              transition: 'background-color .3s, box-shadow .3s',
              padding: '12px 16px 12px 42px',
              border: 'none',
              boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)',
              color: '#757575',
              backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)',
              backgroundColor: 'white',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '12px 11px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '&:hover': {
                boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)'
              },
              '&:active': {
                backgroundColor: '#eeeeee'
              },
              '&:focus': {
                outline: 'none',
                boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25), 0 0 0 3px #c8dafc'
              },
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

          <FormControlLabel  control={<Checkbox defaultChecked />} flexWrap={"wrap"} label="lorem ipsum da ipsum da ipsum" />
          <Button variant="contained" color="inherit" sx={{ borderRadius: "3em" }} onClick={handleSignUp}>Sign up</Button>
      </Stack>

      <Stack sx={{
        border: "1px solid rgb(204, 204, 204)",
        padding:"2rem",
        borderRadius:"3em",
        boxShadow:" 0 2px 4px rgba(0, 0, 0, .2)",
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
