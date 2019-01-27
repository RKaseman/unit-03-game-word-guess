
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(4);

        var stickmanY = 128;
        var midPt = 200;

        function doubleH() {
            function theH() {
                text("H", midPt, midPt);
            };
            textAlign(CENTER, CENTER);
            textSize(384);
            // shadow
            fill(72, 0, 72);
            translate(32, 32);
            theH();
            // foreground
            fill(184, 0, 0);
            translate(-64, -64);
            theH();
            popMatrix();
        };

        // darken the "logo"
        function muteBkgd() {
            rectMode(CENTER);
            noStroke();
            fill(0, 0, 0, 216);
            rect(midPt, midPt, 384, 384);
        };

        // display "game over" text
        function gameOver() {
            textAlign(CENTER, CENTER);
            textSize(128);
            text("GAME\nOVER", midPt, midPt);
        };

        // shadow and foreground for sketch depth
        function shadow() {
            stroke(0, 0, 0);
            translate(2, 2);
        };

        function foreground() {
            stroke(0, 0, 192);
            translate(-2, -2);
        };

        // draw the stickman in stages
        function drawHead() {
            // arc(x, y, width, height, start, stop)
            function theHead() {
                arc(midPt, stickmanY, 56, 64, -1, 2);
                arc(midPt, stickmanY, 56, 64, 2, 4);
                arc(midPt, stickmanY, 80, 60, 3.7, 5.1);
            };
            noFill();
            strokeWeight(6);
            shadow();
            theHead();
            foreground();
            theHead();
            popMatrix();
        };

        function drawBody() {
            function theBody() {
                line(midPt, stickmanY + 32, midPt, stickmanY + 96);
            };
            shadow();
            theBody();
            foreground();
            theBody();
            popMatrix();
        };

        function drawLeftArm() {
            function leftArm() {
                line(midPt - 6, stickmanY + 48, midPt - 24, stickmanY + 88);
            };
            shadow();
            leftArm();
            foreground();
            leftArm();
            popMatrix();
        };

        function drawRightArm() {
            function rightArm() {
                line(midPt + 6, stickmanY + 48, midPt + 24, stickmanY + 88);
            };
            shadow();
            rightArm();
            foreground();
            rightArm();
            popMatrix();
        };

        function drawLeftLeg() {
            function leftLeg() {
                line(midPt, stickmanY + 96, midPt - 24, stickmanY + 152);
            };
            shadow();
            leftLeg();
            foreground();
            leftLeg();
            popMatrix();
        };

        function drawRightLeg() {
            function rightLeg() {
                line(midPt, stickmanY + 96, midPt + 24, stickmanY + 152);
            };
            shadow();
            rightLeg();
            foreground();
            rightLeg();
            popMatrix();
        };

        function drawEyes() {
            pushMatrix();
            function eyes() {
                strokeWeight(2);
                line(188, stickmanY - 8, 194, stickmanY - 2);
                line(188, stickmanY - 2, 194, stickmanY - 8);
                translate(16, 0);
                line(188, stickmanY - 8, 194, stickmanY - 2);
                line(188, stickmanY - 2, 194, stickmanY - 8);
                translate(-16, 0);
            };
            shadow();
            eyes();
            foreground();
            eyes();
            popMatrix();
        };

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
            };
            if (gameState == 1) {
                doubleH();
                muteBkgd();
                drawHead();
            };
            if (gameState == 2) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
            };
            if (gameState == 3) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
            };
            if (gameState == 4) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
            };
            if (gameState == 5) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
            };
            if (gameState == 6) {
                doubleH();
                muteBkgd();
                drawHead();
                drawBody();
                drawLeftArm();
                drawLeftLeg();
                drawRightArm();
                drawRightLeg();
            };
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
            };

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

        };
    };
};

