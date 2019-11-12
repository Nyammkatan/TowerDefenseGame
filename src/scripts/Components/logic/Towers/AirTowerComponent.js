import TowerComponent from "./TowerComponent";

class AirTowerComponent extends TowerComponent {
    constructor(host){
        super(host, "air", 0.5, 70, 150);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0,02;
        this.attackDamage += 40; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default AirTowerComponent;