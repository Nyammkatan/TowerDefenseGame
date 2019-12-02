import GameComponent from "../GameComponent";

class HPRenderComponent extends GameComponent {

    constructor(host, bodyComponent){
        super(host);
        this.bodyComponent = bodyComponent;

    }

    drawUpper(index){
        if (index == 3) {
            let hp = this.host.hp;

            this.host.game.p.noStroke();
            let lifeBarWidth = this.host.hp * this.bodyComponent.w / this.host.maxHp;
            this.host.game.p.fill(0, 100, 0);
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, this.bodyComponent.w, 7);
            this.host.game.p.fill(0, 255, 0);
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, lifeBarWidth, 7);

            this.host.game.p.stroke(0);
            this.host.game.p.noFill();
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, this.bodyComponent.w, 7);

        }

    }

}

export default HPRenderComponent;
