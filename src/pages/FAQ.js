import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { RoundedCorner } from '@material-ui/icons';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // spacing : [30, 50, 70, 90],
  //border: `5px solid ${theme.palette.divider}`,
  border: `5px solid rgba(149, 9, 254, .5)`,
  width : '70%',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
    // 칸 배경
      ? theme.palette.grey[100]
      : theme.palette.grey[100],
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // 사이 배경
  borderTop: '3px solid rgba(149, 9, 254, .5)',
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    // <div style={{marginBottom:150}}>
    <div style={{marginBottom:10}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mx : "auto"}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontFamily={'EliceDigitalBaeum'}>운동 서비스는 언제 오픈 예정인가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={'EliceDigitalBaeum'}>
          2022년 6월 중에 오픈 예정입니다. 현재 Team JYGY에서 열심히 개발 중이니 기대해주세요!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mx : "auto"}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography fontFamily={'EliceDigitalBaeum'}>중도에 포기하면 금리 혜택에 불이익이 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={'EliceDigitalBaeum'}>
            챌린지 중도 포지시, 기본 금리 혜택인 1.5%가 적용됩니다
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mx: "auto"}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography fontFamily={'EliceDigitalBaeum'}>적금 상품 가입은 어디에서 할 수 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={'EliceDigitalBaeum'}>
           KB challennge 적금의 경우 모바일과 홈페이지 3가지 채널을 통해 가입 가능합니다.<br></br>
우선, 모바일의 경우 KB국민은행의 어플리케이션인 KB스타뱅킹을 통해 가입가능합니다.<br></br>
홈페이지에서는 KB모바일브랜치를 통해 별도의 앱 설치나 공인인증서 없이도 상품의 가입이 가능합니다.<br></br>
마지막으론 KB국민은행 영업지점을 방문해주시면 좀 더 상세한 설명과 함께 해당 상품을 이용하길 수 있습니다.<br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
