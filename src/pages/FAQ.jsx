import React from 'react'
import Appbar from '../layout/Appbar';
import { useTheme } from '@emotion/react';


const paddingRL = "130px";
const FAQ = () => {
const theme = useTheme();
  return (
    <>  <div style={{
        display: "flex", 
        flexDirection: "column", 
        height:"100vh",
        backgroundColor: theme.palette.primary.backgroundDefault,
        }}> 
            <Appbar
            paddingRightLeft={paddingRL}
            />
            <div>FAQ</div>
        </div>

    </>
  )
}

export default FAQ