// variable name :                      id of the button in HTML
//      I                                       I
//      V                                       V
let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function(){
    background(73);
    generateStacks(random (10, 50));
})


function setup(){
    // function that runs only once
    createCanvas(800, 500);
    // to get rid of the borders
    noStroke();

    background(73);
    generateStacks(random (10, 50));
}

function draw(){
    // we call the function
    // stackOfCircle(100, 200, "#F000E0");
    // stackOfCircle(400, 300, "#F00251");
   
}


// we create a function to generate stacks
function generateStacks(stackAmount){
 for(let i = 0; i < stackAmount; i++){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = random(0, 255);
        stackOfCircle(randomX, randomY, randomColor);
 }

}


// We create a function to display a stack of circles
function stackOfCircle(posX, posY, color){
    fill(color);
   // Creating a loop
    for(let i = 0;i < 10; i++){
        circle(posX, posY + i*10, 20);
    }

}

    // a fubnction that is triggered on mouse click
    // function mousePressed(){
    //     fill("#FF0000");
    //     circle(mouseX, mouseY, 50);

    // }

    