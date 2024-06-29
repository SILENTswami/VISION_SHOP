import * as React from 'react';
import Grid from '@mui/material/Grid';

const BottomFooter = () => (
  <div style={{ height: '20px', backgroundColor: '#222323', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '10px'}}>
    © 2024 Quantum-Coders. Made with ❤️
  </div>
);

const Footer = () => {
  return (
    <>
      <Grid container width="100%" minHeight="60px">
        {/* Black Section */}
        <Grid item xs={12} sm={4} md={2} sx={{
          backgroundColor: '#222323',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
        }}>
          {/* Content for the left section */}
          hi
        </Grid>

        {/* Orange Section */}
        <Grid item xs={12} sm={4} md={10} sx={{
          backgroundColor: '#e0583b',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
        }}>
          {/* Content for the right section */}
          This is a prototype testing website.
        </Grid>
      </Grid>
      <BottomFooter />
    </>
  );
};

export default Footer;
