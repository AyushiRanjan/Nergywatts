
var img1, img2,img3;
function preload(){
  img2 = loadImage('assets/Bg2.png');
  img3 = loadImage('assets/fields.png');
  img1 = loadImage('assets/Sign up.png');

}

function setup() {
  // put setup code here
  createCanvas(360, 760);
  link = createA('Home.html', '');

}

function draw() {

  image(img2,0,0,360,760);
  image(img3,0,307,360,458);
    image(img1,38,643,257,46);

  img = createImg('assets/Sign up.png').parent(link);
  img.position(38, 643);
  img.size(257,46);



}
