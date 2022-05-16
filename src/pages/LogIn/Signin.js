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
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
      url:'http://54.187.241.111/api/login/', //서버 주소
      method:'post',
      data:{
        id : id,
        password : password,
      }
    }).then((response) => {
      console.log(response);
      // localStorage.setItem('token', response.data.token);
      dispatch(setToken(response.data.token));
      alert("로그인에 성공하셨습니다.");
      navigate('/');
      // REDIRECT
    }).catch((error)=>{
      console.error(error);
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if(error.response.status === 403) {
          alert("아이디나 비밀번호를 다시 입력하세요");
        }
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
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
              label="아이디 입력"
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
              label="비밀번호"
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
              label="아이디 저장"
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
              로그인
            </CssButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호를 잊으셨나요?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"회원 가입"}
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