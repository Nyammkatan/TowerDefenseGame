import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow1 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 150, new ShadowResistComponent(null), 6300);
        this.resist.host = this;
        this.bounty = 200;
    }

}
export default MobShadow1;