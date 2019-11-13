import GameComponent from "../GameComponent";

class MobMovingComponent extends GameComponent {

    constructor(host, bodyComponent, route, tileSize, movementSpeed){
        super(host);
        this.bodyComponent = bodyComponent;
        this.route = route;
        this.tileSize = tileSize;
        this.movementSpeed = movementSpeed;
        this.tileIndex = 0;

        this.startTime = 0;
        this.endTime = 0;
        this.startLocation = {i:0, j:0};
        this.endLocation = {i:-1, j:17};
        
        this.shift = (this.tileSize*2)-this.tileSize-this.bodyComponent.w*0.5;
        this.vx = 0;
        this.vy = 0;
        // this.bodyComponent.x = 100;
        // this.bodyComponent.y = 100;
        this.bodyComponent.x += this.shift;
        this.bodyComponent.y += this.shift;
        this.currentRouteIndex = 0;
        this.currentTile = undefined;
        this.angle = 0;
        this.nextTile();
        //this.nextDestination();

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

    nextDestination(){
        let tile = this.route[this.tileIndex++];
        if (tile == undefined) {
            this.host.removeFromParent();
            return;
        }
        let i = tile.i;
        let j = tile.j;
        this.startTime = this.host.game.gameTime;
        this.endTime = this.startTime + this.turnTime;
        this.startLocation.i = this.endLocation.i;
        this.startLocation.j = this.endLocation.j;
        this.endLocation.i = i;
        this.endLocation.j = j;

    }

    update(delta){
        this.vx = Math.cos(this.angle) * this.movementSpeed;
        this.vy = Math.sin(this.angle) * this.movementSpeed;

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
        }        

    }

}
export default MobMovingComponent;