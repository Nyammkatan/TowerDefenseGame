import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import RenderComponent from "../../../Components/render/RenderComponent";
import BulletComponent from "../../../Components/logic/Bullets/BulletComponent";

class Bullet extends GameObject {

    constructor(game, x, y, tower, mob, mobs){
        super(game);
        this.target = mob;
        this.bodyComponent = new BodyComponent(this, x, y, 10, 10);
        this.addComponent(this.bodyComponent);
        this.tower = tower;

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);
        this.renderComponent.draw = ()=> {
            game.p.fill(255, 0, 255);
            game.p.rect(this.bodyComponent.x-5, this.bodyComponent.y-5, this.bodyComponent.w, this.bodyComponent.h);
        };

        this.bulletComponent = new BulletComponent(this, this.target, mobs);
        this.addComponent(this.bulletComponent);

    }

}

export default Bullet;