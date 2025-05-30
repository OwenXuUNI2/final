// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let words;
let currentWord = 0;
let celestialLinks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP);
  textSize(32);
  words = "CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL celestial CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL CELESTIAL".split(" ");
  textWrap(WORD);
}

function draw() {
  background(0);
  fill(255);
  textFont('Shadows Into Light');
  text("click", 20, 20); 
  

  let x = 20;
  let y = 70;
  let spaceWidth = textWidth(' ');
  celestialLinks = []; 

  for (let i = 0; i < currentWord; i++) {
    let word = words[i];
    let wordWidth = textWidth(word);

    if (x + wordWidth > width - 20) {
      x = 20;
      y += textAscent() + textDescent() + 10;
    }

    if (word === "celestial") {
      fill(0, 255, 255); 
      celestialLinks.push({
        x: x,
        y: y,
        w: wordWidth,
        h: textAscent() + textDescent()
      });
    } else {
      fill(255);
    }

    text(word, x, y);
    x += wordWidth + spaceWidth;
  }
}

function mousePressed() {
  for (let link of celestialLinks) {
    if (
      mouseX >= link.x && mouseX <= link.x + link.w &&
      mouseY >= link.y && mouseY <= link.y + link.h
    ) {
      window.location.href = "power.html"; 
      return;
    }
  }

  if (currentWord < words.length) {
    currentWord++;
  }
}
