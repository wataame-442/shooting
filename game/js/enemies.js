export const enemies=[];
const SIZE=80;
const enemyImage=new Image();
enemyImage.src="https://sakutto-sozai.com/wp-content/uploads/2021/04/virus_001.png";

function pushEnemies(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.random()*(canvas.width - w);
    const y=0;
    const vy=5
    enemies.push({x,y,width:w,height:h,vy});
}

export function spawnEnemy(canvas){
    if (enemies.length<5){
        pushEnemies(canvas);
    }
}
export function updateEnemies(canvas){
    for (let i=enemies.length -1; i>=0; i--){
        const e=enemies[i];
        e.y+=e.vy;
        if(e.y>canvas.height){
            enemies.splice(i,1);
        }
    }
}

export function drawEnemies(ctx){
    ctx.fillStyle="hsla(0, 100%, 50%, 1.00)";
    for (const e of enemies){
        ctx.drawImage(enemyImage,e.x,e.y,e.width,e.height);
    }
}  