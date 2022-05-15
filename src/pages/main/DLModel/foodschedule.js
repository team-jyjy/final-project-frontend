import React,{useState,useRef,useEffect} from 'react'
// import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import styled from "styled-components";
// import { render } from "react-dom";
import { useNavigate } from "react-router-dom";

// const URL = 'https://teachablemachine.withgoogle.com/models/F1nMeBJwX/';
//원래꺼
//const URL = 'https://teachablemachine.withgoogle.com/models/KAoZrcPlp/';
const URL = 'https://teachablemachine.withgoogle.com/models/NqT_4_VDW/';
const modelURL = URL + 'model.json';
const metadataURL = URL + 'metadata.json';

let model

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
  color:#0f3457;
  margin-top:3%;
  margin-bottom:30px;
  @media (min-width: 800px) {
    font-size:30px;
  }
`;


const TopStart=styled.h1`
  font-size:20px;
  font-weight:bolder;   
  color:#0f3457;
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
    // display:none;
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
    </Container>
  )
}


export default Foodschedule