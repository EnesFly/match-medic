import React from 'react'
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const LoginForm = () => {

const inputProps = {
    textInput: {
        style:{
            borderRadius:"3em",

        }} };
const styles={
    textInput:{width:"20rem",
    
  }
}
  return <Box sx={{
    padding:"2rem",
    borderTop:"1px solid rgb(204, 204, 204)",
    borderBottom:"1px solid rgb(204, 204, 204)",
    }}
    justifyContent={"center"}
    alignContent={"center"}
    display={"flex"}
    flexDirection={"column"}
    gap={5}>
    <Typography variant='h5' align='center'> Get Started</Typography>
    <Stack
      justifyContent="center"
      direction="row"
      gap={5}
    >
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
              Create an account
            </Typography>
          
            
            <TextField 
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            id="outlined-basic" 
            label="name" 
            variant="outlined"
            size='small'
            />
            
            <TextField 
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            id="outlined-basic" 
            label="email address" 
            variant="outlined"
            size='small'
            />
            <TextField 
            sx={styles.textInput}
            InputProps={inputProps.textInput}
            id="outlined-basic" 
            label="password"
            variant="outlined"
            size='small'
            />
            
          
          <FormControlLabel  control={<Checkbox defaultChecked />} flexWrap={"wrap"} label="lorem ipsum da ipsum da ipsum" />
          <Button variant="contained" color="inherit" sx={{borderRadius:"3em"}}>Login</Button>
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
                id="outlined-basic" 
                label="email address" 
                variant="outlined"
                size='small'
                />
                
                
                <TextField 
                sx={styles.textInput}
                InputProps={inputProps.textInput}
                id="outlined-basic" 
                label="password" 
                variant="outlined"
                size='small'
                />
            </Stack>
            
            
          
          
          <Button color="inherit" variant="contained" sx={{borderRadius:"3em"}}> Log in</Button>
      </Stack>
    </Stack>
  </Box>
}

export default LoginForm