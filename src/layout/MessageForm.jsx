import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '../contexts/isAuth';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Dropzone from '../components/Dropzone'
import Grid from '@mui/material/Grid';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const MessageForm = ({
    backgroundColor,
    clinics
}) => {
    const styles = {
        mainContainer: {
            borderTop: "1px solid rgba(204, 204, 204,0.9)",
            borderBottom: "1px solid rgba(204, 204, 204,0.9)",
            backgroundColor:backgroundColor
        },
        inputMessage: {
            borderRadius: "2rem",
            backgroundColor: "white",
            
        },
        inputFileBrowser: {
            borderRadius: "2rem",
        }
    };
    useEffect(() => {
        const imagePath = 'gs://match-medic-p0.appspot.com/resources/vector_images/message_bubbles.svg';
        const storage = getStorage();
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.error("Error loading image:", error);
            });
    }, []);
    const  {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarState, setSnackbarState] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [checkboxState, setCheckboxState] = useState(false);
    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "messageforms"), {
                message: message,
                timestamp: serverTimestamp(),
            });
            console.log("Document successfully written!");
            setMessage('');
        } catch (e) {
            
            console.error("Error adding document: ", e);
        } finally {
            setSnackbarText("Message sent successfully!");
            setSnackbarState(open);
        }
    };
    
    const validateMessage = () => {
        const checkedClinics = clinics.filter(clinic => clinic.isChecked == true).map(clinic => clinic);
        console.log(clinics);
        if(checkedClinics.length == 0){
            setSnackbarText("Please select at least one clinic.");
            setSnackbarState(true);
            return false;
        }
        if (message.trim() === '') {
            setSnackbarText("Message field is empty.");
            setSnackbarState(true);
            return false;
        }
        if (message.length > 10000) {
            setSnackbarText("Message is too long.");
            setSnackbarState(true);
            return false;
        }
        if(!checkboxState){
            setSnackbarText("Please accept the terms and conditions.");
            setSnackbarState(true);
            return false;
        }
        if(!isAuthenticated){
            setSnackbarText("Please sign in to submit the message.");
            setSnackbarState(true);
            return false;
        }
        return true;
    }
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarState(false);
    };

    return (
        <Box sx={styles.mainContainer}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
            >

            <Stack
                justifyContent="center"
                direction="row"
                sx={{ borderRadius: "2rem" }}
            >

            <Grid
            sx={{
                backgroundColor: backgroundColor
              }}
              container
              justifyContent="center"
              alignItems="center"
              direction="row"
              
            >
                <Grid
                item
                sx={{margin:"40px"}}
                >
                <Stack sx={{
                    border: "1px solid rgb(204, 204, 204)",
                    padding: "2rem",
                    borderRadius: "2rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
                    backgroundColor: "rgb(204, 204, 204)",
                    width: "35rem",
                    minWidth: "35rem",
                }}
                    direction="column"
                    justifyContent="space-between"
                    gap={2}
                >
                    <Typography
                        variant='boldHeader'
                        align='center'
                    >
                        Create your message
                    </Typography>

                    <TextField
                        sx={styles.inputMessage}
                        InputProps={{
                            style: {
                                borderRadius: "2rem",
                                height: "20rem",
                                alignItems: "start",
                            }
                        }}
                        multiline
                        id="outlined-basic"
                        placeholder="Does the clinic cover transportation?&#10;According to my photos, how many grafts do I need?&#10;Will my operation be done by the doctor?..."
                        variant="outlined"
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    />

                    <Box
                        sx={{ justifyContent: "flex-start", alignItems: "center", pl:2}}
                    >
                        <Typography
                            sx={{ fontWeight: "bold", fontSize: "13px" }}
                        >
                            Upload media (optional)
                        </Typography>
                        <Typography
                            sx={{fontSize: "13px" }}
                        >
                            Accepted formats: .jpeg, .png, .jpg
                        </Typography>
                        <Typography
                            sx={{fontSize: "13px" }}
                        >
                            Max File Size: 5MB
                        </Typography>
                    </Box>

                    <Stack
                        direction="column"
                        justifyContent="center"
                        sx={{
                            borderRadius: "2em",
                            backgroundColor: "white",
                            padding:2,
                            '&:hover': {
                                boxShadow: "0 0 0 1px black"  // Shadow mimicking a 1px solid black border
                            }
                        }}
                    >

                        {/* <TextField
                            contentEditable={false}
                            InputProps={{
                                endAdornment:
                                    <Button
                                        onClick={() => {setOpen(!open)}}
                                        variant="contained"
                                        whitespace="nowrap"
                                        disableElevation={true}
                                        size='string'
                                        sx={{
                                            paddingRight: "2rem",
                                            paddingLeft: "2rem",
                                            borderRadius: "3em",
                                            backgroundColor: "rgba(0, 0, 0,0.6)",
                                            height: "2rem",
                                            whiteSpace: "nowrap",
                                            "&:hover": {
                                                backgroundColor: "rgba(115, 139, 130,0.6)",
                                                color: "black",

                                            }

                                        }}
                                    >
                                        <Typography 
                                            sx={{ fontSize: "0.8rem" }} 
                                            variant='h7'>
                                                Upload Files
                                        </Typography>
                                    </Button>,
                                style: {
                                    borderRadius: "1rem",
                                    height: "2rem",
                                    paddingRight: 0,
                                }
                            }}
                            variant="outlined"
                            placeholder='Choose files to upload'
                            sx={{
                                borderRadius: "1rem",
                                margin: "1rem",
                                backgroundColor: "rgba(0, 0, 0, .2)",
                                height: "2rem",
                            }}>
                        </TextField> */}

                        {/* <TextField
                        multiline
                        InputProps={{
                                style: {
                                    borderRadius: "1rem",
                                    height: 150,
                                }
                            }}
                        sx={{
                                margin: "1rem",
                            }}
                        >
                            <Dropzone></Dropzone>
                        </TextField> */}
                        
                        <Dropzone/>
                        

                    </Stack>

                    <FormControlLabel
                        control={
                        <Checkbox
                        onChange={() => setCheckboxState(!checkboxState)}
                        value={checkboxState}
                        />
                        }
                        label={<Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>Accept the end user aggrement</Typography>}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                        onChange={() => setCheckboxState(!checkboxState)}
                        value={checkboxState}
                        />
                        }
                        label={
                            <>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>Stay anonymous</Typography>
                                <Typography sx={{ fontSize: "15px" }}>Message will not include your name or email</Typography>
                            </>
                        }
                    />
                    <Button
                        disableElevation={true}
                        variant="contained"
                        color="inherit"
                        sx={{
                            borderRadius: "3em",
                        }}
                        onClick={()=>{
                            validateMessage()
                            &&
                            handleSubmit()}}
                    >
                        Submit
                    </Button>
                </Stack>
                </Grid>


                <Grid
                item
                sx={{margin:"40px"}}
                >
                    <Stack 
                        sx={{
                            padding: "2rem",
                            borderRadius: "3em",
                            minWidth: "35rem",
                        }}
                    >
                        {imageUrl && <img src={imageUrl} alt="Message Bubbles" style={{ maxWidth: '100%', height: 'auto' }} />}
                    </Stack>
                </Grid>
               
            </Grid>
            </Stack>
            <Snackbar
            open={snackbarState}
            autoHideDuration={4000}
            message={snackbarText}
            onClose={handleSnackbarClose}
            action={
            <React.Fragment>
                <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={()=>{setSnackbarState(!snackbarState);}}
                >
                <CloseIcon />
                </IconButton>
            </React.Fragment>
         }
       />
        </Box>
        
    );
}

export default MessageForm;
