import * as React from 'react';
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
import {Outlet, useNavigate, Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import logo from "../../../assets/images/logo.png";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { typography } from '@mui/system';

const pages = ['식단관리', '운동',  '캘린더', '상품 소개'];
const settings = ['My Page', 'Account', 'Log In']; // 'Dashboard', 나중에 SignOut(?)

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum-Bd',
  },
});

const GreenFont = withStyles({
  root:{
    color:"#146152"
  }
})(Typography);

const useStyles = makeStyles((theme) => ({
  logo_on: {

    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  logo_off: {

     [theme.breakpoints.up("xs")]: {
      display: "none",
     },
    [theme.breakpoints.only("xs")]: {
      display: "flex",
    }
  },


}));

const Header = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    //여기에 click한 애가 몇번쨰인지 추려서 0번쨰 : 마이페이지.. 1번쨰 : account, 2번: login
  };

  return (
    //시작
    <ThemeProvider theme={theme}>
      <div>
      <header>
      <AppBar position="static" sx={{bgcolor:'white'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box display="block">
              {/* - */}
              <Link to="/">
                <img
                  src = {logo}
                  width = {100}
                  className={classes.logo_on}
                  style={{marginRight : '20px'}}
                >
                </img>
              </Link>
            </Box>
            {/* 모바일 로고 */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}> 
            <GreenFont>
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
              </GreenFont>
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
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <GreenFont>
                    <Typography textAlign="center"
                    >{page}</Typography>
                    </GreenFont>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1}} display="block">
              <img
                // src = {logo}
                src = {logo}
                width = {100}
                className={classes.logo_off}
                // noWrap
              >
              </img>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#146152', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu

                sx={{mt: '45px' }}
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
                    <Typography textAlign="center" >{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      </div>
    </ThemeProvider>
  );
};
export default Header;