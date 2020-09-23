var gamestate=0;
var timeflag = 0;
var t ;
var showflag = 0;

function preload(){
  backgroundimg=loadImage("images/background.jpg")
  aimg = loadImage("letters/A.jpg")
  bimg = loadImage("letters/B.jpg")
  cimg = loadImage("letters/C.jpg")
  dimg = loadImage("letters/D.jpg")
  eimg = loadImage("letters/E.jpg")
  fimg = loadImage("letters/F.jpg")

  asound = loadSound("sounds/a.mp3")
  bsound = loadSound("sounds/b.mp3")
  csound = loadSound("sounds/c.mp3")
  dsound = loadSound("sounds/d.mp3")
  esound = loadSound("sounds/e.mp3")
  fsound = loadSound("sounds/f.mp3")

}

function setup(){
  canvas=createCanvas(displayWidth, displayHeight);
  form= new Form();
  level = new Level();

}

function draw(){
  if(gamestate===0){
      background(backgroundimg);
      form.displayenterbutton();
  }
  else if(gamestate===1){
    {
      date = new Date();
    Minute=date.getMinutes()
   //Second=date.getSeconds()
     Milliseconds = date.getMilliseconds();
    time1 = date.getTime();
    }
    
    //console.log(Minute+""+Second);
    level.displaylevel1(Minute);
  }
}