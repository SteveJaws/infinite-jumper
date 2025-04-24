class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.gravityStrength = 100;
        this.canMove = true;
    }

    collision(){
        let futureY = (this.y + this.height) + this.gravityStrength;

        if(futureY > canvas.height){
            this.gravityStrength = 0;
            this.canMove = false;
        }
    }

    gravity(){
        this.gravityStrength += 0.5;
        this.y += this.gravityStrength;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    render(){
        this.collision();

        if(this.canMove){
            this.gravity();
        }

        this.draw();
    }
}