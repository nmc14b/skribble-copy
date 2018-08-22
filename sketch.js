var socket;

function setup() {
	createCanvas(1000,1000);
	background(51);

	socket = io.connect('http://108.216.171.60/')
	socket.on('mouse', newDrawing);

}

function newDrawing(data) {
	//noStroke();
	color(255,0,100);
	stroke(255,0,100);
	//ellipse(data.x, data.y, 36,36);
	strokeWeight(10);
    line(data.x, data.y, data.px, data.py);
}

function mouseDragged() {
	console.log('Sending: ' + mouseX + ',' +mouseY + ','+ pmouseX + ',' + pmouseY);


var data = {
	x: mouseX,
	y: mouseY,
	px: pmouseX,
	py: pmouseY
}
socket.emit('mouse', data);
	
	// noStroke();
	 //fill(255);
	// //ellipse(mouseX, mouseY, 36, 36);
	color(255);
	stroke(255);
	strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function draw() {
	
}