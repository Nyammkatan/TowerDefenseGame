import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";
import AnimationControllerComponent from "../../../../Components/AnimationControllerComponent";
import Animation from "../../../../Components/Animation";
import AnimationUtils from "../../../../Components/render/AnimationUtils";

class MobWater1 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new WaterResistComponent(null), 750);
        this.resist.host = this;
        this.bounty = 13;
        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("down", new Animation(
            AnimationUtils.getFrames("assets/mobs/MobsNew.png", 10, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
    }

}
export default MobWater1;