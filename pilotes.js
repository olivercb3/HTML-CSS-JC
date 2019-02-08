const WIDTH = 400;
const HEIGHT = 300;
let ctx;

class Ball{
	constructor(initialx, initialy, radius, colour){
		this.x = initialx;
		this.y
	}
}

function init(){
	const cv = document.getElementById('dibuix');
	ctx = cv.getContext("2d");

	let Ball = new Ball (20, 20 , 20, "aquamarine", 2, 1);
	ball.dx = 2;
	ball.dy = 1;
	setInterval(update, 10);
	
}

function drawBall(x, y, radius, color="Black"){
	ctx.beginPath();
	ctx.arc(20, 20, 20, 0, Math.PI * 2, true);
	ctx.fillStyle = "Black";
	ctx.fill();
}
function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
window.onload = init;