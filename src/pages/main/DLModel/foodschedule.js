import * as React from 'react';
import {Helmet} from "react-helmet";

const Foodschedule = () => {
  // const init = () => {
  //   const modelURL = URL + "model.json";
  //   const metadataURL = URL + "metadata.json";
  //   model = await tmImage.load(modelURL, metadataURL);
  //   maxPredictions = model.getTotalClasses();
  //   labelContainer = document.getElementById("label-container");
  //   for (let i = 0; i < maxPredictions; i++) { // and class labels
  //       labelContainer.appendChild(document.createElement("div"));
  //   }
  // }

  // const predict = () => {
  //   var image = document.getElementById('food-image');
  //   const prediction = await model.predict(image, false);
  //   // 인식한 클래스명만 보여주기
  //   maxclass = prediction[0].probability.toFixed(2)
  //   for (let i =0; i < maxPredictions;i++) {
  //       if (maxclass < prediction[i].probability.toFixed(2)){
  //       max = i
  //       maxclass = prediction[max].probability.toFixed(2)
  //       }
  //   }
  //   const classPrediction = prediction[max].className;
  //   labelContainer.childNodes[max].innerHTML = classPrediction;

  // }

  // const readURL = (input) => {
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = function(e) {
  //         $('.image-upload-wrap').hide();
  //         $('.file-upload-image').attr('src', e.target.result);
  //         $('.file-upload-content').show();
  //         $('.image-title').html(input.files[0].name);
  //     };
  //     reader.readAsDataURL(input.files[0]);
  // } else {
  //     removeUpload();
  // }
  // }

  // const removeUpload = () => {

  // }

  // const URL = "./../../../../my_model/";
  // let model, labelContainer, maxPredictions;

  return (
    <div>

    {/* <div>Teachable Machine Image Model</div>
    <button onClick={init}>start</button>
    <button onClick={predict}>predict</button>
    <Helmet>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
    </Helmet>
    <div className='file-upload'>
      <button class="file-upload-btn">Add Image</button>
      <div className='image-upload-wrap'>
        <input className='file-upload-input' type={file}></input>
        <div className='drag-text'>
          <h3>Drag and drop a file or select add Image</h3>
        </div>
      </div>
      <div className='file-upload-content'>
        <img className='file-upload-image' id='food-image' src='#'></img>
        <div className='image-title-wral'>
          <button onclick={removeUpload} className="remove-image">remove
            <span className='image-title'>Uploaded Image</span>
            </button>
        </div>
      </div>
    </div>

    <div id="label-container"></div>
    <Helmet>
      <script src='https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js' type="text/javascript"></script>
      <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js" type="text/javascript"></script>
    </Helmet> */}

    </div>
  );
}

export default Foodschedule;