import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

async function getFromFirebaseStorage(imagePath) {
  if (!imagePath) {
    console.error("Invalid image path:", imagePath);
    return ''; // Buraya default bir image atılabilir
  }

  const storage = getStorage();
  const imageRef = ref(storage, imagePath);
  
  try {
    console.log("Fetching image from path:", imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return ''; // Buraya default bir image atılabilir
  }
}

export default function MediaCard({ image, title }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getFromFirebaseStorage(image).then(setImageUrl);
  }, [image]); // Buna gerek var mı tam emin olamadım.

  return (
    <>
      <Card>
        <div style={styles.imageContainer}>
          <CardMedia
            sx={{ height: 150, width: 150, justifyContent: 'center', alignItems: 'center', objectFit: "contain" }}
            image={image} // Use the state variable storing the fetched URL
            component="img"
            loading="lazy"
          />
        </div>
      </Card>
    </>
  );
}

const styles = {
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:"hidden"
  },
checkboxContainer : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}