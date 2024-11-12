function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(0, 255, 255);
  character(200, 120);
}

//variables position
let characterX = 280;
let characterY = 400;

function character(x,y){

// beard
fill(255, 128, 0);
push();
translate(x, y);
scale(0.5);
noStroke();
beginShape();
vertex(x+5, y+200);
bezierVertex(x-188, y+25, x-140, y-26, x, y-140);
bezierVertex(x+180, y-26, x+188, y+25, x+5, y+200);
endShape();

//ears
fill(210, 161, 140);
ellipse(x-95, y+20, 20, 50);
ellipse(x+110, y+20, 20, 50);

// face
fill(210, 171, 140);
noStroke();
ellipse(x+8, y+20, 200, 235);

//base hat
fill(1, 95,29);
ellipse(x+5, y-70, 300, 100);

//top hat
fill(1, 95,29);
rect(x-85, y-300, 180, 190);

//accesorie hat
fill(0, 0, 0);
rect(x-85, y-150, 180, 40);

//gold hat
fill(255, 255, 0);
rect(x-20, y-150, 50, 40);
fill(0, 0, 0);
rect(x-15, y-140, 40, 22);

//nose
fill(210, 180, 140);
noStroke();
ellipse(x+5, y+60, 40, 20);

//left eye
fill(250, 250, 250);
ellipse(x-25, y, 40, 30);

//right eye
fill(250, 250, 250);
ellipse(x+40, y, 40, 30);

//left eye 1.1

fill(173, 216, 230);
ellipse(x-25, y, 25, 20);

//right eye 1.1
fill(173, 216, 230);
ellipse(x+40, y, 25, 20);

// left eye 1.2
fill(0, 0, 0);
ellipse(x-25, y, 10, 10);

// right eye 1.2
fill(0, 0, 0);
ellipse(x+40, y, 10, 10);

//mouth
fill(250, 250, 250);
strokeWeight(3);
arc(x+5, y+90, 80, 50, 0, PI);

//cheeks
//left eye
fill(255, 189, 223);
push();
translate(1, 1);
ellipse(x-60, y+30, 40, 30);
ellipse(x+80, y+30, 40, 30);
pop();

}

/* THE GAME- CHARACTER DESCRIPTION
- Irish Leprechaun 
-Rainbow 
-Goodies bucket to win 
-Trash buckets to loose 

SOME MECHANICS 
-Tap the screen to make the character go up
-Take gravity into account
-End the game if arriving into trash instead of goodies bucket
*/

//This code was taken from master' students example from one of the lectures (flappy_ufo)

//game logistics variable 
let velocityY = 0.2;
let acceleration = 0.2;

// game state variable 
let gameState = true;

//gravity logic 
characterY = characterY + velocityY;
velocityY = velocityY + acceleration;

//decrease the velocity when clicking
if (mouseIsPressed){
  velocityY = velocityY - 0.7;
}

// ends game when character touches the ground
if (characterY > 180) {
  gameState = false;
  console.log('failed');
}

