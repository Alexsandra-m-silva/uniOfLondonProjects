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
	collectable = {x_pos: 100, y_pos: 440, size: 15, isFound: false};
	canyon =  {x_pos: 0, y_pos: 100, width: 100};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(251,184,79); // fill the sky orange

	// Sun 
	fill(255);
	ellipse(700, 170, 40, 40);

	//1. a cloud in the sky
	//... add your code here
	fill(255,255,204);
	ellipse(230, 130, 60, 60);
	ellipse(270, 130, 60, 50);
	ellipse(190, 130, 60, 50);

	noStroke();
	fill(229,66,45);
	rect(0, floorPos_y, width, height - floorPos_y); // draw some orange ground

	// a canyon
	fill(251,128,48);
	noStroke();
	rect(canyon.x_pos, canyon.y_pos + 332, canyon.width - 30, 150);
	rect(canyon.x_pos + 70, canyon.y_pos + 370, canyon.width - 50, 100);
	rect(canyon.x_pos + 105, canyon.y_pos + 390, canyon.width - 60, 70);

	rect(canyon.x_pos + 250, canyon.y_pos + 332, canyon.width, 170);
	rect(canyon.x_pos + 220, canyon.y_pos + 370, canyon.width - 70, 100);
	rect(canyon.x_pos + 210, canyon.y_pos + 390, canyon.width, 70);

	// Check if character is over the canyon x-axis
	if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width ||
		gameChar_x > canyon.x_pos + 250 && gameChar_x < canyon.x_pos + 250 + canyon.width)
	{
		gameChar_y = floorPos_y;
	}

	if(gameChar_x > canyon.x_pos + 70 && gameChar_x < canyon.x_pos + 20 + canyon.width ||
		gameChar_x > canyon.x_pos + 220 && gameChar_x < canyon.x_pos + 150 + canyon.width)
	{
		gameChar_y = canyon.y_pos + 370;
	}
	
	if(gameChar_x > (canyon.x_pos + 60 + canyon.width) && gameChar_x < (canyon.x_pos + 210))
	{
		isPlummeting = true;
	}

	// Make character fall 
	if(isPlummeting == true)
	{
		gameChar_y += 1;
	}


	// Calculate the distance between collectable and character
	let d = dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y);
	console.log(d);

	if (30 < d && d < 32)
	{
		collectable.isFound = true;
	}

	// collectable token - eg. a jewel, fruit, coins
	if(collectable.isFound == false)
	{
		noStroke();
		fill(255);
		// cube function
		var size = collectable.size; //sets cube side length 
		drawCube(size);
	}
	
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
