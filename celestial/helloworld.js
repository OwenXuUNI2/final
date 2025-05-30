// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
}


function draw() {
  r= random(255);
  g= random(255);
  b = random(255);
  
  fill(r,g,b, 20);
  textSize(100);
  text("hello world, this is the end", mouseX, mouseY);
}