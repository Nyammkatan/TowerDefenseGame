import BuffComponent from "./BuffComponent";

class BurningBuff extends BuffComponent {

    constructor(host){
        super(host, "burn");
        this.burnTimer = 0;
        this.burnTime = 4;

    }

    on(){
        this.host.damage += 10;

    }

    update(delta){
        this.burnTimer += delta;
        this.host.hp -= delta * 10;
        if (this.burnTimer >= this.burnTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){
        this.host.damage -= 10;

    }

}
export default BurningBuff;