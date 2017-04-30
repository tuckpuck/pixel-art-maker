var pixels = document.getElementsByClassName('pixel');
var artContainer = document.getElementsByClassName('artcontainer');
var paletteColor = document.getElementsByClassName('palettecolor');
var selectedColor = document.getElementsByClassName('selectedcolor');
var clearButton = document.getElementsByClassName('clearbutton');
var color = "";

function getBrushColor() {
for (let i = 0; i < paletteColor.length; i++) {
    paletteColor[i].addEventListener('click', function pickColor() {
      var allBrushStyle = window.getComputedStyle(paletteColor[i]);
      color = allBrushStyle.backgroundColor;
      changeCurrentColor();
      console.log(color);
    });
}
}

function getColorWheelInput () {
  selectedColor[0].addEventListener('change', function colorWheelInput() {
    selectedColor[0].style.backgroundColor = selectedColor[0].value;
  });
}

function changeCurrentColor() {
    selectedColor[0].style.backgroundColor = color;
};

function changePixelColor () {
for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', function changeColor() {
        pixels[i].style.backgroundColor = selectedColor[0].style.backgroundColor;
        console.log(selectedColor[0].style.backgroundColor);
    });
}
}

function clearArt() {
  selectedColor[0].style.backgroundColor = "#fff";
  for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.backgroundColor = "#fff";
  }
};

getBrushColor();
changePixelColor();
getColorWheelInput();
