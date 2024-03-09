import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import { Typography } from '@mui/material';


const MMSnackbar = (
  message,
  open,
  children
) => {
  return (
    <Snackbar
    message={message}
    open={open}
    >
      {children}
    </Snackbar>
  )
}

export default MMSnackbar;