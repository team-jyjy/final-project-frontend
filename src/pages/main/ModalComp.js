import React, { useState } from 'react';
// import { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './Calendar.css';

// 차트
// 1. 유연코드
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { deepPurple } from '@mui/material/colors';
// 2. 다른 방법
import ApexChart from 'react-apexcharts';
// import PieChart from './PieChart'

// 한번만
const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99,
        backgroundColor: 'white'
    },
};

// 파이차트 정의 -> 안에 백엔드에서 데이터 받으면 변경하기
const series = [44, 55, 13, 43, 22]
const options = {
    chart: {
        width: 380,
        type: 'pie',
    },

    labels: ['탄수화물', '단백질', '지방', '어쩌고', '저쩌고'],

    responsive: [{
        breakpoint: 480,
        options: {
            chart: {width: 200},
            legend: {position: 'bottom'}
        }
    }]
}

Modal.setAppElement('#root')

function ModalComp({modalIsOpen, setModalIsOpen, data}) {
    // 재할당이 필요없으면 const, 재할당해야하면 let
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [data, setData] = useState('테스트');

    return (
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                transparent = {false}
                style={customStyles}
            >

                { data.substring(0, 4) }년
                <h4>
                    <b> { data.substring(5, 7) } </b> 월 {" "}
                    <b> { data.substring(8, data.length) } </b> 일
                </h4>
                <h5> <b>김준규</b>님, 오늘 <b>4569kcal</b>를 섭취하셨어요!</h5>
                    {/* <div className='pie-graph'>
                        <ApexChart
                        options={options}
                        series={series}
                        type="pie"
                        width={380}
                        />
                    </div> */}

                <div className='kcal'>
                    <div>
                        <p></p>
                        <span className='food-type'>🥗 아침</span> 1147kcal
                        <p></p>
                    </div>
                    <div>
                        <span className='food-type'>🥘 점심</span> 1543kcal
                        <p></p>
                    </div>
                    <div>
                        <span className='food-type'>🍽 저녁</span>  1879kcal
                    </div>
                </div>

                {/* <li> 🥗 아침 : 000 kcal</li>
                <li> 🥘 점심 : 000 kcal</li>
                <li> 🍽 저녁 : 000 kcal</li> */}
                <div>
                    <button className='close-btn' onClick={() => setModalIsOpen(false)}>CLOSE</button>
                </div>
            </Modal>
    )
}

export default ModalComp
