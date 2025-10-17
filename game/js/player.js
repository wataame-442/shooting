export const player={
    x: 0,
    y: 0,
    width:30,
    height:30,
    color:"hsla(125, 100%, 72%, 1.00)",
    life:3,
};

export function initPlayer(canvas){
    player.x=canvas.width/2 - player.width/2;
    player.y=canvas.height - player.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx){
ctx.fillStyle=player.color;
ctx.fillRect(player.x,player.y,player.width,player.height);
}