import Mob from "../Mob";
import EarthResistComponent from "../../../../Components/logic/Resist/EarthResistComponent";

class MobEarth2 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 80, new EarthResistComponent(null), 100000);
        this.resist.host = this;
        this.bounty = 1250;
    }

}
export default MobEarth2;