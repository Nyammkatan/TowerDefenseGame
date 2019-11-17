import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow3 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new ShadowResistComponent(null), 20000);
        this.resist.host = this;
        this.bounty = 300;
    }

}
export default MobShadow3;