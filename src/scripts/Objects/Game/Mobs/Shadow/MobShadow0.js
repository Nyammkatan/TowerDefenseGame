import Mob from "../Mob";
import ShadowResistComponent from "../../../../Components/logic/Resist/ShadowResistComponent";

class MobShadow0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new ShadowResistComponent(null), 400);
        this.resist.host = this;
        this.bounty = 5;
    }

}
export default MobShadow0;