import Tower from "./Tower";
import AirTowerComponent from "../../../Components/logic/Towers/AirTowerComponent";

class AirTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new AirTowerComponent(this);
        this.addComponent(this.towerComponent);

    }

}
export default AirTower;