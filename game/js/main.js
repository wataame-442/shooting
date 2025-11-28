import {player,initPlayer,drawPlayer} from "./player.js";
import {spawnEnemy,enemies,updateEnemies,drawEnemies} from "./enemies.js";
import {handleCollisions} from "./collision.js";

const mapImage = new Image();
mapImage.src = "";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

initPlayer(canvas);

export const bullets=[] ;
const BURRET_SPEED=-10;

function tryShoot(now){  
    bullets.push({
        x:player.x + player.width/2 - 5,
        y:player.y,
        width:10,
        height:-10,
        vy:BURRET_SPEED,
    })
};


window.addEventListener("keydown", (e)=>{
    if(e.key==="ArrowLeft"){
        if( player.x >  10 ){
        player.x-=10;
    }
    } else if(e.key==="ArrowRight"){
        if( player.x < canvas.width - player.width - 10){
        player.x+=10;
        }
    } else if(e.code==="Space"){
        tryShoot();
    }
});

function updateScore(){
    const scoreBoard=document.getElementById("scoreBoard");
    scoreBoard.textContent=`Score: ${player.score}`;
    const lifeBoard=document.getElementById("lifeBoard");
    lifeBoard.textContent=`Life: ${player.life}`;
}

function update(){
for (let i= bullets.length -1; i>=0; i--){
    const bullet=bullets[i];
    bullet.y+=bullet.vy;
    if(bullet.y<0){
        bullets.splice(i,1);
    }
}
handleCollisions(canvas);
spawnEnemy(canvas);
updateEnemies(canvas);
updateScore();
}

function draw(){
   ctx.fillStyle="hsla(0, 0%, 0%, 1.00)";
ctx.fillRect(0,0,canvas.width,canvas.height);

drawPlayer(ctx);

ctx.fillStyle="hsla(60, 100%, 78%, 1.00)";
for (let i=0 ;i < bullets.length ; i++){
    const bullet=bullets[i];
    ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
}

drawEnemies(ctx);

}


function gameLoop() {  
update();
draw();
requestAnimationFrame(gameLoop);
}

gameLoop();
