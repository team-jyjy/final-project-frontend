// import React from "react";
// import jquery from 'jquery';
// import $ from 'jquery';
// window.$ = window.jquery = jquery;

// const Foodschedule = () => {
//     predict = () => {
//         var image = document.getElementById('food-image');
//             const prediction = await model.predict(image, false);
//             maxclass = prediction[0].probability.toFixed(2)
//             for (let i =0; i < maxPredictions;i++) {
//                 if (maxclass < prediction[i].probability.toFixed(2)){
//                 max = i
//                 maxclass = prediction[max].probability.toFixed(2)
//                 }
//             }
//             const classPrediction = prediction[max].className;
//             labelContainer.childNodes[max].innerHTML = classPrediction;
//     }
    
//   return (
//     <body>
//     <div>Teachable Machine Image Model</div>
//     <button type="button" onclick="init()">Start</button>
//     <button type="button" onclick={()=>this.predict()}>Predict</button>
//     <script class="jsbin" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
//     <div class="file-upload">
//         <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Image</button>
    
//         <div class="image-upload-wrap">
//             <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
//             <div class="drag-text">
//                 <h3>Drag and drop a file or select add Image</h3>
//             </div>
//         </div>
//         <div class="file-upload-content">
//             <img class="file-upload-image" id="food-image" src="#" alt="your image" />
//             <div class="image-title-wrap">
//                 <button type="button" onclick="removeUpload()" class="remove-image">Remove
//                     <span class="image-title">Uploaded Image</span>
//                 </button>
//             </div>
//         </div>
//     </div>
    
//     <div id="label-container"></div>
//     <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
//         <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
//     <script type="text/javascript">
//         const URL = "./my_model/";
//         let model, labelContainer, maxPredictions;

//         async function init() {
//             const modelURL = URL + "model.json";
//             const metadataURL = URL + "metadata.json";
//             model = await tmImage.load(modelURL, metadataURL);
//             maxPredictions = model.getTotalClasses();
//             labelContainer = document.getElementById("label-container");
//             for (let i = 0; i < maxPredictions; i++) { // and class labels
//                 labelContainer.appendChild(document.createElement("div"));
//             }
//         }
    
//         // async function predict() {
            
//         // }
//     </script>

//     <script>
//         function readURL(input) {
//             if (input.files && input.files[0]) {
//                 var reader = new FileReader();
//                 reader.onload = function(e) {
//                     $('.image-upload-wrap').hide();
//                     $('.file-upload-image').attr('src', e.target.result);
//                     $('.file-upload-content').show();
//                     $('.image-title').html(input.files[0].name);
//                 };
//                 reader.readAsDataURL(input.files[0]);
//             } else {
//                 removeUpload();
//             }
//         }
    
    
//         function removeUpload() {
//             $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//             $('.file-upload-content').hide();
//             $('.image-upload-wrap').show();
//         }
//         $('.image-upload-wrap').bind('dragover', function() {
//             $('.image-upload-wrap').addClass('image-dropping');
//         });
//         $('.image-upload-wrap').bind('dragleave', function() {
//             $('.image-upload-wrap').removeClass('image-dropping');
//         });
//     </script>>
    
//     </body>
//   );
// }

// export default Foodschedule;

import * as React from 'react';
const Foodschedule = () => {
  return (
    <div>식단 업로드 페이지입니다.</div>
  );
}

export default Foodschedule;