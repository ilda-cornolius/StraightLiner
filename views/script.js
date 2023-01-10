// get a reference to the canvas element
const canvas = document.getElementById('drawingCanvas');

// get a reference to the canvas context, which we will use to draw on the canvas
const context = canvas.getContext('2d');

// set up an array to store the coordinates of the points on the line
let points = [];

// set up a flag to keep track of whether the user is currently drawing
let isDrawing = false;

// set up event listeners to handle mouse down, mouse move, and mouse up events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  points.push({ x: event.clientX, y: event.clientY });
}

function draw(event) {
  if (isDrawing) {
    points.push({ x: event.clientX, y: event.clientY });
    context.beginPath();
    context.moveTo(points[points.length - 2].x, points[points.length - 2].y);
    context.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    context.stroke();
  }
}

function stopDrawing() {
  isDrawing = false;
}
