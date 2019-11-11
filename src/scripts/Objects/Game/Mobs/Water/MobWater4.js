import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";

class MobWater4 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new WaterResistComponent(null), 2500);
        this.resist.host = this;
    }

}
export default MobWater4;