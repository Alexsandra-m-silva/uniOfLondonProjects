function setup()
{
	createCanvas(screen.width, 1000);
	background('skyblue');
  	textSize(500);
  	text('🌈', screenX, 1000);
}

function draw()
{
	fill(0);
	ellipse(mouseX, mouseY, 80,80);
	
	if (mouseIsPressed) {
		fill('skyblue');
		noStroke();
		ellipse(mouseX, mouseY, 300,300);
	}
}
