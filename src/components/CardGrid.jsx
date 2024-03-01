/* eslint-disable react/prop-types */
import Card from './Card'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from './CheckBox';
const CardGrid = ({
    cardData,
    isCheckedArray,
    onCheckboxChange
}) => {
    
  return (
    <div >
        <Grid
        lg="auto"
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={6}
        >
            {cardData && cardData.map((card,index) => 
            <Grid item key={index}>
                <Button
                  onClick={() => onCheckboxChange(card.index, card.isChecked)}>
                  <Card 
                  key={index}
                  image={card.image}
                  title={card.name}
                  link={card.link}
                  
              />
                </Button>
                <div style={{display: 'flex', alignItems: 'center', marginTop:10}}>
              <Checkbox
                checked={isCheckedArray[index]}
                onChange={()=>{onCheckboxChange(card.id, card.isChecked)}} />
              <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              multiline
              sx={{
                padding:0, 
                marginBottom: 0,
                fontWeight:600,
                whiteSpace: "nowrap"
              }}
              >
                {card.title}
              </Typography>
                </div>
            </Grid>
            )} 
        </Grid>
    </div>
  )
}

export default CardGrid;
