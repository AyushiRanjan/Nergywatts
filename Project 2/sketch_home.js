
var img1, img2;
var ic1, ic2,ic3,ic4, ic5;

function preload(){
  img1 = loadImage('assets/bg_home.png');
  img2 = loadImage('assets/Selected device.png');
  ic1 = loadImage('assets/user.png');
  ic2 = loadImage('assets/Icon feather-home.png');
  ic3 = loadImage('assets/notif icon.png');
  ic4 = loadImage('assets/Stats icon.png');
  ic5 = loadImage('assets/add.png');

}

function setup() {
  // put setup code here
  createCanvas(360, 760);
  link = createA('Device_usage.html', '');
  link2 =createA('Overall Stats.html','');
  link3 =createA('Notification.html','');
  link4 =createA('profile.html','');

}

function draw() {

  image(img1,0,0,360,760);
  image(img2,36,322,133,152);
  image(ic1,275,685,21,24);
  image(ic5,238,540,35,35);
  image(ic2,62,684,22,24);
  image(ic4,133,685,23,23);
  image(ic3,206,685,20,24);


    // image(ic1,38,643,257,46);

  img = createImg('assets/Selected device').parent(link);
  img.position(36, 322);
  img.size(133,152);

  img = createImg('assets/Stats icon.png').parent(link2);
  img.position(133, 685);
  img.size(23,23);

  img = createImg('assets/notif icon.png').parent(link3);
  img.position(206, 685);
  img.size(20,24);

  img = createImg('assets/user.png').parent(link4);
  img.position(275, 685);
  img.size(21,24);





}
