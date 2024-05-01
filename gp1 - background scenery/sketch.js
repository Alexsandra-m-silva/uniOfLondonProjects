/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(251,184,79); // fill the sky orange

	noStroke();
	fill(229,66,45);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	fill(255,255,204);
	ellipse(230, 130, 60, 60);
	ellipse(270, 130, 60, 50);
	ellipse(190, 130, 60, 50);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	// Sun 
	fill(255);
	ellipse(700, 170, 40, 40);
	

	//2. a mountain in the distance
	//... add your code here
	noStroke();
	fill(102,56,63);
	text("mountain", 500, 256);

	// Brown triangle
	fill(102,56,63);
	triangle(750, 150, 800, 432, 650, 432);
	
	// Shade triangle
	let c = color(251,184,79);
	let lightValue = lightness(c);
	fill(lightValue);
	triangle(1024, 550, 800, 432, 650, 432);

	// Orange triangle
	stroke(229,66,45);
	fill(229,66,45);
	triangle(750, 150, 580, 432, 650, 432);

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

	noStroke();
	fill(0);
	quad(870, 432, 950, 432, 1000, 420, 820, 420);

	fill(0,255,0);
	stroke(5);
	// corner circles
	circle(930, 350, 30);
	circle(900, 350, 30);
	circle(930, 320, 30);
	circle(900, 320, 30);
  
	/* // top, bottom, left, and right circles
	circle(150, 0, 300);
	circle(150, 300, 300);
	circle(0, 150, 300);
	circle(300, 150, 300); */
  
	/*// centered circles
	circle(150, 150, 300);
	circle(150, 150, 150); */

	

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here

	/* noStroke();
	fill(255);
	text("canyon", 100, 480);

	noFill();
	stroke(255);
	beginShape();

  	// Add the first control point.
  	curveVertex(100, 320);
  	// Add the anchor points.
  	curveVertex(160, 434);
  	curveVertex(180, 450);
  	// Add the second control point.
  	curveVertex(80, 91);
  	// Stop drawing the shape.
  	endShape(); */


	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
