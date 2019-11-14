import GameComponent from "../../GameComponent";
import FireTower from "../../../Objects/Game/Towers/FireTower";

class TowerBuilderComponent extends GameComponent {

    constructor(host, tilemap){
        super(host)
        this.tilemap = tilemap;
        this.tileSize = this.tilemap.tilemapContainerComponent.tileSize;

    }

    mouseClicked(){
        let p = this.host.game.p;
        let i = Math.floor(p.mouseY/this.tileSize);
        let j = Math.floor(p.mouseX/this.tileSize);
        let tower = new FireTower(this.host.game, j*this.tileSize, i*this.tileSize);
        this.host.addChild(tower);

    }

}

export default TowerBuilderComponent;