import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow7 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new ShadowResistComponent(null), 3800);
        this.resist.host = this;
    }

}
export default MobShadow7;