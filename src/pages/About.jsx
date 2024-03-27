import React from 'react'
import Appbar from '../layout/Appbar';
import { useTheme } from '@emotion/react';
const About = () => {
const theme = useTheme();
const paddingRL = "130px";
  return (
    <>  
        <div style={{
        display: "flex", 
        flexDirection: "column", 
        height:"100vh",
        backgroundColor: theme.palette.primary.backgroundDefault,
        }}> 
            <Appbar
            paddingRightLeft={paddingRL}
            />
            <div>About</div>
        </div>
        
    </>
  )
}

export default About