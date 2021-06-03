setScreen("screen1");
onEvent("button1", "click", function( ) {
  if (getText("text_input1") != 835201) {
    setScreen("screen2");
  }
  if (getText("text_input1") == 835201) {
    setScreen("mainscreen");
  }
});
onEvent("button2", "click", function( ) {
  setScreen("screen1");
  setText("text_input1", "");
});
onEvent("Playbutton", "click", function( ) {
  setScreen("playscreen");
  var x = 0;
  onEvent("buttoncube", "click", function( ) {
    setProperty("buttoncube", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1));
    x = x + 1 ;
    setNumber("labelblank", x);
  });
  timedLoop(1000, function() {
    x = x - 1;
    setNumber("labelblank", x);
  });
});
onEvent("buttonback", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("Studybutton","click",function(){
  setScreen("Studyscreen");  
  var r = 0;
  onEvent("buttonstart", "click", function( ) {
    timedLoop(1000, function() {
      r = r + 1;
      setProperty("labeltime", "text-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 1));
      setNumber("labeltime", r);
    });
  });
  onEvent("buttonstop", "click", function( ) {
    stopTimedLoop();
  });
  onEvent("buttonreset", "click", function( ) {
    r = 0;
    setNumber("labeltime", 0);
  });
});
onEvent("buttonback2", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("Ballbutton", "click", function( ) {
  setScreen("Playstudyscreen");
});
onEvent("buttonstart2", "click", function( ) {
  var y = 0;
  var s = 0;
  timedLoop(1000, function() {
    s = s + 1;
    setNumber("labeltime2", s);
    if (getNumber("labeltime2") === 60) {
      stopTimedLoop();
    }
    if (getNumber("labelscore2") > 100) {
      setScreen("screen14");
    }
  });
  onEvent("buttongreen", "click", function( ) {
    setPosition("buttongreen", randomNumber(40, 200), randomNumber(40, 200), 40, 40);
    y = y + 1;
    setNumber("labelscore2", y);
  });
  onEvent("buttonblue", "click", function( ) {
    y = y + 2;
    setPosition("buttonblue", randomNumber(40, 200), randomNumber(40, 200), 40, 40);
    setNumber("labelscore2", y);
  });
  onEvent("buttonred", "click", function( ) {
    y = y + 3;
    setPosition("buttonred", randomNumber(40, 200), randomNumber(40, 200), 40, 40);
    setNumber("labelscore2", y);
  });
});
onEvent("backbutton", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button3", "click", function( ) {
  setScreen("screen3");
  timedLoop(3000, function() {
    setScreen("screen1");
    setNumber("text_input1", "");
  });
  timedLoop(1000, function() {
    onEvent("button1", "click", function( ) {
      stopTimedLoop();
    });
  });
});
onEvent("Rockpaperscissorsbutton1","click",function(){
  setScreen("rockpaperscissors2");
});
hideElement("imagebluepaper");
hideElement("imagebluerock");
hideElement("imagebluescissors");
hideElement("imageredpaper");
hideElement("imageredrock");
hideElement("imageredscissors");
onEvent("buttonstart1","click",function(){
  timedLoop(500,function(){
    hideElement("imagebluepaper");
    hideElement("imagebluerock");
    hideElement("imagebluescissors");
    hideElement("imageredpaper");
    hideElement("imageredrock");
    hideElement("imageredscissors");
    var red = randomNumber(1,3);
    var blue = randomNumber(1,3);
    setNumber("label7",red);
    setNumber("label8",blue);
    if(red === 1){
      showElement("imageredrock");
    }
    else if(red === 2){
      showElement("imageredpaper");
    }
    else{
      showElement("imageredscissors");
    }
    if(blue === 1){
      showElement("imagebluepaper");
    }
    else if(blue === 2){
      showElement("imagebluerock");
    }
    else{
      showElement("imagebluescissors");
    }
 });
});
onEvent("button7", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button8", "click", function( ) {
  setScreen("appstore");
});
onEvent("button4", "click", function( ) {
  setScreen("appstore");
});
onEvent("button6", "click", function( ) {
  if (getText("dropdown1") == "Multiplication Calculator") {
    setScreen("screen5");
  }
  if (getText("dropdown1") == "Color matcher") {
    setScreen("screen7");
  }
  if (getText("dropdown1") == "Home tempreture system") {
    setScreen("screen4");
  }
  if (getText("dropdown1") == "Dice app 2") {
    setScreen("screen8");
  }
  if (getText("dropdown1") == "Dice app") {
    setScreen("screen10");
  }
  if (getText("dropdown1") == "Quote Editor") {
    setScreen("screen12");
  }
  if (getText("dropdown1") == "Square Drawer") {
    setScreen("screen19");
  }
  if (getText("dropdown1") == "Percentage and Grade Verifer") {
    setScreen("screen21");
  }
  if (getText("dropdown1") == "Brick-O-Meter") {
    setScreen("screen20");
  }
  if (getText("dropdown1") == "Limit Showering") {
    setScreen("screen23");
  }
  if (getText("dropdown1") == "V2 Playstudy") {
    setScreen("screen24");
  }
  if (getText("dropdown1") == "Music Pod") {
    setScreen("screen25");
  }
});
onEvent("button9", "click", function() {
  setScreen("mainscreen");
  showElement("button10");
});
onEvent("button10", "click", function() {
  setScreen("screen6");
});
onEvent("buttoncalculate","click",function(){
   setText("label16", getNumber("text_input2") * getNumber("text_input3"));
});
onEvent("button15", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button14", "click", function( ) {
  setScreen("appstore");
});
onEvent("button5", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button29");
});
onEvent("button40", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button16", "click", function( ) {
  setScreen("mainscreen");
  showElement("button13");
});
onEvent("button13", "click", function( ) {
  setScreen("screen9");
});
onEvent("button19", "click", function() {
  setNumber("lbl_num1", randomNumber(1, 6));
  if (getText("lbl_num1") == 1) {
    setImageURL("image1", "assets/1.png");
  }
  if (getText("lbl_num1") == 2) {
    setImageURL("image1", "assets/2.png");
  }
  if (getText("lbl_num1") == 3) {
    setImageURL("image1", "assets/3.png");
  }
  if (getText("lbl_num1") == 4) {
    setImageURL("image1", "assets/4.png");
  }
  if (getText("lbl_num1") == 5) {
    setImageURL("image1", "assets/5.png");
  }
  if (getNumber("lbl_num1") == 6) {
    setImageURL("image1", "assets/6.png");
  }
  setNumber("lbl_num2", randomNumber(1, 6));
  if (getText("lbl_num2") == 1) {
    setImageURL("image2", "assets/1.png");
  }
  if (getText("lbl_num2") == 2) {
    setImageURL("image2", "assets/2.png");
  }
  if (getText("lbl_num2") == 3) {
    setImageURL("image2", "assets/3.png");
  }
  if (getText("lbl_num2") == 4) {
    setImageURL("image2", "assets/4.png");
  }
  if (getText("lbl_num2") == 5) {
    setImageURL("image2", "assets/5.png");
  }
  if (getText("lbl_num2") == 6) {
    setImageURL("image2", "assets/6.png");
  }
  setNumber("lbl_total_num", getNumber("lbl_num1") + getNumber("lbl_num2"));
});
onEvent("button18", "click", function( ) {
  setScreen("appstore");
});
onEvent("button17", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button20", "click", function( ) {
  setScreen("mainscreen");
  showElement("button12");
});
onEvent("button12", "click", function( ) {
  setScreen("screen11");
});
onEvent("button21", "click", function( ) {
setNumber("label24", randomNumber(1, 6));
if (getText("label24") == 1) {
    setImageURL("image3", "assets/1.png");
  }
if (getText("label24") == 2) {
    setImageURL("image3", "assets/2.png");
  }
if (getText("label24") == 3) {
    setImageURL("image3", "assets/3.png");
  }
if (getText("label24") == 4) {
    setImageURL("image3", "assets/4.png");
  }
if (getText("label24") == 5) {
    setImageURL("image3", "assets/5.png");
  }
if (getText("label24") == 6) {
    setImageURL("image3", "assets/6.png");
  }
});
onEvent("button22", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button23", "click", function( ) {
  setScreen("mainscreen");
  showElement("button11");
});
onEvent("button11", "click", function( ) {
  setScreen("screen13");
});
var c = 20;
onEvent("slider1","input",function(){
  setProperty("text_area1","background-color",rgb(getNumber("slider1"),getNumber("slider2"),getNumber("slider3")));
});
onEvent("slider2","input",function(){
  setProperty("text_area1","background-color",rgb(getNumber("slider1"),getNumber("slider2"),getNumber("slider3")));
});
onEvent("slider3","input",function(){
  setProperty("text_area1","background-color",rgb(getNumber("slider1"),getNumber("slider2"),getNumber("slider3")));
});
onEvent("text_input4","input",function(){
  setProperty("text_area1","text-color",getText("text_input4"));
});
onEvent("dropdown2","input",function(){
  setProperty("text_area1","font-family",getText("dropdown2"));
});
onEvent("label33","click",function(){
  c=c+5;
  setProperty("text_area1","font-size",c);
});
onEvent("label34","click",function(){
  c=c-5;
  setProperty("text_area1","font-size",c);
});
onEvent("button24", "click", function() {
  setScreen("mainscreen");
});
onEvent("button25", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button26", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button27", "click", function( ) {
  setScreen("Mainscreen2");
});
onEvent("button31", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button32");
});
onEvent("button36", "click", function( ) {
  setScreen("screen17");
});
onEvent("button28", "click", function( ) {
  setScreen("screen18");
});
onEvent("button38", "click", function( ) {
  if (getText("text_input7") + (getText("text_input8") + (getText("text_input9") + getText("text_input10"))) > 100) {
    setText("label37", "A");
  }
  if (getText("text_input7") + (getText("text_input8") + (getText("text_input9") + getText("text_input10"))) > 80  < 90) {
    setText("label37", "B");
  }
  if (getText("text_input7") + (getText("text_input8") + (getText("text_input9") + getText("text_input10"))) > 70 < 80) {
    setText("label37", "C");
  }
  if (getText("text_input7") + (getText("text_input8") + (getText("text_input9") + getText("text_input10"))) > 60 < 70) {
    setText("label37", "D");
  }
  if (getText("text_input7") + (getText("text_input8") + (getText("text_input9") + getText("text_input10"))) < 60) {
    setText("label37", "F");
  }
});
onEvent("button39", "click", function() {
  setScreen("appstore");
});
onEvent("button42", "click", function( ) {
  setScreen("Mainscreen2");
});
onEvent("button45", "click", function( ) {
  setScreen("Mainscreen2");
});
onEvent("button41", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button36");
});
onEvent("button43", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button35");
});
onEvent("button32", "click", function( ) {
  setScreen("screen16");
  show();
});
onEvent("image_up","click",function(){
  show();
  penUp();
  move(0,-10);
});
onEvent("image_downs","click",function(){
  show();
  penUp();
  move(0,10);
});
onEvent("image_left","click",function(){
  show();
  penUp();
  move(-10,0);
});
onEvent("image_right","click",function(){
  show();
  penUp();
  move(10,0);
});
onEvent("image_reload","click",function(){
  penDown();
  penRGB(randomNumber(0,255),randomNumber(0,255),100);
  penWidth(3);
  drawsquare();
  penUp();
  hide();
});
function drawsquare(){
  var x = getNumber("slider4");
  setScreen("screen16");
  moveForward(x);
  turnLeft(90);
  moveForward(x);
  turnLeft(90);
  moveForward(x);
  turnLeft(90);
  moveForward(x);
  turnLeft(90);
}
onEvent("button35", "click", function( ) {
  setScreen("screen22");
});
onEvent("button46", "click", function( ) {
  setScreen("Mainscreen2");
});
onEvent("button47","click",function(){
  var q = 0;
  for(var p = 1; p<=(getNumber("text_input5"));p++){
    q = q + p;
  }
  setText("label52",q);
  setText("label51",4*q);
});
onEvent("button44", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button34");
});
onEvent("button34", "click", function( ) {
  setScreen("TimerApp");
});
var min = 0;
var sec = 0;
var UW = 0;
onEvent("button50", "click", function( ) {
  timedLoop(1000, function() {
    sec = sec + 1;
    setNumber("lblSeconds", sec);
  });
  timedLoop(60000, function() {
    sec = 0;
    min = min + 1;
    UW = UW + 5;
    setNumber("lblMinutes", min);
    setNumber("lblWaterUsed", UW);
  });
});
onEvent("button51", "click", function( ) {
  stopTimedLoop();
});
onEvent("button48", "click", function( ) {
  setScreen("mainscreen");
});
onEvent("button49", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button37");
});
onEvent("button37", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("playButton","click",function(){
  setScreen("playScreen");
});
onEvent("sliderLength","change",function(){
  for (var x = 1;x < getNumber("sliderLength");x++){
    penUp();
    moveTo(150,250);
    penDown();
    penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
    penWidth(1);
    moveForward(x);
    turnRight(5);
    hide();
  }
});
onEvent("studyButton","click",function(){
  setScreen("studyScreen");
});
onEvent("GenerateButton","click",function(){
  for (var y = 1;y < 11;y++){
    textLabel(y,getNumber("tableNumberInput")+"x"+y+"="+y*getNumber("tableNumberInput"));
    setPosition(y,100,40*y,100,100);
  }
  hideElement("GenerateButton");
  hideElement("tableNumberInput");
});
onEvent("button61","click",function(){
  setScreen("mainScreen");
});
onEvent("button60","click",function(){
  setScreen("mainScreen");
});
onEvent("button52", "click", function( ) {
  setScreen("Mainscreen2");
});
onEvent("button54", "click", function( ) {
  setScreen("Mainscreen2");
  showElement("button33");
});
onEvent("button33", "click", function( ) {
  setScreen("screen59");
});
var e = 30;
hideElement("label5_highlight");
onEvent("button2_Stop", "click", function( ) {
  stopSound();
  setPosition("label5_highlight",99, 359);
  showElement("label5_highlight");
});
onEvent("button1_Previous", "click", function( ) {
  setPosition("label5_highlight",182, 365);
  showElement("label5_highlight");
  setPosition("label99", 65, e);
  e = e - 18;
  setPosition("label99",65, e);
  if(e < 13) {
   setPosition("label99",65, 30);
   e = 30;
  }
  console.log(e);
});
onEvent("button3_Next", "click", function( ) {
  e = e + 18;
  setPosition("label99", 65, e);
  console.log(e);
  setPosition("label5_highlight", 245, 365);
  showElement("label5_highlight");
});
onEvent("button1_Play", "click", function( ) {
  stopSound();
  console.log(e);
  if(e==30){
  playSound("DJ-Snake---Taki-Taki-(Lyrics)-ft.-Selena-Gomez--Ozuna--Cardi-B-64.mp3");
  }
  else if((e==48)){
    playSound("assets/Ed-Sheeran--64.mp3");
  } else if ((e == 66)) {
    playSound("assets/Latest-Bhutanese-Song-2019---YA-TARU-MA-TARU---Sonam-Wangchen-_-Official-Video-64.mp3");
  }
  setPosition("label5_highlight",35, 360);
  showElement("label5_highlight");
});
onEvent("button55", "click", function( ) {
  setScreen("MainScreen2");
});
onEvent("button29", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("button98", "click", function( ) {
  setScreen("LivingRoom");
});
onEvent("slider176", "input", function() {
  setNumber("LivingRoomTemperature",getNumber("slider176"));
});
onEvent("button97", "click", function( ) {
  setScreen("BedroomScreen");
});
onEvent("slider256", "input", function() {
  setNumber("label677",getNumber("slider256"));
});
onEvent("button466", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("button397", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("button53", "click",function(){
  setScreen("Mainscreen2");
});
