function setup() {
    createCanvas(500, 500);
    background(128, 128, 128);
}

function mouseDragged() {
    socket.emit("send coords", [mouseX, mouseY]);
}

socket.on("display coords", function (data) {
    fill(0, 0, 255);
    ellipse(data[0], data[1], 50, 50);
});