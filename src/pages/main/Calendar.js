// 처음 구현한 코드
// import * as React from 'react';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import './Calendar.css';
import yesimg from './yes.png'
import ModalComp from './ModalComp'

import styled from 'styled-components';

const CalanderWrapper = styled.div`
  position: 'relative',
`


const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // 날짜 데이터 상태로 받기
  const [data, setData] = useState('테스트');
  // 회원 정보, 총 칼로리 정의(임시)
  // const [name, setName] = useState('김준규');
  // const [totalcal, settotalcal] = useState('1000kcal');

  const handleDateClick = (arg) => {
    // alert(arg.dateStr)
    setModalIsOpen(true)
    setData(arg.dateStr)
  }

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
      <div>달력 페이지 작업 공간</div>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        dateClick={handleDateClick}

        // 이벤트 표시
        events={[
          { title: '1500kcal',
          date: '2022-05-14',
          color: '#9509fe' },
          { title: '1400kcal',
          date: '2022-05-15',
          color: '#9509fe'}
        ]}
        />

    <ModalComp
    modalIsOpen = {modalIsOpen}
    setModalIsOpen = {setModalIsOpen}
    data = {data} />

  </CalanderWrapper>
  );
}

export default Calendar;