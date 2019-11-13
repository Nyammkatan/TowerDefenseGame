import BuffComponent from "./BuffComponent";

class CurseBuff extends BuffComponent {

    constructor(host){
        super(host, "curse");
        this.curseTimer = 0;
        this.curseTime = 4;

    }

    on(){
        let resists = this.host.resist.resists;
        for(let k in resists){
            resists[k] += 0.1 * this.bufflvl;
        }
    }

    update(delta){
        this.burnTimer += delta;
        if (this.curseTimer >= this.curseTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){
        let resists = this.host.resist.resists;
        for(let k in resists){
            resists[k] -= 0.1 * this.bufflvl;
        }
    }

}
export default CurseBuff;