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
import {styled} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState } from 'react';
import item1 from "./../../assets/images/bg.jpg"
import "./Signup.css"
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';
import { textDecoration } from '@chakra-ui/react';

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

const CssFormControl = styled(FormControl)({
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


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum',
  },
});

export default function Signup() {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [pa, setPa] = useState("");
  const navigate = useNavigate();

  const joinIn = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(nickname);
    console.log(password);
    console.log(height);
    console.log(weight);
    console.log(age);
    console.log(sex);
    console.log(pa);
    axios({
      url:'http://18.237.18.231/api/signup/', //서버 주소
      method:'post',
      data:{
        id : id,
        nickname : nickname,
        password : password,
        height : height,
        weight : weight,
        age : age,
        sex : sex,
        pa : pa,
      }
    }).then((response) => {
      console.log(response);
      // alert("회원가입에 성공하셨습니다.");
      Swal.fire({
        position: 'top-middle',
        icon: 'success',
        title: '회원가입에 성공하셨습니다.',
        showConfirmButton: false,
        timer: 1500
      })

      navigate('/signin');
      // REDIRECT
    }).catch((error)=>{
      console.error(error);
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if(error.response.status === 403) {
          Swal.fire({
            icon: 'error',
            title: '이미 가입된 아이디입니다.',
            text: '혹은 파라미터가 부족합니다.',
            footer: '<a href="">왜 이런 문제가 발생하는 건가요?</a>'
          })
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
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Avatar sx={{ m: 1, bgcolor: "#9509fe" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  name="id"
                  value={id}
                  onChange={({target:{value}})=>setId(value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  name="nickname"
                  value={nickname}
                  onChange={({target:{value}})=>setNickname(value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={({target:{value}})=>setPassword(value)}
                />
              </Grid>
              {/* new */}
              <Grid item xs={6}>
                <CssTextField
                  required
                  fullWidth
                  name="height"
                  label="키"
                  id="height"
                  autoComplete="new-password"
                  value={height}
                  onChange={({target:{value}})=>setHeight(value)}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  required
                  fullWidth
                  name="weight"
                  label="몸무게"
                  id="weight"
                  autoComplete="new-password"
                  value={weight}
                  onChange={({target:{value}})=>setWeight(value)}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  required
                  fullWidth
                  name="age"
                  label="나이"
                  id="age"
                  autoComplete="new-password"
                  value={age}
                  onChange={({target:{value}})=>setAge(value)}
                />
              </Grid>
              <Grid item xs={6}>
                {
                      <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        // value={value}
                        // onChange={handleChange}
                      >
                        <FormControlLabel 
                        value="1" 
                        control={<Radio sx={{
                          [`&, &.${checkboxClasses.checked}`]: {
                            color: '#9509fe',
                          },
                        }}/>} 
                        label="여성"
                        onChange={({target:{value}})=>setSex(value)}
                        />
                        <FormControlLabel 
                        value="0" 
                        control={<Radio sx={{
                          [`&, &.${checkboxClasses.checked}`]: {
                            color: '#9509fe',
                          },
                        }}/>} 
                        label="남성" 
                        onChange={({target:{value}})=>setSex(value)}
                        />
                      </RadioGroup>
                    </FormControl>
                /* <CssTextField
                  required
                  fullWidth
                  name="sex"
                  label="성별"
                  id="sex"
                  autoComplete="new-password"
                /> */}
              </Grid>
              <Grid item xs={12}>
              <CssFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">활동지수</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="pa"
                  onChange={({target:{value}})=>setPa(value)}
                >
                  <MenuItem value={0} >비활동적</MenuItem>
                  <MenuItem value={1} >저활동적</MenuItem>
                  <MenuItem value={2} >활동적</MenuItem>
                  <MenuItem value={3} >매우 활동적</MenuItem>
                </Select>
            </CssFormControl>
                {/* <CssTextField
                  required
                  fullWidth
                  name="pa"
                  label="pa?"
                  id="pa"
                  autoComplete="new-password"
                /> */}
              </Grid>
              

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: '#9509fe',
                    },
                  }}/>}
                  label="회원 약관에 동의합니다."
                />
                <span onClick={()=>window.open('https://imdona.notion.site/JYGY-cd17ae0ac03f445f92408fbc98c23b8f', '_blank')} style={{color:'blue', textDecoration:'underline'}}>필수</span>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" 
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: '#9509fe',
                    },
                  }}/>}
                  label="개인정보 처리방침에 동의합니다."
                />
                <span onClick={()=>window.open('https://imdona.notion.site/88e6f39e74f54098bef460a74ec4dd0e', '_blank')} style={{color:'blue', textDecoration:'underline'}}>필수</span>
              </Grid>
            </Grid>
            <CssButton
              // href = "/Signin"
              type="submit"
              fullWidth
              variant="contained"
              onClick={joinIn}
              sx={{ mt: 3, mb: 2,bgcolor:'#9509fe'}}
              
            >
              회원 가입
            </CssButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Signin" variant="body2">
                  이미 회원이신가요?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}