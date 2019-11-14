import GameComponent from "../../GameComponent";
import FireTower from "../../../Objects/Game/Towers/FireTower";
import ShadowTower from "../../../Objects/Game/Towers/ShadowTower";
import WaterTower from "../../../Objects/Game/Towers/WaterTower";
import EarthTower from "../../../Objects/Game/Towers/EarthTower";

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
        let tower = new EarthTower(this.host.game, j*this.tileSize, i*this.tileSize);
        this.host.addChild(tower);

    }

}

export default TowerBuilderComponent;