import Tower from "./Tower";
import ShadowTowerComponent from "../../../Components/logic/Towers/ShadowTowerComponent";

class ShadowTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new ShadowTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default ShadowTower;