import GameComponent from "../GameComponent";

class BodyComponent extends GameComponent {

    constructor(host, x, y, w, h){
        super(host);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    mouseHover(){
        let mouseX = this.host.game.p.mouseX;
        let mouseY = this.host.game.p.mouseY;
        if (mouseX >= this.x && mouseX < this.x+this.w){
            if (mouseY >= this.y && mouseY < this.y+this.h){
                return true;
            }
        }
        return false;

    }

    setPosition(x, y){
        this.x = x;
        this.y = y;

    }

    overlaps(bodyComponent){
        if (this.x < bodyComponent.x + bodyComponent.w &&
            this.x + this.w > bodyComponent.x &&
            this.y < bodyComponent.y + bodyComponent.h &&
            this.y + this.h > bodyComponent.y) {
                return true;

        }
        return false;

    }

}
export default BodyComponent;