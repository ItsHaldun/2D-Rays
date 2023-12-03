let walls = [];
let number_of_rays = 360;
let number_of_walls = 10;
let raycaster;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i< number_of_walls; i++) {
    walls.push(new Boundary(random(round(windowWidth)), 
    random(round(windowHeight)),
    random(round(windowWidth)), 
    random(round(windowHeight))))
  }

  raycaster = new RayCast(number_of_rays);
}

function draw() {
  background(0);

  raycaster.update(mouseX, mouseY);
  raycaster.cast(walls);
  
  for(let i=0; i<walls.length; i++) {
    walls[i].show();
  }
  raycaster.show();
}