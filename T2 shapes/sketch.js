function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	fill(255, 0, 0);

	rect(100, 100, 100, 100);

	ellipse(150, 400, 100, 100);
	// (Xcenter, Ycenter, width, height)

	ellipse(400, 150, 150, 50);

	line(250, 50, 250, 450);
	// (x1, y1, x2, y2)

	triangle(400, 350, 300, 450, 500, 450);
	// (x1, y1, x2, y2, x3, y3)

	point(300, 300);
	// (x,y)
}