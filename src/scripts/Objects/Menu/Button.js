import GameObject from "../GameObject";
import BodyComponent from "../../Components/physics/BodyComponent";
import RenderComponent from "../../Components/render/RenderComponent";

class Button extends GameObject {

    constructor(game, x, y, onAction){
        super(game);
        x -= 167/2;
        y -= 73/2;
        this.onAction = onAction;
        this.bodyComponent = new BodyComponent(this, x, y, 167, 73);
        this.addComponent(this.bodyComponent);

        let buttonImage = game.p.gimages["assets/ui/buttons_menu.png"];
        this.buttonImage_idle = game.p.crop(buttonImage, 0, 73, 167, 73);
        this.buttonImage_hover = game.p.crop(buttonImage, 0, 0, 167, 73);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, this.buttonImage_idle);
        this.renderComponent.update = (delta)=> {
            if (this.bodyComponent.mouseHover()){
                this.renderComponent.image = this.buttonImage_hover;
            } else {
                this.renderComponent.image = this.buttonImage_idle;
            }
        }
        this.renderComponent.mousePressed = ()=>{
            if (this.bodyComponent.mouseHover())
                onAction();
        }
        this.addComponent(this.renderComponent);

    }
 
}
export default Button;