function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(1);
	// rect(100, 100, 300, 300, 20);
	ellipse(250, 200, 150, 150);
	//ellipse(300, 200, 150, 150);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 60);

	fill(255, 0, 127);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 50, 50);
	point(175, 200);
	ellipse(325, 200, 50, 50);
	point(325, 200);

	/* robots mouth
	fill(255, 153, 153);
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape(); */
	
	
	//robots nose
	fill(0, 255, 0);
	// ellipse(250, 250, 80, 80)
	// triangle(250, 220, 200, 300, 300, 300);

	//robots ears
	rect(270, 290, 30, 100);
	rect(200, 290, 30, 100);

	
}