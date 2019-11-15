import Tower from "./Tower";
import AirTowerComponent from "../../../Components/logic/Towers/AirTowerComponent";

class AirTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new AirTowerComponent(this);
        this.addComponent(this.towerComponent);

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