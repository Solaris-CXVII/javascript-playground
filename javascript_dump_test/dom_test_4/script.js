const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here

ctx.fillStyle = color;
ctx.fillRect(x, y, width, height);
