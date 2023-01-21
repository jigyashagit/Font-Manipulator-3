diffrence=0;
rightWristX=0;
leftWristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(760,115);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function draw()
{
    background('pink');
    textSize(diffrence);
    fill('purple');
    text('JIGYASHA',50,400);
    document.getElementById("square_sides").innerHTML="length of the font size will be "+diffrence+"px";
}
function modelLoaded()
{
    console.log('PoseNet is Intialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log(" leftWristX= "+ leftWristX + " rightWristX= "+ rightWristX );
    }
    
}