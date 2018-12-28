
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        draw = function () {
            background(200, 200, 200);

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

