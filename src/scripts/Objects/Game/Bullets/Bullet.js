import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import RenderComponent from "../../../Components/render/RenderComponent";
import BulletComponent from "../../../Components/logic/Bullets/BulletComponent";
import AnimationControllerComponent from "../../../Components/AnimationControllerComponent";
import Animation from "../../../Components/Animation";
import AnimationUtils from "../../../Components/render/AnimationUtils";

class Bullet extends GameObject {

    constructor(game, x, y, tower, mob, mobs){
        super(game);
        this.target = mob;
        this.bodyComponent = new BodyComponent(this, x, y, 10, 10);
        this.addComponent(this.bodyComponent);
        this.tower = tower;

        let ops = {
            i: 0,
            t: 0.1
        }
        if (tower.towerComponent.attackType == "air"){
            ops.t = 0.05;
        } else
        if (tower.towerComponent.attackType == "fire"){
            ops.i = 3;
        } else
        if (tower.towerComponent.attackType == "earth"){
            ops.i = 2;
        } else
        if (tower.towerComponent.attackType == "water"){
            ops.i = 1;
        } else
        if (tower.towerComponent.attackType == "shadow"){
            ops.t = 0.05;
            ops.i = 4;
        }

        this.animationController = new AnimationControllerComponent(this);
        this.animationController.addAnimation("bullet", new Animation(
            AnimationUtils.getFrames("assets/towers/Bullets.png", ops.i, 0, 40, 3),
            ops.t, true)
        );
        this.animationController.setCurrentAnimation("bullet");
        this.addComponent(this.animationController);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);
        this.renderComponent.draw = () => {}
        this.renderComponent.drawUpper = (index)=> {
            // mainGame.p.stroke(0);
            // mainGame.p.fill(255, 0, 255);
            //mainGame.p.rect(this.bodyComponent.x-5, this.bodyComponent.y-5, this.bodyComponent.w, this.bodyComponent.h)
            if (index == 2)
            mainGame.p.image(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-20, this.bodyComponent.y-20);
        };

        this.bulletComponent = new BulletComponent(this, this.target, mobs);
        this.addComponent(this.bulletComponent);

    }

}

export default Bullet;
