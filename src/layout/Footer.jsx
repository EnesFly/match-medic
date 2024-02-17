import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const logoPath = 'gs://match-medic-p0.appspot.com/resources/vector_images/logos/logo_gray.svg';
    const storage = getStorage();
    const logoRef = ref(storage, logoPath);

    getDownloadURL(logoRef)
      .then((url) => {
        setLogoUrl(url);
      })
      .catch((error) => {
        console.error("Error loading logo image:", error);
      });
  }, []);

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
            {logoUrl && <img src={logoUrl} alt="Match Medic Logo" style={{ transform: 'scale(0.6)', transformOrigin: 'right', maxWidth: '100%', height: 'auto' }} />}
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
