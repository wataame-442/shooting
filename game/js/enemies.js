export const enemies=[];
const SIZE=26;

function pushEnemies(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.random()*(canvas.width - w);
    const y=-h;
    const vy=5
    enemies.push({x,y,width:w,height:h,vy});
}

export function spawnEnemy(canvas){
    if (enemies.length<5){
        pushEnemies(canvas);
    }
}
// export function updateEnemies(canvas){
//     for (let i=enemeis.length -1; i>=0; i--){
//         const e=enemeis[i];
//         e.y+=e.vy;
//         if(e.y>canvas.height){
//             enemeis.splice(i,1);
//         }
//     }
// }

// export function drawEnemies(ctx){
//     ctx.fillStyle="hsla(0, 100%, 50%, 1.00)";
//     for (const e of enemeis){
//         ctx.fillRect(e.x,e.y,e.width,e.height);
//     }
// }