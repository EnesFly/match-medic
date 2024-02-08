import React from 'react'
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MessageForm = () => {

    const inputProps = {
        textInput: {
          disableUnderline:true,
            style:{
                    borderRadius:"3em",
                    height:"20rem",
                    overflow:"hidden",
                
                
                
    
            }} };
    const styles={
        message:{
          height:"20rem",
          width:"40rem",
          border: "1px solid rgba(68, 68, 68, 0.3)",
          padding:"2rem",
          borderRadius:"3em",
          boxShadow:" 0 2px 4px rgba(0, 0, 0, .2)",
          paddingBottom:"20rem", // Not ideal but works
          display:"flex",
        },
        fileBrowser:{
            borderRadius:"3em",
            backgroundColor:"white",
            alignContent:"flex-start",
            display:"flex",
            justifyContent:"center",
            
        }
    }
  return (
    <Box sx={{
        padding:"2rem",
        borderTop:"1px solid rgb(204, 204, 204)",
        borderBottom:"1px solid rgb(204, 204, 204)",
        borderRadius:"3em"
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
          sx={{borderRadius:"3em"}}
        >
          <Stack sx={{
            border: "1px solid rgb(204, 204, 204)",
            padding:"2rem",
            borderRadius:"3em",
            boxShadow:" 0 2px 4px rgba(0, 0, 0, .2)",
            backgroundColor:"rgb(204, 204, 204)",
            
            
            }}
            overflow={"hidden"}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
    
            >
              <Typography 
                variant='h6'
                align='center'             
                >
                  Create your message
                </Typography>
              
                <input
                placeholder='message'
                style={styles.message}
                ></input>
                
                <TextField 
                sx={styles.fileBrowser}
                InputProps={inputProps.textInput}
                id="outlined-basic"
                placeholder="File Browser"
                variant="outlined"
                size='small'
                InputLabelProps={{shrink: false}}
                hiddenLabel={true}
                
                
                />

                
                
              
              <FormControlLabel  control={<Checkbox defaultChecked />} flexWrap={"wrap"} label="lorem ipsum da ipsum da ipsum" />
              <Button variant="contained" color="inherit" sx={{borderRadius:"3em"}}>Login</Button>
          </Stack>
          <Stack
          sx={{
            border: "1px solid rgba(68, 68, 68, 0.3)",
            padding:"2rem",
            borderRadius:"3em",
            boxShadow:" 0 2px 4px rgba(0, 0, 0, .2)",
            }}
          >

          </Stack>

        </Stack>
      </Box>
  )
}

export default MessageForm;