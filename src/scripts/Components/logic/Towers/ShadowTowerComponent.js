import TowerComponent from "./TowerComponent";

class ShadowTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "shadow", 1, 120, 250);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0,5;
        this.attackDamage += 50; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default ShadowTowerComponent;