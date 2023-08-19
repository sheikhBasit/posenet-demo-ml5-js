let capture;
let posenet;
let skeleton; 
let singlePose;
let img,mask;
function setup()
{
   createCanvas(1000,800); 
   capture = createCapture(VIDEO); 
   capture.hide();
   posenet  = ml5.poseNet(capture, modelLoaded);
   posenet.on('pose',receivedPoses); 

   img = loadImage('images/eye.jpg');
   mask = loadImage('images/mask.jpg');
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;      
    }
}
function modelLoaded(){
    console.log('Model has Loaded');
}
function draw(){
    
    image(capture,0,0,800,600);
    fill(255,0,0);

    if (singlePose)
    {for (let i=0; i<singlePose.keypoints.length;i++)
    {
        ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20,20);

    }
    stroke(255,255,255)
    strokeWeight(5)
    for (let j=0; j<skeleton.length;j++)
    {
        line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
    }

    image(img,singlePose.rightEye.x+78,singlePose.rightEye.y+50,25,25)
    image(img,singlePose.leftEye.x+100,singlePose.leftEye.y+50,25,25)
    image(mask,singlePose.nose.x+0,singlePose.nose.y+50,180,180)

}
    
    
}