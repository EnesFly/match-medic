
import React from 'react';
import Appbar from './layout/Appbar'
import { CssBaseline } from '@mui/material';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';

import arcanineImage from './assets/dummyassets/arcanine.gif';
import charizardMegaxImage from './assets/dummyassets/charizard-megax.gif';
import charizardMegayImage from './assets/dummyassets/charizard-megay.gif';
import laprasImage from './assets/dummyassets/lapras.gif';
import dragoniteImage from './assets/dummyassets/dragonite.gif';
import gengarMegaImage from './assets/dummyassets/gengar-mega.gif';

const App = () => {
  const [state, setState] = React.useState({
    isCheckedArray : [false, false, false, false, false, false]
  });

  const handleCheckboxChange = (index) => {
    const updatedArray = [...state.isCheckedArray];
    updatedArray[index] = !updatedArray[index];
    setState({
      ...state,
      isCheckedArray: updatedArray
    });
  };
  
  
//Clinics ll come from API?
const DummyData = [
  {
    id: 0,
    image: arcanineImage,
    title: 'Card 1',
  },
  {
    id: 1,
    image: charizardMegaxImage,
    title: 'Card 2',
  },
  {
    id: 2,
    image: charizardMegayImage,
    title: 'Card 3',
  },
  {
    id: 3,
    image: laprasImage,
    title: 'Card 4',
  },
  {
    id: 4,
    image: dragoniteImage,
    title: 'Card 5',
  },
  {
    id: 5,
    image: gengarMegaImage,
    title: 'Card 6',
  },
];

  
  return (
    <>
      <CssBaseline></CssBaseline>
      <Appbar/>
      <CardGrid
        cardData = {DummyData}
        onCheckboxChange={handleCheckboxChange}
        isCheckedArray={state.isCheckedArray}
      />

      <ButtonComponent/>
    </>
  )
}

export default App;
