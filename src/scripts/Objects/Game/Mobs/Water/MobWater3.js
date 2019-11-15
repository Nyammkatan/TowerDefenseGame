import Mob from "../Mob";
import WaterResistComponent from "../../../../Components/logic/Resist/WaterResistComponent";

class MobWater3 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 120, new WaterResistComponent(null), 10000);
        this.resist.host = this;
    }

}
export default MobWater3;