import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";
import AnimationControllerComponent from "../../../../Components/AnimationControllerComponent";
import Animation from "../../../../Components/Animation";
import AnimationUtils from "../../../../Components/render/AnimationUtils";

class MobAir0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 140, new AirResistComponent(null), 1250);
        this.resist.host = this;
        this.bounty = 50;
        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("down", new Animation(
            AnimationUtils.getFrames("assets/mobs/Bosses.png", 2, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
    }

}
export default MobAir0;
