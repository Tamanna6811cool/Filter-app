lipsX=
lipsY=
function preload(){
lips=loadImage('https://postimg.cc/PNxPDM9C');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size=(300,300);
    video.hide();
    PoseNet=ml5.poseNet(video , modelLoaded);
    PoseNet.on('pose',gotPoses);
}
function gotPoses(results){
  if (results.length > 0) {
    lipsX=+results[0].pose.nose.x -190;
    lipsY=+results[0].pose.nose.y -174;
      console.log(results);
      console.log("nose x="+lipsX);
      console.log("nose y="+lipsY);
  }
  
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}

function draw(){
    image(video,0,0,300,300);
}
function takeSnapshot(){
    save('myFilterImage.png');
}