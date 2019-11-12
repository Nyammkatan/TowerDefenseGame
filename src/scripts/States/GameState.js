import State from "./State";
import Tilemap from "../Objects/Game/Tilemap";
import WaveMaster from "../Objects/Game/WaveMaster";
import Mob from "../Objects/Game/Mobs/Mob";
import GameObject from "../Objects/GameObject";

class GameState extends State {

    constructor(game){
        super(game);
        this.tilemap = new Tilemap(game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new WaveMaster(game, this.tilemap);
        this.addGameObject(this.waveMaster);
        
    }

}
export default GameState;