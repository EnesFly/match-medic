/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FilledInput, Stack } from '@mui/material';
import getFromFirebaseStorage from '../utils/getFromFirebaseStorage';
import MMCheckbox from './MMCheckBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/* const Icons = {
  checkboxAdd: 'gs://match-medic-p0.appspot.com/resources/vector_images/generic/checkbox_add.svg',
  checkboxEmpty: 'gs://match-medic-p0.appspot.com/resources/vector_images/generic/checkbox_empty.svg',
  checkboxChecked: 'gs://match-medic-p0.appspot.com/resources/vector_images/generic/checkbox_true.svg',
}; */

const CardGrid = ({
    backgroundColor,
    cardData,
    onCheckboxChange,
    cardBorderColor,
    paddingRightLeft
}) => {
  /* const [checkboxAdd, setcheckboxAdd] = React.useState('');
  const [checkboxEmpty, setcheckboxEmpty] = React.useState('');
  const [checkboxChecked, setcheckboxChecked] = React.useState('');

  React.useEffect(() => {
    getFromFirebaseStorage(Icons.checkboxAdd).then(setcheckboxAdd);
    getFromFirebaseStorage(Icons.checkboxEmpty).then(setcheckboxEmpty);
    getFromFirebaseStorage(Icons.checkboxChecked).then(setcheckboxChecked);
  }, [checkboxAdd, checkboxEmpty, checkboxChecked]); */
  return (
    <Stack
    sx={{
      justifyContent:"center", 
      alignItems:"center",
      backgroundColor: backgroundColor,
      width: "100%",
      margin: '0 auto',
    }}
     >
        <Grid
        sx={{
          pl:"50px",
          pr:"50px",
          width: "100%",
          backgroundColor: backgroundColor,
          justifyContent:"center",
          alignItems:"center",
        }}
        direction={"row"}
        container
        >
            {cardData && Object.values(cardData).map((card, index) =>
            
            <Grid
            item
            lg={2}
            md={4}
            sm={6}
            xs={12}
            key={index}
            sx={{
              display: 'flex', 
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'column',
            }}
          >
                <Button
                  onClick={()=>{onCheckboxChange(card.id)} }>
                  <Card
                  cardBorderColor={cardBorderColor}
                  key={index}
                  image={card.image}
                  title={card.name}
                  link={card.link}
              />
                </Button>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:10}}>
              <FilledInput
              readOnly={true}
              contentEditable = {false}
              disableUnderline = {true}
              sx={{
                borderRadius: "1rem",
                backgroundColor: backgroundColor ,
                "&:hover": { backgroundColor: "transparent" }
              }}
              inputProps={{
                style: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  height:25,
                  textAlign: 'center',
                  fontWeight: 700,
                  borderBottom: 0
                }}
              }
              multiline
              value={card.title}
              >
              </FilledInput>
              <MMCheckbox
                unCheckedIcon={<AddCircleIcon/>}
                checkedIcon={
                <CheckCircleIcon
                style={{ backgroundColor: '#CC8F93', borderRadius: '60%' }}
                />
              }
                checked={card.isChecked}
                onChange={() => onCheckboxChange(card.id)} 
                label={<Typography component="span" sx={{fontSize:"0.75rem"}} >
                  {card.isChecked? "Added!": "Add recipient"}
                </Typography>}
                />
                </div>
            </Grid>
            )} 
        </Grid>
    </Stack>
  )
}

export default CardGrid;
