function setup() {
                createCanvas(500, 500);
                background("yellow");
               
                stroke(0);
               
                strokeWeight(2);
                fill("gray")
                rect(200, 200, 100, 100, 20, 20, 0, 0);
               
                strokeWeight(1);
                fill("white")
                rect(210, 210, 30, 30);
                strokeWeight(1);
                fill("black")
                rect(217.5, 217.5, 15, 15);
                strokeWeight(1);
                fill("red")
                rect(221, 221, 8, 8);
               
                strokeWeight(1);
                fill("white")
                rect(260, 210, 30, 30);
                strokeWeight(1);
                fill("black")
                rect(267.5, 217.5, 15, 15);
                strokeWeight(1);
                fill("red")
                rect(271, 221, 8, 8);
               
                strokeWeight(1);
                fill("white")
                rect(210, 270, 80, 20, 10, 10, 10, 10);
               
                strokeWeight(2);
                stroke("rgb(0,255,0)");
                line(212, 280, 289, 280);
               
                strokeWeight(2);
                fill("gray");
                stroke("black")
                triangle(245, 200, 250, 180, 255, 200);
               
                strokeWeight(2);
                fill("red");
                stroke("black")
                ellipse(250, 180, 10, 10);
               
                noFill();
                arc(250,175,17,17, 135.5, 24.7);
                noFill();
                arc(250,170,25,25, 135.5, 24.7);
                noFill();
                arc(250,165,33,33, 135.5, 24.7);
 
}