
// variables 
let bowlX = -340;
let bowlY = 400;
let grassX = 0;
let grassY = 570; 
let characterX = 100;
let characterY = 0;
let velocityY = 0.8; 
let boostVelocity = 0.7;
let acceleration = 0.8;
let gameState = true;  
 
 
function setup() {
  createCanvas(800, 600);
}

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
scale(0.3);
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
  fill(100, 155, 20);
  rect(x, y+50, 1700, 30);
}

// made this one into a loop in draw to triplicate it
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
  text("$$$$$$", 365, 450, 100, 100);
}

 // Start sceen
 function startScreen() {
  background(25, 255, 70);
  fill (255, 255, 255);
  textStyle(BOLD);
  textSize(50);
  text("START GAME!", 240, 266);
  textSize(20);
  text("click the screen to start :)", 295, 350);

 }    

 //game screen, all the functions that are supposed to be on the game 
 function gameScreen() {
  background(0, 255, 255);
  rainbow(175, 260);
  character(characterX, characterY);
  grass(0, 520);
  for (let i = 0; i < 3; i++) {
    bowlLeprechaun(i * 200, bowlY);
}
  
 }


//results screen
//this code was fixed with the help of Liudmyla Petrus
function resultScreen() {
  background(255, 40, 60);
  fill(55, 155, 55);
  textStyle(BOLD);
  textSize(50);
  text("RESULTS", 300, 266);

  if (characterX > 120 && characterX < 190) {
    //loosing
    console.log("GAME OVER");
    textSize(40);
    text("you lost!", 325, 322);
    textSize(20);
    text("click the screen to play again", 275, 550);
  } else if (characterX > 280 && characterX < 330) {
    //wining
    background(255,182,163);
    text("RESULTS", 300, 266);
    console.log("LUCKY YOU, YOU WON!");
    textSize(40);
    text("LUCKY YOU, YOU WON!", 185, 322);
    textSize(20);
    text("click the screen to play again", 275, 550);
  } else if (characterX > 454 && characterX < 500) {
    //loosing
    console.log("GAME OVER");
    textSize(40);
    text("you lost!", 325, 322);
    textSize(20);
    text("click the screen to play again", 275, 550);
  } else {
    //if you fall between the buckets
    console.log("GAME OVER");
    textSize(40);
    text("DAMN, YOU GOT BAD PULSE!!", 130, 322);
    textSize(20);
    text("click the screen to play again", 275, 550);
  }
}

let state = "start";
let gameTimer = 0;

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
  // velocityY=2;
  acceleration=0.2;
  
//gravity logic
characterY = characterY + velocityY;
velocityY = velocityY + acceleration;
}   



// bouncing effect
if (keyIsDown(UP_ARROW)) {
  // characterY -= boostVelocity;
  velocityY -= boostVelocity;
}

if (keyIsDown(LEFT_ARROW)) {
  characterX = characterX -10;
}                           
if (keyIsDown(RIGHT_ARROW)) {
  characterX = characterX + 10;
}
   
}

function resetGame() {
  state= "game";
  characterX = 100;
  characterY = 0;
  velocityY = 0.8;
}
// function resetGame() {
//   characterX = 100;
//   characterY = 20;

//   velocityY= 0.8;
//   acceleration= 0.8;
// //reestablecer el temporizador y estado del juego
// gameTimer = 0;
// gameState= true;

// }
// function mouseClicked() {
//   if (state === "start") {
//     state = "game";
//     resetGame();
//   } else if (state === "result") {
//     state = "start";
//     resetGame();
//   }
// }
 
function draw() {
  background(0, 255, 255);         
  rainbow(175, 260);    
  grass(0, 520); 
  for (let i = 0; i < 3; i++) {
    bowlLeprechaun(i * 200, bowlY);
}
  if (state === "start") {
    startScreen();
    resetGame();
  } else if (state === "game") {
  mechanichs ();
    gameScreen();
    gameTimer = gameTimer + 1;
    if (gameTimer >= 200) {
      gameTimer = 0;
      state = "result";
    }
  } else if (state === "result") {
    resultScreen();
  }
}
  
 
     //change beetween screens while clicking 
     function mouseClicked() {
      if (state === "start") {
        //if statement
        state = "game";
      } else if (state === "result") {
        state = "start";
      }
      if(state==="start"){
        characterX=100;
        characterY=20;
      }
     }

    