import React, { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from "../firebase"; // Ensure you have this import for db if not already imported
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const GAP_VALUE = 20; // gap between the image and message form

const MessageForm = () => {
    const styles = {
        mainContainer: {
            padding: "2rem 15rem 2rem 15rem",
            borderTop: "1px solid black",
            borderBottom: "1px solid rgba(204, 204, 204,0.9)",
        },
        inputMessage: {
            borderRadius: "2rem",
            backgroundColor: "white",
        },
        inputFileBrowser: {
            borderRadius: "2rem",
            backgroundColor: "white",
        }
    };

    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

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

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "messageforms"), {
                message: message,
                timestamp: serverTimestamp(),
            });
            console.log("Document successfully written!");
            setMessage(''); // Clear the message field after successful submission
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <Box sx={styles.mainContainer}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
            gap={5}>

            <Stack
                justifyContent="center"
                direction="row"
                gap={GAP_VALUE}
                sx={{ borderRadius: "2rem" }}
            >
                <Stack sx={{
                    border: "1px solid rgb(204, 204, 204)",
                    padding: "2rem",
                    borderRadius: "2rem",
                    boxShadow: " 0 2px 4px rgba(0, 0, 0, .2)",
                    backgroundColor: "rgb(204, 204, 204)",
                    width: "35rem",
                    minWidth: "35rem",
                }}
                    direction="column"
                    justifyContent="space-between"
                    gap={2}
                >
                    <Typography
                        variant='h6'
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
                        id="outlined-basic"
                        placeholder="Hello, I am looking for..."
                        variant="outlined"
                        />

                    <Stack
                        direction="column"
                        justifyContent="center"
                        sx={{
                            borderRadius: "3em",
                            backgroundColor: "white",
                        }}
                    >

                        <TextField
                            contentEditable={false}
                            InputProps={{
                                endAdornment:
                                    <Button
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
                                        <Typography sx={{ fontSize: "0.8rem" }} variant='h7'>Upload Files</Typography>
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
                        </TextField>

                        <TextField
                            InputProps={{
                                style: {
                                    borderRadius: "1rem",
                                }
                            }}
                            sx={{
                                margin: "1rem",
                            }}
                        >

                        </TextField>

                    </Stack>

                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={<Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>Stay anonymous</Typography>}
                    >
                    </FormControlLabel>
                    <Button
                        disableElevation={true}
                        variant="contained"
                        color="inherit"
                        sx={{
                            borderRadius: "3em",
                        }}
                        onClick={handleSubmit}
                    >Login
                    </Button>

                </Stack>
                <Stack // Image display stack
                    sx={{
                        padding: "2rem",
                        borderRadius: "3em",
                        minWidth: "35rem",
                    }}
                >
                    {imageUrl && <img src={imageUrl} alt="Message Bubbles" style={{ maxWidth: '100%', height: 'auto' }} />}
                </Stack>

            </Stack>
        </Box>
    );
}

export default MessageForm;
