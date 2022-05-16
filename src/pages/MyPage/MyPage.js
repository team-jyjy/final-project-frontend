import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom';
import profile from "../../assets/images/salad.jpg";
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import "./MyPage.css"
import item1 from "./../../assets/images/profile.png"
import { extendTheme } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios from 'axios';
import React,{useState,useRef} from 'react'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({breakpoints});

const MyPage = () => {
  const [nickname, setNickname] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [ir, setIr] = useState();
  const [succesday, setSuccessday] = useState();

  //test 가라 mypage api
  useEffect(() => {
    console.log("마이페이지 로딩 완");
    //토큰 캐오기
    let token = localStorage.getItem("token");
    console.log("로컬 스토리지의 토큰 꺼내오기 연습");
    console.log(token);
    let now = new Date();
    let time = now.getFullYear()+"-"+(now.getMonth()+1);
    console.log(time);
    let config = {
      headers : {
        Authorization : "token " + token,
      }
    }
    let data = {
      datetime : time,
    }
    axios.post('http://54.187.241.111/api/Info/',data, config).then((response) => {
      console.log(response);
      // alert("마이페이지 로딩에 성공하셨습니다.");
      //set data...
      setNickname(response.data.nickname);
      setHeight(response.data.height);
      setWeight(response.data.weight);
      setAge(response.data.age);
      setSex(response.data.sex);
      setIr(response.data.ir);
      setSuccessday(30-response.data.success_day);

      // REDIRECT
    }).catch((error)=>{
      console.error(error);
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if(error.response.status === 403) {
          alert("무언가가 잘못 된 듯요");
        }
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }, []);
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
                  <span id='name'>{nickname?nickname:null}</span><span>님</span>
                </div>
              
                <div className='agesex'>
                  <span className='age'>
                    <span>나이</span><span id='age'>{age?age:null}</span>
                  </span>
                  <span className='sex'>
                    <span>성별</span><span id='sex'>{sex?sex:null}</span>
                  </span>
                </div>

                <div className='body'>
                  <span className="height">
                    <span>키</span><span id='height'>{height?height:null}</span>
                  </span>
                  <span className="weight">
                    <span>몸무게</span><span id='weight'>{weight?weight:null}</span>
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
            <span id="username">{nickname?nickname:null}</span><span>님</span>
          </div>
          <div className='day'>
            <span id="day">{succesday?succesday:null}</span><span>일 더 성공하면</span>
          </div>
          <div class="benifit">
            <span>우대금리를 </span><span id="benefit">{ir?ir:null}</span>% 더
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