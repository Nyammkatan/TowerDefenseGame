import GameComponent from "../GameComponent";

class RenderComponent extends GameComponent {

    constructor(host, bodyComponent, image){
        super(host);
        this.bodyComponent = bodyComponent;
        this.image = image;
        if (this.image != null){
            this.width = image.width;
            this.height = image.height;

        }
    }

    setImage(image){
        if (this.image != null){
            this.width = image.width;
            this.height = image.height;

        }
        this.image = image;

    }

    draw(){
        if (this.image == null){
            this.host.game.p.fill(255, 0, 0);
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y, this.bodyComponent.w, this.bodyComponent.h);
        } else
        this.host.game.p.image(this.image, this.bodyComponent.x, this.bodyComponent.y, this.width, this.height);

    }

}
export default RenderComponent;