import TowerComponent from "./TowerComponent";

class FireTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "fire", 0.9, 120, 150);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0,03;
        this.attackDamage += 60; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default FireTowerComponent;