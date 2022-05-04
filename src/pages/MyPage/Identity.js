import {Navigate} from 'react-router-dom';

const Identity = () => {
  return(
    <div>
        <div className='wrapper'>

          <h2>My 프로필</h2>

          <div className='inner'>

            <div className='profile_img'>
              <img></img>
            </div>

            <div className='info'>
              <div className='name'>
                <span>이름 : </span><span id='name'></span>
              </div>

              <div className='body'>
                <span>키</span><span id='height'></span>
                <span>몸무게</span><span id='weight'></span>
              </div>

              <div className='age&sex'>
                <span>나이</span><span id='age'></span>
                <span>성별</span><span id='sex'></span>
              </div>

              <div className="BMR">
                <span>기초대사량</span><span id='BMR'></span>
              </div>
            </div>

          </div>

        </div>

    </div>
  );
};

export default Identity;