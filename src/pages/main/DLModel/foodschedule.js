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
import "./foodschedule.css";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { NoBackpackSharp } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import { Navigate } from 'react-router-dom';
import {setToken} from "./../../../modules/loginStates"; //
import {useSelector} from "react-redux";
import Swal from 'sweetalert2';

const URL = 'https://teachablemachine.withgoogle.com/models/NqT_4_VDW/';
const modelURL = URL + 'model.json';
const metadataURL = URL + 'metadata.json';

// const Swal = require('sweetalert2');

let model;

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
const ResultName=styled.h1`
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

  //??????
  height: 100vh; 

  display: flex;
  align-items: center;

  // ??????
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

  const CssButton = styled(Button)({
    '&:hover':{
      backgroundColor:'#9509fe',
      borderColor: '#b4cf66',
    },
    '&:active':{
      backgroundColor:'#9509fe'
    },
    '&:focus':{
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  })


const Foodschedule = ({history}) => {
    const [imgBase64, setImgBase64] = useState(""); // ?????? base64
    const [imgFile, setImgFile] = useState(null);   //??????
    const [loading,setLoading]=useState(false);
    const [showResult,setShowResult]=useState(false);
    const [predictionArr,setPredictionArr]=useState([]);
    const [result,setResult]=useState(null);
    const [keyword,setKeyword]=useState(null);
    //response data print
    const [foodCal, setFoodCal] = useState();
    const [foodCarbo, setFoodCarbo] = useState(); //????????????
    const [foodSugar, setFoodSugar] = useState(); //??????
    const [foodProtein, setFoodProtein] = useState(); //?????????
    const [foodFat, setFoodFat] = useState(); //??????
    const [foodTransFat, setFoodTransFat] = useState(); //???????????????
    const [foodSaturatedFat, setFoodSaturatedFat] = useState(); //????????????
    const [foodNa, setFoodNa] = useState(); //?????????
    const [foodChole, setFoodChole] = useState(); //???????????????
    const navigate = useNavigate();
    const token = useSelector(state => state.token);
    //?????? ?????? api
    const [foodtype, setFoodtype] = useState();

    //?????? ?????? api
    const registration = (e) => {
      e.preventDefault();
      
      console.log("????????????");
      let config = {
        headers : {
          Authorization : "token " + token,
        }
      }
      let data = {
        food_name : predictionArr[0].className,
        food_type : foodtype,
      }
      axios.post('http://18.237.18.231/food/update_user_food/',data, config).then((response) => {
        console.log(response);
        // ??????
        // alert("?????? ????????? ?????????????????????.");
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: '?????? ????????? ?????????????????????.',
          showConfirmButton: false,
          timer: 1500
        })


        // REDIRECT
      }).catch((error)=>{
        console.error(error);
        if (error.response) {
          // ????????? ?????????????????? ????????? 2xx??? ????????? ???????????? ?????? ????????? ??????????????????.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if(error.response.status === 403) {
            Swal.fire({
              icon: 'error',
              title: '?????? ??????!',
              text: '???????????? ?????????????????????.',
              footer: '<a href="">??? ?????? ????????? ???????????? ??????????</a>'
            })
          }
          if(error.response.status === 401) {
            // alert("???????????? ????????????!");
            Swal.fire(
              '???????????? ?????????????',
              '????????? ???????????? ???????????????.',
              'question'
            )
            navigate('/signin');
          }
        }
        else if (error.request) {
          // ????????? ????????? ????????? ????????? ?????? ???????????????.
          // `error.request`??? ??????????????? XMLHttpRequest ???????????? ??????
          // Node.js??? http.ClientRequest ?????????????????????.
          console.log(error.request);
        }
        else {
          // ????????? ???????????? ????????? ???????????? ?????? ????????? ??????????????????.
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    }

    //?????? ?????? api
    const foodInquire = (e) => {
      e.preventDefault();
      console.log(predictionArr[0].className);
      axios({
        url:'http://18.237.18.231/food/get_food_info/',
        method:'post',
        data:{
          food_name : predictionArr[0].className,
        }
      }).then((response) => {
        console.log(response);
        // alert("?????? ????????? ?????????????????????.");
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
          // ????????? ?????????????????? ????????? 2xx??? ????????? ???????????? ?????? ????????? ??????????????????.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if(error.response.status === 403) {
            Swal.fire({
              icon: 'error',
              title: '?????? ??????!',
              text: '???????????? ?????????????????????.',
              footer: '<a href="">??? ?????? ????????? ???????????? ??????????</a>'
            })
          }
        }
        else if (error.request) {
          // ????????? ????????? ????????? ????????? ?????? ???????????????.
          // `error.request`??? ??????????????? XMLHttpRequest ???????????? ??????
          // Node.js??? http.ClientRequest ?????????????????????.
          console.log(error.request);
        }
        else {
          // ????????? ???????????? ????????? ???????????? ?????? ????????? ??????????????????.
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    } //?????? ?????? api end
    // input ????????? ???????????? ?????? ?????? ????????? ?????? ????????? ??????
    const inputRef=useRef();
    
  // Load the image model and setup the webcam
    async function init() {
      setFoodCal(null);
      model = await tmImage.load(modelURL, metadataURL);
      //??? ????????? ???
      let maxPredictions;
      maxPredictions = model.getTotalClasses();
  }
  
    async function predict() {
      model = await tmImage.load(modelURL, metadataURL);
      console.log(model);
      const tempImage = document.getElementById('srcImg');
      const prediction = await model.predict(tempImage, false);
      prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
      setPredictionArr(prediction)
      setShowResult(true)
      setLoading(false)
      setResult(prediction[0].className)
      console.log("?????????????????? : ",prediction[0].className)
    }
  
    const handleChangeFile = (event) => {
      setLoading(true);
      setShowResult(false)
      setPredictionArr(null);
      setResult(null);
  
      let reader = new FileReader();
  
      reader.onloadend = () => {
        const base64 = reader.result;
        if (base64) {
          setImgBase64(base64.toString());
        }
      }
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
        setImgFile(event.target.files[0]);
        init().then(
          console.log("init ??????"),
          predict()
        );
      }
    }


  return (
    <div className='wrapfoodschedule'>
    <Container>
      {showResult?<TopStart>?????? ?????? ??????</TopStart>:<TopStartLoading>{loading?"????????? ?????? ??? ?????????":"????????? ????????? ????????????!"}</TopStartLoading>}
      <ImageContainer onClick={()=>{
          inputRef.current.click();
      }}>
        <ImageUploadContainer ref={inputRef} onChange={handleChangeFile} type="file" accept="image/*" />
        {imgBase64?<Image id="srcImg" src={imgBase64}></Image>: 
        <>
        <div>????????? ??????!</div>
        <div>??? ?????? ????????? ????????? ????????? ????????????!</div>
        </>
        }
      </ImageContainer>
      {/* ???????????? ????????? ?????? ????????? ??? ??????  ?????? */}
      {showResult&&result!==null?
        <>
        <MiddleContainer>
            <BsFillArrowDownSquareFill size={40} color="#323232"></BsFillArrowDownSquareFill>
            {/* <ResultContainer>
                <ReulstScore>{showResult?`${(predictionArr[0].probability*100).toFixed(1)}%`:null}</ReulstScore>
                <ReulstName>{showResult?predictionArr[0].className:null}</ReulstName>
            </ResultContainer> */}
            <ResultContainer>
                <ResultName>{result?predictionArr[0].className:null}</ResultName>{foodCal?<span>???(???)</span>:<span>??? ?????? ????????? ????????????????</span>}&nbsp;
                <ResultName>{foodCal!=null?<><span>{foodCal!=null?foodCal:null}</span></>:null}</ResultName>{foodCal?<ResultName>Kcal</ResultName>:null}{foodCal?<span>?????????</span>:null}
            </ResultContainer>
            <CssButton
              // href = "/"
              type="submit"
              fullWidth
              variant="contained"
              onClick={foodInquire}
              sx={{ mt: 3, mb: 2, bgcolor:'#9509fe', borderColor:'#9509fe'}}
              // color="success"
            >
              ?????? ?????? ??????
            </CssButton>
        </MiddleContainer>   
      
        </>
      :null}
      {/* ???????????? */}
    <div className='nutrients'>
      <div>
      {foodCal!=null?<><span>???????????? : </span><span>{foodCarbo!=null?foodCarbo:null}</span></>:null}{foodCal?<span>g</span>:null}
      </div>
      <div>
      {foodCal!=null?<><SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon><span>?????? : </span><span>{foodSugar!=null?foodSugar:null}</span>{foodCal?<span>g</span>:null}<hr></hr></>:null}
      </div>
      
      <div>
      {foodCal!=null?<><span>????????? : </span><span>{foodProtein!=null?foodProtein:null}</span>{foodCal?<span>g</span>:null}<hr></hr></>:null}
      </div>
     
      <div>
      {foodCal!=null?<><span>?????? : </span><span>{foodFat!=null?foodFat:null}</span></>:null}{foodCal?<span>g</span>:null}
      </div>
      <div>
      {foodCal!=null?<><SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon><span>??????????????? : </span><span>{foodTransFat!=null?foodTransFat:null}</span></>:null}{foodCal?<span>g</span>:null}
      </div>
      <div>
      {foodCal!=null?<><SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon><span >???????????? : </span><span>{foodSaturatedFat!=null?foodSaturatedFat:null}</span>{foodCal?<span>g</span>:null}<hr></hr></>:null}
      </div>
    
      <div>
      {foodCal!=null?<><span>????????? : </span><span>{foodNa!=null?foodNa:null}</span></>:null}{foodCal?<span>mg</span>:null}
      </div>
      <div>
      {foodCal!=null?<><span>??????????????? : </span><span>{foodChole!=null?foodChole:null}</span>{foodCal?<span>mg</span>:null}<hr></hr></>:null}
      </div>
    </div>

    {/* ?????? ?????? ?????? */}
    {foodCal?<>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel 
        value="0" 
        control={<Radio sx={{
          [`&, &.${checkboxClasses.checked}`]: {
            color: '#9509fe',
          },
        }}/>} 
        label="??????"
        onChange={({target:{value}})=>setFoodtype(value)}
        />
        <FormControlLabel 
        value="1" 
        control={<Radio sx={{
          [`&, &.${checkboxClasses.checked}`]: {
            color: '#9509fe',
          },
        }}/>} 
        label="??????" 
        onChange={({target:{value}})=>setFoodtype(value)}
        />
        <FormControlLabel 
        value="2" 
        control={<Radio sx={{
          [`&, &.${checkboxClasses.checked}`]: {
            color: '#9509fe',
          },
        }}/>} 
        label="??????" 
        onChange={({target:{value}})=>setFoodtype(value)}
        // onChange={({target:{value}})=>setSex(value)}
        />
      </RadioGroup>
    </FormControl>
    </>:null}
    {/* ?????? ?????? ?????? ??? */}
    {foodCal?<>
    <CssButton
      type="submit"
      // fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2,bgcolor:'#9509fe'}}
      onClick={registration}
    >
      ?????? ??????
    </CssButton>
    </>:null}
    </Container>
    </div>

  )
}


export default Foodschedule