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

import {styled} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
  '& label.Mui-focused':{
    color: '#146152',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#146152',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#146152',
    },
    '&:hover fieldset': {
      borderColor: '#146152',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#146152',
    },
  },
})

const CssButton = styled(Button)({
  '&:hover':{
    backgroundColor:'#146152',
    borderColor: '#b4cf66',
  },
  '&:active':{
    backgroundColor:'#146152'
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
    <Typography variant="body2" color='#146152' align="center" {...props}>
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
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
          <Avatar sx={{ m: 1, bgcolor: '#146152' }}>
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
              // color="success"
            />
            <FormControlLabel
              control={<Checkbox value="remember"
              sx={{
                [`&, &.${checkboxClasses.checked}`]: {
                  color: '#146152',
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
              sx={{ mt: 3, mb: 2, bgcolor:'#146152'}}
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
  );
}