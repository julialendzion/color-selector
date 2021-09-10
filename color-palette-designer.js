"use strict";
let colorWell = document.querySelector("#colorInput");
colorWell.addEventListener("input", startup);
// colorWell.addEventListener("change", startup);

function startup() {
  const hex = colorWell.value;
  const rgb = getRgb(hex);
  const hsl = getHsl(rgb);

  showHex(hex);
  showColor(hex);
  showRgb(rgb);
  showHsl(hsl);

  document.getElementById("options").addEventListener("click", choice(hsl));
}

function showColor(data) {
  document.querySelector("#color-box").style.backgroundColor = data;
}

function showHex(data) {
  document.querySelector("#hex").textContent = `HEX: ${data}`;
}

function getRgb(hex) {
  let rPart = hex.substring(1, 3);
  let gPart = hex.substring(3, 5);
  let bPart = hex.substring(5, 7);

  rPart = parseInt(rPart, 16);
  gPart = parseInt(gPart, 16);
  bPart = parseInt(bPart, 16);

  const RGB = {
    r: rPart,
    g: gPart,
    b: bPart,
  };
  return RGB; //returns the r , g , b values in a RGB object
}

function showRgb(data) {
  document.querySelector("#rgb").textContent = `RGB:  ${data.r}, ${data.g}, ${data.b}`;
}

function getHsl(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log(h, s, l); // just for testing
  const hsl = {
    h: h,
    s: s,
    l: l,
  };
  return hsl;
}

function showHsl(hsl) {
  document.querySelector("#hsl").textContent = `HSL:  ${Math.floor(hsl.h)}, ${Math.floor(hsl.s)}, ${Math.floor(hsl.l)}`;
}

function choice(data) {
  let selectorInput = document.querySelector("#options").value;
  console.log(`tutaj jest to info ${data}`);
  if (selectorInput === "analogous") {
    calcAnalogous();
  } else if (selectorInput === "monochromatic") {
    calcMono();
  } else if (selectorInput === "triad") {
    calcTriad();
  }
}

function calcAnalogous() {
  console.log("calculate the Analogous");
}

function calcMono() {
  console.log("calculate the monochromatic");
}
function calcTriad() {
  console.log("calculate the Triad");
}
