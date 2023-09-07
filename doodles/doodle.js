let canvas;
let drawing = false;
let erasing = false;
let brushSize = 10;
let brushColor = '#000000'; // Set the default brush color
let eraserColor = '#ffffff';
let brushButton;
let eraserButton;

function setup() {
    let mainContainer = select('#main-container'); // Select the main container

    // Create the canvas with dimensions matching the window size
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('row-two');

    // Create a color picker
    let colorPicker = createColorPicker(brushColor); // Set the default color
    colorPicker.parent('row-one');
    colorPicker.input(() => {
        brushColor = colorPicker.value(); // Set the brush color to the selected color
    });

    let brushSizeSlider = createSlider(1, 50, brushSize, 1);
    function setup() {
        // ... (your existing code)
    
        // Get a reference to the slider
        let sliderElement = select('#row-one input[type="range"]');

        // Add the custom CSS class to the slider
        sliderElement.addClass('custom-slider');

    }
    
    brushSizeSlider.parent('row-one');
    brushSizeSlider.input(() => {
        brushSize = brushSizeSlider.value();
    });
   
    // Rest of the controls (brush, eraser, brush size, clear, save)
    let brushButton = createButton(''); // Create an empty button
    brushButton.addClass('class1');
    brushButton.parent('row-one');
    
    // Create an image element inside the button
    let imgElement = createImg('images/paint-brush.png'); // Replace 'path_to_image.png' with the actual image URL or path
    imgElement.parent(brushButton); // Make the image a child of the button
   
    imgElement.id('brush-icon');

    brushButton.mousePressed(() => {
        drawing = true;
        erasing = false;
        canvas.style('cursor', 'crosshair');
    });

 
    let eraserButton = createButton(''); // Create an empty button
    eraserButton.addClass('class1');
    eraserButton.parent('row-one');
    
    // Create an image element inside the button
    let eraserImgElement = createImg('images/eraser.png'); // Replace 'path_to_eraser_image.png' with the actual image URL or path
   
    eraserImgElement.id('eraser-icon');

    eraserImgElement.parent(eraserButton); // Make the image a child of the button
    
    eraserButton.mousePressed(() => {
        drawing = false;
        erasing = true;
        canvas.style('cursor', 'cell');
    });


    let clearButton = createButton('');
    clearButton.addClass('class1');
    clearButton.parent('row-one');

    let clearImgElement = createImg('images/clear-icon.png');
    clearImgElement.parent(clearButton);

    clearImgElement.id('clear-icon');

    clearButton.mousePressed(() => {
        background(255);
    });

    let saveButton = createButton('');
    saveButton.addClass('class1');
    saveButton.parent('row-one');

    let saveImgElement = createImg('images/save-icon.png');
    saveImgElement.parent(saveButton);

    saveImgElement.id('save-icon');

    saveButton.mousePressed(() => {
        saveCanvas(canvas, 'myCanvas', 'png');
    });

    let rowOne = select('#row-one'); // Select the parent container
rowOne.addClass('button-container'); // Add the button-container class

 brushSizeSlider = select('#row-one input[type="range"]');

    // Add the custom CSS class to the slider
    brushSizeSlider.addClass('custom-slider');
}



function draw() {
    if (mouseIsPressed && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        strokeWeight(brushSize);
        stroke(brushColor); // Set the stroke color to the selected brush color
        if (drawing) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        } else if (erasing) {
            stroke(eraserColor);
            line(pmouseX, pmouseY, mouseX, mouseY);
        } else {
            noStroke();
        }
    }
}

function windowResized() {
    // Resize the canvas to match the updated window size
    resizeCanvas(windowWidth, windowHeight);
}