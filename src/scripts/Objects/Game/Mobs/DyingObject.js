import GameObject from "../../GameObject";
import AnimationControllerComponent from "../../../Components/AnimationControllerComponent";
import Animation from "../../../Components/Animation";
import AnimationUtils from "../../../Components/render/AnimationUtils";
import BodyComponent from "../../../Components/logic/BodyComponent";

class DyingObject extends GameObject {

    constructor(game, x, y) {
        super(game);
        this.x = x;
        this.y = y;
        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("die", new Animation(
            AnimationUtils.getFrames("assets/mobs/MobFire0.png", 3, 0, 80, 4), 0.1,
            false));
        this.animationController.setCurrentAnimation("die");
        this.addComponent(this.animationController);
        this.timer = 0;

    }

    update(delta) {
        super.update(delta);
        this.timer += delta;
        if (this.timer >= 4*0.1+1){
            this.removeFromParent();
        }
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.x-25, this.y-25, 90*Math.PI/180);
    }

}
export default DyingObject;