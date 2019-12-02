import GameComponent from "../GameComponent";
import EndState from "../../States/EndState";

class MobMovingComponent extends GameComponent {

    constructor(host, bodyComponent, route, tileSize, movementSpeed){
        super(host);
        this.bodyComponent = bodyComponent;
        this.route = route;
        this.tileSize = tileSize;
        this.movementSpeed = movementSpeed;
        
        this.shift = (this.tileSize*2)-this.tileSize-this.bodyComponent.w*0.5;
        this.vx = 0;
        this.vy = 0;
        this.bodyComponent.x += this.shift;
        this.bodyComponent.y += this.shift;
        this.currentRouteIndex = 0;
        this.currentTile = undefined;
        this.angle = 0;
        this.nextTile();

    }

    nextTile(){
        let tile = this.route[this.currentRouteIndex++];
        this.currentTile = tile;
        if (tile != undefined){
            let xDist = (tile.j*this.tileSize) - (this.bodyComponent.x - this.shift);
            let yDist = (tile.i*this.tileSize) - (this.bodyComponent.y - this.shift);
            this.angle = Math.atan2(yDist, xDist);// * 180 / Math.PI;
        }
    }

    update(delta){
        this.vx = Math.cos(this.angle) * this.movementSpeed;
        this.vy = Math.sin(this.angle) * this.movementSpeed;

        // if (this.vx >= -10 && this.vx <= 10){
        //     this.host.animationController.setCurrentAnimation("down");
        // } else {
        //     if (this.vx < 0){
        //         this.host.animationController.setCurrentAnimation("left");
        //     } else {
        //         this.host.animationController.setCurrentAnimation("right");
        //     }
        // }

        this.host.bodyComponent.angle = this.angle;

        this.bodyComponent.x += this.vx * delta;
        this.bodyComponent.y += this.vy * delta;

        if (this.currentTile != undefined){
            let pointx = this.currentTile.j*this.tileSize;
            let pointy = this.currentTile.i*this.tileSize;
            let dist = this.bodyComponent.distanceToPoint(pointx+this.shift, pointy+this.shift);
            if (dist < 10){
                this.nextTile();
            }
        } else {
            this.host.removeFromParent();
            mainGame.lifes--;
            if (mainGame.lifes == 0){
                mainGame.setState(new EndState(mainGame, false));
            }
        }        

    }

}
export default MobMovingComponent;
