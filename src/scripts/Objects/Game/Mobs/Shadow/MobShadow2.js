import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow2 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new ShadowResistComponent(null), 1300);
        this.resist.host = this;
    }

}
export default MobShadow2;