import State from "./State";
import Tilemap from "../Objects/Game/Tilemap";
import WaveMaster from "../Objects/Game/WaveMaster";
import Mob from "../Objects/Game/Mobs/Mob";
import GameObject from "../Objects/GameObject";
import TowerBuilder from "../Objects/Game/Towers/TowerBuilder";
import GameBottomMenu from "../Objects/Game/GameBottomMenu";

class GameState extends State {

    constructor(game){
        super(game);
        game.money = 1000;
        this.tilemap = new Tilemap(game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new WaveMaster(game, this.tilemap);
        this.addGameObject(this.waveMaster);
        // this.towerBuilder = new TowerBuilder(game, this.tilemap);
        // this.addGameObject(this.towerBuilder);
        this.gameMenuBottom = new GameBottomMenu(game, this.tilemap);
        this.addGameObject(this.gameMenuBottom);
        
    }

}
export default GameState;