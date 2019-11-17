import TowerComponent from "./TowerComponent";

class FireTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "fire", 0.4, 30, 200);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.01;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default FireTowerComponent;