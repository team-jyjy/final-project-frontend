import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core"
import { hover } from '@testing-library/user-event/dist/hover';
import { ClassNames } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import {styled} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { useState } from 'react';
import "./Signin.css"
import {useDispatch} from "react-redux";
import {setToken} from "./../../modules/loginStates";

import Swal from 'sweetalert2';

const CssTextField = styled(TextField)({
  '& label.Mui-focused':{
    color: '#9509fe',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#9509fe',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#9509fe',
    },
    '&:hover fieldset': {
      borderColor: '#9509fe',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9509fe',
    },
  },
})

const CssButton = styled(Button)({
  '&:hover':{
    backgroundColor:'#9509fe',
    borderColor: '#b4cf66',
  },
  '&:active':{
    backgroundColor:'#9509fe'
  },
  '&:focus':{
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

// const CssCheckBox = styled(Checkbox)({
//   '.Mui-checked' : {
//     color: 'success'
//     }
// })

function Copyright(props) {
  return (
    <Typography variant="body2" color='#9509fe' align="center" {...props}>
      {'Copyright ?? '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(
  {
    typography: {
      fontFamily: 'EliceDigitalBaeum',
    },
  });

export default function Signin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(password);
    axios({
      url:'http://18.237.18.231/api/login/', //?????? ??????
      method:'post',
      data:{
        id : id,
        password : password,
      }
    }).then((response) => {
      console.log(response);
      // localStorage.setItem('token', response.data.token);
      dispatch(setToken(response.data.token));
      // alert("???????????? ?????????????????????.");
      Swal.fire({
        position: 'top-middle',
        icon: 'success',
        title: '???????????? ?????????????????????.',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/');
      // REDIRECT
    }).catch((error)=>{
      console.error(error);
      if (error.response) {
        // ????????? ?????????????????? ????????? 2xx??? ????????? ???????????? ?????? ????????? ??????????????????.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if(error.response.status === 403) {
          // alert("???????????? ??????????????? ?????? ???????????????");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '???????????? ????????? ?????? ???????????????!',
            footer: '<a href="">??? ?????? ????????? ???????????? ??????????</a>'
          })
        }
      }
      else if (error.request) {
        // ????????? ????????? ????????? ????????? ?????? ???????????????.
        // `error.request`??? ??????????????? XMLHttpRequest ???????????? ??????
        // Node.js??? http.ClientRequest ?????????????????????.
        console.log(error.request);
      }
      else {
        // ????????? ???????????? ????????? ???????????? ?????? ????????? ??????????????????.
        console.log('Error', error.message);
      }
      console.log(error.config);
    })


  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div className='Container'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#9509fe' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="????????? ??????"
              name="id"
              autoComplete="id"
              autoFocus
              value={id}
              onChange={({target:{value}})=>setId(value)}
              // color="success"

            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="????????????"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({target:{value}})=>setPassword(value)}
              // color="success"
            />
            <FormControlLabel
              control={<Checkbox value="remember"
              sx={{
                [`&, &.${checkboxClasses.checked}`]: {
                  color: '#9509fe',
                },
              }}
              // color="success"
              />}
              label="????????? ??????"
            />
            <CssButton
              href = "/"
              type="submit"
              fullWidth
              variant="contained"
              onClick={logIn}
              sx={{ mt: 3, mb: 2, bgcolor:'#9509fe'}}
              // color="success"
            >
              ?????????
            </CssButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ??????????????? ????????????????
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"?????? ??????"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}