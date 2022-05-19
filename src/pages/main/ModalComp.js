import React from 'react';
// import { useEffect } from 'react';
import Modal from 'react-modal';
import './Calendar.css';

// 차트
import ApexChart from 'react-apexcharts';

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


// 모달 관련 옵션
Modal.setAppElement('#root')

// 부모에게 물려받기
function ModalComp({modalIsOpen, setModalIsOpen, date, nickname, carbo, protein, fat, breakfast, lunch, dinner, totalcal, goalcal}) {

    // 파이차트 데이터 정의 -> 안에 백엔드에서 데이터 받으면 변경하기
    const pie_series = [carbo, protein, fat]
    const pie_options = {
        chart: {
            // width: 300,
            type: 'pie',
        },

    labels: ['탄수화물', '단백질', '지방'],

    colors:['#ff9999', '#FFE67D', '#99cccc'],

    responsive: [{
        breakpoint: 480,
        options: {
            chart: {width: 200},
            legend: {position: 'bottom'}
        }
    }]
    }

    // 바그래프 데이터 정의 -> 백엔드에서 받아야함
    const bar_series = [{
        data: [goalcal, totalcal]
    }]

    const bar_options ={
        chart: {
            // height: 380,
            type: 'bar',
            // foreColor: 'black',
        },

        plotOptions: {
            bar: {
            borderRadius: 3,  // 테두리 둥굴게
            horizontal: false,
            }
        },

        xaxis: {
            categories: ['권장칼로리', '섭취칼로리']
        },

        yaxis: {
            labels: {
                show: false
            }
        },

        colors: ['#C8F5FA'],

        dataLabels: {
            style: {
                colors: ['#333']
            }
        },
    }

    return (
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                transparent = {false}
                style={customStyles}
            >

                { date.substring(0, 4) }년
                <h4>
                    <b> { date.substring(5, 7) } </b> 월 {" "}
                    <b> { date.substring(8, date.length) } </b> 일
                </h4>
                <h5> <b>{nickname}</b>님, 오늘 <b>{totalcal}kcal</b>를 섭취하셨어요!</h5>

                    <div className='pie-graph'>
                        <ApexChart
                        options={pie_options}
                        series={pie_series}
                        type="pie"
                        // width={350}
                        />
                    </div>

                    <div className='bar-graph'>
                        <ApexChart
                        options={bar_options}
                        series={bar_series}
                        type="bar"
                        // width={300}
                        />
                    </div>

                    <div className='kcal'>
                        <div>
                            <p></p>
                            <span className='food-type'> 🥗 아침</span> &nbsp; {breakfast}kcal
                            <p></p>
                        </div>
                        <div>
                            <span className='food-type'>🥘 점심</span> &nbsp; {lunch}kcal
                            <p></p>
                        </div>
                        <div>
                            <span className='food-type'>🍽 저녁</span> &nbsp; {dinner}kcal
                        </div>
                    </div>

                    <div>
                        <button className='close-btn' onClick={() => setModalIsOpen(false)}>CLOSE</button>
                    </div>
                    <p></p>
            </Modal>
    )
}

export default ModalComp
