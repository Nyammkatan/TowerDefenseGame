import Mob from "../Mob";
import EarthResistComponent from "../../../../Components/logic/Resist/EarthResistComponent";

class MobEarth9 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new EarthResistComponent(null), 4900);
        this.resist.host = this;
    }

}
export default MobEarth9;