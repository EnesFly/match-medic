import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import { Typography } from '@mui/material';


const Snackbar = (
  content,
  onClose
) => {
  return (
    <Typography>{content}</Typography>
  )
}

export default Snackbar;