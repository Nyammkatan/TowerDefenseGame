import GameComponent from "../GameComponent";

class RenderComponent extends GameComponent {

    constructor(host, bodyComponent, image){
        super(host);
        this.bodyComponent = bodyComponent;
        this.image = image;
        this.width = image.width;
        this.height = image.height;

    }

    draw(){
        this.host.game.p.image(this.image, this.bodyComponent.x, this.bodyComponent.y, this.width, this.height);

    }

}
export default RenderComponent;