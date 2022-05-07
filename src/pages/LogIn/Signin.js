import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

// const useStyle = makeStyles({
//   textfield : {
//     color : "#146152",
//     backgroundColor : "#146152",
//     "&textfield:focus":{
//       borderColor : '#146152',
//     },
//   },
// });
// const useStyles = makeStyles({
//   input: {
//     "& input + fieldset":{
//       borderColor:(props) => props.color,
//     },
//     "& input:valid:focus + fieldset" : {
//       borderColor:(props) => props.color,
//     },
//     "& input:valid:hover + fieldset": {
//       borderColor: (props) => props.color,
//     },
//   },
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
    tf : {
      '&:focus':{
        borderColor :"#146152",
      },
    }
    
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
            <TextField
              // InputProps={{className:useStyles({color : "#146152"}).input,}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="아이디 저장"
            />
            <Button
              href = "/"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, }}
              color="success"
            >
              로그인
            </Button>
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