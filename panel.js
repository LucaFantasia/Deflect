function Panel() {
    this.panelWidth = 100;
    this.panelHeight = 20;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.x;
    this.y;
  
    this.show = function() {
      this.x = constrain(mouseX, this.panelWidth / 2, width - this.panelWidth / 2);
      this.y = 700;
      rectMode(CENTER);
      fill(this.r, this.g, this.b);
      rect(this.x, this.y, this.panelWidth, this.panelHeight);
    }
}