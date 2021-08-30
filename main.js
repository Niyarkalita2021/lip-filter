lipX=0;
lipY=0;

function preload() {
     lip_filter = loadImage('https://i.postimg.cc/SKmzGLCV/lips.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.lip.x-15;
        lipY = results[0].pose.lip.y-15;
    }
}

function draw() {
     image(video, 0, 0, 300, 300);
     image(lip_filter, lipX, lipY, 30, 30);
}

function take_snapshot(){
    save('filter.png');
}