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
        this.endLocation = {i:-1, j:17};

        //this.nextDestination();

        this.shift = (this.tileSize*2-this.bodyComponent.w)/2;
        this.mx = 0;
        this.my = 0;
        this.timerSpeed = 0;
        console.log(this.bodyComponent.x+this.shift);
        this.moveToNext();

    }

    moveToNext(){
        this.mx = 0;
        this.my = 0;
        let tile = this.route[this.tileIndex++];
        if (tile == undefined) {
            this.host.removeFromParent();
            return;
        }
        let yto = tile.i*this.tileSize;
        let xto = tile.j*this.tileSize;
        console.log(xto);

        if (yto > this.bodyComponent.y+this.shift){
            this.my = this.tileSize;
        } else 
        if (yto < this.bodyComponent.y+this.shift){
            this.my = -this.tileSize;
        } else {
            this.my = 0;
        }

        if (xto > this.bodyComponent.x+this.shift){
            this.mx = this.tileSize;
        } else 
        if (xto < this.bodyComponent.x+this.shift){
            this.mx = -this.tileSize;
        } else {
            this.mx = 0;
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
        let time = this.host.game.gameTime;
        // this.bodyComponent.x = this.host.game.linearInterpolation(this.startLocation.j*this.tileSize, this.endLocation.j*this.tileSize,
        //                                                             this.startTime, time, this.endTime)+shift;
        // this.bodyComponent.y = this.host.game.linearInterpolation(this.startLocation.i*this.tileSize, this.endLocation.i*this.tileSize,
        //                                                             this.startTime, time, this.endTime)+shift;
        // if (this.bodyComponent.x-shift == this.endLocation.j*this.tileSize){
        //     if (this.bodyComponent.y-shift == this.endLocation.i*this.tileSize){
        //         this.nextDestination();
        //     }
        // }
        this.bodyComponent.x += this.mx * delta;
        this.bodyComponent.y += this.my * delta;
        this.timerSpeed += delta;
        if (this.timerSpeed >= this.turnTime){
            //this.moveToNext();
            this.timerSpeed -= this.turnTime;
        }

    }

}
export default MobMovingComponent;