import State from "./State";
import Button from "../Objects/Menu/Button";

class MenuState extends State {

    constructor(game){
        super(game);
        let button1 = new Button(game, game.p.gameWidth/2, game.p.gameHeight/2-100, ()=> {
            this.startGame();
        });
        this.addGameObject(button1);
        let button2 = new Button(game, game.p.gameWidth/2, game.p.gameHeight/2+100, ()=> {
            this.startOptions();
        });
        this.addGameObject(button2);

    }

    startGame(){
        console.log("Game started");

    }

    startOptions(){
        console.log("Options start");

    }

}
export default MenuState;