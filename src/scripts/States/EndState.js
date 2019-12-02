import State from "./State";
import MenuState from "./MenuState";

class EndState extends State {

    constructor(game, victory){
        super(game);
        this.victory = victory;
        this.timer = 0;

    }

    update(delta) {
        super.update(delta);
        this.timer += delta;
        if (this.timer >= 4){
            mainGame.setState(new MenuState(mainGame));

        }

    }

    draw() {
        super.draw();
        mainGame.p.fill(255, 255, 0);
        if (this.victory){
            mainGame.p.text("VICTORY", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);
        } else {
            mainGame.p.text("DEFEAT", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);
        }

    }

}
export default EndState;
