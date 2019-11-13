import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";

class MobFire6 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new FireResistComponent(null), 3100);
        this.resist.host = this;
    }

}
export default MobFire6;