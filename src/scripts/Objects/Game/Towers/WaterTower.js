import Tower from "./Tower";
import WaterTowerComponent from "../../../Components/logic/Towers/WaterTowerComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class WaterTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new WaterTowerComponent(this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(40, 0, 40, 40);
        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
    }

}
export default WaterTower;
