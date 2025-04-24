let running = true;
let player;

function loop(){
    if(running != false){
        renderer();

        requestAnimationFrame(loop);
    }
}

function start(){
    player = new Player(10, 10, 25, 25, "red");

    loop();
}

start();