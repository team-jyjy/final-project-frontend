import * as React from 'react';
import {Helmet} from "react-helmet";
import {useEffect, useState, createRef, useRef} from 'react';
import * as tmImage from '@teachablemachine/image';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const URL = 'https://teachablemachine.withgoogle.com/models/8ioYuXbUM/';
const modelURL  = URL + 'model.json';
const metadataURL = URL + 'metadata.json';
let model;

const Container = styled.div`
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

const Foodschedule = () => {
  /////
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일
  const [loading,setLoading]=useState(false);
  const [showResult,setShowResult]=useState(false);
  const [predictionArr,setPredictionArr]=useState([]);
  const [result,setResult]=useState(null);
  const [keyword,setKeyword]=useState(null);

  const inputRef = useRef();
  const navigate = useNavigate();

  async function init() {
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
    // prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    console.log(model);
    setPredictionArr(prediction)
    setShowResult(true)
    setLoading(false)
    setResult(prediction[0].className)
    console.log(prediction[0].className)
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


  /////
  return (
    <Container>
      {/*  */}
      {showResult?<TopStart>분석결과는?</TopStart>:<TopStartLoading>{loading?"잠시만 기다려주세요!":"사진을 업로드 해주세요!"}</TopStartLoading>}
      <ImageContainer onClick={()=>{
          inputRef.current.click();
      }}>
        <ImageUploadContainer ref={inputRef} onChange={handleChangeFile} type="file" accept="image/*" />
        {imgBase64?<Image id="srcImg" src={imgBase64}></Image>: 
        <>
        </>
        }
      </ImageContainer>
     {/*  */}
    </Container>
  );
}

export default Foodschedule;