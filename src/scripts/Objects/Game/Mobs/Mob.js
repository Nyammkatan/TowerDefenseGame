import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import MobMovingComponent from "../../../Components/logic/MobMovingComponent";
import RenderComponent from "../../../Components/render/RenderComponent";
import HPRenderComponent from "../../../Components/render/HPRenderComponent";

class Mob extends GameObject {

    constructor(game, x, y, size, tileSize, route, turnTime, resist, hp){
        super(game);
        this.route = route;
        this.maxHp = hp;
        this.hp = hp;
        this.resist = resist;

        this.bodyComponent = new BodyComponent(this, x, y, size, size);
        this.addChild(this.bodyComponent);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);

        this.mobMovingComponent = new MobMovingComponent(this, this.bodyComponent, route, tileSize, turnTime);
        this.addComponent(this.mobMovingComponent);

        this.hpRenderComponent = new HPRenderComponent(this, this.bodyComponent);
        this.addComponent(this.hpRenderComponent);

    }

    update(delta) {
        super.update(delta);
        if(this.hp === 0){
            this.removeFromParent();
        }
    }

    receiveDamage(tower){
        let pureDamage = tower.towerComponent.attackDamage;
        let damage = pureDamage * this.resist.resists[tower.towerComponent.attackType];
        if(this.hp < damage){
            this.hp = 0;
        } else {
            this.hp -= damage;
        }
    }

}
export default Mob;