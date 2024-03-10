import React, { useState, useEffect } from 'react';
import Card from './Card';
import InfoCard from './InfoCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const infoSteps = [
  {
    image: 'gs://match-medic-p0.appspot.com/resources/vector_images/infogrid_1_image.svg',
    text: 'Select hair transplant clinics Choose as many clinics as you want as your recipients'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/resources/vector_images/infogrid_2_image.svg',
    text: 'Ask for anything! Write your message and attach your photos which will be collectively delivered to your recipient clinics'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/resources/vector_images/infogrid_3_image.svg',
    text: 'Get replies collectively Match Medic will make sure that you get your replies as fast as possible in an organized way'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/resources/vector_images/infogrid_4_image.svg',
    text: 'Choose the best offer! Inspect replies, compare prices and choose the best option for you in one place!'
  }
];

const arrowImagePath = 'gs://match-medic-p0.appspot.com/resources/vector_images/generic/arrow.svg';

const InfoGrid = () => {
  const [arrowUrl, setArrowUrl] = useState('');

  useEffect(() => {
    getFromFirebaseStorage(arrowImagePath).then(setArrowUrl);
  }, []);

  async function getFromFirebaseStorage(imagePath) {
    if (!imagePath) {
      console.error("Invalid image path:", imagePath);
      return '';
    }

    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    try {
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return '';
    }
  }

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="boldHeader" component="h2" gutterBottom>
        How Match Medic works?
      </Typography>
      <Grid item container justifyContent="center" alignItems="center" spacing={2}>
        {infoSteps.map((step, index) => (
          <React.Fragment key={index}>
            <Grid item lg={1.5}>
              <InfoCard 
              image={step.image} 
              text={step.text} 
              textstyle={{ fontSize: '0.75rem'}} 
              cardstyle={{
                width:'200px', 
                height:'250px', 
                border:"1px solid rgb(204, 204, 204)",
                borderRadius:"2rem",
                padding:"0.5rem",
                boxShadow: 0 ,}}//Bad practice take them to theme or create a style object
              />
            </Grid>
            {index < infoSteps.length - 1 && arrowUrl && (
              <Grid item style={{ maxWidth: '64px'}}>
                <img 
                  src={arrowUrl} 
                  alt="Arrow" 
                  style={{ width: '100%', height: 'auto', }} 
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default InfoGrid;
