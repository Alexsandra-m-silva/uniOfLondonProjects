/*

The Game Project

Week 14

Game mechanics

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var tree_x;
var treePos_y;
var cloud;
var mountain;
var cameraPosX;
var collectables;
var canyons;
var game_score;
var flagpole;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	tree_x = [width/2, width/2 + 50, width/2 + 100, 
			  width/2 + 150, width/2 + 200];
	treePos_y = height/2; 
	cloud = [{x: 190, size: 60}, {x: 230, size: 70}, {x: 270, size: 60},
			 {x: 550, size: 40}, {x: 580, size: 50}, {x: 600, size: 40}];
	mountain = [{x_pos: 570, y_pos: 432, height:-302},
				{x_pos: 510, y_pos: 432, height:-392},
				{x_pos: 600, y_pos: 432, height:-302},
				{x_pos: 650, y_pos: 432, height:-252}];
	cameraPosX = 0;
	collectables = [{x_pos: 100, y_pos: 440, size: 15, isFound: false},
					{x_pos: 300, y_pos: floorPos_y - 30, size: 15, isFound: false},
					{x_pos: 600, y_pos: floorPos_y - 30, size: 15, isFound: false}];
	canyons = [{x_pos: 0, y_pos: 100, width: 100},
				{x_pos: 1050, y_pos: 100, width: 100},
				{x_pos: 1500, y_pos: 100, width: 100}];
	
	game_score = 0;		
	flagpole = { isReached: false, x_pos: 750 };
	
}

function draw()
{

	///////////DRAWING CODE//////////
	cameraPosX = gameChar_x - 500;

	noStroke();
	fill(229,66,45);
	background(251,184,79); // fill the sky orange
	rect(0, floorPos_y, width, height - floorPos_y); // draw some orange ground
	push();
	translate(-cameraPosX, 0);

	// Sun 
	fill(255);
	ellipse(500, 170, 40, 40);

	// Mountain
	drawMountains();
	
	//1. a cloud in the sky
	drawClouds();
	
	// tree
	drawTrees();
	
	// a canyon
	for(var i = 0; i < canyons.length; i++) {
		drawCanyon(canyons[i]);
		// Check if character is over the canyon x-axis
		checkCanyon(canyons[i]);
	}
	
	// draw flagpole
	renderFlagpole();
	
	

	// collectables
	for(var i = 0; i < collectables.length; i++) {
		if(!collectables[i].isFound) 
		{
			// collectable token - eg. a jewel, fruit, coins
			drawCollectable(collectables[i]);
			// Check collectable
			checkCollectable(collectables[i]);
		}
		
	}
	
	
	// the game character
	// Make character fall 
	if(isPlummeting == true)
	{
		gameChar_y += 1;
	}

	// check Flagpole
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}
	

	if(isLeft && isFalling)
	{
		// add your jumping-left code
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// arms
		fill(350, 0, 0);
		rect(gameChar_x - 11, gameChar_y - 55, 3, 12);
		rect(gameChar_x + 7, gameChar_y - 35, 10, 3);

		
		// legs
		fill(350, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
		rect(gameChar_x - 5, gameChar_y - 13, 3, 10);
		rect(gameChar_x, gameChar_y - 20, 3, 10);
		rect(gameChar_x + 3, gameChar_y - 13, 3, 10);
		

		// eyes
		fill(350, 0, 400);
		stroke(5);
		ellipse(gameChar_x - 8, gameChar_y - 45, 6, 10);
		noStroke();
		fill(400, 300, 400);
		ellipse(gameChar_x - 9, gameChar_y - 45, 3, 8);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// arms
		fill(350, 0, 0);
		rect(gameChar_x - 17, gameChar_y - 35, 10, 3);
		rect(gameChar_x + 10, gameChar_y - 55, 3, 12);

		
		// legs
		fill(350, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
		rect(gameChar_x - 10, gameChar_y - 13, 3, 10);
		rect(gameChar_x, gameChar_y - 20, 3, 10);
		rect(gameChar_x - 3, gameChar_y - 13, 3, 10);
		

		// eyes
		fill(350, 0, 400);
		stroke(5);
		ellipse(gameChar_x + 8, gameChar_y - 45, 6, 10);
		noStroke();
		fill(400, 300, 400);
		ellipse(gameChar_x + 9, gameChar_y - 45, 3, 8);

	}
	else if(isLeft)
	{
		// add your walking left code
		gameChar_x -= 4;
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// arms
		fill(350, 0, 0);
		rect(gameChar_x + 7, gameChar_y - 35, 10, 3);

		
		// legs
		fill(350, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 3, 20);
		rect(gameChar_x, gameChar_y - 20, 3, 10);
		rect(gameChar_x + 3, gameChar_y - 13, 3, 10);

		// eyes
		fill(350, 0, 400);
		stroke(5);
		ellipse(gameChar_x - 8, gameChar_y - 45, 6, 10);
		noStroke();
		fill(400, 300, 400);
		ellipse(gameChar_x - 9, gameChar_y - 45, 3, 8);

	}
	else if(isRight)
	{
		// add your walking right code
		gameChar_x += 4;
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// arms
		fill(350, 0, 0);
		rect(gameChar_x - 17, gameChar_y - 35, 10, 3);

		
		// legs
		fill(350, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
		rect(gameChar_x - 10, gameChar_y - 13, 3, 10);
		rect(gameChar_x, gameChar_y - 20, 3, 20);
		

		// eyes
		fill(350, 0, 400);
		stroke(5);
		ellipse(gameChar_x + 8, gameChar_y - 45, 6, 10);
		noStroke();
		fill(400, 300, 400);
		ellipse(gameChar_x + 9, gameChar_y - 45, 3, 8);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// legs
		fill(350, 0, 0);
		rect(gameChar_x - 13, gameChar_y - 20, 3, 10);
		rect(gameChar_x - 14, gameChar_y - 13, 3, 10);
		rect(gameChar_x + 10, gameChar_y - 20, 3, 10);
		rect(gameChar_x + 9, gameChar_y - 13, 3, 10);

		// eyes
		fill(350, 0, 400);
		stroke(10);
		ellipse(gameChar_x, gameChar_y - 45, 18, 10);
		noStroke();
		fill(400, 300, 400);
		ellipse(gameChar_x, gameChar_y - 45, 4, 8);

		// arms
		fill(350, 0, 0);
		rect(gameChar_x - 15, gameChar_y - 45, 3, 10);
		rect(gameChar_x + 12, gameChar_y - 45, 3, 10);

	}
	else
	{
		// add your standing front facing code
		// body
		fill(50, 350, 400);
		triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);

		// legs
		fill(350, 0, 0);
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
		fill(350, 0, 0);
		rect(gameChar_x - 15, gameChar_y - 35, 3, 10);
		rect(gameChar_x + 12, gameChar_y - 35, 3, 10);

	}
	
	pop();

	fill(255);
	noStroke();
	text("score: " + game_score, 20, 20);

	

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	if( isPlummeting == false)
	{
		if(keyCode == 65 )
		{
			isLeft = true;
		}
		
		if(keyCode == 68 )
		{
			isRight = true;
		}
	}

	if(keyCode == 87 )
	{
		isPlummeting = true;
		gameChar_y = gameChar_y - 100;
	}

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if(keyCode == 65 )
	{
		isLeft = false;
	}
	
	if(keyCode == 68 )
	{
		isRight = false;
	}

	if(keyCode == 87 )
	{
		isPlummeting = false;
		gameChar_y = gameChar_y + 100;
	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

}

function drawClouds() {
	stroke(155, 155, 155);
	for(var i = 0; i < cloud.length; i++) {
		fill(255,255,204);
		ellipse(cloud[i].x, 130, cloud[i].size, cloud[i].size - 10);
	}
}

function drawTrees() {
	for(var i = 0; i < tree_x.length; i++) {
		//console.log(i);
		noStroke();
		fill(46,0,9);
		ellipse(tree_x[i] + 20, treePos_y + 110, 10, 80);
		fill(0,255,0);
		stroke(5);

		// corner ellipses
		ellipse(tree_x[i], treePos_y + 45, 30, 15);
		ellipse(tree_x[i] + 40, treePos_y + 45, 30, 15);
		ellipse(tree_x[i], treePos_y + 75, 30, 15);
		ellipse(tree_x[i] + 40, treePos_y + 75, 30, 15);
	
		// top, bottom, left, and right ellipses
		ellipse(tree_x[i] + 20, treePos_y + 30, 30, 15);
		ellipse(tree_x[i] + 20, treePos_y + 90, 30, 15);
		ellipse(tree_x[i] - 10, treePos_y + 60, 30, 15);
		ellipse(tree_x[i] + 50, treePos_y + 60, 30, 15);

		noStroke();
		circle(tree_x[i] + 20, treePos_y + 60, 60); 
	}

}

function checkCollectable(t_collectable) {
	// Calculate the distance between t_collectable and character
	let d = dist(t_collectable.x_pos, t_collectable.y_pos, gameChar_x, gameChar_y);
	//console.log(d);

	if (30 < d && d < 32)
	{
		t_collectable.isFound = true;
		game_score += 1;
	}

}

function drawCollectable(t_collectable) {
	if(t_collectable.isFound == false)
		{
			noStroke();
			fill(255);
			// cube function
			var size = t_collectable.size; //sets cube side length 
			drawCube(size, t_collectable.x_pos, t_collectable.y_pos);
		}

}

function drawCanyon(t_canyon) {
	fill(251,128,48);
	noStroke();
	rect(t_canyon.x_pos, t_canyon.y_pos + 332, t_canyon.width - 30, 150);
	rect(t_canyon.x_pos + 70, t_canyon.y_pos + 370, t_canyon.width - 50, 100);
	rect(t_canyon.x_pos + 105, t_canyon.y_pos + 390, t_canyon.width - 60, 70);

	rect(t_canyon.x_pos + 250, t_canyon.y_pos + 332, t_canyon.width, 170);
	rect(t_canyon.x_pos + 220, t_canyon.y_pos + 370, t_canyon.width - 70, 100);
	rect(t_canyon.x_pos + 210, t_canyon.y_pos + 390, t_canyon.width, 70);
}

function checkCanyon(t_canyon) { 
	if(gameChar_x > t_canyon.x_pos && gameChar_x < t_canyon.x_pos + t_canyon.width ||
		gameChar_x > t_canyon.x_pos + 250 && gameChar_x < t_canyon.x_pos + 250 + t_canyon.width)
	{
		gameChar_y = floorPos_y;
	}

	if(gameChar_x > t_canyon.x_pos + 70 && gameChar_x < t_canyon.x_pos + 20 + t_canyon.width ||
		gameChar_x > t_canyon.x_pos + 220 && gameChar_x < t_canyon.x_pos + 150 + t_canyon.width)
	{
		gameChar_y = t_canyon.y_pos + 370;
	}
	
	if(gameChar_x > (t_canyon.x_pos + 60 + t_canyon.width) && gameChar_x < (t_canyon.x_pos + 210))
	{
		isPlummeting = true;
	}
}

function renderFlagpole() {
	push();
	strokeWeight(5);
	stroke(100);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 240);
	fill(255,0,255);
	noStroke();

	if(flagpole.isReached) 
	{
		rect(flagpole.x_pos, floorPos_y - 50, 50,50);
	} else 
	{
		rect(flagpole.x_pos, floorPos_y - 240, 50,50);
	}

	// console.log(flagpole.isReached);

	pop();
}

function checkFlagpole() {
	var d = abs(gameChar_x - flagpole.x_pos);
	
	if( d < 5)
	{
		flagpole.isReached = true;
	}
}

function drawMountains() {
	for( var i = 0; i < mountain.length; i++) {
		noStroke();
		fill(102,56,63);
		
		// Brown triangle
		fill(102,56,63);
		triangle(mountain[i].x_pos + 100, mountain[i].y_pos + mountain[i].height, 
			mountain[i].x_pos + 150, mountain[i].y_pos, 
			mountain[i].x_pos, mountain[i].y_pos);

		// Shade triangle
		let c = color(251,184,79);
		let lightValue = lightness(c);
		fill(lightValue);
		triangle(mountain[i].x_pos + 374, (mountain[i].y_pos - mountain[i].height) * 0.77, 
			mountain[i].x_pos + 150, mountain[i].y_pos, 
			mountain[i].x_pos, mountain[i].y_pos);

		// Orange triangle
		stroke(229,66,45);
		fill(229,66,45);
		triangle(mountain[i].x_pos + 100, mountain[i].y_pos + mountain[i].height, 
			mountain[i].x_pos - 70, mountain[i].y_pos, 
			mountain[i].x_pos, mountain[i].y_pos); 
	}
}

function drawCube(xx, x_pos, y_pos) {
	var dW = 30; //drawing width
	var dH = 10; //drawing height
	var cW = x_pos; //x coordinate for center
	var cH = y_pos; //y coordinate for center
	var yy = xx/2; //half of side length
	fill(0); //sets fill color to red
	stroke(255);
	quad (cW, cH, cW + xx, cH - yy, cW, cH - xx, cW - xx, cH - yy); //draws the top quad of a cube
	quad (cW, cH, cW + xx, cH - yy, cW + xx, cH + xx, cW, cH + PI*yy); //draws the right quad of a cube
	quad (cW, cH, cW, cH + PI*yy, cW - xx, cH + xx, cW - xx, cH - yy); //draws the left quad of a cube
  }
