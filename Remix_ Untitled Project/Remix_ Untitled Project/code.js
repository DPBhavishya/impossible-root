var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5e29022a-85e2-41f9-af40-b17e3eec5462","c7699306-627d-477d-b671-4963805292b5"],"propsByKey":{"5e29022a-85e2-41f9-af40-b17e3eec5462":{"name":"gameplayadventure_13_1","sourceUrl":null,"frameSize":{"x":16,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"rUgC85isu.LZQOLYuwwWWmaOUlFgT4Wt","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":20},"rootRelativePath":"assets/5e29022a-85e2-41f9-af40-b17e3eec5462.png"},"c7699306-627d-477d-b671-4963805292b5":{"name":"shell_11_1","sourceUrl":null,"frameSize":{"x":21,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"juay.AxiHXaxwpTy.NbUJrK7OlEjb9dk","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":20},"rootRelativePath":"assets/c7699306-627d-477d-b671-4963805292b5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(42,170,50,3);
var wall8 = createSprite(42,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);

var ding = createSprite(40,190,13,13);
ding.setAnimation("shell_11_1");
ding.shapeColor="green";

var dong1 = createSprite(100,130,10,10);
dong1.setAnimation("gameplayadventure_13_1");
dong1.shapeColor="red";
dong1.velocityY= 15;

var dong2 = createSprite(215,130,10,10);
dong2.setAnimation("gameplayadventure_13_1");
dong2.shapeColor="red";
dong2.velocityY= 15;

var dong3 = createSprite(165,250,10,10);
dong3.setAnimation("gameplayadventure_13_1");
dong3.shapeColor="red";
dong3.velocityY= -15;

var dong4 = createSprite(270,250,10,10);
dong4.setAnimation("gameplayadventure_13_1");
dong4.shapeColor="red";
dong4.velocityY= -15;

var count = 0;

playSound("assets/category_background/fantasy.mp3",true);

function draw() {
  
  background("orange");
  textSize(20);
  text("deaths: "+count,200,100);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  if(keyDown("LEFT_ARROW")){
    ding.x= ding.x -10;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ding.x= ding.x +10;
  }
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
  if(ding.isTouching(dong1)|| ding.isTouching(dong2)||ding.isTouching(dong3)||ding.isTouching(dong4)){
    ding.x= 40;
    ding.y= 190;
    count = count+1;
  }
    
  
  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
