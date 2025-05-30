let touchModel

function preload() {
  touchModel = loadModel('models/touch.obj', true);
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL)
  canvas.style('cursor', 'grab')
}

function mousePressed() {
  document.body.style.cursor = 'grabbing';
  canvas.style('cursor', 'grabbing');
}

function mouseReleased() {
  document.body.style.cursor = 'grab';
  canvas.style('cursor', 'grab');
}

function draw(){
  background(0);
  orbitControl(1, 1, 1);
  
  normalMaterial();
  fill(0,255,0,100);
  scale(3);
  model(touchModel);
}