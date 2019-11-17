import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";

class MobAir1 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 140, new AirResistComponent(null), 800);
        this.resist.host = this;
        this.bounty = 16;
    }

}
export default MobAir1;