import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";

class MobAir7 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new AirResistComponent(null), 3700);
        this.resist.host = this;
    }

}
export default MobAir7;