// While classwork has acted as a starting point, note that assitance from chatgpt has been used to expand from there to create more complex and refined work

let words = [
  'power', 'POWER', 'I need more', 'keep going', 'I can feel it', 'so much', 
  'its almost endless', 'all could be mine', 'extract it', 'take it', 
  'give me more', 'more', 'more', 'more', 'more', 'more', 'more', 'more', 
  'more', 'more', 'more', 'more', 'more', 'more', 'more', 'more', 'more', 
  'more', 'more', 'more', 'wait', 'this is too much', 'I cant take much more', 
  'stop', 'STOP'
];
let activeWords = [];
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Shadows Into Light');
}

function draw() {
  backgroundChange();

  let stopWord = null;

  for (let i = activeWords.length - 1; i >= 0; i--) {
    let wordObj = activeWords[i];

    if (wordObj.word === 'STOP') {
      stopWord = wordObj; 
      continue;
    }

    if (wordObj.size >= 200) {
      wordObj.alpha -= 2;
    } else {
      wordObj.size += 0.8;
    }

    fill(wordObj.color || color(255, wordObj.alpha));
    textSize(wordObj.size);
    text(wordObj.word, wordObj.x, wordObj.y);

    if (wordObj.alpha <= 0) {
      activeWords.splice(i, 1);
    }
  }

  if (stopWord) {
    stopWord.x = width / 2;
    stopWord.y = height / 2;
    stopWord.color = color(255, 0, 0); 
    stopWord.size += 30;

    fill(stopWord.color);
    textSize(stopWord.size);
    text(stopWord.word, stopWord.x, stopWord.y);

    if (stopWord.size > width * 2) {
      activeWords = activeWords.filter(w => w.word !== 'STOP');
      window.close();
    }
  }
}

function mousePressed() {
  if (index < words.length) {
    let newWord = {
      word: words[index],
      x: random(100, width - 100),
      y: random(100, height - 100),
      size: 10,
      alpha: 255
    };

    activeWords.push(newWord);
    index++;
  }
}

function backgroundChange() {
  let stopActive = activeWords.some(w => w.word === 'STOP');
  background(stopActive ? 255 : 0);
}
