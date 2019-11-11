import MobResistComponent from "./MobResistComponent";

class AirResistComponent extends MobResistComponent {
    constructor(host){
        super(host, 1.2, 0.9, 0.5, 0.7, 1);
    }
}

export default AirResistComponent;