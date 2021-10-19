
var img1, img2;
function preload(){
  img2 = loadImage('assets/Bg copy.png');
  img1 = loadImage('assets/get started button.png');

}

function setup() {
  // put setup code here
  createCanvas(360, 760);
  link = createA('Signup.html', '');

}

function draw() {

  image(img2,0,0,360,760);
    image(img1,38,643,285,64);

  img = createImg('assets/get started button.png').parent(link);
  img.position(38, 643);
  img.size(285,64);



}
