import TowerComponent from "./TowerComponent";

class WaterTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "water", 1.2, 90, 250);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.06;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default WaterTowerComponent;