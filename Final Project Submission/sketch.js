/*
Final Game Project
Cyphus: Canyons of Mystery
*/
// Initialize variables
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
var lives;
var platforms;
var enemies;
var hasRecurseBeenCalled;

// Game Setup
function setup()
{
	createCanvas(1420, 576);
	floorPos_y = height * 3/4;
	//gameChar_x = width/2;
	//gameChar_y = floorPos_y;
	//isLeft = false;
	//isRight = false;
	//isFalling = false;
	//isPlummeting = false;
	tree_x = [width/2, width/2 + 50, width/2 + 100, 
			  width/2 + 150, width/2 + 200];
	treePos_y = height/2; 
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
	//flagpole = { isReached: false, x_pos: 750 };
	lives = 3;
	hasRecurseBeenCalled = false;
	//platforms = [];
	//platforms.push(createPlatforms(100, floorPos_y - 100, 100));
	//enemies = [];
	//enemies.push(new Enemy(400, floorPos_y - 10, 100));
	
}

function draw() 
{
	// Draw game screnario and recursive clouds
	if (hasRecurseBeenCalled == false) 
	{
		gameScenario();
		recurseClouds(300, 100, 50);
		recurseClouds(500, 100, 50);
		recurseClouds(600, 100, 50);
		recurseClouds(700, 100, 50);
		hasRecurseBeenCalled = true;
	}
		
}

function gameScenario() 
{
	// Scroll and background
	cameraPosX = gameChar_x - 500;
	noStroke();
	fill(229,66,45);
	background(3, 76, 102); // fill the sky 
	fill(141, 92, 0);
	rect(0, floorPos_y, width, height - floorPos_y); // draw some orange ground
	push();
	translate(-cameraPosX, 0);
	// Sun 
	fill(255);
	ellipse(500, 170, 40, 40);
	// Mountain
	drawMountains();
	// Tree
	drawTrees();
	// Canyons
	for(var i = 0; i < canyons.length; i++) {
		drawCanyon(canyons[i]);
		// Check if character is over the canyon x-axis
		//checkCanyon(canyons[i]);
	}
}

function drawMountains()
{
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

function recurseClouds(x, y, scale)
{
	if(scale < 5)
	{
		return;
	}
	fill(51, 287, 255, 50);
	noStroke();
	ellipse(x,y,scale);
	recurseClouds(x + scale/2,y + random(-scale/2,scale/2),scale * 0.75);
	recurseClouds(x - scale/2,y + random(-scale/2,scale/2),scale * 0.75);
}

function drawTrees() {
	for(var i = 0; i < tree_x.length; i++) {
		noStroke();
		fill(46,0,9);
		ellipse(tree_x[i] + 20, treePos_y + 110, 10, 80);
		fill(0,random(0,255),0);
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

function drawCanyon(t_canyon) {
	fill(229,66,45);
	noStroke();
	rect(t_canyon.x_pos, t_canyon.y_pos + 332, t_canyon.width - 30, 150);
	rect(t_canyon.x_pos + 70, t_canyon.y_pos + 370, t_canyon.width - 50, 100);
	rect(t_canyon.x_pos + 105, t_canyon.y_pos + 390, t_canyon.width - 60, 70);

	rect(t_canyon.x_pos + 250, t_canyon.y_pos + 332, t_canyon.width, 170);
	rect(t_canyon.x_pos + 220, t_canyon.y_pos + 370, t_canyon.width - 70, 100);
	rect(t_canyon.x_pos + 210, t_canyon.y_pos + 390, t_canyon.width, 70);
}