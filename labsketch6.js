function setup() {
  createCanvas(400, 400);
  frameRate(60);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  sped = 2;

  xLoc = 200;
  yLoc = 350;

  siz = 10;
  coll = siz * 9;

  coinTouched = false;

  counter = 0;

  coinBuffer = 25;
  //coinX1 = 200
  //coinY1 = 200
  coinRandomizer();
}

function draw() {
  //xLoc = 200;
  //yLoc = 200;
  background(220);
  //rect(xLoc, yLoc, coll);
  addCharacter(xLoc, yLoc, siz);
  if (keyIsDown(LEFT_ARROW)) {
    xLoc -= sped;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xLoc += sped;
  }
  if (xLoc >= width - coll / 2) {
    xLoc = width - coll / 2;
  }
  if (xLoc <= coll / 2) {
    xLoc = coll / 2;
  }
  if (keyIsDown(UP_ARROW)) {
    yLoc -= sped;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yLoc += sped;
  }
  if (yLoc >= width - coll / 2) {
    yLoc = width - coll / 2;
  }
  if (yLoc <= coll / 2) {
    yLoc = coll / 2;
  }
  coinTouched = false;
  if (counter < 5) {
    addCoin(coinX, coinY, 5);
  }
  if (coinTouched) {
    coinRandomizer();
    counter += 1;
  }
}

function addCharacter(transX, transY, size) {
  push();
  translate(transX, transY);
  scale(size);
  noStroke();
  if (coinTouched) {
    fill("gold");
  } else {
    fill("indigo");
  }
  ellipse(2, 0, 5);
  ellipse(-2, 0, 5);
  ellipse(0, 2, 5);
  ellipse(0, -2, 5);
  fill("purple");
  rect(0, 0, 5);
  pop();
}

function addCoin(transX, transY, size, ID) {
  push();
  translate(transX, transY);
  scale(size);
  noStroke();
  if (
    transX > xLoc - coll / 2 - size &&
    transX < xLoc + coll / 2 + size &&
    transY > yLoc - coll / 2 - size &&
    transY < yLoc + coll / 2 + size
  ) {
    coinTouched = true;
    invisible = false;
  }

  fill("gold");

  ellipse(0, 0, 5, 10);
  pop();
}

function coinRandomizer() {
  coinX = random(0 + coinBuffer, 400 - coinBuffer);
  coinY = random(0 + coinBuffer, 400 - coinBuffer);
}
