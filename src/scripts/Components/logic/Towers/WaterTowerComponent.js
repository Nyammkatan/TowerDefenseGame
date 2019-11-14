import TowerComponent from "./TowerComponent";

class WaterTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "water", 1.2, 20, 200);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.06;
        this.attackDamage += 60; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default WaterTowerComponent;