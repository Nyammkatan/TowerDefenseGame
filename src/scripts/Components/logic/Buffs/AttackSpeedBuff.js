import BuffComponent from "./BuffComponent"

class AttackSpeedBuff extends BuffComponent{
    constructor(host){
        super(host, "attackSpeedAura")
    }

    on(){
        this.host.towerComponent.attackSpeed -= this.host.towerComponent.attackSpeed * 0.15*this.bufflvl;
    }

    off(){
        this.host.towerComponent.attackSpeed += this.host.towerComponent.attackSpeed * 0.15*this.bufflvl;
    }


}

export default AttackSpeedBuff;