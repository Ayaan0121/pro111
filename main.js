function change(){
    random_r= Math.floor(Math.random()* 255 ) + 1;
    random_g= Math.floor(Math.random()* 255 ) + 1;
    random_b= Math.floor(Math.random()* 255 ) + 1;
    document.getElementById("result_emotion_name").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("cap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("snap").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("headingas").style.color="white";
    document.getElementById("bucap").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("buch").style.backgroundColor="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";
    document.getElementById("camera").style.border="2px dashed black";
    document.getElementById("result").style.border="2px dashed black";
    //set webcamera property 
 Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Camera=document.getElementById("camera");

//display live webcam 
 Webcam.attach('#camera');

}

function tip() {
    document.getElementById("note").style.visibility="visible";
}

var p1 ="";


  function take_snapshot(){
      Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +'"/>';
      });
  }
//console 
 console.log(ml5.version);

 classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_WJjAA1Ek/model.json' , modelLoaded)

 function modelLoaded() {
    console.log("Model Loaded!");
 }

 function speak(){
 var synth=window.speechSynthesis;
 speak1="the first predicition is " + p1;
 var utterThis=new SpeechSynthesisUtterance(speak1);
 synth.speak(utterThis);
 }