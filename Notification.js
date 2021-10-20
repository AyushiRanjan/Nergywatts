
var img1;
var ic1;

function preload(){
  img1 = loadImage('assets/notification.png');
  ic1 = loadImage('assets/back.png');


}

function setup() {
  // put setup code here
  createCanvas(360, 760);
  link = createA('Home.html', '');

}

function draw() {

  image(img1,0,0,360,760);
  image(ic1,40,40,28,28);



    // image(ic1,38,643,257,46);

  img = createImg('assets/back.png').parent(link);
  img.position(40,40);
  img.size(28,28);





}
