import TowerComponent from "./TowerComponent";

class AirTowerComponent extends TowerComponent {

    constructor(host){
        super(host, "air", 0.5, 40, 270);
        this.timerAura = 0;
        this.auraTime = 0.2;
    }

    update(delta){
        super.update(delta);
        this.timerAura += delta;
        if (this.timerAura >= this.auraTime){
            this.timerAura -= this.auraTime;
            try {
                let allTowers = mainGame.state.gameMenuBottom.kids;
                for (let i = 0; i < allTowers.length; i++) {
                    if (allTowers[i].towerComponent.attackType != "air") {
                        if (allTowers[i].bodyComponent.distanceTo(this.host.bodyComponent) < 100)
                            allTowers[i].buffsComponent.tryBuff("speed", this.upgradeAbilityLevel);
                    }
                }
            } catch (e) {
                console.log("found and fixed error");
            }
        }

    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.02;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

export default AirTowerComponent;
