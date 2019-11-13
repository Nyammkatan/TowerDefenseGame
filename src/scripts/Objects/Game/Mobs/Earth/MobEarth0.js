import Mob from "../Mob";
import EarthResistComponent from "../../../../Components/logic/Resist/EarthResistComponent";

class MobEarth0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new EarthResistComponent(null), 200);
        this.resist.host = this;
    }

}
export default MobEarth0;