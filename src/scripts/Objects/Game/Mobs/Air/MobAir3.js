import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";

class MobAir3 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 170, new AirResistComponent(null), 42500);
        this.resist.host = this;
        this.bounty = 750;
    }

}
export default MobAir3;