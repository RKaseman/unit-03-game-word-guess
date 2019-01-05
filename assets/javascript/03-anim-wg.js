
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        function drawHead() {
            // arc(x, y, width, height, start, stop)
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(200, 200, 32, 40, -1, 2);
            arc(200, 200, 32, 40, 2, 4);
            arc(200, 200, 56, 36, 3.7, 5.1);
        }

        function drawBody() {
            stroke(0, 0, 192);
            line(200, 216, 200, 256);
        }

        function drawLeftArm() {
            line(200, 232, 184, 248);
        }

        function drawRightArm() {
            line(200, 232, 216, 248);
        }

        function drawLeftLeg() {
            line(200, 256, 184, 288);
        }

        function drawRightLeg() {
            line(200, 256, 216, 288);
        }

        function drawEyes() {
            strokeWeight(1);
            line(192, 192, 198, 198);
            line(192, 198, 198, 192);
            translate(10, 0);
            line(192, 192, 198, 198);
            line(192, 198, 198, 192);
            translate(-10, 0);
        }

        draw = function () {
            // canvas color
            background(216, 216, 216);

            // for all line segment caps
            strokeCap(SQUARE);

            // "H";
            textAlign(CENTER, BASELINE);
            textSize(384);
            // shadow
            fill(64, 8, 8);
            text("H", 208, 304);
            // foreground
            fill(192, 0, 0);
            text("H", 192, 288);

            var gameState = document.getElementById("game-state").innerHTML
            if (gameState == 1) {
                drawHead();
            }
            if (gameState == 2) {
                drawHead();
                drawBody();
            }

            if (gameState == 3) {
                drawHead();
                drawBody();
                drawLeftArm();
            }

            if (gameState == 4) {
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
            }

            if (gameState == 5) {
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
            }

            if (gameState == 6) {
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
                drawRightLeg();
            }

            if (gameState == 7) {
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
                drawRightLeg();
                drawEyes();
            }

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

