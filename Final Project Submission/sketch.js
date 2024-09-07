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
var isContact;
var jumpSound;
var collectableSound;

// Preload Sounds
function preload()
{
	soundFormats("mp3", "wav");
	// Jump
	jumpSound = loadSound("assets/jump.wav");
	jumpSound.setVolume(0,1);
	// Collectable
	collectableSound = loadSound("assets/collec.wav");
	collectableSound.setVolume(0,1);
}

// Game Setup
function setup()
{
	createCanvas(1420, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	isContact = false;
	tree_x = [width/2, width/2 + 50, width/2 + 100, 
			  width/2 + 150, width/2 + 200];
	treePos_y = height/2; 
	mountain = [{x_pos: 570, y_pos: 432, height:-202},
				{x_pos: 510, y_pos: 432, height:-292},
				{x_pos: 600, y_pos: 432, height:-202},
				{x_pos: 650, y_pos: 432, height:-152}];
	cameraPosX = 0;
	collectables = [{x_pos: 1142, y_pos: 440, size: 15, isFound: false},
					{x_pos: 840, y_pos: floorPos_y - 30, size: 15, isFound: false},
					{x_pos: 600, y_pos: floorPos_y - 30, size: 15, isFound: false},
					{x_pos: 1420, y_pos: floorPos_y - 140, size: 15, isFound: false}];
	canyons = [{x_pos: 1050, y_pos: 100, width: 100},
			   {x_pos: 1500, y_pos: 100, width: 100}];
	game_score = 0;		
	flagpole = { isReached: false, x_pos: 1580 };
	lives = 3;
	hasRecurseBeenCalled = false;
	platforms = [];
	platforms.push(createPlatforms(1000, floorPos_y - 100, 50));
	platforms.push(createPlatforms(1400, floorPos_y - 100, 50));
	enemies = [];
	enemies.push(new Enemy(900, floorPos_y - 10, 100));
	enemies.push(new Enemy(1400, floorPos_y - 10, 50));
}

function draw() 
{ 
	// Draw recursive clouds
	if (hasRecurseBeenCalled == false) 
	{
		recurseClouds(0, 50, 50);
		recurseClouds(300, 50, 50);
		recurseClouds(500, 50, 50);
		recurseClouds(600, 50, 50);
		recurseClouds(700, 50, 50);
		recurseClouds(900, 50, 50);
		recurseClouds(1000, 50, 50);
		recurseClouds(1100, 50, 50);
		recurseClouds(1300, 50, 50);
		recurseClouds(1400, 50, 50);
		hasRecurseBeenCalled = true;
	} 
	
	// Draw game scenario and character
	gameScenario();
	// Text for score
	textSize(25);
	fill(0);
	noStroke();
	text("score: " + game_score, 20, 155);
	// Text for lives
	fill(0);
	noStroke();
	text("lives: " + lives, 20, 190);
}

function keyPressed()
{
	// keys are pressed.
	if(isPlummeting == false)
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
		if(isContact == true)
			{
				gameChar_y = floorPos_y - 100;
			} else {
				gameChar_y = gameChar_y - 200;
			}
		isPlummeting = true;
		jumpSound.play();
	}
}

function keyReleased()
{
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
		if(isContact == true)
		{
			gameChar_y = floorPos_y - 100;
		} else {
			gameChar_y = floorPos_y;
		}
	}
}

function gameScenario() 
{
	// Scroll 
	cameraPosX = gameChar_x - 700;
	fill(255,255,255);
	rect(0, 135, width, height + 500); 
	noStroke();
	// Ground
	fill(37, 206, 209);
	rect(0, floorPos_y, width, height - floorPos_y); 
	push();
	translate(-cameraPosX, 0);
	// Sun 
	fill(255, 228, 94);
	ellipse(500, 170, 40, 40);
	// Mountain
	drawMountains();
	// Tree
	drawTrees();
	// Canyons
	for(var i = 0; i < canyons.length; i++) 
	{
		drawCanyon(canyons[i]);
		// Check if character is over the canyon x-axis
		checkCanyon(canyons[i]);
	}
	// draw flagpole
	renderFlagpole();
	// check Flagpole
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}
	// Collectables
	for(var i = 0; i < collectables.length; i++) 
	{
		if(!collectables[i].isFound) 
		{
			// collectable token 
			drawCollectable(collectables[i]);
			// check collectable
			checkCollectable(collectables[i]);
		}
	}
	checkPlayerDie();
	// Platforms
	for(var i = 0; i < platforms.length; i++) {
		platforms[i].draw();
	}
	// Game Character 
	// Make character fall 
	if(gameChar_y < floorPos_y)
		{	
			for(var i = 0; i < platforms.length; i++)
			{
				if(platforms[i].checkContact(gameChar_x, gameChar_y) == true)
				{
					isContact = true;
					gameChar_y = floorPos_y - 100;
					isPlummeting = false;
					isFalling = false;
					break;
				} else {
					isContact = false;
				}
			}
			if(isContact == false)
			{
				gameChar_y += 2;
				isFalling = true;
			}
		} else {
			isFalling = false;
		}
		if(isPlummeting == true)
		{
			if(gameChar_y > floorPos_y) {
				gameChar_y = floorPos_y;
			} else {
				gameChar_y += 10;
			}
		}
		if(isLeft && isFalling)
		{
			gameChar_x -= 5;
			// jumping-left code
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x - 11, gameChar_y - 55, 3, 12);
			rect(gameChar_x + 7, gameChar_y - 35, 10, 3);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
			rect(gameChar_x - 5, gameChar_y - 13, 3, 10);
			rect(gameChar_x, gameChar_y - 20, 3, 10);
			rect(gameChar_x + 3, gameChar_y - 13, 3, 10);
			// eyes
			fill(255);
			stroke(5);
			ellipse(gameChar_x - 8, gameChar_y - 45, 6, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x - 9, gameChar_y - 45, 3, 8);
		}
			else if(isRight && isFalling)
		{
			// walking right code
			gameChar_x += 5;
			// jumping-right code
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x - 17, gameChar_y - 35, 10, 3);
			rect(gameChar_x + 10, gameChar_y - 55, 3, 12);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
			rect(gameChar_x - 10, gameChar_y - 13, 3, 10);
			rect(gameChar_x, gameChar_y - 20, 3, 10);
			rect(gameChar_x - 3, gameChar_y - 13, 3, 10);
			// eyes
			fill(255);
			stroke(5);
			ellipse(gameChar_x + 8, gameChar_y - 45, 6, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x + 9, gameChar_y - 45, 3, 8);
		} 
			else if(isLeft)
		{
			// walking left code
			gameChar_x -= 5;
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x + 7, gameChar_y - 35, 10, 3);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 8, gameChar_y - 20, 3, 20);
			rect(gameChar_x, gameChar_y - 20, 3, 10);
			rect(gameChar_x + 3, gameChar_y - 13, 3, 10);
			// eyes
			fill(255);
			stroke(5);
			ellipse(gameChar_x - 8, gameChar_y - 45, 6, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x - 9, gameChar_y - 45, 3, 8);
		}
			else if(isRight)
		{
			// walking right code
			gameChar_x += 5;
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x - 17, gameChar_y - 35, 10, 3);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 8, gameChar_y - 20, 3, 10);
			rect(gameChar_x - 10, gameChar_y - 13, 3, 10);
			rect(gameChar_x, gameChar_y - 20, 3, 20);
			// eyes
			fill(255);
			stroke(5);
			ellipse(gameChar_x + 8, gameChar_y - 45, 6, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x + 9, gameChar_y - 45, 3, 8);
		} 
			else if(isFalling || isPlummeting)
		{
			// jumping facing forwards code
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 13, gameChar_y - 20, 3, 10);
			rect(gameChar_x - 14, gameChar_y - 13, 3, 10);
			rect(gameChar_x + 10, gameChar_y - 20, 3, 10);
			rect(gameChar_x + 9, gameChar_y - 13, 3, 10);
			// eyes
			fill(255);
			stroke(10);
			ellipse(gameChar_x, gameChar_y - 45, 18, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x, gameChar_y - 45, 4, 8);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x - 15, gameChar_y - 45, 3, 10);
			rect(gameChar_x + 12, gameChar_y - 45, 3, 10);
		} 
			else
		{
			// standing front facing code
			// body
			fill(181, 150, 229);
			triangle(gameChar_x - 20, gameChar_y - 20, gameChar_x + 20, gameChar_y - 20, gameChar_x, gameChar_y - 70);
			// legs
			fill(253, 114, 114);
			rect(gameChar_x - 13, gameChar_y - 20, 3, 20);
			rect(gameChar_x + 10, gameChar_y - 20, 3, 20);
			// eyes
			fill(255);
			stroke(10);
			ellipse(gameChar_x, gameChar_y - 45, 18, 10);
			noStroke();
			fill(0);
			ellipse(gameChar_x, gameChar_y - 45, 4, 8);
			// arms
			fill(253, 114, 114);
			rect(gameChar_x - 15, gameChar_y - 35, 3, 10);
			rect(gameChar_x + 12, gameChar_y - 35, 3, 10);
		}

		pop();
}

function renderFlagpole() {
	push();
	strokeWeight(5);
	stroke(100);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 240);
	fill(255, 0, 43);
	noStroke();

	if(flagpole.isReached) 
	{
		rect(flagpole.x_pos, floorPos_y - 50, 50,50);
	} 
	if(flagpole.isReached == false) 
	{
		rect(flagpole.x_pos, floorPos_y - 240, 50,50);
	}
	for(var i = 0; i < enemies.length; i++)
		{
			enemies[i].draw();
			var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
			if(isContact)
			{
				if(lives > 0)
				{
					startGame();
					break;
				}
				if( lives == 0)
				{
					fill(255,0,255);
					text("Game over. Press space to continue.", 800, height/2);
					startGame();
				}
			}
		}
	pop();
}

function checkFlagpole() {
	var d = abs(gameChar_x - flagpole.x_pos);
	if( d < 5)
	{
		flagpole.isReached = true;
		renderFlagpole();
		fill(96, 211, 148);
		rect(0, 150, 3000, 200,1);
		fill(255);
		noStroke();
		textSize(45);
		text("Level complete. Press space to continue.", width - 200, 265);
		startGame();
	}
}

function drawMountains()
{
	for( var i = 0; i < mountain.length; i++) 
	{
		noStroke();
		fill(0);
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
		stroke(255, 138, 91);
		fill(255, 138, 91);
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
	fill(127, 200, 248, 80);
	noStroke();
	ellipse(x,y,scale);
	recurseClouds(x + scale/2,y + random(-scale/2,scale/2),scale * 0.75);
	recurseClouds(x - scale/2,y + random(-scale/2,scale/2),scale * 0.75);
}

function drawTrees() 
{
	for(var i = 0; i < tree_x.length; i++) 
	{
		noStroke();
		fill(46,0,9);
		ellipse(tree_x[i] + 20, treePos_y + 110, 10, 80);
		fill(113, 131, 85);
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

function drawCanyon(t_canyon) 
{
	fill(255, 138, 91);
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
		if(isPlummeting == false) 
		{
			gameChar_y = floorPos_y;
		}
	}

	if(gameChar_x > t_canyon.x_pos + 70 && gameChar_x < t_canyon.x_pos + 20 + t_canyon.width ||
	   gameChar_x > t_canyon.x_pos + 220 && gameChar_x < t_canyon.x_pos + 150 + t_canyon.width)
	{
		if(isPlummeting == false) 
		{
			gameChar_y = t_canyon.y_pos + 370;
		}
	}
	if(gameChar_x > (t_canyon.x_pos + 60 + t_canyon.width) && gameChar_x < (t_canyon.x_pos + 210))
	{
		if(isPlummeting == false) 
		{
			gameChar_y = gameChar_y += 10;
		}
	}
}

function drawCollectable(t_collectable) 
{
	if(t_collectable.isFound == false)
	{
		noStroke();
		fill(255);
		// cube function
		var size = t_collectable.size; // sets cube side length 
		drawCube(size, t_collectable.x_pos, t_collectable.y_pos);
	}
}

function checkCollectable(t_collectable) {
	// Calculate the distance between t_collectable and character
	let d = dist(t_collectable.x_pos, t_collectable.y_pos, gameChar_x, gameChar_y);
	if (30 < d && d < 32)
	{
		t_collectable.isFound = true;
		game_score += 1;
		collectableSound.play();
	}
}

function drawCube(xx, x_pos, y_pos) 
{
	var dW = 30; 
	var dH = 10; 
	var cW = x_pos; // x coordinate for center
	var cH = y_pos; // y coordinate for center
	var yy = xx/2; // half of side length
	fill(255, 230, 158); // sets fill color 
	stroke(0);
	quad (cW, cH, cW + xx, cH - yy, cW, cH - xx, cW - xx, cH - yy); // draws the top quad of a cube
	quad (cW, cH, cW + xx, cH - yy, cW + xx, cH + xx, cW, cH + PI*yy); // draws the right quad of a cube
	quad (cW, cH, cW, cH + PI*yy, cW - xx, cH + xx, cW - xx, cH - yy); // draws the left quad of a cube
}

function checkPlayerDie() {
	if(gameChar_y > 531)
	{
		lives -= 1;
		startGame();
	}
}

function startGame() {
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	isContact = false;
	tree_x = [width/2, width/2 + 50, width/2 + 100, 
			  width/2 + 150, width/2 + 200];
	treePos_y = height/2; 
	mountain = [{x_pos: 570, y_pos: 432, height:-202},
				{x_pos: 510, y_pos: 432, height:-292},
				{x_pos: 600, y_pos: 432, height:-202},
				{x_pos: 650, y_pos: 432, height:-152}];
	cameraPosX = 0;
	collectables = [{x_pos: 1142, y_pos: 440, size: 15, isFound: false},
					{x_pos: 840, y_pos: floorPos_y - 30, size: 15, isFound: false},
					{x_pos: 600, y_pos: floorPos_y - 30, size: 15, isFound: false},
					{x_pos: 1420, y_pos: floorPos_y - 140, size: 15, isFound: false}];
	canyons = [{x_pos: 1050, y_pos: 100, width: 100},
			   {x_pos: 1500, y_pos: 100, width: 100}];
	game_score = 0;		
	hasRecurseBeenCalled = false;
	platforms = [];
	platforms.push(createPlatforms(1000, floorPos_y - 100, 50));
	platforms.push(createPlatforms(1400, floorPos_y - 100, 50));
	enemies = [];
	enemies.push(new Enemy(900, floorPos_y - 10, 100));
	enemies.push(new Enemy(1400, floorPos_y - 10, 50));
	
	if( lives == 0)
	{
		fill(255,0,255);
		text("Game over. Press space to continue.", 800, height/2);
		startGame();
	}

	if(flagpole.isReached == true)
	{
		startGame();
	}
}

function createPlatforms(x, y, length)
{
	var p = {
		x: x,
		y: y,
		length: length,
		draw: function() {
			fill(234, 82, 111);
			rect(this.x, this.y, this.length, 20);
		},

		checkContact: function(gameChar_x, gameChar_y)
		{
			if(gameChar_x > this.x && gameChar_x < this.x + this.length) 
			{
				var d = this.y - gameChar_y;
				if(d >= 0 && d < 15)
				{
					return true;
				}
			}
			return false;
		}
	}
	return p;
}

function Enemy(x, y, range)
{
	this.x = x;
	this.y = y;
	this.range = range;

	this.currentX = x;
	this.inc = 1;

	this.update = function()
	{
		this.currentX += this.inc;

		if(this.currentX >= this.x + this.range)
		{
			this.inc = -1;
		}
		else if(this.currentX < this.x)
		{
			this.inc = 1;
		}
	}

	this.draw = function()
	{
		this.update();
		fill(0, 60, 177);
		ellipse(this.currentX, this.y, 20, 20);
	}
	
	this.checkContact = function(gameChar_x, gameChar_y)
	{
		var d = dist(gameChar_x, gameChar_y, this.currentX, this.y);

		if(d < 20)
		{
			lives -= 1;
			return true;
		}
		return false;
	}
}

