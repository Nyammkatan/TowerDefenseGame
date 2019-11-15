import GameComponent from "../GameComponent";

class MobMovingComponent extends GameComponent {

    constructor(host, bodyComponent, route, tileSize, turnTime){
        super(host);
        this.bodyComponent = bodyComponent;
        this.route = route;
        this.tileSize = tileSize;
        this.turnTime = turnTime;
        this.tileIndex = 0;

        this.startTime = 0;
        this.endTime = 0;
        this.startLocation = {i:0, j:0};
        this.endLocation = {i:-1, j:18};

        this.nextDestination();

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
        let time = this.host.game.gameTime;
        let shift = (this.tileSize-this.bodyComponent.w)/2;
        this.bodyComponent.x = this.host.game.linearInterpolation(this.startLocation.j*this.tileSize, this.endLocation.j*this.tileSize,
                                                                    this.startTime, time, this.endTime)+shift;
        this.bodyComponent.y = this.host.game.linearInterpolation(this.startLocation.i*this.tileSize, this.endLocation.i*this.tileSize,
                                                                    this.startTime, time, this.endTime)+shift;
        if (this.bodyComponent.x-shift == this.endLocation.j*this.tileSize){
            if (this.bodyComponent.y-shift == this.endLocation.i*this.tileSize){
                this.nextDestination();
            }
        }

    }

}
export default MobMovingComponent;