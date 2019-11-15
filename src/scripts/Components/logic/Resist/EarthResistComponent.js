import MobResistComponent from "./MobResistComponent";

class EarthResistComponent extends MobResistComponent {
    constructor(host){
        super(host, 0.9, 0.7, 1.2, 0.5, 1);
    }
}

export default EarthResistComponent;