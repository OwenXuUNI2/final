// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let cam;
let thresholdImage;
let dotSpacing = 10;
let cols, rows;
let dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  cols = floor(width / dotSpacing);
  rows = floor(height / dotSpacing);

  cam = createCapture(VIDEO);
  cam.size(cols, rows);
  cam.hide();

  thresholdImage = createImage(cols, rows);

  dots = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push({
        x: x * dotSpacing,
        y: y * dotSpacing,
        homeX: x * dotSpacing,
        homeY: y * dotSpacing
      });
    }
  }
}

function draw() {
  background(0);

  cam.loadPixels();
  thresholdImage.loadPixels();

  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (x + y * cam.width) * 4;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let bright = (r + g + b) / 3;
      let value = bright > 100 ? 255 : 0;

      thresholdImage.pixels[index] = value;
      thresholdImage.pixels[index + 1] = value;
      thresholdImage.pixels[index + 2] = value;
      thresholdImage.pixels[index + 3] = 255;
    }
  }
  thresholdImage.updatePixels();

  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];

    let camX = int(dot.x / dotSpacing);
    let camY = int(dot.y / dotSpacing);
    let index = (camX + camY * cols) * 4;
    let bright = thresholdImage.pixels[index];

    if (bright === 255) {
      let angle = atan2(dot.y - camY * dotSpacing, dot.x - camX * dotSpacing);
      let force = 5;

      dot.x += cos(angle) * force;
      dot.y += sin(angle) * force;
    } else {
      dot.x += (dot.homeX - dot.x) * 0.1;
      dot.y += (dot.homeY - dot.y) * 0.1;
    }

    noStroke();
    fill(255);
    ellipse(dot.x, dot.y, 3);
  }
}

function windowResized() {
  setup();
}
