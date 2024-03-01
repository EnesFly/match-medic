import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

async function getFromFirebaseStorage(imagePath) {
  if (!imagePath) {
    console.error("Invalid image path:", imagePath);
    return ''; // default image TODO
  }

  const storage = getStorage();
  const imageRef = ref(storage, imagePath);

  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return ''; // default image TODO
  }
}

export default function InfoCard({ image, text, textstyle, cardstyle }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getFromFirebaseStorage(image).then(setImageUrl);
  }, [image]);

  return (
    <Card
    sx={{...cardstyle}}
    >
      <CardMedia
        sx={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center', objectFit: "contain" }}
        image={imageUrl}
        component="img"
        loading="lazy"
      />
      <Typography align="center" sx={{ ...textstyle  }}>
        {text}
      </Typography>
    </Card>
  );
}
