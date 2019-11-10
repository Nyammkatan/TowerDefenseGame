class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;

    }

    setState(state){
        this.state = state;

    }

    update(delta){
        this.state.update(delta);

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