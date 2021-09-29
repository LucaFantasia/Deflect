var panel;
var ball;
var paused = false;
var ballLeft, ballRight, ballDown, ballUp;
var level;
var play = false;

function setup() {
  createCanvas(800, 800);

  panel = new Panel();
  ball = new Ball();
}

function draw() {
  background(0);

  stefisAssBro();
}

function mousePressed() {
  if(paused) {
    paused = false;
    if(ballLeft) {
      ball.xSpeed = ball.speed * -1;
    } else{
      ball.xSpeed = ball.speed;
    }
    if(ballUp) {
      ball.ySpeed = ball.speed * -1;
    } else{
      ball.ySpeed = ball.speed;
    }
  } else{
    paused = true;
  }
}

function keyTyped() {
  if(key === "r") {
    ball.x = random(ball.ballSize / 2, width - ball.ballSize / 2);
    ball.y = 250;
    ball.speed = 2;
    ball.xSpeed = ball.speed;
    ball.ySpeed = ball.speed;
  } else if(key === "p") {
    play = true;
  }
}

function levelDisplay() {
  textAlign(CENTER);
  fill(255);
  textSize(25);
  level = ball.speed - 1;
  text("Level " + level, width / 2, height - 45);
}

function stefisAssBro() {
  if(play) {
    panel.show();

    ball.move();
    ball.show();
    ball.bounce();
    ball.hit();
    ball.death();
    ball.pause();

    levelDisplay();
  } else{
    textSize(30);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("Press 'P' to play", width / 2, height / 2);
  }
}