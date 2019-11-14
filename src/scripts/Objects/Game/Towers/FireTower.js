import Tower from "./Tower";
import FireTowerComponent from "../../../Components/logic/Towers/FireTowerComponent";

class FireTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new FireTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default FireTower;