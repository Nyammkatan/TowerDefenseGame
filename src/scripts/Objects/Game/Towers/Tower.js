import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class Tower extends GameObject {

    constructor(game, x, y){
        super(game);
        
        this.bodyComponent = new BodyComponent(this, x, y, mainGame.tileSize, mainGame.tileSize);
        this.addComponent(this.bodyComponent);

    }

    onDestroy(){

        
    }

}
export default Tower;
