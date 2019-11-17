import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow2 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new ShadowResistComponent(null), 4250);
        this.resist.host = this;
        this.bounty = 100;
    }

}
export default MobShadow2;