/* eslint-disable react/prop-types */
import Card from './Card'
import Grid from '@mui/material/Grid';
const CardGrid = ({
    cardData,
    isCheckedArray,
    onCheckboxChange
}) => {
    
  return (
    <div >
        <Grid 
        sx={{marginTop:2, marginBottom: 2}}
        lg="auto"
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={6}
        
        >
            {cardData && cardData.map((card,index) => 
            <Grid item key={card.id}>
                <Card 
                key={card.id}
                image={card.image}
                title={card.title}
                link={card.link}
                isChecked={isCheckedArray[index]}
                onCheckboxChange={()=>{onCheckboxChange(card.id, card.isChecked)}}
            />
            </Grid>
            )} 
        </Grid>
    </div>
  )
}

export default CardGrid;
