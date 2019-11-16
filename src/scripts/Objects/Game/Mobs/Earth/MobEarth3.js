import Mob from "../Mob";
import EarthResistComponent from "../../../../Components/logic/Resist/EarthResistComponent";

class MobEarth3 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new EarthResistComponent(null), 27500);
        this.resist.host = this;
        this.bounty = 450;
    }

}
export default MobEarth3;