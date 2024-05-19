/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;
var sun;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2; 

	canyon =  {x_pos: 0, width: 100};
	collectable = {x_pos: 670, y_pos: 100, size: 15};
	cloud = {x_pos: 200, y_pos: 130, width: 60, height: 50};
	mountain = {x_pos: 570, y_pos: 432, height:-302};

}

function draw()
{
	background(251,184,79); // fill the sky orange

	noStroke();
	fill(229,66,45);
	rect(0, floorPos_y, width, width); //draw some  ground

	// Sun 
	fill(255);
	circle(700, 170, 40);

	//4. a canyon
	fill(251,128,48);
	noStroke();
	rect(canyon.x_pos, 332, canyon.width, 150);
	rect(canyon.x_pos + 20, 370, canyon.width + 20, 100);
	rect(canyon.x_pos + 120, 390, canyon.width - 60, 70);
	rect(canyon.x_pos + 150, 405, canyon.width - 70, 30);

	rect(canyon.x_pos + 250, 332, canyon.width, 170);
	rect(canyon.x_pos + 220, 370, canyon.width, 100);
	rect(canyon.x_pos + 210, 390, canyon.width, 70);
	rect(canyon.x_pos + 200, 405, canyon.width, 30);

	//1. a cloud in the sky
	fill(255,255,204);
	ellipse(cloud.x_pos + 30, cloud.y_pos, cloud.width, cloud.height + 10);
	ellipse(cloud.x_pos + 70, cloud.y_pos, cloud.width, cloud.height);
	ellipse(cloud.x_pos - 10, cloud.y_pos, cloud.width, cloud.height);

	//2. a mountain in the distance
	//... add your code here
	noStroke();
	fill(102,56,63);
	
	// Brown triangle
	fill(102,56,63);
	triangle(mountain.x_pos + 100, mountain.y_pos + mountain.height, 
		mountain.x_pos + 150, mountain.y_pos, 
		mountain.x_pos, mountain.y_pos);
	
	// Shade triangle
	let c = color(251,184,79);
	let lightValue = lightness(c);
	fill(lightValue);
	triangle(mountain.x_pos + 374, (mountain.y_pos - mountain.height) * 0.77, 
		mountain.x_pos + 150, mountain.y_pos, 
		mountain.x_pos, mountain.y_pos);

	// Orange triangle
	stroke(229,66,45);
	fill(229,66,45);
	triangle(mountain.x_pos + 100, mountain.y_pos + mountain.height, 
		mountain.x_pos - 70, mountain.y_pos, 
		mountain.x_pos, mountain.y_pos);

	//3. a tree

	noStroke();
	fill(46,0,9);
	ellipse(treePos_x + 20, treePos_y + 110, 10, 80);
	fill(0,255,0);
	stroke(5);

	// corner ellipses
	ellipse(treePos_x, treePos_y + 45, 30, 15);
	ellipse(treePos_x + 40, treePos_y + 45, 30, 15);
	ellipse(treePos_x, treePos_y + 75, 30, 15);
	ellipse(treePos_x + 40, treePos_y + 75, 30, 15);
  
	// top, bottom, left, and right ellipses
	ellipse(treePos_x + 20, treePos_y + 30, 30, 15);
	ellipse(treePos_x + 20, treePos_y + 90, 30, 15);
	ellipse(treePos_x - 10, treePos_y + 60, 30, 15);
	ellipse(treePos_x + 50, treePos_y + 60, 30, 15);

	noStroke();
	circle(treePos_x + 20, treePos_y + 60, 60);

	//5. a collectable token - eg. a jewel, fruit, coins
	noStroke();
	fill(255);
	// cube function
	var size = collectable.size; //sets cube side length 
	drawCube(size);

	//Standing, facing frontwards
	//Add your code here ...
	// body
	fill(50, 350, 400);
	triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

	// legs
	fill(0);
	rect(gameChar_x - 13, gameChar_y - 20, 3, 20);
	rect(gameChar_x + 10, gameChar_y - 20, 3, 20);

	// eyes
	fill(350, 0, 400);
	stroke(10);
	ellipse(gameChar_x, gameChar_y - 45, 18, 10);
	noStroke();
	fill(400, 300, 400);
	ellipse(gameChar_x, gameChar_y - 45, 4, 8);

	// arms
	fill(0);
	rect(gameChar_x - 15, gameChar_y - 35, 3, 10);
	rect(gameChar_x + 12, gameChar_y - 35, 3, 10);

}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}

function drawCube(xx) {
	var dW = 30; //drawing width
	var dH = 10; //drawing height
	var cW = collectable.x_pos; //x coordinate for center
	var cH = collectable.y_pos; //y coordinate for center
	var yy = xx/2; //half of side length
	fill(0); //sets fill color to red
	stroke(255);
	quad (cW, cH, cW + xx, cH - yy, cW, cH - xx, cW - xx, cH - yy); //draws the top quad of a cube
	quad (cW, cH, cW + xx, cH - yy, cW + xx, cH + xx, cW, cH + PI*yy); //draws the right quad of a cube
	quad (cW, cH, cW, cH + PI*yy, cW - xx, cH + xx, cW - xx, cH - yy); //draws the left quad of a cube
  }