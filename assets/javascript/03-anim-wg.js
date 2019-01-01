
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        draw = function () {
            // canvas color
            background(216, 216, 216);

            // for all line segment caps
            strokeCap(SQUARE);

            // "H";
            strokeWeight(1);
            stroke(10, 130, 180);
            textAlign(CENTER, BASELINE);
            textSize(384);
            fill(64, 8, 8);
            text("H", 208, 304);
            fill(192, 0, 0);
            text("H", 200, 296);

            // arc(x, y, width, height, start, stop)
            // head
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(200, 200, 32, 40, -1, 2);
            arc(200, 200, 32, 40, 2, 4);
            arc(200, 200, 50, 40, 4, 5.1);

            // body
            stroke(0, 0, 192);
            line(200, 216, 200, 256);

            // left arm
            line(200, 232, 184, 248);

            // right arm
            line(200, 232, 216, 248);

            // left leg
            line(200, 256, 184, 288);

            // right leg
            line(200, 256, 216, 288);

            // eyes
            strokeWeight(1);
            line(192, 192, 198, 198);
            line(192, 198, 198, 192);
            translate(10, 0);
            line(192, 192, 198, 198);
            line(192, 198, 198, 192);
            translate(-10, 0);

            // sketch border
            stroke(192, 0, 0);
            strokeWeight(2);
            line(0, 0, 400, 0);
            line(0, 400, 400, 400);
            line(400, 0, 400, 400);
            line(0, 0, 0, 400);

        }
    }
};

