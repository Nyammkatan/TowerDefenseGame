import Mob from "../Mob";
import EarthResistComponent from "../../../../Components/logic/Resist/EarthResistComponent";
import AnimationControllerComponent from "../../../../Components/AnimationControllerComponent";
import Animation from "../../../../Components/Animation";
import AnimationUtils from "../../../../Components/render/AnimationUtils";

class MobEarth2 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 80, new EarthResistComponent(null), 50000);
        this.resist.host = this;
        this.bounty = 1250;
        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("down", new Animation(
            AnimationUtils.getFrames("assets/mobs/Bosses.png", 1, 0, 160, 3),
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
export default MobEarth2;
