import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";
import MobFire0MoveDown from "../../../../Components/render/Mobs/MobFire0/MobFire0MoveDown";
import AnimationControllerComponent from "../../../../Components/AnimationControllerComponent";

class MobFire0 extends Mob {

    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new FireResistComponent(null), 100);
        this.bounty = 2;
        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("down", new MobFire0MoveDown());
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle, 1);
    }

}
export default MobFire0;