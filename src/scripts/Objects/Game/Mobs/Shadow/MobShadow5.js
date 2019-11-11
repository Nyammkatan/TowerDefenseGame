import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow5 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new ShadowResistComponent(null), 2600);
        this.resist.host = this;
    }

}
export default MobShadow5;