import GameComponent from "../../GameComponent";

class MobResistComponent extends GameComponent{
    constructor(host, fireResist, waterResist, airResist, earthResist, shadowResist){
        super(host);
        this.resists = [];
        this.resists["fireResist"] = fireResist;
        this.resists["waterResist"] = waterResist;
        this.resists["airResist"] = airResist;
        this.resists["earthResist"] = earthResist;
        this.resists["shadowResist"] = shadowResist;
    }
}

export default MobResistComponent;