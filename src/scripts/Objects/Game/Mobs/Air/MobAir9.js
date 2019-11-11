import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";

class MobAir9 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new AirResistComponent(null), 4800);
        this.resist.host = this;
    }

}
export default MobAir9;