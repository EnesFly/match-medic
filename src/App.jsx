import React, { useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ButtonComponent from './components/Button';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import Footer from './layout/Footer';
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import { monitorAuthState } from './components/authentication/auth-services';

console.log("App started.");

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

  const theme = useTheme();

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: 10, height:"100vh", backgroundColor: theme.palette.primary.backgroundDefault}}>
        <CssBaseline />
        <Appbar
        isAuth={isAuthenticated}
        paddingBottom={"84px"}
        />
        <InfoGrid />
        {!isAuthenticated && <LoginForm
        backgroundColor={theme.palette.primary.main}
        />}
        <Typography 
        sx={{
          paddingTop: "1rem",
          backgroundColor: theme.palette.primary.main
          }} variant='boldHeader' align='center'>Select Clinics</Typography>
          <Typography 
        sx={{
          zIndex: 1,
          paddingBottom: "1rem",
          fontSize:"1rem",
          backgroundColor: theme.palette.primary.main
          }} variant='boldHeader' align='center'>*only the best hair transplant clinics from Istanbul, Turkey</Typography>
        <CardGrid
          cardBorderColor={theme.palette.primary.borderColor}
          backgroundColor={theme.palette.primary.main}
          cardData={state.clinics} 
          onCheckboxChange={handleCheckboxChange}
          isCheckedArray={state.isCheckedArray}
        />
        <ButtonComponent 
        backgroundColor={theme.palette.primary.main}
        />
        <MessageForm
        backgroundColor={theme.palette.primary.main}
        />
        <Footer/>
      </div>
    </>
  );
}

export default App;
