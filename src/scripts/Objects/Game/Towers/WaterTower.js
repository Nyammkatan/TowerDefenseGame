import Tower from "./Tower";

class WaterTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new WaterTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default WaterTower;