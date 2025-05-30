// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let cam, celestial, song, amp;
let smoothedScale = 1;
let smoothing = 0.05;
let startButton, volumeSlider;
let stars = [];

function preload() {
  celestial = loadModel('models/celestial.obj', true);
  song = loadSound('music/borderline.mp3');
  customfont = loadFont('fonts/ShadowsIntoLight.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  startButton = createButton("Start");
  startButton.position(20, 20);
  startButton.style('font-size', '20px');
  startButton.style('color', 'white');
  startButton.style('font-family', 'Shadows Into Light');
  startButton.style('padding', '10px 20px');
  startButton.style('border-radius', '8px');
  startButton.style('background-color', 'black');
  startButton.style('cursor', 'pointer');
  startButton.mousePressed(startSketch);

  volumeSlider = createSlider(0, 0.5, 0.25, 0.01);
  volumeSlider.position(20, 60);
  volumeSlider.style('width', '200px');
  volumeSlider.style('height', '20px');

  amp = new p5.Amplitude();

  for (let i = 0; i < 600; i++) {
    stars.push({
      x: random(-3000, 3000),
      y: random(-3000, 3000),
      z: random(-3000, 3000),
      offset: random(TWO_PI)
    });
  }
}

function startSketch() {
  song.loop();
  startButton.hide();
}

function draw() {
  background(0);
  orbitControl();
  normalMaterial();

  push();
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    let brightness = map(sin(frameCount * 0.05 + s.offset), -1, 1, 100, 255);
    fill(brightness);
    push();
    translate(s.x, s.y, s.z);
    sphere(2);
    pop();
  }
  pop();

  let level = amp.getLevel();
  let targetScale = map(level, 0, 0.1, 1, 3);
  smoothedScale = lerp(smoothedScale, targetScale, smoothing);

  song.setVolume(volumeSlider.value());

  let cols = 8;
  let rows = 6;
  let spacing = 300;

  for (let x = -cols / 2; x < cols / 2; x++) {
    for (let y = -rows / 2; y < rows / 2; y++) {
      push();
      translate(x * spacing, y * spacing, 0);
      scale(smoothedScale);
      model(celestial);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
