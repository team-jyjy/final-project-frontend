// 0518 오전0112 성공하다!!!!!
// import * as React from 'react';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useEffect } from 'react';
import './Calendar.css';
import yesimg from './../../assets/images/yes.png';
import ModalComp from './ModalComp'
import {useNavigate} from 'react-router-dom'

// 백엔드 소통용
import axios from 'axios';
import {useSelector} from "react-redux";
import Swal from 'sweetalert2';
import styled from 'styled-components';

const CalanderWrapper = styled.div`
  position: 'relative',
`

//// 캘린더 시작!
const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  // 모달창 상태 디폴트 off

  // 날짜 데이터 상태로 받기(for modal)
  const [date, setDate] = useState('테스트');

  // 상세보기를 위한 상태 정의
  const [nickname, setNickname] = useState('김민지');
  const [carbo, setCarbo] = useState(50);
  const [protein, setProtein] = useState(30);
  const [fat, setFat] = useState(20);
  const [breakfast, setBreakfast] = useState(800);
  const [lunch, setLunch] = useState(700);
  const [dinner, setDinner] = useState(900);
  const [totalcal, setTotalcal] = useState(2400);
  const [goalcal, setGoalcal] = useState(2500);

  //// 통신 시작
  const token = useSelector(state => state.token);
  const navigate = useNavigate();

  // 달력 이모지를 위한 상태 정의
  const [events, setEvents] = useState([]);

  // response 미리 정의해서 비동기에서 글로벌로 저장해두기
  const [repons, SetRepons] = useState();


  //백엔드와 통신
  useEffect(() => {
    console.log("캘린더 로딩 완");
    // 백엔드에 보내줄 데이터
    let now = new Date();
    let time = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
    // let time = '2022-5-17'
    // console.log(time);
    // console.log("token :");
    // console.log(token);
    let config = {
      headers : {
        Authorization : "token " + token,
      }
    }

    let data = {
      datetime : time,
    }

    axios.post('http://18.237.18.231/food/calendar_day_info/',data, config).then((response) => {
      // 응답 받으면
      // console.log(response);
      console.log('응답데이터확인')
      console.log(response.data);
      SetRepons(response.data)  // 글로벌에 저장

      // response 받은 값 길이만큼 반복 -> 성공한 날짜만 이벤트 띄우기(조건문 1로 바꿔줘야함/ 일단 데이터 없어서 0으로함)
      var events = [];
      for (var i=0;i<response.data.length;i++) {
        if (response.data[i].success_day === 1) {
          let now1 = new Date(2022, 5, response.data[i].day);
          let time1 = now1.getFullYear()+"-"+((now1.getMonth()) > 9 ? (now1.getMonth()).toString() : "0" + (now1.getMonth())) +"-"+((now1.getDate()) > 9 ? (now1.getDate()).toString() : "0" + (now1.getDate()));
          var e = { title: '', date: time1, color: '#ffba4a' };
          events.push(e);
        }
      }

      console.log(events);
      setEvents(events);
      setNickname(response.data[0].nickname)
      // REDIRECT
    }).catch((error)=>{
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if(error.response.status === 403) {
        }
        if(error.response.status === 401) {
          Swal.fire(
            '로그인을 하셨나요?',
            '로그인 화면으로 이동합니다.',
            'question'
          )
          navigate('/signin');
        }
      }
      else if (error.request) {
        console.log(error.request);
      }
      else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }, []);


  // 날짜 클릭 함수
  const handleDateClick = (arg) => {
    // alert(arg.dateStr)
    setModalIsOpen(true)
    setDate(arg.dateStr) // 모달로 넘길 날짜
    // console.log(data)  //2022-05-01 이렇게 나옴

    // 날짜만 빼서 위에 비동기에서 받아온 응답에 인덱싱
    const day = arg.dateStr.substring(8, date.length) - 1
    console.log(repons[day])
    const day_info = repons[day]

    // 모달에 넘길 데이터들 세팅
    // setCarbo(day_info.ratio_carbo)
    setCarbo(parseFloat(day_info.ratio_carbo))
    setProtein(parseFloat(day_info.ratio_protein))
    setFat(parseFloat(day_info.ratio_fat))
    setBreakfast(day_info.breakfast_cal)
    setLunch(day_info.lunch_cal)
    setDinner(day_info.dinner_cal)
    setTotalcal(day_info.total_cal)
    setGoalcal(day_info.goal_cal)
  }

  function renderEventContent(eventInfo) {
    // 이 자리에 삼항연산자 걸기 -> const로 새로 선언한 애를 밑에 넣어주기
    //

    return (
      <>
        {/* 이벤트 정보 */}
        {/* <b>{eventInfo.timeText}</b> */}
        {/* <i>{eventInfo.event.title}</i> */}

        {/* 이모지만 쓸 때 추가하기 */}
        {/* <span style = {{color: 'white'}}><b>__</b></span> */}

        <img src = { yesimg } alt = 'noting' style = {{height: '40%', width: '40%', margin_left: 'auto', margin_right: 'auto'}} />
        <span style = {{color: 'white'}}><b>성공!</b></span>
      </>
    )
  }

  return (
    <CalanderWrapper>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        dateClick={handleDateClick}

        // 이벤트 표시
        events={ events}
        />

    {/* 자식에게 물려주기 */}
    <ModalComp
    modalIsOpen = {modalIsOpen}
    setModalIsOpen = {setModalIsOpen}
    date = {date}
    nickname = {nickname}
    carbo = {carbo}
    protein = {protein}
    fat = {fat}
    breakfast = {breakfast}
    lunch = {lunch}
    dinner = {dinner}
    totalcal = {totalcal}
    goalcal = {goalcal}
    />

  </CalanderWrapper>
  );
}

export default Calendar;