
var bcenterX;
var bcenterY;
var bdiam;
var fuseEndX;
var fuseEndY;

function setup() 
{
    createCanvas(512,512);
    textSize(32);
    strokeWeight(5);
    
    //initialise variables
    bdiam = 250;
    bcenterX = width/2;
    bcenterY = height/2;
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
}


function draw()
{
    ////////////// UPDATE CODE///////////////
    
    //reset variables after random amounts were added
    bcenterX = width/2;
    bcenterY = height/2;
    
    //wobble the bomb
    bcenterX += random(-10,10);
    bcenterY += random(-10,10);
    
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
    ////////////// DRAWING CODE///////////////
    
    background(100);    

    //draw the fuse
    noFill();
    stroke(200,100,0);

    line(
        bcenterX,
        bcenterY - bdiam/2, 
        fuseEndX,
        fuseEndY
        );
    
    //draw the bomb
    noStroke();
    fill(0);
    ellipse(bcenterX,bcenterY, bdiam, bdiam);
    fill(255);
    quad(
        bcenterX + 40, bcenterY - 60,
        bcenterX + 80, bcenterY - 60,
        bcenterX + 70, bcenterY - 30,
        bcenterX + 50, bcenterY - 30
    );
    
    //draw the flame 
    fill(255,255,0);
    noStroke();
    beginShape();
        vertex(fuseEndX, fuseEndY);
        vertex(fuseEndX + 20, fuseEndY - 20);
        vertex(fuseEndX + 20, fuseEndY - 50);
        vertex(fuseEndX - 10, fuseEndY - 30);
    endShape(CLOSE);
    
    fill(255);
    
    //Draw game text
    text("Press any key to start", 20, 50);
    text("Game over", 20, height/2);  
    text("You won !", width/2, height/2);  
    text("Press a key to diffuse the bomb", 20, height - 50);
    
}

function keyPressed()
{

    
}







