const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Squre
let c = canvas.getContext("2d");
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 400, 100, 100)

//line
c.beginPath();
c.moveTo(50, 400);
c.lineTo(400, 100);

c.stroke();