import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

const pagesInfo = [{ page: 'home', pageLink: '/home' },
{ page: 'events', pageLink: '/events' },
{ page: 'about Us', pageLink: '/aboutUs' },
{ page: 'office Bearers', pageLink: '/officeBearers' }

// add this in the future,req backend
// ,{ page: 'Contact Us', pageLink: '/contactUs' }

];

function Appbar() {

      const location = useLocation();
    
      React.useEffect(() => {
        let path = location.pathname.split('/');
        let correctPath=false;
        
        if(path.length>2&&path[1]&&path[2]!='#'){
            correctPath=false;
        }
        else{
              path = path[1].replace(/([A-Z])/g, ' $1');
              
              pagesInfo.forEach((potentialPage)=>{
                    if(path==potentialPage.page)
                        correctPath=true;
            })
      }
        if(correctPath)
            setActivePage(path);
        else 
            setActivePage('');
      }, [location]);
          
      const [activePage,setActivePage]=React.useState('');
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const isMediumScreen = useMediaQuery('(min-width:600px)');
      const isLargeScreen = useMediaQuery('(min-width:960px)');
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

      const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
            setAnchorElNav(null);
      };
      const navigate = useNavigate();

      const handleClick = (pageInfo) => {
            navigate(pageInfo.pageLink); 
      };

      return (
            <>
        <div style={{marginBottom:'70px'}}></div>

            <AppBar position="fixed" style={{ paddingLeft: '0', paddingRight: '0', background: '#f0f0f0' }}>
                  <Container maxWidth="true" sx={{ paddingLeft: '0', paddingRight: '0', background: '#f0f0f0', height: '70px', }} >
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
                              },
                        }}>
                              <img
                                    src="../src/assets/Images/VISION.png"
                                    alt="Vision logo"
                                    loading="lazy"
                                    style={{
                                          width: isMediumScreen ? (isLargeScreen ? '105px' : '50px') : '50px',
                                    }}
                              />
                              <Box sx={{ display: 'block' }}>
                                    <Link to="/"
                                          onClick={()=>setActivePage('')}
                                          style={{ color: "black", textDecoration: 'none' , fontWeight: 'bold',  }}>
                                          <Typography
                                                variant="h7"
                                                noWrap
                                                sx={{
                                                      ml: 2,
                                                      mr: 2,
                                                      mt: 2,
                                                      display: { xs: 'none', md: 'flex' },
                                                      fontFamily: 'sans-serif',
                                                      letterSpacing: '.05rem',
                                                      fontSize: isSmallMobile ? '20px' : '1.5rem',
                                                      color: 'black',
                                                      textDecoration: 'none',
                                                      fontWeight: 'bold',         
                                                }}
                                                >
                                                VISION SHOP
                                          </Typography>
                                          <Typography variant="caption" sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '12px', ml: 2 ,fontWeight: 'semi-bold' }} gutterBottom>
                                                Quantum-Coders
                                          </Typography>
                                          {/* <Typography
                                                variant="h5"
                                                noWrap
                                                sx={{
                                                      mr: 2,
                                                      ml: 2,
                                                      display: { xs: 'flex', md: 'none' },
                                                      flexGrow: 1,
                                                      fontFamily: 'sans-serif',
                                                      letterSpacing: '0',
                                                      color: 'inherit',
                                                      fontSize: isSmallMobile ? '16px' : '1.25rem',
                                                      textDecoration: 'none',
                                                      
                                                }}
                                                >
                                                NATIONAL SERVICE SCHEME
                                          </Typography> */}
                                          <Typography variant="caption" sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '10px', ml: 2 }} gutterBottom>
                                                BITS Pilani, Hyderabad Campus
                                          </Typography>
                                    </Link>

                              </Box>
                              {/* <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', lg: 'flex' } }}>
                                    {pagesInfo.map((pageInfo) => (
                                          <Button
                                          key={pageInfo.pageLink}
                                          onClick={() => handleClick(pageInfo)}
                                          sx={{
                                                my: 2,
                                                color:activePage==pageInfo.page?'#f1623a':'white',
                                                borderBottom:activePage==pageInfo.page?"1px solid white":'none',
                                                display: 'block',
                                                ':hover': {
                                                      color: '#e0583b',
                                                      cursor: 'pointer',
                                                },
                                          }}
                                          >
                                                {pageInfo.page}
                                          </Button>
                                    ))}
                              </Box> */}
                              {/* <Box

sx={{
      
      flexGrow: 1,
      justifyContent: 'right',
      display: { xs: 'flex', lg: 'none' },
}}>
                                    <IconButton
                                          sx={{ padding: 0, marginRight: '5px' }}
                                          size="large"
                                          aria-label="account of current user"
                                          aria-controls="menu-appbar"
                                          aria-haspopup="true"
                                          onClick={handleOpenNavMenu}
                                          color="inherit"
                                          >
                                          <MenuIcon />
                                    </IconButton>
                                    <Menu
                                          id="menu-appbar"
                                          anchorEl={anchorElNav}
                                          anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                          }}
                                          keepMounted
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                          }}
                                          open={Boolean(anchorElNav)}
                                          onClose={handleCloseNavMenu}
                                          sx={{
                                                display: { xs: 'flex', xl: 'none' },
                                                '& .MuiList-padding': {
                                                      paddingTop: 0,
                                                      paddingBottom: 0,
                                                },
                                          }}
                                          >
                                          <MenuList >
                                                {pagesInfo.map((pageInfo) => (
                                                      <Link to={pageInfo.pageLink}
                                                      key={pageInfo.page}
                                                      style={{
                                                            color: "inherit",
                                                            textDecoration: 'none',
                                                      }}>
                                                            <MenuItem
                                                                  onClick={() => {
                                                                       
                                                                        handleCloseNavMenu();
                                                                  }}
                                                                  sx={{
                                                                        background: '#353a40',
                                                                        color: 'white',
                                                                        ':hover': {
                                                                              color: '#e0583b',
                                                                              background: '#353a40',
                                                                              cursor: 'pointer',
                                                                        },
                                                                  }}>
                                                                  <Typography textAlign="right">{pageInfo.page}</Typography>
                                                            </MenuItem>
                                                      </Link>
                                                ))}
                                          </MenuList>
                                    </Menu>
                              </Box> */}
                        </Toolbar>
                  </Container>
            </AppBar>
      </>
      );
}
export default Appbar;
