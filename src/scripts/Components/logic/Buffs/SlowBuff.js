import BuffComponent from "./BuffComponent";

class SlowBuff extends BuffComponent{
    constructor(host){
        super(host, "slow");
        this.slowTimer = 0;
        this.slowTime = 4;
    }

    on(){
        this.host.turnTime += 0.1 * this.bufflvl;
    }

    update(delta){
        this.slowTimer += delta;
        if (this.slowTimer >= this.slowTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){
        this.host.turnTime -= 0.1 * this.bufflvl;
    }

}

export default SlowBuff;