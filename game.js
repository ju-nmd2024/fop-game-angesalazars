
// variables 
let bowlX = -340;
let bowlY = 400;
let grassX = 0;
let grassY = 570; 
let characterX = 280;
let characterY = 30;
let velocityY = 0.2; 
let acceleration = 0.1;
let gameState = true; 


function setup() {
  createCanvas(800, 600);
}


//character, background and elements 
function rainbow(x, y) {
  fill(255, 0, 0);
  noStroke();
  rect(280-100, 400-230, 440, 20);
  fill(255, 160, 20);
  rect(280-100, 400-210, 440,20);
  fill(255, 255, 0);
  rect(280-100, 400-190, 440,20);
  fill(0, 255, 0);
  rect(280-100, 400-170, 440,20);
  fill(0, 0, 255);
  rect(280-100, 400-150, 440,20);
  fill(80, 0, 80);
  rect(280-100, 400-130, 440,20);
  fill(255,255,255);
  ellipse(280-120, 400-220, 100, 100);
  fill(255,255,255);
  ellipse(280-120, 400-140, 100, 100);
  fill(255,255,255);
  ellipse(280-180, 400-180, 100, 100);
  fill(255,255,255);
  ellipse(280+340, 400-220, 100, 100);
  fill(255,255,255);
  ellipse(280+340, 400-140, 100, 100);
  fill(255,255,255);
  ellipse(280+400, 400-180, 100, 100); 
  }

function character(x,y){

// beard
fill(255, 128, 0);
push();
translate(x, y);
scale(0.4);
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
// push();
translate(1, 1);
ellipse(x-60, y+30, 40, 30);
ellipse(x+80, y+30, 40, 30);
pop();

}

function grass (x, y) {
  fill(0, 255, 0);
  rect(x, y+50, 1700, 30);
}

function bowlLeprechaun(x, y) {
  fill(0, 0, 0);
  stroke(80, 80, 80);
  strokeWeight(6);
  ellipse (x+200, y+130, 100, 100);
  fill(0, 0, 0);
  stroke(80, 80, 80);
  strokeWeight(6);
  rect(x+150, y+80, 100, 20);
  fill (255, 0, 0);
  textStyle(BOLD);
  textSize(50);
  text("x", 187, 423, 100, 100);
  fill (255, 0, 0);
  textStyle(BOLD);
  textSize(50);
  text("x", 587, 423, 100, 100);
  fill (105, 195, 100);
  textStyle(BOLD);
  textSize(20);
  text("SLAY", 373, 423, 100, 100);
  fill (105, 195, 100);
  textStyle(BOLD);
  textSize(20);
  text("QUEEN", 365, 450, 100, 100);
}


 
/* THE GAME- CHARACTER DESCRIPTION
- Irish Leprechaun 
-Rainbow 
-money bucket to win 
-'x' buckets to loose 

SOME MECHANICS 
-Tap the screen to make the character go up
-Take gravity into account
-End the game if arriving into trash instead of goodies bucket
-win if ending in money
*/

//This code was taken from master' students example from one of the lectures (flappy_ufo)

//make it fly

function mechanichs() {
// character
character(characterX, characterY);
//game state
if(gameState === true) {

   //gravity logic
characterY = characterY + velocityY;
velocityY = velocityY + acceleration;
}
//decrease the velocity when clicking
if (mouseIsPressed) {
  velocityY = velocityY - 0.7;                                          
} 

if (characterY >200) {
  gameState = false;
}

}
 
function draw() {
  background(0, 255, 255);         
  rainbow(175, 260);    
  grass(0, 520); 
  for (let i = 0; i < 3; i ++) {
    bowlLeprechaun (i * 200, bowlY);
  } 
  mechanichs (); 
}

