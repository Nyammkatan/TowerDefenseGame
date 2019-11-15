import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";

class MobWater0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new WaterResistComponent(null), 300);
        this.resist.host = this;
        this.bounty = 4;
    }

}
export default MobWater0;