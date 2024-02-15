import React from 'react';
import Card from './Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const infoSteps = [
  {
    image: 'gs://match-medic-p0.appspot.com/info_panel/hair-transplant.png',
    text: 'Select hair transplant clinics* Choose as many clinics as you want as your recipients'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/info_panel/hair-transplant.png',
    text: 'Ask for anything! Write your message and attach your photos which will be collectively delivered to your recipient clinics'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/info_panel/hair-transplant.png',
    text: 'Get replies collectively Match Medic will make sure that you get your replies as fast as possible in an organized way'
  },
  {
    image: 'gs://match-medic-p0.appspot.com/info_panel/hair-transplant.png',
    text: 'Choose the best offer! Inspect replies, compare prices and choose the best option for you in one place!'
  }
];

const arrowImagePath = 'gs://match-medic-p0.appspot.com/info_panel/right.png';

const InfoGrid = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h4" component="h2" gutterBottom>
        How Match Medic works?
      </Typography>
      <Grid item container justifyContent="center" alignItems="center" spacing={2}>
        {infoSteps.map((step, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Grid item>
                <img src={arrowImagePath} alt="Arrow" />
              </Grid>
            )}
            <Grid item>
              <Card image={step.image} title={step.text} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default InfoGrid;
