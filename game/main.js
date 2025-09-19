document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");


let x=255;

window.addEventListener("keydown", (e)=>{
    if(e.key==="ArrowLeft"){
        x-=10;
    } else if(e.key==="ArrowRight"){
        x+=10;
    }
});

let y1 =-100;
let y2 =-100;
let y3=-100;

function gameLoop() {
   ctx.fillStyle="hsla(0, 0%, 0%, 1.00)";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="hsla(0, 100%, 59%, 1.00)";
ctx.fillRect(40,y3,30,30);
y3+=6;
    ctx.fillStyle="hsla(0, 100%, 59%, 1.00)";
ctx.fillRect(400,y2,30,30);
y2+=3;
    ctx.fillStyle="hsla(0, 100%, 59%, 1.00)";
ctx.fillRect(200,y1,30,30);
y1 += 1;
ctx.fillStyle="hsla(128, 97%, 64%, 1.00)";
ctx.fillRect(x,500,30,30);
requestAnimationFrame(gameLoop);
}

gameLoop();
