import Tower from "./Tower";

class ShadowTower extends Tower {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new ShadowTowerComponent(this);
        this.addComponent(this.towerComponent);
    }

}
export default ShadowTower;