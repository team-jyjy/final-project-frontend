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
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setToken} from "./../../../modules/loginStates";
import ua from "./../../../assets/images/profile.png";

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum-Bd',
  },
});

const GreenFont = withStyles({
  root:{
    color:"black"
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
  const token = useSelector(state => state.token);
  const [logState, setLogState] = React.useState({text: null, isLogin: null});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usravatar, setUserAvatar] = React.useState("/static/images/avatar/2.jpg");

  React.useEffect(()=> {
    // console.log(token + "a");
    if(token != null){
      setLogState({text: "Logout", isLogin: true});
      setUserAvatar(ua);
    }else{
      setLogState({text: "Login", isLogin: false});
      setUserAvatar(null);
    }
  },[token]);

  const pages = [
    {menu: '????????????', link: "/foodschedule" }, 
    {menu: '??????', link: "/exercise" },
    {menu: '?????????', link: "/calendar" }, 
    {menu: '????????????', link: "/product" }];

  const settings = [
    {myfunc: 'My Page', link:"/mypage"}, 
    {myfunc: 'Account', link:"/foodschedule"},
  ];




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
    //????????? click??? ?????? ??????????????? ????????? 0?????? : ???????????????.. 1?????? : account, 2???: login
  };

  const handleLoginLogout = (e, isLogin) => {
    
    if(isLogin === true) {
      // set null
      dispatch(setToken(null));
    } else {
      // redirect
      navigate('/signin');

    }
  }

  return (
    //??????
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
            {/* ????????? ?????? */}
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
                  <Link style={{ textDecoration: 'none' }} to={page.link} key={page.menu}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <GreenFont>
                      <Typography textAlign="center"
                      >{page.menu}</Typography>
                      </GreenFont>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1}} display="block">
              <Link to="/">
                <img
                  // src = {logo}
                  src = {logo}
                  width = {100}
                  className={classes.logo_off}
                  // noWrap
                >
                </img>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Link style={{ textDecoration: 'none' }} to={page.link} key={page.menu}>
                <Button
                  key={page.menu}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.menu}
                </Button>
                </Link>
              ))}
              
            </Box>
            

            <Box sx={{ flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0 }}>
                  <Avatar alt="Remy Sharp" src={usravatar}/>
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
                  <Link style={{ textDecoration: 'none', color:'black'}} to={setting.link} key={setting.myfunc}>
                    <MenuItem key={setting.myfunc} onClick={handleCloseUserMenu}> 
                      <Typography textAlign="center" >{setting.myfunc}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <MenuItem onClick={(e)=>{handleLoginLogout(e, logState.isLogin)}}> 
                  <Typography textAlign="center" >{logState.text}</Typography>
                </MenuItem>
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