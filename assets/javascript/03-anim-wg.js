
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
            text("H", 208, 208);
            // foreground
            fill(184, 0, 0);
            text("H", 192, 192);
        }

        function muteBkgd() {
            noStroke();
            fill(0, 0, 0, 192);
            rect(8, 8, 384, 384);
        }

        function gameOver() {
            textSize(128);
            text("GAME\nOVER", 200, 200);
        }

        // draw the stickman in stages
        function drawHead() {
            // arc(x, y, width, height, start, stop)
            noFill();
            strokeWeight(4);
            stroke(0, 0, 192);
            arc(200, stickmanY, 32, 40, -1, 2);
            arc(200, stickmanY, 32, 40, 2, 4);
            arc(200, stickmanY, 56, 36, 3.7, 5.1);
        }

        function drawBody() {
            line(200, stickmanY + 16, 200, stickmanY + 56);
        }

        function drawLeftArm() {
            line(200, stickmanY + 32, 184, stickmanY + 48);
        }

        function drawRightArm() {
            line(200, stickmanY + 32, 216, stickmanY + 48);
        }

        function drawLeftLeg() {
            line(200, stickmanY + 56, 184, stickmanY + 88);
        }

        function drawRightLeg() {
            line(200, stickmanY + 56, 216, stickmanY + 88);
        }

        function drawEyes() {
            strokeWeight(1);
            line(192, stickmanY - 8, 198, stickmanY - 2);
            line(192, stickmanY - 2, 198, stickmanY - 8);
            translate(10, 0);
            line(192, stickmanY - 8, 198, stickmanY - 2);
            line(192, stickmanY - 2, 198, stickmanY - 8);
            translate(-10, 0);
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

