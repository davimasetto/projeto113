// let detrmina que a variavel é limitada a um espoco ou instruçaõ

let img;
let canvas;
let video;
function preload() {
    img = loadImage('barney.webp');
    video = createCapture(VIDEO);
    video.hide();
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 250);

    image(img, 0, 0);
    tint(0, 153, 204); //tingir
    image(img, 100, 0);
}

function draw() {
    image(video, 0, 0);
    filter(GRAY);
    image(video, width/2, 0);
}
