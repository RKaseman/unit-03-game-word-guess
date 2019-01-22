
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(4);

        var stickmanY = 128;

        function doubleH() {
            textAlign(CENTER, CENTER);
            textSize(384);
            // shadow
            fill(72, 0, 72);
            translate(32, 32);
            text("H", 200, 200);
            // foreground
            fill(184, 0, 0);
            translate(-64, -64);
            text("H", 200, 200);
            popMatrix();
        }

        function muteBkgd() {
            rectMode(CENTER);
            noStroke();
            fill(0, 0, 0, 216);
            rect(200, 200, 384, 384);
        }

        function gameOver() {
            textAlign(CENTER, CENTER);
            textSize(128);
            text("GAME\nOVER", 200, 200);
        }

        // draw the stickman in stages
        function drawHead() {
            // arc(x, y, width, height, start, stop)
            noFill();
            strokeWeight(6);
            stroke(0, 0, 192);
            arc(200, stickmanY, 56, 64, -1, 2);
            arc(200, stickmanY, 56, 64, 2, 4);
            arc(200, stickmanY, 80, 60, 3.7, 5.1);
        }

        function drawBody() {
            line(200, stickmanY + 32, 200, stickmanY + 96);
        }

        function drawLeftArm() {
            line(200, stickmanY + 40, 184, stickmanY + 88);
        }

        function drawRightArm() {
            line(200, stickmanY + 40, 216, stickmanY + 88);
        }

        function drawLeftLeg() {
            line(200, stickmanY + 96, 184, stickmanY + 152);
        }

        function drawRightLeg() {
            line(200, stickmanY + 96, 216, stickmanY + 152);
        }

        function drawEyes() {
            strokeWeight(2);
            line(188, stickmanY - 8, 194, stickmanY - 2);
            line(188, stickmanY - 2, 194, stickmanY - 8);
            translate(16, 0);
            line(188, stickmanY - 8, 194, stickmanY - 2);
            line(188, stickmanY - 2, 194, stickmanY - 8);
            popMatrix();
        }

        draw = function () {
            // canvas color
            background(216, 216, 216);

            // for all line segment caps
            strokeCap(SQUARE);

            // corners
            strokeWeight(16);
            stroke(0, 0, 0);
            line(64, 0, 0, 64);
            line(336, 0, 400, 64);

            var gameState = document.getElementById("game-state").innerHTML

            if (gameState == 0) {
                doubleH();
            }
            if (gameState == 1) {
                doubleH();
                muteBkgd();
                drawHead();
            }
            if (gameState == 2) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
            }

            if (gameState == 3) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
            }

            if (gameState == 4) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
            }

            if (gameState == 5) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
            }

            if (gameState == 6) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
                drawRightLeg();
            }

            if (gameState == 7) {
                gameOver();
                muteBkgd();
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

