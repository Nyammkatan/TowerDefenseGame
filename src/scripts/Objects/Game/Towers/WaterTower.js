import Tower from "./Tower";
import WaterTowerComponent from "../../../Components/logic/Towers/WaterTowerComponent";

class WaterTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new WaterTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default WaterTower;