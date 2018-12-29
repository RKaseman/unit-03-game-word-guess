
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
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(200, 200, 50, 50, 0, 1);
            arc(200, 200, 50, 50, 2, 3);
            arc(200, 200, 50, 50, 4, 5);

            stroke(0, 0, 192);
            line(200, 216, 200, 232);

            noFill();
            smooth();
            strokeWeight(10.0);
            strokeJoin(BEVEL);
            beginShape();
            vertex(35, 20);
            vertex(65, 50);
            vertex(35, 80);
            endShape();

            // sketch border
            stroke(0, 128, 0);
            strokeWeight(2);
            line(1, 1, 399, 1);
            line(1, 399, 399, 399);
            line(399, 1, 399, 399);
            line(1, 1, 1, 399);

        }
    }
};

