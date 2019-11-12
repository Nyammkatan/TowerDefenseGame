import Mob from "../Mob";
import FireResistComponent from "../../../../Components/logic/Resist/FireResistComponent";
import RenderComponent from "../../../../Components/render/RenderComponent";

class MobFire0 extends Mob {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 1, new FireResistComponent(null), 100);
        //this.renderComponent.setImage(game.p.gimages["assets/moon.png"]);
        
    }

}
export default MobFire0;