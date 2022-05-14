import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom';
import profile from "../../assets/images/salad.jpg";
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import "./MyPage.css"
import item1 from "./../../assets/images/profile.png"
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({breakpoints});

const MyPage = () => {
  return (
    <div>
      <div className='Container1'>
        <div className='wrapper'> 
          <div className='mypf'>My 프로필</div>
            <div className='inner'>
              <div className='avater {isMobile ? classes.mobile : classes.web}'>
                <Avatar sx={{ bgcolor: deepPurple[200], width:120, height : 120,
                  width:{sm:110},height:{sm:110}}} src = {item1}></Avatar>
                </div>

              <div className='info'>
                <div className='name'>
                  <span id='name'>김국민</span><span>님</span>
                </div>
              
                <div className='agesex'>
                  <span className='age'>
                    <span>나이</span><span id='age'>25</span>
                  </span>
                  <span className='sex'>
                    <span>성별</span><span id='sex'>남자</span>
                  </span>
                </div>

                <div className='body'>
                  <span className="height">
                    <span>키</span><span id='height'>161</span>
                  </span>
                  <span className="weight">
                    <span>몸무게</span><span id='weight'>50</span>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Finance /> */}
      <div className='Container2'>
      <div className='finance'>
      <div className='mypf'>My 금융</div>
      <div className='inner'>
        <div className='graph'>
        <CircularProgress value={40} color={deepPurple[200]} thickness={15} size={90}>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        </div>
        <div className='ment'>

          <div className="username">
            <span id="username">최유연</span><span>님</span>
          </div>
          <div className='day'>
            <span id="day">7</span><span>일 더 성공하면</span>
          </div>
          <div class="benifit">
            <span>우대금리를 </span><span id="benefit">0.5</span>% 더
          </div>
          <div>
            <span>적용받을 수 있어요!</span>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MyPage;