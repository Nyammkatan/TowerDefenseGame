import GameObject from "../../GameObject";
import BodyComponent from "../../../Components/logic/BodyComponent";
import GameComponent from "../../../Components/GameComponent";
import MobMovingComponent from "../../../Components/logic/MobMovingComponent";
import RenderComponent from "../../../Components/render/RenderComponent";

class Mob extends GameObject {

    constructor(game, x, y, size, tileSize, route, turnTime, resist, hp){
        super(game);
        this.route = route;
        this.hp = hp; //NASHE ISKLUCHENIE TOLKO NA ETOT RAZ. tak chto raduysya Radomyr.
        this.resist = resist;

        this.bodyComponent = new BodyComponent(this, x, y, size, size);
        this.addChild(this.bodyComponent);

        this.renderComponent = new RenderComponent(this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);

        let mobMovingComponent = new MobMovingComponent(this, this.bodyComponent, route, tileSize, turnTime);
        this.addComponent(mobMovingComponent);

    }

}
export default Mob;