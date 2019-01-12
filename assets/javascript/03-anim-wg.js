
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);

        // draw the stickman
        function drawHead() {
            // arc(x, y, width, height, start, stop)
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(200, 240, 32, 40, -1, 2);
            arc(200, 240, 32, 40, 2, 4);
            arc(200, 240, 56, 36, 3.7, 5.1);
        }

        function drawBody() {
            stroke(0, 0, 192);
            line(200, 256, 200, 296);
        }

        function drawLeftArm() {
            line(200, 272, 184, 288);
        }

        function drawRightArm() {
            line(200, 272, 216, 288);
        }

        function drawLeftLeg() {
            line(200, 296, 184, 328);
        }

        function drawRightLeg() {
            line(200, 296, 216, 328);
        }

        function drawEyes() {
            strokeWeight(1);
            line(192, 232, 198, 238);
            line(192, 238, 198, 232);
            translate(10, 0);
            line(192, 232, 198, 238);
            line(192, 238, 198, 232);
            translate(-10, 0);
        }

        draw = function () {
            // canvas color
            background(216, 216, 216);

            // for all line segment caps
            strokeCap(SQUARE);

            // "H";
            textAlign(CENTER, CENTER);
            textSize(384);
            // shadow
            fill(72, 0, 72);
            text("H", 208, 208);
            // foreground
            fill(184, 0, 0);
            text("H", 192, 192);

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
            strokeWeight(8);
            // top
            stroke(184, 0, 0);
            line(0, 0, 400, 0);
            // right
            stroke(72, 0, 72);
            line(398, 0, 398, 400);
            // bottom
            line(0, 400, 400, 400);
            // left
            stroke(184, 0, 0);
            line(2, 0, 2, 400);

        }
    }
};

