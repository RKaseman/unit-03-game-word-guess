
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        draw = function () {
            background(216, 216, 216);

            strokeWeight(16);
            strokeCap(PROJECT);
            stroke(100, 20, 20);
            line(176, 100, 176, 200);
            line(192, 100, 208, 100);
            // arc(x, y, width, height, start, stop)
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(100, 55, 50, 50, 0, 1);
            arc(100, 55, 50, 50, 2, 3);
            arc(100, 55, 50, 50, 4, 5);
            //sam's snowman body
            strokeWeight(1);
            stroke(10, 130, 180);
            fill(0, 0, 192);
            ellipse(200, 246, 108, 108 - 10);
            textAlign(CENTER, BASELINE);
            text("text\nmay\ngo\nhere.", 200, 144);

            //sam's bow tie. quads - with twists
            fill(75, 0, 155);
            quad(182, 205, 182, 225, 217, 205, 217, 225);
            fill(105, 0, 185);
            quad(185, 205, 185, 225, 215, 205, 215, 225);
            rectMode(CENTER);
            rect(200, 215, 8, 6);
            stroke(32, 32, 64);
            line(196, 213, 196, 217);
            line(204, 213, 204, 217);

            //sketch border
            stroke(0, 128, 0);
            strokeWeight(2);
            line(1, 1, 399, 1);
            line(1, 399, 399, 399);
            line(399, 1, 399, 399);
            line(1, 1, 1, 399);

        }
    }
};

