import Tower from "./Tower";
import AirTowerComponent from "../../../Components/logic/Towers/AirTowerComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class AirTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new AirTowerComponent(this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(2*40, 0, 40, 40);
        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);

    }

    onDestroy(){
        let allTowers = mainGame.state.gameMenuBottom.kids;
        for (let i=0; i < allTowers.length; i++){
            if (allTowers[i].towerComponent.attackType != "air"){
                if (allTowers[i].bodyComponent.distanceTo(this.bodyComponent) < 100)
                    allTowers[i].buffsComponent.cancelBuff("speed");
            }
        }
        
    }
}
export default AirTower;
