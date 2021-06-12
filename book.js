img="";
status="";
object=[];
function preload(){
img=loadImage("book.png");
};
function back(){
    window.location="home.html";
};
function setup(){
canvas=createCanvas(400,300);
canvas.position(450,250);
ObjectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="detecting";
};
function modelLoaded(){
    console.log("loaded")
    status="true";
    ObjectDetector.detect(img,gotResult);
}
function draw(){
image(img, 0,0,500, 400);
if(status!==""){
    document.getElementById("status").innerHTML="detected";
    for(i=0;i<object.length;i++){
        fill("black");
        noFill();
        stroke("black");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        text(object[i].label,object[i].x,object[i].y);
    }
}
};
function gotResult(error,result){
if (error){
    console.log(error);

}
else{
    console.log(result);
    object=result;
};
}