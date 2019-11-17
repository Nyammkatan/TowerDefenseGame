import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";

class MobWater1 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new WaterResistComponent(null), 750);
        this.resist.host = this;
        this.bounty = 13;
    }

}
export default MobWater1;