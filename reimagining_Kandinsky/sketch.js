function setup()
{
	createCanvas(1000, 1000);
	background(255);
}

function draw()
{
	stroke(0);
	noFill();
	rect(450,300,200,400);
	
	noFill();
	strokeWeight(8);
	ellipse(500,500,500,500);
	strokeWeight(1);
	
	//line(20,890,435,50);
	//line(1000,590,355,50);
	//line(0,886,893,35);
	
	ellipse(450,600,20,20);
	
	// Yellow circle
	ellipse(450,600,100,100);
	
	// red square
	rect(200,500,200,200);
	
	//
	strokeWeight(1);
	arc(400, 702, 400, 400, PI, PI + HALF_PI);
	rect(400,500,100,200);
	arc(450, 502, 400, 400, PI, PI + HALF_PI);
	
	// red
	noStroke();
	fill(255,0,0,3);
	triangle(355,50,0,890,1000,587);
	
	// blue
	noStroke();
	fill(0,0,255,1);
	triangle(0,886,435,50,893,50);
	
	// yellow triangle
	// stroke(0);
	fill(241,255,26,2);
	triangle(0,950,1000,590,0,350);
	
}