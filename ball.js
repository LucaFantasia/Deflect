function Ball() {
    this.ballSize = 20;
    this.x = random(this.ballSize / 2, width - this.ballSize / 2);
    this.y = 250;
    this.speed = 2;
    this.xSpeed = this.speed;
    this.ySpeed = this.speed;
    ballRight = true;
    ballLeft = false;
    ballUp = false;
    ballDown = true;
  
    this.move = function() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
  
    this.show = function() {
      fill(255, 0 ,0);
      circle(this.x, this.y, this.ballSize);
    }
  
    this.bounce = function() {
      if(this.x >= width - this.ballSize / 2) {
        this.xSpeed = this.speed * -1;
        ballLeft = true;
        ballRight = false;

      } else if(this.x <= this.ballSize / 2) {
        this.xSpeed = this.speed;
        ballRight = true;
        ballLeft = false;

      } else if(this.y >= height - this.ballSize / 2) {
        this.ySpeed = this.speed * -1;
        ballDown = false;
        ballUp = true;

      } else if(this.y <= this.ballSize / 2) {
        this.ySpeed = this.speed;
        ballDown = true;
        ballUp = false;
      }
    }
  
    this.hit = function() {
        if(this.y === panel.y - this.ballSize) {
            if(this.x >= panel.x - panel.panelWidth / 2  && this.x <= panel.x + panel.panelWidth / 2) {
                this.speed += 1;
                this.ySpeed = this.speed * -1;
                ballDown = false;
                ballUp = true;
            }
        }
    }

    this.death = function() {
        if(this.y >= panel.y + panel.panelHeight) {
            this.ySpeed = 0;
            this.xSpeed = 0;
            textAlign(CENTER);
            textSize(35);
            fill(255);
            text("GAME OVER", width / 2, height / 2);

            textSize(20);
            text("Press 'R' to Restart", width / 2, height / 2 + 50);
        }
    }

    this.pause = function() {
        if(paused) {
            textAlign(CENTER);
            textSize(35);
            fill(255);
            text("Paused", width / 2, height / 2);
            this.xSpeed = 0;
            this.ySpeed = 0;
        } 
    }
  }