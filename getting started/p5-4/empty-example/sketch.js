var posX = 0;
var posY = 0;
 
function setup(){
               
                //createCanvas is the size of the canvas
                createCanvas(1000,500);
                background(125);
                background(255,0,0);
                background("purple");
                background("#999999");
               
//             posX = width/2;
//             posY = height/2;
               
                posX = 250;
                posY = 300;
               
                }
 
function draw(){
               
                //250 is the placement and 100 is the width and height x,y,w,h
                //noStroke(); removes stroke from everything
                stroke(0);
                strokeWeight(1);
                fill("pink");
                ellipse(posX,posY,100,100);
                fill("red");
                rect(posX -25, posY + 20, 50,20);
                fill(255)
                ellipse(posX -10,posY -20, 10, 40);
                ellipse(posX + 10,posY -20, 10, 40);
                fill(0,255,0)
                ellipse(posX -10,posY -20, 10, 20);
                ellipse(posX + 10,posY -20, 10, 10);
                stroke("cyan");
                strokeWeight(5);
                point(posX + 10,posY + 10);
                stroke(125,0,0);
                line(posX -25, posY + 30, posX +25, posY + 30);
                noFill();
                arc(posX,posY,100,100, PI, TWO_PI);
}