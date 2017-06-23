// var i = 0;
// var d = 1;
//var micaja = cajita;
// var foo1 = new foo();
// var foo2 = foo;
// var foo3 = foo;

// var bar2 = barObj;

// var micaja1;
// function foo (){
//   foox = 88;
// };

// var barObj = {
//   x: 69,
//   y: 70
// }

// var bar1 = Object.create(barObj);

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

// function cajita(){
//   this.x = 100;
//   this.y = 100;

//   mover = function() {
//     x++;
//   }
//   this.mostrar = function(){
//     rect(this.x, this.y, 20, 20);
//   }

// }

function CajaObj(y){
  var d = 1;
  var i = 0;
  var r = random();
  this.x = random(800);
  this.y = y;

  this.mover = function() {
    //var d = -1;
    //console.log(this.x);
    //var i = 0; 
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
  //console.log(micaja1.x);
  //rect(200,200, 30, 30);
  
  // for(var k= 10; k < 400; k = k + 40){
  // rect(i - k, k, 20, 20);}
  // if (i == 400-20){d = -1;}
  //     else if(i === 0) {d = 1;}
  
  // i = i + d;
  

}
