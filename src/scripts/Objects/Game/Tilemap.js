import GameObject from "../GameObject";
import TilemapRenderComponent from "../../Components/render/Tilemap/TilemapRenderComponent";
import TilemapContainerComponent from "../../Components/logic/TilemapContainerComponent";

class Tilemap extends GameObject {

    constructor(game){
        super(game);
        this.tilemapContainerComponent = new TilemapContainerComponent(this);
        this.renderComponent = new TilemapRenderComponent(this, this.tilemapContainerComponent);
        this.addComponent(this.renderComponent);

    }

}
export default Tilemap;