let topTextInput, bottomTextInput;
let fontSizeSlider;
let fontColorSliderR, fontColorSliderG, fontColorSliderB;
let fontSelector;
let memeImage;
let imageSelector;
let selectedImage; 

function setup() {
  let can=createCanvas(700, 500);
  can.parent('column-two');


  imageSelector = createSelect();
  imageSelector.option('Drake', 'images/DrakeHotlineBling.jpg');
  imageSelector.option('Winnie The Pooh', 'images/Tuxedo-Winnie-The-Pooh.png');
  imageSelector.option('blackguy', 'images/blackguy.jpg');
  imageSelector.changed(changeImage);
  imageSelector.parent('column-one');

  
  topTextInput = createInput('Top text');
  topTextInput.parent('column-one');
  
  bottomTextInput = createInput('Bottom text');
  bottomTextInput.parent('column-one');
  
  fontSizeSlider = createSlider(10, 100, 36); 
  fontSizeSlider.parent('column-one');
  
  fontColorSliderR = createSlider(0, 255, 255);
  fontColorSliderR.parent('column-one');
  
  fontColorSliderG = createSlider(0, 255, 255);
  fontColorSliderG.parent('column-one');
  
  fontColorSliderB = createSlider(0, 255, 255);
  fontColorSliderB.parent('column-one');
  
  fontSelector = createRadio();
  fontSelector.option('Impact');
  fontSelector.option('Comic Sans');
  fontSelector.option('Sabon');
  fontSelector.selected('Impact');
  fontSelector.parent('column-one');
  
  let generateButton = createButton('Make Meme');
  generateButton.parent('column-one');
  generateButton.mousePressed(generateMeme);
}

function draw() {
  background(60, 50, 10);
  imageMode(CENTER);
  
  if (selectedImage) {
    image(selectedImage, width / 2, height / 2); 
  }
  
  textSize(fontSizeSlider.value());
  colorMode(RGB);
  fill(fontColorSliderR.value(), fontColorSliderG.value(), fontColorSliderB.value());
  textAlign(CORNER, CORNER);
  
  let selectedFont = fontSelector.value();
  textFont(selectedFont);
  
  text(topTextInput.value(), width / 2, 130);
  text(bottomTextInput.value(), width / 2, height - 110);
}

function generateMeme() {
  
}

function changeImage() {
  selectedImage = loadImage(imageSelector.value());
}

function saveMeme() {
  saveCanvas('meme', 'png'); // Save the canvas as 'meme.png' 
}
  