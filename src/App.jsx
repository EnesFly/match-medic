import React, { useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import Footer from './layout/Footer';
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import { monitorAuthState } from './components/authentication/auth-services';

console.log("App started.");

import arcanineImage from './assets/dummyassets/arcanine.gif';
import charizardMegaxImage from './assets/dummyassets/charizard-megax.gif';
import charizardMegayImage from './assets/dummyassets/charizard-megay.gif';
import laprasImage from './assets/dummyassets/lapras.gif';
import dragoniteImage from './assets/dummyassets/dragonite.gif';
import gengarMegaImage from './assets/dummyassets/gengar-mega.gif';
import InfoGrid from './components/InfoGrid';

const App = () => {
  const [state, setState] = useState({
    isCheckedArray: [false, false, false, false, false, false],
    clinics: [] // State to hold clinics data
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = monitorAuthState((isAuthenticated) => {
      console.log("User authentication status:", isAuthenticated);
      setIsAuthenticated(isAuthenticated);
    });
    return () => {
      console.log("Cleaning up auth state listener");
      unsubscribe();
    };
  }, []);
  

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
  {
    id: 6,
    image: arcanineImage,
    title: 'Card 1',
  },
  {
    id: 7,
    image: charizardMegaxImage,
    title: 'Card 2',
  },
  {
    id: 8,
    image: charizardMegayImage,
    title: 'Card 3',
  },
  {
    id: 9,
    image: laprasImage,
    title: 'Card 4',
  },
  {
    id: 10,
    image: dragoniteImage,
    title: 'Card 5',
  },
  {
    id: 11,
    image: gengarMegaImage,
    title: 'Card 6',
  },
  {
    id: 12,
    image: gengarMegaImage,
    title: 'Card 6',
  },
  {
    id: 12,
    image: gengarMegaImage,
    title: 'Card 6',
    
  },
  {
    id: 10,
    image: dragoniteImage,
    title: 'Card 5',
  },
  {
    id: 11,
    image: gengarMegaImage,
    title: 'Card 6',
  },
  {
    id: 12,
    image: gengarMegaImage,
    title: 'Card 6',
  },
  {
    id: 12,
    image: gengarMegaImage,
    title: 'Card 6',
    
  },
];

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: 10, height:"100vh"}}>
        <CssBaseline />
        <Appbar
        isAuth={isAuthenticated}
        paddingBottom={"84px"}
        />
        <InfoGrid />
        {!isAuthenticated && <LoginForm />}
        <Typography sx={{paddingTop: 1, paddingBottom: 2}} variant='boldHeader' align='center'>Select Clinics</Typography>
        <CardGrid
          cardData={state.clinics} 
          onCheckboxChange={handleCheckboxChange}
          isCheckedArray={state.isCheckedArray}
        />
        <ButtonComponent />
        <MessageForm />
        <Footer/>
      </div>
    </>
  );
}

export default App;
