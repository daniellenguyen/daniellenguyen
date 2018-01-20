// Create a Pixi Application
// For more, see documentation on PIXI.Application
let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true, // smoothes the edges of fonts and graphic primitives
  transparent: false, // makes the canvas background transparent
  resolution: 1 // check Mat Grove's explanation of this
});

// set background color
app.renderer.backgroundColor = 0xf44265;


// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// Change the size of the canvas to fill window
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// This resizes the window weirdly. Should decide whether to hate this soon.
// window.addEventListener("resize", function(event){
//   "use strict";
//   scaleToWindow(app.renderer.view);
// });

// _______________________________________________________________________
