function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    background("white")
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    background(220);
    fill("red")
    circle(30,30,40)
    circle(375,375,40)
    circle(375,31,40)
    circle(30,375,40)
    fill("blue")
    rect(51,10,304,30)
    rect(51,360,304,30)
    rect(12,50,40,304)
    rect(355,50,40,304)

    image(video,100,100,200,200)
}