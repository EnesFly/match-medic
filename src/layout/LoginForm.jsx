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
      <Typography variant='h5' align='center'>Get Started</Typography>
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
          <Typography
            variant='h6'
            align='center'
          >
            Create an account
          </Typography>

          <TextField
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            label="Name"
            variant="outlined"
            size='small'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Typography 
            variant='h6'
            align='center'             
            >
              Already have an account?
            </Typography>
          
            <Stack
                gap={1}
            >
                <TextField
                sx={styles.textInput}
                InputProps={inputProps.textInput}
                label="Email Address"
                variant="outlined"
                size='small'
                value={logInEmail}
                onChange={(e) => setLogInEmail(e.target.value)}
                />
                
                <TextField 
                sx={styles.textInput}
                InputProps={inputProps.textInput}
                label="Password"
                variant="outlined"
                size='small'
                value={logInPassword}
                onChange={(e) => setLogInPassword(e.target.value)}
                />
            </Stack>
            
          <Button color="inherit" variant="contained" sx={{borderRadius:"3em"}} onClick={handleSignIn}> Log in</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginForm;
