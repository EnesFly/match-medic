import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Stack } from '@mui/material';
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
    <Stack
      direction={"row"}
      sx={{ bgcolor: '#DFDFDF', width: '100%', justifyContent: 'space-between', py: 2 }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" >Having problems?</Typography>
              <Typography variant="body2">info@matchmedic.com</Typography>
              <Typography variant="body2">Feel free to check out our FAQ</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'right' }}>
              {logoUrl && <img src={logoUrl} alt="Match Medic Logo" style={{ transform: 'scale(0.9)', transformOrigin: 'right', maxWidth: '100%', height: 'auto' }}  />}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'grey.500', mt: 3, py: 1 }}>
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">          
              <Typography variant="body2">© 2024 Match Medic, Inc.</Typography>          
              <Typography variant="body2">Click for Terms and Conditions</Typography>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Stack>
  );
};

export default Footer;
