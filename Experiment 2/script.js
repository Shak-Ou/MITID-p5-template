let w, h, rw, rh; 

// Diviser heuteur + longueur par 2 pour les coordonées des rectangles 

const octahedron_model = `
v 0.000000E+00 0.000000E+00 40.0000
v 22.5000 22.5000 0.000000E+00
v 22.5000 -22.5000 0.000000E+00
v -22.5000 -22.5000 0.000000E+00
v -22.5000 22.5000 0.000000E+00
v 0.000000E+00 0.000000E+00 -40.0000
f     1 2 3
f     1 3 4
f     1 4 5
f     1 5 2
f     6 5 4
f     6 4 3
f     6 3 2
f     6 2 5
`;

let octahedron;

function calculerTailles(){
    w = document.body.clientWidth;
    h = 800;
    rw = w / 2;    
    rh = h / 2;
}

function setup (){
    calculerTailles();
    // Set-up 3D
    createCanvas(w, h, WEBGL);
    // Set up octogone 3D
    octahedron = createModel(octahedron_model, '.obj');
    
}

function windowResized(){
    calculerTailles();
    //resizeCanvas();

}


function draw(){

    let c = map(mouseX, 0, 100, 0, 225);

    push();
    translate(-rw, -rh);

    noStroke();
    // Rectangle haut gauche
    fill("#EA6512")
    rect(0, 0, rw, rh);
    // Rectangle haut droite
    fill("#A0225B")
    rect(rw, 0, rw, rh);
    // Rectangle bas gauche 
    fill("#59B1DA")
    rect(0, rh, rw, rh);
    // Rectangle bas droite 
    fill("#0D7029")
    rect(rw, rh, rw, rh);
    //Mettre les 4 rectangles en fond
    pop();


    push();
    
    //Transférer le point d'origine WEBGL en haut à gauche
    //translate(-w / 2, -h / 2)

  

    lights();

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    scale(min(w, h) / 200);

    let t = mouseX / width;
    
    ambientMaterial(lerpColor(color("#c6d7e3"), color ("#0C00B1"), t));
    model(octahedron);
    pop();
    


}

