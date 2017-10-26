var bg = "blue";
var eyeX = 210;
var eyeY = 90;

var offsetX = 0;
var offsetY = 0;

var hitZoneX = 110;
var hitZoneY = 220;

var hitZoneAx = 460;
var hitZoneAy = 112;

var hitZoneBx = 458;
var hitZoneBy = 432;

var on = false;

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(bg);


    stroke(0);

    strokeWeight(5);
    fill("white")
    ellipse(250, 250, 150, 150);

    strokeWeight(5);
    fill("white")
    ellipse(250, 409, 175, 175);
    strokeWeight(5);
    fill("white")
    ellipse(250, 115, 120, 120);
    strokeWeight(3);
    fill("yellow");

    stroke("black")
    triangle(200, 250, 250, 190, 255, 200);

    //eyes
    offsetX = map(mouseX, 0, width, -10, 10);
    offsetY = map(mouseY, 0, width, -10, 10);
    strokeWeight(5);
    fill("red")
    rect(eyeX + offsetX, eyeY + offsetY, 15, 15);
    strokeWeight(5);
    fill("red")
    rect(eyeX + 60 + offsetX, eyeY + offsetY, 15, 15);

    strokeWeight(2);
    line(250, 80, 250, 100);

    //snowflake
    fill("white");
    rect(100, 210, 20, 20);
    fill("red");
    arc(250, 150, 25, 25, 170, 24.7);
    fill("white");
    rect(100, 420, 20, 20);
    fill("white");
    rect(450, 420, 20, 20);
    fill("white");
    rect(450, 100, 20, 20);


    var d = dist(mouseX, mouseY, 100, 210)
    if (d < 25) {
        on = true;
    }
    if (on == true) {
        bg = "green";
    }

    console.log(d);


    if (d > 25) {
        bg = "grey";
    }

    if (d > 100) {
        bg = "orange";

    }






}

function mousePressed() {
    bg = "yellow";


}

function mouseReleased() {
    bg = "purple";
}
