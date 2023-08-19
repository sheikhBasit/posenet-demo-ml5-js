let capture;
let posenet;
let skeleton; 
let singlePose;

function setup()
{
   createCanvas(1000,800); 
   capture = createCapture(VIDEO); 
   capture.hide();
   posenet  = ml5.poseNet(capture, modelLoaded);
   posenet.on('pose',receivedPoses); 

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
        ellipse(singlePose.keypoints[i].position.x+80,singlePose.keypoints[i].position.y+70,20,20);

    }
    stroke(255,255,255)
    strokeWeight(5)
    for (let j=0; j<skeleton.length;j++)
    {
        line(skeleton[j][0].position.x+80,skeleton[j][0].position.y+70,skeleton[j][1].position.x+80,skeleton[j][1].position.y+70);
    }


}
    
    
}
