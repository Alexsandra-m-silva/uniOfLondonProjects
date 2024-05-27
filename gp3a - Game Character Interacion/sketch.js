/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;


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
}

function draw()
{

	///////////DRAWING CODE//////////

	background(251,184,79); // fill the sky orange

	noStroke();
	fill(229,66,45);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
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
		gameChar_x -= 1;
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
		gameChar_x += 1;
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

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	if(keyCode == 65)
	{
		isLeft = true;
	}

	if(keyCode == 68)
	{
		isRight = true;
	}

	if(keyCode == 87)
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
	if(keyCode == 65)
	{
		isLeft = false;
	}
	
	if(keyCode == 68)
	{
		isRight = false;
	}

	if(keyCode == 87)
	{
		isPlummeting = false;
		gameChar_y = gameChar_y + 100;
	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

}
