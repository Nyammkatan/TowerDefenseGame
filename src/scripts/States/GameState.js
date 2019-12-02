import State from "./State";
import Tilemap from "../Objects/Game/Tilemap";
import WaveMaster from "../Objects/Game/WaveMaster";
import Mob from "../Objects/Game/Mobs/Mob";
import GameObject from "../Objects/GameObject";
import TowerBuilder from "../Objects/Game/Towers/TowerBuilder";
import GameBottomMenu from "../Objects/Game/GameBottomMenu";
import MenuState from "./MenuState";

class GameState extends State {

    constructor(game){
        super(game);
        game.money = 100;
        game.lifes = 10;
        this.tilemap = new Tilemap(game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new WaveMaster(game, this.tilemap);
        this.addGameObject(this.waveMaster);
        // this.towerBuilder = new TowerBuilder(game, this.tilemap);
        // this.addGameObject(this.towerBuilder);
        this.gameMenuBottom = new GameBottomMenu(game, this.tilemap, this.waveMaster.kids);
        this.addGameObject(this.gameMenuBottom);
        
    }

    keyPressed() {
        super.keyPressed();
        if (mainGame.p.keyCode == mainGame.p.ESCAPE){
            mainGame.setState(new MenuState(mainGame));

        }
        if (mainGame.p.keyCode == 80){
            this.running = !this.running;
        }

    }

    draw() {
        super.draw();
        mainGame.p.fill(255, 255, 0);
        mainGame.p.text("Lives: "+mainGame.lifes, 15, 25);

    }

}
export default GameState;
