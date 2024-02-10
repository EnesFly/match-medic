import React, { useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore'; 

console.log("App script started.");

// 
import arcanineImage from './assets/dummyassets/arcanine.gif';
import charizardMegaxImage from './assets/dummyassets/charizard-megax.gif';
import charizardMegayImage from './assets/dummyassets/charizard-megay.gif';
import laprasImage from './assets/dummyassets/lapras.gif';
import dragoniteImage from './assets/dummyassets/dragonite.gif';
import gengarMegaImage from './assets/dummyassets/gengar-mega.gif';

const App = () => {
  const [state, setState] = useState({
    isCheckedArray: [false, false, false, false, false, false],
    clinics: [] // State to hold clinics data
  });

  const handleCheckboxChange = (index) => {
    const updatedArray = [...state.isCheckedArray];
    updatedArray[index] = !updatedArray[index];
    setState({
      ...state,
      isCheckedArray: updatedArray
    });
  };

  useEffect(() => {
    console.log("Attempting to fetch clinics..."); 
    const fetchClinics = async () => {
      try {
        const clinicsCol = collection(db, 'clinics'); 
        const clinicSnapshot = await getDocs(clinicsCol); 
        console.log(`${clinicSnapshot.docs.length} clinics fetched.`); 
        const clinicsData = clinicSnapshot.docs.map(doc => {
          console.log(doc.id, doc.data()); 
          return {
            id: doc.id, 
            image: doc.data().logo, 
            title: doc.data().name 
          };
        });
        setState(prevState => ({
          ...prevState,
          clinics: clinicsData
        }));
      } catch (error) {
        console.error("Error fetching clinics:", error); 
      }
    };

    fetchClinics();
  }, []);

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: 10}}>
        <CssBaseline />
        <Appbar />
        <LoginForm />
        <Typography sx={{paddingTop: 1, paddingBottom: 2}} variant='h5' align='center'>Select Clinics</Typography>
        <CardGrid
          cardData={state.clinics} 
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
