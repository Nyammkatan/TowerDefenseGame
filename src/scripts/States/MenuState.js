import State from "./State";
import Button from "../Objects/Menu/Button";
import GameState from "./GameState";

class MenuState extends State {

    constructor(game){
        super(game);
        this.button1 = new Button(game, game.p.gameWidth/2, game.p.gameHeight/2-30, ()=> {
            this.startGame();
        });
        this.addGameObject(this.button1);

    }

    startGame(){
        mainGame.setState(new GameState(mainGame));

    }

    draw() {
        super.draw();
        mainGame.p.image(mainGame.p.gimages["assets/MenuPoster.jpg"], 0, 0);
        this.button1.renderComponent.draw();
        mainGame.p.fill(255, 255, 0)
        mainGame.p.text("Start", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-28);

    }

}
export default MenuState;
