var gunDeaths2017 = 15549

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  noLoop();
}

function draw() {
  background(255);
  noStroke();
  var y = 10;
  var x = 10;
  
  
  for (var i = 0; i < gunDeaths2017; i++) {
    if (x >= width - 10) {
      x = 10;
      y += 3;
    }
    x += 3;
    fill(255, 0, 0);
    rect(x, y, 2, 2);
  }

  // add in text overlays
  annotateChart();
}

function annotateChart() {
  textAlign(LEFT);
  stroke(255, 0, 0);
  strokeWeight(1);
  textStyle(NORMAL);
  fill(255);
  textSize(60);
  text(`${gunDeaths2017}`, width * 0.10, height / 2);
  textStyle(BOLD);
  textSize(40);
  text(`GUN DEATHS`, width * 0.10, height / 2 + 40);
  textSize(28);
  text(`IN AMERICA`, width * 0.10, height / 2 + 70);

  textSize(24);
  textAlign(RIGHT);
  text(`2017`, width - 20, 40);
}