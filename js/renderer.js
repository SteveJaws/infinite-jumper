const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

function renderer(){
    background();

    player.render();
}

function background(){
    console.log(canvas.clientWidth)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}