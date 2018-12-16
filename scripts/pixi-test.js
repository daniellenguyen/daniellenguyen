// Create Pixi Application
let app = new PIXI.Application(
  window.innerWidth,
  window.innerHeight, {
    backgroundColor: 0xf44265, // hot pink
    antialias: true, 
    transparent: false, 
    resolution: 1 
  });

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// Change the size of the canvas to fill window
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

const drawYellowSquare = () => {
    let square = new PIXI.Sprite(
     new PIXI.Graphics()
    .beginFill(0xffe800)
    .drawRect(100, 300, 200, 100)
    .generateTexture());
    
    square.x = 200;
    square.y = 500;
    square.interactive = true;
    
    app.stage.addChild(square);

    square.click = function (e) { window.location = 'scripts/Danielle_Nguyen_Resume.pdf' };
};

const drawBlueSquare = () => {
    let square = new PIXI.Sprite(
    new PIXI.Graphics()
    .beginFill(0x1463e2)
    .drawRect(100, 300, 80, 90)
    .generateTexture());
    
    square.x = 80;
    square.y = 80;
    square.interactive = true;
    
    app.stage.addChild(square);
    
    square.click = function (e) { window.location = 'scripts/recipes.txt' };
};

const drawCircles = () => {
    let circleString = new PIXI.Sprite(
        new PIXI.Graphics()
        .beginFill(0x4cbb17)
        .drawCircle(10, 10, 10)
        .drawCircle(10, 20, 20)
        .generateTexture());

    circleString.x = 450;
    circleString.y = 0;

    app.stage.addChild(circleString);
};

const drawBunny = () => {
// All positions are relative to the left ear
let bunny = new PIXI.Sprite(
  new PIXI.Graphics()
    .beginFill(0xaeb7c4) // gray
    .drawEllipse(0, 0, 10, 20) // left ear
    .drawEllipse(20, 0, 10, 20) // right ear
    .drawCircle(10, 30, 22) // head
    .drawCircle(0, 38, 12) // left cheek
    .drawCircle(20, 38, 12) // right cheek
    .drawEllipse(10, 70, 22, 35) // torso
    .drawEllipse(0, 70, 30, 10) // left arm
    .drawEllipse(20, 70, 30, 10) // right arm
    .beginFill(0xffffff) // white
    .drawCircle(5, 28, 3) // left iris
    .drawCircle(17, 28, 3) // right iris
    .beginFill(0x000000) // black
    .drawCircle(5, 29, 2.5) // left pupil
    .drawCircle(17, 29, 2.5) // right pupil
    .beginFill(0xf4abc1) // pink
    .drawCircle(11, 36, 3) // nose
    .beginFill(0xffffff) // white
    .drawRect(6, 42, 4, 6) // left tooth
    .drawRect(12, 42, 4, 6) // right tooth
    .drawCircle(5, 37, 1) // left cheek dot
    .drawCircle(2, 40, 1) // left cheek dot
    .drawCircle(1, 37, 1) // left cheek dot
    .drawCircle(19, 37, 1) // right cheek dot
    .drawCircle(21, 40, 1) // right cheek dot
    .drawCircle(24, 37, 1) // right cheek dot
    .generateTexture());

    //position bunny
    bunny.x = 600;
    bunny.y = 400;

    app.stage.addChild(bunny);

    bunny.interactive = true;
    bunny.click = function (e) { window.location = 'scripts/definitions.txt' };

};

const drawCheckerboard = () => {
  for (let i = app.stage.children.length - 1; i >= 0; i--) {  app.stage.removeChild(app.stage.children[i]);};

  const allColors = [0x4905af, 0xe55812, 0xd10404, 0xc3ff2b,
    0xeaceff, 0x6bc8ff, 0x0117ff, 0x414142];
  const colors = [
    allColors[Math.floor(allColors.length * Math.random())],
    allColors[Math.floor(allColors.length * Math.random())],
  ];
  let x = 0;
  let y = 0;
  const luckySquare = Math.floor(Math.random() * (150 * 150));
  for (let i = 0; i < 150; i++) {
    const width = 10;
    const height = 10;
    for (let j = 0; j < 150; j++) {
      const color = (i + j === luckySquare) ? 0xf44265 : (j % 2 === 1 ? colors[0] : colors[1]);
      graphics.beginFill(color);
      graphics.drawRect(x, y, width, height);
      x += 10;
    }
    const color1 = colors[0];
    const color2 = colors[1];
    colors[0] = color2;
    colors[1] = color1;
    x = 0;
    y = 10 * i;
  }
  let tex = graphics.generateTexture();
  let sprite = new PIXI.Sprite(tex);

  sprite.x = window.innerWidth - 500;
  sprite.y = 0;
  sprite.width = 500;
  sprite.height = window.innerHeight;

  app.stage.addChild(sprite);
};

const drawTitleText = () => {
    const style = new PIXI.TextStyle({
        fill: 0xffffff,
        fontFamily: "EB Garamond",
        fontStyle: "italic",
        fontWeight: "lighter"
    });

    let definitions = new PIXI.Text('Words I Like');
    definitions.style = style;
    definitions.x = 500;
    definitions.y = 400;
    app.stage.addChild(definitions);

    let recipes = new PIXI.Text('Recipes');
    recipes.style = style;
    recipes.x = 150;
    recipes.y = 100;
    app.stage.addChild(recipes);

    let resume = new PIXI.Text("Resume");
    resume.style = style;
    resume.x = 350;
    resume.y = 590;
    app.stage.addChild(resume);

    let title = new PIXI.Text("Home Sweet Home");
    title.style = new PIXI.TextStyle({
        fill: 0xffffff,
        fontFamily: "EB Garamond",
        fontStyle: "italic",
        fontWeight: "lighter",
        fontSize: 60
    });
    title.x = 700;
    title.y = 200;
    app.stage.addChild(title);

};

let graphics = new PIXI.Graphics();

const delay = 500;

const timeDraw = () => {
    graphics.clear();
    drawCheckerboard();
    drawBunny();  
    drawYellowSquare();
    drawBlueSquare();
    //drawCircles();
    drawTitleText();
    setTimeout(timeDraw, delay);
};

setTimeout(timeDraw, delay);





