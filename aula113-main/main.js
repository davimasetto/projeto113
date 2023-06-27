function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = " ";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
}

function applyFilter() {
    console.log(cor.value)
    tintColor = document.getElementById("filtro").value;
    console.log(tintcolor)
}

function takeSnapshot() {
    save('foto.png');
}

