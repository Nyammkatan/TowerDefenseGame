import TowerComponent from "./TowerComponent";

class EarthTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "earth", 1.5, 200, 120);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0,07;
        this.attackDamage += 80; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default EarthTowerComponent;