"use strict";

window.addEventListener("load", startup, false);
let defaultColor = "#0000ff";

function startup() {
  let colorWell = document.querySelector("#colorInput");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", showColor);
  colorWell.addEventListener("input", showHex);
  colorWell.addEventListener("input", getRgb);
  // colorWell.addEventListener("input", getHsl);
}

function showColor(event) {
  document.querySelector("#color-box").style.backgroundColor = event.target.value;
}

function showHex(event) {
  document.querySelector("#hex").textContent = `HEX: ${event.target.value}`;
}

function getRgb(event) {
  let hex = event.target.value;
  let rPart = hex.substring(1, 3);
  let gPart = hex.substring(3, 5);
  let bPart = hex.substring(5, 7);

  rPart = parseInt(rPart, 16);
  gPart = parseInt(gPart, 16);
  bPart = parseInt(bPart, 16);

  // console.log(rPart);
  // console.log(gPart);
  // console.log(bPart);
  showRgb(rPart, gPart, bPart);
  getHsl(rPart, gPart, bPart);
}

function showRgb(red, green, blue) {
  document.querySelector("#rgb").textContent = `RGB= ${red}, ${green}, ${blue}`;
}

function getHsl(r, g, b) {
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
  showHsl(h, s, l);
}

function showHsl(h, s, l) {
  document.querySelector("#hsl").textContent = `HSL= ${h}, ${s}, ${l}`;
}
