import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './mainfeature';
import img from "../../assets/images/main.png";
// import { createTheme } from '@mui/material';
import { fontFamily } from '@mui/system';

const mainFeaturedPost = {
  title: '당신만의 건강 관리 도우미',
  description:
    '인공 지능 Assistant JYGY와 함께 "건강한 생활"'+'을 유지해보세요!',
  image: img,
  imageText: 'main image description',
  linkText: '회원가입 하기',
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