import GameObject from "../../GameObject";
import TowerBuilderComponent from "../../../Components/logic/Towers/TowerBuilderComponent";

class TowerBuilder extends GameObject {

    constructor(game, tilemap){
        super(game);
        this.towerBuilderComponent = new TowerBuilderComponent(this, tilemap);
        this.addComponent(this.towerBuilderComponent);

    }

}

export default TowerBuilder;