import Tower from "../Tower";

class FireTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new FireTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default FireTower;