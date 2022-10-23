import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { getBottomNavigationUtilityClass } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();

  const handleOpenNavMenu = () => {
    setAnchorElNav(getBottomNavigationUtilityClass);
  };
  const handleOpenUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: '#012169'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* BELOW IS FOR HOW THE NAV BAR LOOKS ON MOBILE*/}

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GEN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
                  <Link style={{color: 'black', textDecoration: 'none'}} to='/'>Home</Link>
                </MenuItem>
                <MenuItem key={'WorkOuts'} onClick={handleCloseNavMenu}>
                  <Link style={{color: 'black', textDecoration: 'none'}} to='/Workouts'>WorkOuts</Link>
                </MenuItem>
                <MenuItem key={'Nutrition'} onClick={handleCloseNavMenu}>
                  <Link style={{color: 'black', textDecoration: 'none'}} to='/Nutrition'>Nutrition</Link>
                </MenuItem>
            </Menu>
          </Box>

          {/* BELOW IS FOR HOW THE NAV BAR LOOKS ON A BIGGER SCREEN LIKE COMPUTER*/}

          { /*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/ }

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            GEN
          </Typography>

            {/* USE COLUMNGAP PROPERTY TO CHANGE SPACING BETWEEN EACH PAGE ON THE NAV BAR */}

          <Box sx={{ flexGrow: 1, justifyContent: 'center', columnGap: '4%', display: { xs: 'none', md: 'flex' }}}>
              <Button
                key={'Home'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{color: 'white', fontWeight: 'bold', textDecoration: 'none'}} to='/'>Home</Link>
              </Button>

              <Button
                key={'Nutrition'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{color: 'white', fontWeight: 'bold', textDecoration: 'none'}} to='/Nutrition'>Nutrition</Link>
              </Button>

              <Button
                key={'WorkOuts'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{color: 'white', fontWeight: 'bold', textDecoration: 'none'}} to='/Workouts'>WorkOuts</Link>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Navbar;