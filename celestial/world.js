// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let celestialModel;
let moonModel;
let lineModel;
let beltModel;
let stars = [];
let fadeAlpha = 255;

let cameraDistance = 14000;
let targetDistance = 5200;
let zoomSpeed = 100;
let animationComplete = false;

let easing = 0.018;
let easeStartDistance = 8000;

let earthRotation = 0;
let mercuryRotation = 0;
let jupiterRotation = 0;
let sunRotation = 0;

let cameraRotation = 0;

function preload() {
  celestialModel = loadModel('models/celestial.obj', true);
  moonModel = loadModel('models/moon.obj', true);
  lineModel = loadModel('models/lines.obj', true);
  beltModel = loadModel('models/belt.obj', true);

  moonImg = loadImage('textures/rock.jpg');
  sunImg = loadImage('textures/sun.jpg');
  earthImg = loadImage('textures/earth.jpg');
  mercImg = loadImage('textures/merc.jpg');
  jupiterImg = loadImage('textures/jupiter.jpg');
}

function setup() {
  let canvas = createCanvas(1605, 874, WEBGL);
  canvas.parent("canvas-container");


  let fov = PI / 3;
  let aspect = width / height;
  let near = 1;
  let far = 15000;
  perspective(fov, aspect, near, far);

  for (let i = 0; i < 1500; i++) {
    stars.push([
      random(-6000, 6000),
      random(-6000, 6000),
      random(-6000, 6000),
      random(1, 5)
    ]);
  }

  pointLight(255, 255, 255, 200, 200, -1000);
  directionalLight(255, 255, 255, -1, -1, -1);
  ambientLight(100);

  setTimeout(() => {
    document.getElementById('fade-overlay').style.opacity = 0;
  }, 10);
}

function draw() {
  background(0);

  if (!animationComplete) {
    let distanceToTarget = targetDistance - cameraDistance;
    cameraDistance += distanceToTarget * easing;

    if (abs(distanceToTarget) < 1) {
      cameraDistance = targetDistance;
      animationComplete = true;
    }
  }

  if (animationComplete) {
    orbitControl(0, 0, 0);
  }

  if (!animationComplete) {
    cameraRotation += 0.01;
    let x = cos(cameraRotation) * cameraDistance;
    let z = sin(cameraRotation) * cameraDistance;

    camera(x, 0, z, 0, 0, 0, 0, 1, 0);
  }

  // stars
  push();
  noStroke();
  for (let star of stars) {
    push();
    translate(star[0], star[1], star[2]);

    let twinkle = map(sin(frameCount * 0.1 + star[0] * 0.01), -1, 1, 0.5, 1.5);
    let alphaValue = map(twinkle, 0.4, 1, 50, 255);

    fill(255, 255, 255, alphaValue);
    sphere(star[3] * 2);
    pop();
  }
  pop();

  // celestial
  normalMaterial();
  fill(255, 255, 255, 100);
  push();
  translate(0, -2000, -4500);
  scale(20);
  model(celestialModel);
  pop();

  // portal
  push();
  translate(0, 1400, 850);
  scale(50);
  fill(30, 3, 70, 100);
  model(beltModel);
  pop();

  // planet lines
  push();
  translate(0, 250, 850);
  scale(40);
  fill(255);
  model(lineModel);
  pop();

  // sun
  push();
  translate(0, 250, 850);
  rotateY(sunRotation);
  rotateX(sunRotation);
  scale(5);
  texture(sunImg);
  model(moonModel);
  pop();
  sunRotation += 0.0008;

  // Earth
  push();
  translate(1810, 800, 2250);
  rotateY(earthRotation);
  rotateX(earthRotation);  
  scale(1.3);
  texture(earthImg);
  model(moonModel);
  pop();
  earthRotation += 0.003;  

  // Mercury 
  push();
  translate(700, -320, -130);
  rotateY(mercuryRotation);
  rotateX(mercuryRotation);  
  scale(1.2);
  texture(mercImg);
  model(moonModel);
  pop();
  mercuryRotation += 0.005; 

  // Jupiter 
  push();
  translate(-4000, 280, 1050);
  rotateY(jupiterRotation);
  rotateX(jupiterRotation); 
  scale(3);
  texture(jupiterImg);
  model(moonModel);
  pop();
  jupiterRotation += 0.001;  
}
