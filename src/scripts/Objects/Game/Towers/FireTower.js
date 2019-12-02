import Tower from "./Tower";
import FireTowerComponent from "../../../Components/logic/Towers/FireTowerComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class FireTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new FireTowerComponent(this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(0, 0, 40, 40);
        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
    }

}
export default FireTower;
