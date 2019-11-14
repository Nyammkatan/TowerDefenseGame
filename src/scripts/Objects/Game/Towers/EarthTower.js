import Tower from "./Tower";
import EarthTowerComponent from "../../../Components/logic/Towers/EarthTowerComponent";

class EarthTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new EarthTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default  EarthTower;