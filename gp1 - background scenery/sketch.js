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
	fill(46,0,9);
	
	ellipse(920, 410, 10, 50);

	fill(0,255,0);
	stroke(5);

	// corner ellipses
	ellipse(900, 335,30,15);
	ellipse(940, 335,30,15);
	ellipse(900, 365,30, 15);
	ellipse(940, 365,30, 15);
  
	// top, bottom, left, and right ellipses
	ellipse(920, 320, 30, 15);
	ellipse(920, 380, 30, 15);
	ellipse(890, 350, 30, 15);
	ellipse(950, 350, 30, 15);

	noStroke();
	circle(920, 350, 60);
  

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);
	fill(251,128,48);
	noStroke();

	rect(0, 332, 100, 150);
	rect(20, 370, 120, 100);
	rect(120, 390, 40, 70);
	rect(150, 405, 30, 30);

	rect(250, 332, 100, 170);
	rect(220, 370, 100, 100);
	rect(210, 390, 100, 70);
	rect(200, 405, 100, 30);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
	// cube function
	var size = 15; //sets cube side length 
	drawCube(size);
}

function drawCube(xx) {
	var dW = 30; //drawing width
	var dH = 10; //drawing height
	var cW = 500; //x coordinate for center
	var cH = 400; //y coordinate for center
	var yy = xx/2; //half of side length
	fill(0); //sets fill color to red
	stroke(255);
	quad (cW, cH, cW + xx, cH - yy, cW, cH - xx, cW - xx, cH - yy); //draws the top quad of a cube
	quad (cW, cH, cW + xx, cH - yy, cW + xx, cH + xx, cW, cH + PI*yy); //draws the right quad of a cube
	quad (cW, cH, cW, cH + PI*yy, cW - xx, cH + xx, cW - xx, cH - yy); //draws the left quad of a cube

	

  }
