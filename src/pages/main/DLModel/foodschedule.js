import * as React from 'react';
import {Helmet} from "react-helmet";
import {useEffect, useState, createRef, useRef} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import {useAsync} from "react-async"

const Foodschedule = () => {
  const [model, setModel] = useState();
  const [maxPredictions, setMaxPredictions] = useState();
  const [label, setLabel] = useState();
  const [fileImage, setFileImage] = useState("");
  const inputRef = useRef();

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  useEffect(() => {
    //model init
    const modelURL = "./my_model/model.json";
    const metadataURL = "./my_model/metadata.json";
    tmImage.load(modelURL, metadataURL).then(model => {
      setMaxPredictions(model.getTotalClasses());
      console.log("성공");
      setModel(model);
      // console.log(model);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  useEffect( ()=>{
    //predict
    if(fileImage !== "" && inputRef.current != null) {
      // const prediction = await model.predict(inputRef.current, false);
      // console.log("예측 성공");
      let test = document.getElementById('test');
      model.predict(inputRef.current, false).then(result => {
        console.log("예측 성공");
        result.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
        console.log(result[0]);
      }).catch(error=>{
        console.error(error);
      });
    }
  },[fileImage]);

  return (
    <div>
      {fileImage&&(<img className='file-upload-image' 
      src={fileImage}
      ref={inputRef} 
      id="test"
      width={'40%'}></img>)}

      <input type='file' 
      accept='image/*' 
      name='profile_img' 
      onChange={saveFileImage}></input>
      <button onClick={()=>deleteFileImage()}>파일삭제</button>
    </div>
  );
}

export default Foodschedule;