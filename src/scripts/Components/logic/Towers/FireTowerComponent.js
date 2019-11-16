import TowerComponent from "./TowerComponent";

class FireTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "fire", 0.8, 120, 200);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.03;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default FireTowerComponent;