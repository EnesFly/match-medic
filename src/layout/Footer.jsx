import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#DFDFDF', width: '100%' }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="body1">Having problems?</Typography>
              <Typography variant="body1">info@matchmedic.com</Typography>
              <Typography variant="body1">feel free to check out FAQ</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Logo TODO */}
            <Box>
              {/* Logo TODO */}
              <Typography variant="h6">LOGO PLACEHOLDER</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ borderTop: 1, borderColor: 'grey.500', mt: 2, py: 1 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">© 2024 Match Medic, Inc</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Click for Terms and Conditions</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
