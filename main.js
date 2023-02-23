img = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}
function setup(){
 canvas=createCanvas(600,400);
 canvas.center();
}
function draw(){
image(img,0,0,600,400);
stroke("blue");
noFill();
rect(35,35,600,600);

}
