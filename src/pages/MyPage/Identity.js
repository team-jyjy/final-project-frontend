import {Navigate} from 'react-router-dom';
import profile from "../../assets/images/salad.jpg";
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import "./Identity.css"

const Identity = () => {
  return(
    <div className='Container1'>
      <div>My 프로필</div>
        <div className='wrapper'>   
          <div className='inner'>
            <div className='avater'>
            <Avatar sx={{ bgcolor: deepOrange[500], width:120, height : 120 }}>사용자</Avatar>
            </div>
            <div className='info'>
              <div className='name'>
                <span id='name'>김국민</span><span>님</span>
              </div>
              
              <div className='agesex'>
                <span className='age'>
                <span>나이</span><span id='age'>여자</span>
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