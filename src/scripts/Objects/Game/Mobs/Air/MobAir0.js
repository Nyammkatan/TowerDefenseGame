import Mob from "../Mob";
import AirResistComponent from "../../../../Components/logic/Resist/AirResistComponent";

class MobAir0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 170, new AirResistComponent(null), 1500);
        this.resist.host = this;
        this.bounty = 50;
    }

}
export default MobAir0;