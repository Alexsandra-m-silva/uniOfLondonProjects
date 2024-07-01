var windows;

function setup()
{
    createCanvas(1000,500);
    background(1, 8, 83);
    windows = [{x_pos: 300, y_pos: 230, size: 100},
                {x_pos: 470, y_pos: 230, size: 50},
                {x_pos: 600, y_pos: 230, size: 100},
                {x_pos: 300, y_pos: 330, size: 100},
                {x_pos: 600, y_pos: 330, size: 100}
    ];
}

function draw() 
{
    // draw ground
    fill(3, 112, 32);
    rect(0, 350, screen.width, 150);

    // draw house
    fill(255, 249, 225);
    rect(250, 200, 500, 200);

    // draw roof
    fill(228, 25, 6);
    triangle(250, 200, 750, 200, 500, 100);

    // draw door
    fill(228, 25, 6);
    rect(470, 300, 50, 100);

    drawWindows();

}

function drawWindows()
{
    fill(0);
    for(var i = 0; i < windows.length; i++)
        {
            rect(windows[i].x_pos, windows[i].y_pos, windows[i].size, 50);
        }
}

function mousePressed() 
{
    for(var i = 0; i < windows.length; i++)
        {
           // if()
        }
}






