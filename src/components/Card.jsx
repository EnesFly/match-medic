/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function MediaCard({
  image,
  title,
  link,
  isChecked,
  onCheckboxChange
  
}) {
  return (
  <>
        <Card >
      <div style={styles.imageContainer}>
        <CardMedia
          sx={{height:150, width: 150, justifyContent: 'center', alignItems: 'center', objectFit: "contain"}}
          image={image}
          component="img"
          loading="lazy"
        />
      </div>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> 
      </CardActions> */}
    </Card>
    
  </>
  );
}

const styles = {
  imageContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}