import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import MobMovingComponent from "../../../Components/logic/MobMovingComponent";
import RenderComponent from "../../../Components/render/RenderComponent";
import HPRenderComponent from "../../../Components/render/HPRenderComponent";
import DyingObject from "./DyingObject";
import ParticleEmitter from "../ParticleEmitter";
import FireResistComponent from "../../../Components/logic/Resist/FireResistComponent";
import WaterResistComponent from "../../../Components/logic/Resist/WaterResistComponent";
import ShadowResistComponent from "../../../Components/logic/Resist/ShadowResistComponent";
import AirResistComponent from "../../../Components/logic/Resist/AirResistComponent";
import EarthResistComponent from "../../../Components/logic/Resist/EarthResistComponent";

class Mob extends GameObject {

    constructor(game, x, y, size, tileSize, route, turnTime, resist, hp){
        super(game);
        this.bounty = 2;
        this.route = route;
        this.maxHp = hp;
        this.hp = hp;
        this.resist = resist;

        this.bodyComponent = new BodyComponent(this, x, y, size, size);
        this.addChild(this.bodyComponent);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        //this.addComponent(this.renderComponent);

        this.mobMovingComponent = new MobMovingComponent(this, this.bodyComponent, route, tileSize, turnTime);
        this.addComponent(this.mobMovingComponent);

        this.hpRenderComponent = new HPRenderComponent(this, this.bodyComponent);
        this.addComponent(this.hpRenderComponent);

    }

    update(delta) {
        super.update(delta);
        if(this.hp === 0){
            this.removeFromParent();
            mainGame.money += this.bounty;
            // let dyingObject = new DyingObject(this.game, this.bodyComponent.x, this.bodyComponent.y);
            // this.game.state.addGameObject(dyingObject);
            let colors = {r:0, g:0, b:0};
            if (this.resist instanceof FireResistComponent){
                colors.r = 200;
            } else
            if (this.resist instanceof WaterResistComponent){
                colors.b = 200;
            } else
            if (this.resist instanceof ShadowResistComponent){
                colors.r = 150;
                colors.b = 150;
            } else
            if (this.resist instanceof AirResistComponent){
                colors.g = 80;
                colors.b = 255;
            } else
            if (this.resist instanceof EarthResistComponent){
                colors.r = 100;
                colors.g = 180;
            }
            let emitter = new ParticleEmitter(this.game, 20, colors.r, colors.g, colors.b);
            emitter.setLocation(this.bodyComponent.x+this.bodyComponent.w/2, this.bodyComponent.y+this.bodyComponent.h/2);
            this.game.state.addGameObject(emitter);
            emitter.start();
        }
    }

    receiveDamage(tower, coef){
        let pureDamage = tower.towerComponent.attackDamage*coef;
        let damage = pureDamage * this.resist.resists[tower.towerComponent.attackType];
        if(this.hp < damage){
            this.hp = 0;
        } else {
            this.hp -= damage;
        }
    }

    drawUpper(index){
        super.drawUpper(index);
        if (index == 1){
           this.draw();
        }
    }

}

export default Mob;
