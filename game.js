// Suzdavame promenlivi
let myX, myY, myYDelta, skok, doubleSkok;
function nivo()  {
    //suzdavane na nivo
}
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    myYDelta = 0.2;
}
function update() {
    myYDelta = myYDelta + 0.02

    if (areColliding(myX, myY, 60, 80, 200, 400, 270, 25)) {
        myYDelta = 0;
        skok = true;
        doubleSkok = true;
        myY--;
    } else {skok = false}

    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda

    myY = myY + myYDelta;

    if (isKeyPressed[68]) {
        myX = myX + 3;
    }
    if (isKeyPressed[65]) {
        myX = myX - 3;
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(troll, myX, myY, 60, 80);
    drawImage(powerupRed, -500, 550, 1700, 200);
    drawImage(powerupBlue, 200, 400, 270, 25);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup (key) {
    if (skok && key == 32) {
        myYDelta = -1.6;
        skok = false;
    } else if (doubleSkok && key == 32) {
        myYDelta = myYDelta - 2;
        doubleSkok = false;
    }
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
