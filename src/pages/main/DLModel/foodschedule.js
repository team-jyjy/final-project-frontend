import React,{useState,useRef,useEffect} from 'react'
// import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import styled from "styled-components";
// import { FaArrowAltCircleDown } from "react-icons/fa";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
// import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
const URL = 'https://teachablemachine.withgoogle.com/models/NqT_4_VDW/';
const modelURL = URL + 'model.json';
const metadataURL = URL + 'metadata.json';

let model

const Btn=styled.button`
   background-color:#9509fe;
   width:130px;
   padding:10px 10px;
   border-radius:20px;
   color:white;
   font-size:15px;
   font-weight:800;
`;



const ResultContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

const ReulstScore=styled.h1`
    color:'black';
    font-size:20px;
    font-weight:bolder;
    margin-right:5px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;
const ReulstName=styled.h1`
    color:'black';
    font-size:20px;
    font-weight:bolder;
    // background-color:#304967;
    margin-left:5px;
    padding:5px 7px;
    @media (min-width: 800px) {
      font-size:30px;
  }
`;

const MiddleContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:5%;
`;

const Container = styled.div`
  margin-top:30px;
  margin-left:auto;
  margin-right:auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  position:relative;
  /* justify-content:space-evenly; */
  
  /* position:relative; */
  @media (min-width: 800px) {
    width: 600px;
    height: 100vh;
    /* border-left:1px solid #95afc0;
    border-right:1px solid #95afc0; */
  }
`;

const Image=styled.img`
    width:90%;
    height:90%;
    border-radius:10px;
`;

const TopStartLoading=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  // color:#9509fe;
  color : 'black';
  margin-top:3%;
  margin-bottom:30px;
  @media (min-width: 800px) {
    font-size:30px;
  }
`;


const TopStart=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  // color:#9509fe;
  color : 'black';
  margin-top:3%;
  @media (min-width: 800px) {
    font-size:30px;
  }
`;

const ImageUploadContainer=styled.input`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    display:none;
`;

const ImageContainer=styled.div`
    position:relative;
    width: 70%;
    height: 28%;
    display:flex;
    background-color:rgba(0, 0, 0, 0.07);
    border-radius:10px;
    /* border:3px dashed #535c68; */
    justify-content:center;
    align-items:center;
    box-shadow: 0px 0px 25px #576574;
    z-index:5;
    flex-direction:column;
    box-shadow: 0px 3px 20px 10px rgba(0, 0, 0, 0.10);
  `;



const Foodschedule = ({history}) => {
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null);   //파일
    const [loading,setLoading]=useState(false);
    const [showResult,setShowResult]=useState(false);
    const [predictionArr,setPredictionArr]=useState([]);
    const [result,setResult]=useState(null);
    const [keyword,setKeyword]=useState(null);
    //response data print
    const [foodCal, setFoodCal] = useState();
    const [foodCarbo, setFoodCarbo] = useState(); //탄수화물
    const [foodSugar, setFoodSugar] = useState(); //당류
    const [foodProtein, setFoodProtein] = useState(); //단백질
    const [foodFat, setFoodFat] = useState(); //지방
    const [foodTransFat, setFoodTransFat] = useState(); //트랜스지방
    const [foodSaturatedFat, setFoodSaturatedFat] = useState(); //포화지방
    const [foodNa, setFoodNa] = useState(); //나트륨
    const [foodChole, setFoodChole] = useState(); //콜레스테롤

    //for api
    const foodInquire = (e) => {
      e.preventDefault();
      console.log(predictionArr[0].className);
      axios({
        url:'http://54.187.241.111/food/get_food_info/',
        method:'post',
        data:{
          food_name : predictionArr[0].className,
        }
      }).then((response) => {
        console.log(response);
        alert("음식 조회에 성공하셨습니다.");
        // console.log(response.data.food_cal);
        setFoodCal(response.data.food_cal);
        setFoodCarbo(response.data.food_carbo)
        setFoodSugar(response.data.food_sugar)
        setFoodProtein(response.data.food_protein)
        setFoodFat(response.data.food_fat)
        setFoodTransFat(response.data.food_trans_fat)
        setFoodSaturatedFat(response.data.food_saturated_fat)
        setFoodNa(response.data.food_na)
        setFoodChole(response.data.food_chole)
        // REDIRECT
      }).catch((error)=>{
        console.error(error);
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if(error.response.status === 403) {
            alert("뭔가 잘못하신 듯?");
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
    }


    //react-router 사용
    const navigate=useNavigate();
    // input 태그를 클릭하는 것과 같은 효과를 주기 위해서 사용
    const inputRef=useRef();
    
  // Load the image model and setup the webcam
    async function init() {

      // let isIos = false; 
      // // fix when running demo in ios, video will be frozen;
      // if (window.navigator.userAgent.indexOf('iPhone') > -1 || window.navigator.userAgent.indexOf('iPad') > -1) {
      //   isIos = true;
      // }
      // load the model and metadata
      // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
      // or files from your local hard drive
      // Note: the pose library adds "tmImage" object to your window (window.tmImage)
      model = await tmImage.load(modelURL, metadataURL);
      //총 클래스 수
      let maxPredictions;
      maxPredictions = model.getTotalClasses();
  }
  
    async function predict() {
      // predict can take in an image, video or canvas html element
      model = await tmImage.load(modelURL, metadataURL);
      const tempImage = document.getElementById('srcImg');
      const prediction = await model.predict(tempImage, false);
      prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
      setPredictionArr(prediction)
      setShowResult(true)
      setLoading(false)
      setResult(prediction[0].className)
      console.log("가장높은확률 : ",prediction[0].className)
      
    }
  
    const handleChangeFile = (event) => {
      setLoading(true);
      setShowResult(false)
      setPredictionArr(null);
      setResult(null);
  
      let reader = new FileReader();
  
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
          setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        }
      }
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
        setImgFile(event.target.files[0]); // 파일 상태 업데이트
        init().then(
          console.log("init 모델"),
          predict()
        );
  
      }
    }


  return (
    <Container>
      {showResult?<TopStart>식단 분석 결과</TopStart>:<TopStartLoading>{loading?"식단을 분석 중입니다":"식단을 업로드 해주세요!"}</TopStartLoading>}
      <ImageContainer onClick={()=>{
          inputRef.current.click();
      }}>
        <ImageUploadContainer ref={inputRef} onChange={handleChangeFile} type="file" accept="image/*" />
        {imgBase64?<Image id="srcImg" src={imgBase64}></Image>: 
        <>
        </>
        }
      </ImageContainer>
      {/* 여기부터 이어서 결과 확인할 수 있게  추가 */}
      {showResult&&result!==null?
        <>
        <MiddleContainer>
            <BsFillArrowDownSquareFill size={40} color="#323232"></BsFillArrowDownSquareFill>
            <ResultContainer>
                <ReulstScore>{showResult?`${(predictionArr[0].probability*100).toFixed(1)}%`:null}</ReulstScore>
                <ReulstName>{showResult?predictionArr[0].className:null}</ReulstName>
                
            </ResultContainer>
            {/* 조회하기 버튼 */}
            <Btn
              // href = "/"
              type="submit"
              fullWidth
              variant="contained"
              onClick={foodInquire}
              sx={{ mt: 3, mb: 2, bgcolor:'#9509fe', borderColor:'#9509fe'}}
              // color="success"
            >
              식단 정보 조회
            </Btn>
            {/* 조회하기 버튼 */}
        </MiddleContainer>   
      
        </>
      :null}
      {/* 여기까지 */}
    <div>
    {foodCal!=null?<><span>칼로리 : </span><span>{foodCal!=null?foodCal:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>탄수화물 : </span><span>{foodCarbo!=null?foodCarbo:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>당류 : </span><span>{foodSugar!=null?foodSugar:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>단백질 : </span><span>{foodProtein!=null?foodProtein:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>지방 : </span><span>{foodFat!=null?foodFat:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>트랜스지방 : </span><span>{foodTransFat!=null?foodTransFat:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>포화지방 : </span><span>{foodSaturatedFat!=null?foodSaturatedFat:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>나트륨 : </span><span>{foodNa!=null?foodNa:null}</span></>:null}
    </div>
    <div>
    {foodCal!=null?<><span>콜레스테롤 : </span><span>{foodChole!=null?foodChole:null}</span></>:null}
    </div>
    </Container>

  )
}


export default Foodschedule