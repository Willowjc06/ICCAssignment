let hasTyped = false; // variable to track if a key has been pressed
let random_shape; // variable to store the randomly generated type of shape
let sound1, sound2, sound3, sound4, sound5; // variables to store the sound files
let canvas_width = 400;
let canvas_height = 400;

function preload() { // preload function to load sound files before playing
    soundFormats('wav'); // specify the used sound format
    sound1 = loadSound('/audio/dong.wav'); // load sound files
    sound2 = loadSound('/audio/dong2.wav');
    sound3 = loadSound('/audio/dong3.wav');
    sound4 = loadSound('/audio/dong4.wav');
    sound5 = loadSound('/audio/dong5.wav');

}

function setup() {
    createCanvas(canvas_width, canvas_height);
    background(0);

    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    // displays message in middle of the screen
    text('Press any key...', canvas_width / 2, canvas_height / 2);
}

function draw() {
    if (hasTyped) { // displays the shapes only if user has started typing
    fill(0, 15); // mostly transparent black to create a fading effect
    noStroke();
    rect(0, 0, canvas_width, canvas_height); // draws the transparent rectangle over the canvas
    }
}

function keyPressed() {
    if (hasTyped == false) { // clears the start screen so the 'press any key' message disappears 
        background(0);
        hasTyped = true;
    }

    random_shape = floor(random(1, 4)); // floor generates a random number (1-3) corresponding to a shape
    drawShape(random_shape); // calls shape draw function

    playSound(); // calls sound play function
}

function drawShape(random_shape) {
    fill(random(255), random(255), random(255)); // random colour for each shape
    if (random_shape == 1){ // square shape- random position, size and rotation
        let x = random(0, canvas_width);
        let y = random(0, canvas_height);
        let size = random(50, 100);
        let angle = random(TWO_PI);

        push(); // push and pop to only translate individual square to a differen postion each time
        translate(x, y);
        rotate(angle);
        square(-size / 2, -size / 2, size);
        pop();
    } 
    else if (random_shape == 2){ // draws random circle
        circle(random(0, canvas_width), random(0, canvas_height), random(50, 100));
    }
    else { // draws radnom triangle
        triangle(random(0, canvas_width), random(0, canvas_height), random(0, canvas_width), random(0, canvas_height), random(0, canvas_width), random(0, canvas_height));
    }
}

function playSound() {
    let random_sound = floor(random(1, 6)); // generates a random number (1-5) corresponding to a sound
    if (random_sound == 1) { // plays sound based on random number
        sound1.play();
    }
    else if (random_sound == 2) {
        sound2.play();
    }
    else if (random_sound == 3) {
        sound3.play();
    }
    else if (random_sound == 4) {
        sound4.play();
    }
    else {
        sound5.play();
    }
}