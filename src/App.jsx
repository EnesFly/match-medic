import React, { useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import { db } from "./firebase"; // Make sure this path is correct
import { collection, getDocs } from 'firebase/firestore'; // Import collection and getDocs for Firestore

// Debugging: Added console.log to indicate script start
console.log("App script started.");

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

  // Fetch clinics data from Firestore using the modular approach
  useEffect(() => {
    console.log("Attempting to fetch clinics..."); // Debugging: Log before fetching
    const fetchClinics = async () => {
      try {
        const clinicsCol = collection(db, 'clinics'); // Use the collection function with db and collection name
        const clinicSnapshot = await getDocs(clinicsCol); // Use getDocs to fetch the documents
        console.log(`${clinicSnapshot.docs.length} clinics fetched.`); // Debugging: Log number of docs fetched
        const clinicsData = clinicSnapshot.docs.map(doc => {
          console.log(doc.id, doc.data()); // Debugging: Log each doc data
          return {
            id: doc.id, // Use Firestore doc ID
            image: doc.data().logo, // Assuming the logo URL is stored here
            title: doc.data().name // Assuming the clinic name is stored here
          };
        });
        setState(prevState => ({
          ...prevState,
          clinics: clinicsData
        }));
      } catch (error) {
        console.error("Error fetching clinics:", error); // Debugging: Log any errors
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
