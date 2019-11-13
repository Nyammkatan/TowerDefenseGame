import Constants from "./Constants";

class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;
        this.gameTime = 0;
        this.constants = Constants;

    }

    linearInterpolation(fx1, fx2, x1, x, x2){
        if (x2 < x1) return fx2;
        if (x >= x2) return fx2;
        if (x <= x1) return fx1;
        return fx1+( fx2 - fx1 )*(x - x1)/(x2 - x1);

    }

    setState(state){
        this.state = state;

    }

    update(delta){
        this.state.update(delta);
        this.gameTime += delta;

    }

    draw(){
        this.state.draw();

    }

    mousePressed(){
        this.mouseDown = true;
        this.state.mousePressed();

    }

    mouseClicked(){
        this.mouseDown = false;
        this.state.mouseClicked();

    }

    mouseDragged(){
        this.state.mouseDragged();

    }

}
export default Game;