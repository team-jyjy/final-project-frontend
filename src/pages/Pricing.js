import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum',
  },
}); 

const tiers = [
  {
    title: '무료 이용',
    price: '0',
    description: [
      '식단 관리 1달 무료 이용',
      '어쩌구',
      '저쩌구'
    ],
    buttonText: '회원가입 후 이용',
    buttonVariant: 'outlined',
  },
  {
    title: '1년 정액권',
    subheader: 'Most popular',
    price: '5',
    description: [
      '최대 3달의 식단 관리',
      '어쩌구',
      '저쩌구'
    ],
    buttonText: '지금 바로 시작하기',
    buttonVariant: 'contained',
  },
  {
    title: '평생 회원',
    price: '4',
    description: [
      '평생 식단 관리 가능(?)',
      '어쩌구',
      '저쩌구'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          fontSize={'4.5vw'}
          align="center"
          color="text.primary"
          gutterBottom
          fontFamily={'EliceDigitalBaeum'}
        >
          나의 건강관리
        </Typography>
        <Typography
          fontSize={'2.5vw'}
          align="center" 
          color="text.secondary" 
          component="p"
          fontFamily={'EliceDigitalBaeum'}>
          적합한 플랜을 찾아보세요
        </Typography>
      </Container>
      {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    >
                        <Typography component="h2" fontSize={'3vw'} color="text.primary" fontFamily={'EliceDigitalBaeum'}>
                          ${tier.price}
                        </Typography>

                      <Typography fontSize={'2.5vw'} color="text.secondary" fontFamily={'EliceDigitalBaeum'}>
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          // variant="subtitle1"
                          fontSize={'1.5vw'}
                          align="center"
                          key={line}
                          fontFamily={'EliceDigitalBaeum'}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant}
                    >
                    <Typography fontFamily={'EliceDigitalBaeum'}>
                      {tier.buttonText}
                    </Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}