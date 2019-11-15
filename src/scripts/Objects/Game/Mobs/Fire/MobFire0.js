import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";
import RenderComponent from "../../../../Components/render/RenderComponent";

class MobFire0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new FireResistComponent(null), 100);
        this.bounty = 2;
        
    }

}
export default MobFire0;