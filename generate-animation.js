const { createCanvas } = require("canvas");
const fs = require("fs");

const width = 800;
const height = 400;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.fillText("🚀 My GitHub Profile Animation!", 100, 200);

// Simpan hasil animasi ke file
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("animation.png", buffer);
