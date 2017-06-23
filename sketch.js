var cajas = [];
var n_vertical = 500;

function setup() {
  //frameRate(120);
  createCanvas(windowWidth, windowHeight);
   micaja1 = new CajaObj();
   for(var i = 0; i < n_vertical; i++){
    cajas[i] = new CajaObj(i*windowHeight/n_vertical);
   }
}

function CajaObj(y){
  var d = 1;
  var i = 0;
  var r = random();
  this.x = random(800);
  this.y = y;

  this.mover = function() {
    if (this.x > windowWidth-100)
      {d = -1;}
    else if (this.x < 0) {d = 1;}
    //i = i + d;
    this.x = this.x + 10*r*d;
  }

  this.mostrar = function(){
    fill(map(r, 0, 1, 0, 255), map(r, 0, 1, 0, 255), map(r, 0, 1, 0, 255), map(r, 0, 1, 0, 255));
    rect(this.x, this.y, map(r, 0, 1, 1, 7), map(r, 0, 1, 1, 7));
  }
}

function draw() {
 
  background(0);
  micaja1.mostrar();
  micaja1.mover();

  for (var i = 0; i < n_vertical; i++){
    cajas[i].mover();
    cajas[i].mostrar();
  }
}
