import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './mainfeature';
import img from "../../assets/images/main.png";
// import { createTheme } from '@mui/material';
import { fontFamily } from '@mui/system';

const mainFeaturedPost = {
  title: '서비스 한줄 요약',
  description:
    "서비스 특징 나열~~~서비스 특징 나열~~~~서비스 특징 나열~~~~서비스 특징 나열~~~~서비스 특징 나열~~~~",
  image: img,
  imageText: 'main image description',
  linkText: 'Join Us',
};

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum-Bd',
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}