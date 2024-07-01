import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

function Appbar() {

      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

      return (
            <>
        <div style={{marginBottom:'150px'}}></div>

            <AppBar position="fixed" 
                    style={{ paddingLeft: '0', paddingRight: '0', backgroundImage:'#222323', boxShadow:'none' }}>
                  <Container maxWidth="true" sx={{ paddingLeft: '0', paddingRight: '0', background: '#222323', height: '70px', }} >
                        <Toolbar disableGutters sx={{
                              paddingLeft: '0px',
                              paddingRight: '0px',
                              '@media (min-width: 960px)': {
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                              },
                              '@media (min-width: 320x)': {
                                    paddingLeft: '0x',
                                    paddingRight: '0px',
                              }
                        }}>
                              <img
                                    src="../src/assets/Images/VISION (3).ico"
                                    alt="Vision logo"
                                    loading="lazy"
                                    padding='none'
                                    style={{minWidth:'44px'}}
                              />
                              <Box sx={{ display: 'flex', flexDirection:'column'}} >
                                   
                                          <Typography
                                                variant="h7"
                                                noWrap
                                                sx={{
                                                      ml: 2,
                                                      mr: 2,
                                                      mt: 2,
                                                      display: {md: 'flex' },
                                                      fontFamily: 'sans-serif',
                                                      letterSpacing: '.05rem',
                                                      fontSize: isSmallMobile ? '20px' : '1.5rem',
                                                      color: '#F8F4E1',
                                                      textDecoration: 'none',
                                                      fontWeight: 'bold',         
                                                }}
                                                >
                                                VISION SHOP
                                          </Typography>
                                          <Typography variant="caption" sx={{ display: { md: 'flex' }, 
                                                                              fontSize: '12px', ml: 2 ,fontWeight: 'semi-bold',
                                                                              color:'#F8F4E1'      
                                                                        }}>
                                                Quantum-Coders
                                          </Typography>
                              </Box>
                             
                             
                        </Toolbar>
                  </Container>
            </AppBar>
      </>
      );
}
export default Appbar;
