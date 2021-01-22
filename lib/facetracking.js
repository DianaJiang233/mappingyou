// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

let capture;
let tracker;
let star;
let memory;
let mem2;
let mem3;
let mem4;
let mem5;
let mem6;
let mapd1;
let map2;
let map3;
let map4;
let map5;
let map7;
let map8;
let map9;
let map10;
let map11;
let map12;
let map13;
let map14;
let map15;
let map16;
let map17;
let map18;
let map19;
let map20;
let map21;
let map22;
let map23;
let map24;
let map25;
let map26;
let map27;
let map28;
let map29;
let map30;
let map31;
let map32;
let map33;
let map34;
let map35;
let map36;
let map37;
let map38;
let map39;
let map40;


let w = 640,
    h = 480;

function preload(){
  star=loadImage("star.jpg");
  memory=loadImage("memory.png");
  mem2=loadImage("mem2.png");
  mem3=loadImage("mem3.png");
  mem4=loadImage("mem4.png");
  mem5=loadImage("mem5.png");
  mem6=loadImage("mem6.png");
  mapd1=loadImage("mapd1.png");
  map2=loadImage("map2.png");
  map3=loadImage("map3.png");
  map4=loadImage("map4.png");
  map5=loadImage("map5.png");
  map6=loadImage("map6.png");
  map7=loadImage("map7.png");
  map8=loadImage("map8.png");
  map9=loadImage("map9.png");
  map10=loadImage("map10.png");
  map11=loadImage("map11.png");
  map12=loadImage("map12.png");
  map13=loadImage("map13.png");
  map14=loadImage("map14.png");
  map15=loadImage("map15.png");
  map16=loadImage("map16.png");
  map17=loadImage("map17.png");
  map18=loadImage("map18.png");
  map19=loadImage("map19.png");
  map20=loadImage("map20.png");
  map21=loadImage("map21.png");
  map22=loadImage("map22.png");
  map23=loadImage("map23.png");
  map24=loadImage("map24.png");
  map25=loadImage("map25.png");
  map26=loadImage("map26.png");
  map27=loadImage("map27.png");
map28=loadImage("map28.png");
map29=loadImage("map29.png");
map30=loadImage("map30.png");
map31=loadImage("map31.png");
map32=loadImage("map32.png");
map33=loadImage("map33.png");
map34=loadImage("map34.png");
map35=loadImage("map35.png");
map36=loadImage("map36.png");
map37=loadImage("map37.png");
map38=loadImage("map38.png");
map39=loadImage("map39.png");
map40=loadImage("map40.png");
}
function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {

imageMode(CORNERS);
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    imageMode(CENTER);

    noFill();
    stroke(255);
    beginShape();
  for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
  }
    endShape();

fill(255,0,0);
    noStroke();
    for (let i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        //ellipse(positions[i][0], positions[i][1], 4, 4);
        //text(i, positions[i][0], positions[i][1]);
        image(mapd1,positions[62][0],positions[62][1],20,20);
      image(map2,positions[44][0],positions[44][1],20,20);
      image(map3,positions[50][0],positions[50][1],20,20);
      image(map4,positions[61][0],positions[61][1],20,20);
    image(map5,positions[60][0],positions[60][1],20,20);
  image(map7,positions[59][0],positions[59][1],20,20);
  image(map6,positions[56][0],positions[56][1],20,20);
  image(map8,positions[57][0],positions[57][1],20,20);
  image(map9,positions[58][0],positions[58][1],20,20);
image(map10,positions[34][0],positions[34][1],20,20);
image(map11,positions[40][0],positions[40][1],20,20);
image(map12,positions[42][0],positions[42][1],20,20);
image(map13,positions[43][0],positions[43][1],20,20);
image(map14,positions[41][0],positions[41][1],20,20);
image(map15,positions[33][0],positions[33][1],20,20);
image(map16,positions[27][0],positions[27][1],20,20);
image(map17,positions[32][0],positions[32][1],20,20);
image(map18,positions[19][0],positions[19][1],20,20);
image(map19,positions[20][0],positions[20][1],20,20);
image(map20,positions[21][0],positions[21][1],20,20);
image(map21,positions[22][0],positions[22][1],20,20);
image(map22,positions[18][0],positions[18][1],20,20);
image(map23,positions[17][0],positions[17][1],20,20);
image(map24,positions[16][0],positions[16][1],20,20);
image(map25,positions[15][0],positions[15][1],20,20);
image(map26,positions[14][0],positions[14][1],20,20);
image(map27,positions[13][0],positions[13][1],20,20);
image(map28,positions[12][0],positions[12][1],20,20);
image(map29,positions[11][0],positions[11][1],20,20);
image(map30,positions[10][0],positions[10][1],20,20);
image(map31,positions[9][0],positions[9][1],20,20);
image(map32,positions[8][0],positions[8][1],20,20);
image(map33,positions[7][0],positions[7][1],20,20);
image(map34,positions[6][0],positions[6][1],20,20);
image(map35,positions[5][0],positions[5][1],20,20);
image(map36,positions[4][0],positions[4][1],20,20);
image(map37,positions[3][0],positions[3][1],20,20);
image(map38,positions[2][0],positions[2][1],20,20);
image(map39,positions[1][0],positions[1][1],20,20);
image(map40,positions[0][0],positions[0][1],20,20);
}

//ellipse(positions[62][0],positions[62][1],40,40);}
//image(positions[62][0],positions[62][1]);
//image(map1,positions[62][0],positions[62][1],500,500);}



    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);}

        // uncomment the line below to show an estimate of amount "smiling"
        //rect(20, 20, smile * 3, 20);
image(memory,100,180, smile, smile);
image(mem2, 500,50, smile * 2, smile * 2);
image(mem3, 200,150, smile * 2, smile * 2);
image(mem4, 500,250, smile * 2, smile * 2);
image(mem6, 450,300, smile * 2, smile * 2);


        beginShape();
        fill(67, 204, 76);
        curveVertex(100,smile * 6);
        curveVertex(150,400);
        curveVertex(550,400);
          curveVertex(300,smile * 6);
            endShape();
            image(mem5, 100,180, smile * 2, smile * 2);
        //line(30, 30, smile * 3, 20,);
//image(star, smile * 3,smile * 3,smile * 3,smile * 3 );
        // uncomment for a surprise
        // noStroke();
        // fill(0, 255, 255);
        // ellipse(positions[62][0], positions[62][1], 50, 50);
//function IsActveDisplay(status) {
//if(smile * 3 < 1000) {
  //star.style.visibility = "hidden"}
  //else{star.style.visibility= "visible";}


  //if (smile >60000){
  //  star.visible= true;}
  //  else {star.visible = false;}
    // var image =    document.getElementById('image');
    //if (smile.length > 5){
    //  image.style.display = 'block';}
    //  else {
          //  image.style.display = 'none';

}
