let colorLabel = 0;

const main = document.querySelector("main");
const header = document.querySelector("header");

let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");

red.addEventListener("input", increaseColor);
green.addEventListener("input", increaseColor);
blue.addEventListener("input", increaseColor);

// rgb(255, 255, 255)
// red.value
function increaseColor() {
  // console.log(typeof red.value);
  let colorFull = `${red.value}, ${green.value}, ${blue.value}`;
  main.style.backgroundColor = `rgb(${colorFull})`;
  header.style.backgroundColor = `rgba(${colorFull}, 0.461)`;
  // console.log(main);
  let hexValue = `${hexColor(red.value)}${hexColor(green.value)}${hexColor(
    blue.value
  )}`;
  document.querySelector("span").innerText = `#${hexValue}`;
}
increaseColor();

function hexColor(c) {
  let hexValue = parseInt(c).toString(16);
  if (1 === hexValue.length) {
    hexValue = 0 + hexValue;
  }
  return hexValue;
}
