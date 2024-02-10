import React, { useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import { db } from "./firebase"; // Make sure this path is correct

import arcanineImage from './assets/dummyassets/arcanine.gif';
import charizardMegaxImage from './assets/dummyassets/charizard-megax.gif';
import charizardMegayImage from './assets/dummyassets/charizard-megay.gif';
import laprasImage from './assets/dummyassets/lapras.gif';
import dragoniteImage from './assets/dummyassets/dragonite.gif';
import gengarMegaImage from './assets/dummyassets/gengar-mega.gif';

const App = () => {
  const [state, setState] = useState({
    isCheckedArray: [false, false, false, false, false, false],
    clinics: [] // Added state to hold clinics data
  });

  const handleCheckboxChange = (index) => {
    const updatedArray = [...state.isCheckedArray];
    updatedArray[index] = !updatedArray[index];
    setState({
      ...state,
      isCheckedArray: updatedArray
    });
  };

  // Fetch clinics data from Firestore
  useEffect(() => {
    const fetchClinics = async () => {
      const db = firebase.firestore();
      const clinicCollection = await db.collection('clinics').get();
      const clinicsData = clinicCollection.docs.map(doc => ({
        id: doc.id, // Use Firestore doc ID
        image: doc.data().logo, // Assuming the logo URL is stored here
        title: doc.data().name // Assuming the clinic name is stored here
      }));
      setState(prevState => ({
        ...prevState,
        clinics: clinicsData
      }));
    };

    fetchClinics();
  }, []);

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <CssBaseline />
        <Appbar />
        <LoginForm />
        <Typography sx={{paddingTop:1, paddingBottom:2}} variant='h5' align='center'>Select Clinics</Typography>
        <CardGrid
          cardData={state.clinics} // Use fetched clinics data
          onCheckboxChange={handleCheckboxChange}
          isCheckedArray={state.isCheckedArray}
        />
        <ButtonComponent />
        <MessageForm />
      </div>
    </>
  );
}

export default App;
