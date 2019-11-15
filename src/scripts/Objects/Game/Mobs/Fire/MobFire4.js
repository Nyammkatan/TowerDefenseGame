import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";

class MobFire4 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 100, new FireResistComponent(null), 30000);
        this.resist.host = this;
    }

}
export default MobFire4;