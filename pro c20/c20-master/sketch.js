



    var r = 0;
    var g = 50;
    var b=255;


function setup(){
  createCanvas(1200,400);

}


function draw(){ 
      r = map(mouseX,0,600,0,255) ; 
      g = map(mouseX,0,600,0,50) ;
      b = map(mouseX,0,600,225,0) ;
      background(r,g,b) ;  

      ellipse(mouseX,200,50,50) ; 
      fill(225,0,252);

}