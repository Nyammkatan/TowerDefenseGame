import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow4 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new ShadowResistComponent(null), 2200);
        this.resist.host = this;
    }

}
export default MobShadow4;