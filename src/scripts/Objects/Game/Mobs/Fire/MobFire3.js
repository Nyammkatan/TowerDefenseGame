import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";

class MobFire3 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 40, tileSize, route, 100, new FireResistComponent(null), 15000);
        this.resist.host = this;
    }

}
export default MobFire3;