import GameObject from "../GameObject";

class ParticleEmitter extends GameObject {

    constructor(game, count, r, g, b){
        super(game);
        this.x = 0;
        this.y = 0;
        this.count = count;
        this.r = r;
        this.g = g;
        this.b = b;
        this.particles = [];
        this.vxmax = 100;
        this.vymax = 100;
        this.active = false;
        this.timer = 0;

    }

    setLocation(x, y){
        this.x = x;
        this.y = y;

    }

    start(){
        if (!this.active){
            for (let i=0; i < this.count; i++){
                let p = {};
                p.x = this.x;
                p.y = this.y;
                p.r = this.r;
                p.g = this.g;
                p.b = this.b;
                p.vx = Math.random()*this.vxmax*2-this.vxmax;
                p.vy = Math.random()*this.vymax*2-this.vymax;
                this.particles.push(p);
            }
            this.active = true;
        }

    }

    update(delta){
        for (let i=0; i < this.count; i++){
            this.particles[i].x += delta * this.particles[i].vx;
            this.particles[i].y += delta * this.particles[i].vy;
        }
        this.timer += delta;
        if (this.timer >= 2){
            this.particles.length = 0;
            mainGame.state.removeGameObject(this);
        }

    }

    drawUpper(index){
        if (index == 1){
            if (this.active){
                for (let i=0; i < this.count; i++){
                    let part = this.particles[i];
                    mainGame.p.noStroke();
                    // mainGame.p.fill(part.r, part.g, part.b);
                    // mainGame.p.rect(part.x, part.y, 2, 2);
                    this.drawRect(part.x, part.y, 4, 4, part.r, part.g, part.b);
                }
            }
        }

    }
    
}

export default ParticleEmitter;