import {Navigate} from 'react-router-dom';
import profile from "../../assets/images/salad.jpg";
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import "./Identity.css"
import item1 from "./../../assets/images/profile.png"
import {makeStyles, useMediaQuery} from "@material-ui/core";

const Identity = () => {
  return(
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
  );
};

export default Identity;