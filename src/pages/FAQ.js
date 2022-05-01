import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // spacing : [30, 50, 70, 90],
  border: `5px solid ${theme.palette.divider}`,
  width : 700,
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
      ? 'rgba(46, 119, 158, .1)'
      : 'rgba(46, 119, 158, .1)',
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
  borderTop: '3px solid rgba(93, 119, 158, .5)',
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{marginBottom:50}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mx : "auto"}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>식단 조절이 필요 없는 사람도 이용할 수 있나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            닙!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mx : "auto"}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>보험은 어쩌구 저쩌구 인가요!?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            예 예 고객님
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mx: "auto"}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>다른 서비스 어쩌구 저쩌구 할 계획은요!?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            업습니다!!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
