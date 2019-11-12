import GameComponent from "../../GameComponent";

class TowerComponent extends GameComponent {

    constructor(host, attackType, attackSpeed, attackDamage, attackRange){
        super(host);

        this.attackType = attackType;

        this.attackSpeed = attackSpeed;
        this.attackDamage = attackDamage;
        this.attackRange = attackRange;

        this.upgradeStatsLevel = 1;
        this.upgradeAbilityLevel = 1;

        this.mobs = host.game.state.waveMaster.kids;

        this.attackTimer = 0;
    }

    upgradeStats(){
        this.upgradeStatsLevel += 1;
    }

    upgradeAbility(){
        this.upgradeAbilityLevel += 1;
    }

    update(delta){
        this.attackTimer += delta;
        if(this.attackTimer >= this.attackSpeed) {
            this.attackTimer -= this.attackSpeed;
            for(let i = 0; i < this.mobs.length; i++){
                if(this.host.bodyComponent.distanceTo(this.mobs[i].bodyComponent)<this.attackRange){
                    this.bulletSpawn();
                    break;
                }
            }
        }
    }

    bulletSpawn(){
        
    }

}
export default TowerComponent;