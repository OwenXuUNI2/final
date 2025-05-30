// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let color1, color2, color3, color4, color5, color6, color7, color8, color9;
let animateColors = false;
let clickableEStartX, clickableEStartY;
let clickableEWidth = 0;
let clickableEHeight = 0;

function setup() {
  createCanvas(windowWidth * 2, windowHeight);
  window.scrollTo(windowWidth * 2, 0);

  frameRate(24);

  color1 = color(0);
  color2 = color(0);
  color3 = color(155, 141, 101);
  color4 = color(255, 192, 245);
  color5 = color(255);
  color6 = color(255);
  color7 = color(255, 0, 0);
  color8 = color(0);
  color9 = color(255);
}

function draw() {
  background(color1);

  if (animateColors) {
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
    color4 = color(random(255), random(255), random(255));
    color5 = color(random(255), random(255), random(255));
    color6 = color(random(255), random(255), random(255));
    color7 = color(random(255), random(255), random(255));
    color8 = color(random(255), random(255), random(255));
    color9 = color(random(255), random(255), random(255));
  }

  fill(color2);
  quad(100, 200, 700, 200, 500, 50, 200, 50);
  rect(100, 200, 100, 200);

  fill(color3);
  noStroke();
  triangle(200, 200, 600, 200, 200, 900);

  fill(color4);
  noStroke();
  triangle(400, 400, 400, 700, 600, 700);

  fill(color5);
  strokeWeight(2);
  stroke(51);
  rect(250, 700, 200, 100);

  line(250, 750, 450, 750);
  line(325, 700, 325, 800);
  line(350, 700, 350, 800);
  line(375, 700, 375, 800);
  line(400, 700, 400, 800);
  line(425, 700, 425, 800);
  line(275, 700, 275, 800);
  line(300, 700, 300, 800);

  fill(color6);
  strokeWeight(1);
  circle(250, 300, 80);
  circle(450, 300, 80);

  fill(color7);
  circle(250, 300, 50);
  circle(450, 300, 50);

  fill(color8);
  circle(250, 300, 20);
  circle(450, 300, 20);

  textSize(100);
  textFont('Shadows Into Light');
  fill(color9);

  let baseText = 'Generate MEEEEEEEEEEEEEEEEEEEEEEEEEEEE';
  let clickableText = '(CLICK MEEE)';
  let baseX = 700;
  let baseY = 350;

  text(baseText, baseX, baseY);
  let baseWidth = textWidth(baseText);

  textSize(130)
  fill('purple');
  text(clickableText, baseX + baseWidth, baseY);

  clickableEStartX = baseX + baseWidth;
  clickableEStartY = baseY - textAscent(); 
  clickableEWidth = textWidth(clickableText);
  clickableEHeight = textAscent() + textDescent();
}

function mousePressed() {
  animateColors = !animateColors;

  if (
    mouseX >= clickableEStartX &&
    mouseX <= clickableEStartX + clickableEWidth &&
    mouseY >= clickableEStartY &&
    mouseY <= clickableEStartY + clickableEHeight
  ) {
    window.location.href = 'nextpage.html'; 
  }
}
