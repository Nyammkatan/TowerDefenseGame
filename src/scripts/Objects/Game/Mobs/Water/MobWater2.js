import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";

class MobWater2 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new WaterResistComponent(null), 3250);
        this.resist.host = this;
        this.bounty = 75;
    }

}
export default MobWater2;