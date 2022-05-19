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
import {styled} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CssButton = styled(Button)({
  // '&':{
  //   backgroundColor:"#146152"
  // },
  '&:hover':{
    backgroundColor:'#f9f9f9',
    borderColor: '#46057f',
    color : '#46057f',
    
  },
  '&:active':{
    backgroundColor:'#46057f'
  },
  '&:focus':{
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const theme = createTheme({
  typography: {
    fontFamily: 'EliceDigitalBaeum',
  },
}); 

const tiers = [
  {
    title: '12개월',
    price: '2.15',
    description: [
      '기본 금리 1.5%',
      '챌린지 성공 시,',
      '우대 금리 0.65%'
    ],
    buttonText: '가입하기',
    buttonVariant: 'outlined',
  },
  {
    title: '24개월',
    subheader: 'Most popular',
    price: '2.25',
    description: [
      '기본 금리 1.5%',
      '챌린지 성공 시,',
      '우대 금리 0.75%'
    ],
    buttonText: '가입하기',
    buttonVariant: 'contained',
  },
  {
    title: '36개월',
    price: '2.45',
    description: [
      '기본 금리 1.5%',
      '챌린지 성공 시,',
      '우대 금리 0.95%'
    ],
    buttonText: '가입하기',
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
          color="black"
          gutterBottom
          fontFamily={'EliceDigitalBaeum'}
        >
          KB Challenge 적금
        </Typography>
        <Typography
          fontSize={'2.5vw'}
          align="center" 
          color="text.secondary" 
          component="p"
          fontFamily={'EliceDigitalBaeum'}>
          원하는 기간을 선택해보세요
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
                          ? theme.palette.grey[100]
                          : theme.palette.grey[700],
                      color:'black',
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
                        <Typography component="h2" fontSize={'3vw'} fontFamily={'EliceDigitalBaeum'} sx={{color:'black'}}>
                          {tier.price}
                        </Typography>

                      <Typography fontSize={'2.5vw'} color="text.secondary" fontFamily={'EliceDigitalBaeum'}>
                        %
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
                    <CssButton fullWidth variant={tier.buttonVariant}
                    sx={{borderColor:"#b4cf66", color:"white", bgcolor:"#46057f"}}
                    >
                    <Typography fontFamily={'EliceDigitalBaeum'}>
                      {tier.buttonText}
                    </Typography>
                    </CssButton>
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