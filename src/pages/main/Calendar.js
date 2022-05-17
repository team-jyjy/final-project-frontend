// 처음 구현한 코드
// import * as React from 'react';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useEffect } from 'react';
import './Calendar.css';
import yesimg from './yes.png'
import ModalComp from './ModalComp'
import {useNavigate} from 'react-router-dom'

// 백엔드로
import axios from 'axios';
import {useSelector} from "react-redux";

import styled from 'styled-components';

const CalanderWrapper = styled.div`
  position: 'relative',
`

// 캘린더 시작
const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // 날짜 데이터 상태로 받기(for modal)
  const [date, setDate] = useState('테스트');

  //////////////// 달력 이모지 표시를 위한 통신
  const token = useSelector(state => state.token);
  const navigate = useNavigate();

  // 백에 보내줄 데이터
  let now = new Date();
  let time = now.getFullYear()+"-"+(now.getMonth()+1);
  let day = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();

  // 백에서 받을 데이터
  // const success = [];

  //백에 보내기

  useEffect(() => {
    console.log("캘린더 로딩 완");
    let now = new Date();
    let time = now.getFullYear()+"-"+(now.getMonth()+1);
    console.log(time);
    console.log("token :");
    console.log(token);
    let config = {
      headers : {
        Authorization : "token " + token,
      }
    }
    let data = {
      datetime : time,
    }
    axios.post('http://54.187.241.111/food/calendar_view/',data, config).then((response) => {
      console.log(response);
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
          alert("오잉");
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



  ////////////////// 상세보기를 위한 상태 정의
  const [nickname, setNickname] = useState('김준규');
  const [carbo, setCarbo] = useState(50);
  const [protein, setProtein] = useState(30);
  const [fat, setFat] = useState(20);
  const [breakfast, setBreakfast] = useState(800);
  const [lunch, setLunch] = useState(700);
  const [dinner, setDinner] = useState(900);
  const [totalcal, setTotalcal] = useState(2400);
  const [goalcal, setGoalcal] = useState(2500);

  // 날짜 클릭 함수
  // const handleDateClick = (arg) => {
  //   // alert(arg.dateStr)
  //   setModalIsOpen(true)
  //   setDate(arg.dateStr) // 모달로 넘길 날짜
  //   // console.log(data)  //2022-05-01 이렇게 나옴

  //   //백에 보내기
  //   let data = {
  //     datetime : day,
  //   }

  //   axios.post('http://54.187.241.111/food/calendar_day_info/',data, config).then((response) => {
  //   // console.log(response);
  //   //set data...
  //   setNickname(response.nickname)
  //   setCarbo(response.ratio_carbo)
  //   setProtein(response.ratio_protein)
  //   setFat(response.ratio_fat)
  //   setBreakfast(response.breakfast_cal)
  //   setLunch(response.lunch_cal)
  //   setDinner(response.dinner_cal)
  //   setTotalcal(response.total_cal)
  //   setGoalcal(response.goal_cal)

  //   // REDIRECT
  //   }) // axios

  // }

  function renderEventContent(eventInfo) {
    // 이 자리에 삼항연산자 걸기 -> const로 새로 선언한 애를 밑에 넣어주기

    return (
      <>
        {/* 이벤트 정보 */}
        {/* <b>{eventInfo.timeText}</b> */}
        {/* <i>{eventInfo.event.title}</i> */}

        {/* 이모지만 쓸 때 추가하기 */}
        {/* <span style = {{color: 'white'}}><b>__</b></span> */}

        <img src = { yesimg } alt = 'noting' style = {{height: '40%', width: '40%', margin_left: 'auto', margin_right: 'auto'}} />
        <span style = {{color: 'white'}}><b>완료!</b></span>
      </>
    )
  }

  return (
    <CalanderWrapper>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        // dateClick={handleDateClick}

        // 이벤트 표시
        events={[
          { title: '1500kcal',
          date: '2022-05-14',
          color: '#9509fe' },
          { title: '1400kcal',
          date: '2022-05-15',
          color: '#ffba4a'},
        ]}
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