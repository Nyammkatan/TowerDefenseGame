import State from "./State";
import Tilemap from "../Objects/Game/Tilemap";
import WaveMaster from "../Objects/Game/WaveMaster";
import Mob from "../Objects/Game/Mobs/Mob";
import GameObject from "../Objects/GameObject";
import TowerBuilder from "../Objects/Game/Towers/TowerBuilder";

class GameState extends State {

    constructor(game){
        super(game);
        this.tilemap = new Tilemap(game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new WaveMaster(game, this.tilemap);
        this.addGameObject(this.waveMaster);
        this.towerBuilder = new TowerBuilder(game, this.tilemap);
        this.addGameObject(this.towerBuilder);
        
    }

}
export default GameState;