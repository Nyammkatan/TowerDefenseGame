import GameComponent from "../GameComponent";

class MovingComponent extends GameComponent {

    constructor(host, bodyComponent){
        super(host);
        this.bodyComponent = bodyComponent;
        this.vx = 0;
        this.vy = 0;

    }

    update(delta){
        this.bodyComponent.x += this.vx;
        this.bodyComponent.y += this.vy;

    }

}
export default MovingComponent;