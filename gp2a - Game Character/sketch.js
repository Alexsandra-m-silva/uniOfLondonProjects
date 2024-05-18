/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
	colorMode(HSB, 400);
	
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(10);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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

	/* Right arms (curved)
	strokeWeight(1);
	stroke(350, 0, 0);
	point(gameChar_x - 13, gameChar_y - 40);
	point(gameChar_x - 5, gameChar_y - 30);
	
	 // starting point of the curve
	point(gameChar_x - 20, gameChar_y - 34);
	
	curve(gameChar_x - 20, gameChar_y - 34, 
			gameChar_x - 13, gameChar_y - 40, 
			gameChar_x - 5, gameChar_y - 30, 
			gameChar_x + 20 , gameChar_y - 30);
	noStroke();
	//point(); */

	// Left arms 




	//Jumping facing forwards
	stroke(10);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
	
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

	//Walking, turned left
	stroke(10);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
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

	//Walking, turned right
	stroke(10);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

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


	//Jumping right
	stroke(10);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

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


	//Jumping to the left
	stroke(10);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

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
