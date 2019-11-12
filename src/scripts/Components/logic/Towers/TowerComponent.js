import GameComponent from "../../GameComponent";

class TowerComponent extends GameComponent {

    constructor(host, attackType, attackSpeed, damage){
        super(host);
        this.attackType = attackType;
        this.attackSpeed = attackSpeed;
        this.damage = damage;
    }

}
export default TowerComponent;