import React, { useContext, useEffect, useState } from 'react';
import Appbar from './layout/Appbar';
import LoginForm from './layout/LoginForm';
import { CssBaseline, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardGrid from './components/CardGrid';
import MessageForm from './layout/MessageForm';
import Footer from './layout/Footer';
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import { monitorAuthState } from './components/authentication/auth-services';
import { AuthContext } from './contexts/isAuth';
console.log("App started.");

import InfoGrid from './components/InfoGrid';

const App = () => {
  const [state, setState] = useState({
    clinics: [] // State to hold clinics data
  });
  const [isLoading, setLoading] = useState(true);
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  const {clinics} = state;

  /* useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = monitorAuthState((isAuthenticated) => {
      console.log("User authentication status:", isAuthenticated);
      setIsAuthenticated(isAuthenticated);
    });
    return () => {
      console.log("Cleaning up auth state listener");
      unsubscribe();
    };
  }, []); */

  const handleCheckboxChange = (id) => {
    const updatedClinics = clinics.map(clinic => {
      if (clinic.id === id) {
        return { ...clinic, isChecked: !clinic.isChecked };
      }
      return clinic;
    });
  
    setState({ ...state, clinics: updatedClinics });
  };

const fetchClinics = async () => {
  /* console.log("Attempting to fetch clinics...");  */
  try {
    const clinicsCol = collection(db, 'clinics'); 
    const clinicSnapshot = await getDocs(clinicsCol); 
    /* console.log(`${clinicSnapshot.docs.length} clinics fetched.`); */
    const clinicsData = clinicSnapshot.docs.map(doc => {
      /* console.log(doc.id, doc.data()); */
      return {
        id: doc.id, 
        image: doc.data().logo, 
        title: doc.data().name,
        isChecked: false
      };
    });
    setState(prevState => ({
      ...prevState,
      clinics: clinicsData
    }));
  } catch (error) {
    
    /* console.error("Error fetching clinics:", error); */ 
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchClinics();
  }, []);

  const theme = useTheme();

  return (
    <>
      <div style={{
        display: "flex", 
        flexDirection: "column", 
        gap: 10, 
        height:"100vh", 
        backgroundColor: theme.palette.primary.backgroundDefault,
        }}>
        <CssBaseline />
        <Appbar
        paddingBottom={"84px"}
        />
        <InfoGrid />
        {!isAuthenticated && <LoginForm
        backgroundColor={theme.palette.primary.main}
        />}
        <Typography 
        sx={{
          backgroundColor: theme.palette.primary.main
          }} variant='boldHeader' align='center'>Select Clinics</Typography>
          <Typography 
        sx={{
          zIndex: 1,
          fontSize:"1rem",
          backgroundColor: theme.palette.primary.main
          }} variant='boldHeader' align='center'>*only the best hair transplant clinics from Istanbul, Turkey</Typography>
        {!isLoading && <CardGrid
          cardBorderColor={theme.palette.primary.borderColor}
          backgroundColor={theme.palette.primary.main}
          cardData={!isLoading && clinics}
          onCheckboxChange={handleCheckboxChange}
        />}
        <MessageForm
        backgroundColor={theme.palette.primary.main}
        clinics={isLoading ? [] : clinics}
        />
        <Footer/>
      </div>
    </>
  );
}

export default App;
