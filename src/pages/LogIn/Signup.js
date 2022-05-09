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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Avatar sx={{ m: 1, bgcolor: "#146152" }}>
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
                        <FormControlLabel value="1" control={<Radio />} label="여성" />
                        <FormControlLabel value="0" control={<Radio />} label="남성" />
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">활동지수</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="PA"
                  // onChange={handleChange}
                >
                  <MenuItem value={0}>비활동적</MenuItem>
                  <MenuItem value={1}>저활동적</MenuItem>
                  <MenuItem value={2}>활동적</MenuItem>
                  <MenuItem value={3}>매우 활동적</MenuItem>
                </Select>
            </FormControl>
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
                      color: '#146152',
                    },
                  }}/>}
                  label="회원 약관 및 개인정보 처리방침에 동의합니다. (필수)"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" 
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: '#146152',
                    },
                  }}/>}
                  label="광고 동의 (선택)"
                />
              </Grid>
            </Grid>
            <CssButton
              href = "/Signin"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'#146152'}}
              
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
  );
}