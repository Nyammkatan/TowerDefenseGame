import GameComponent from "../../GameComponent";

class MobResistComponent extends GameComponent{
    constructor(host, fireResist, waterResist, airResist, earthResist, shadowResist){
        super(host);
        this.fireResist = fireResist;
        this.waterResist = waterResist;
        this.airResist = airResist;
        this.earthResist = earthResist;
        this.shadowResist = shadowResist;
    }
}

export default MobResistComponent;