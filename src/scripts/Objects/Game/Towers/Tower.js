import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class Tower extends GameObject {

    constructor(game, x, y){
        super(game);
        
        this.bodyComponent = new BodyComponent(this, x, y, game.tileSize, game.tileSize);
        this.addChild(this.bodyComponent);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);
    }

}
export default Tower;