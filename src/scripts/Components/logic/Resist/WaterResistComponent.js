import MobResistComponent from "./MobResistComponent";

class WaterResistComponent extends MobResistComponent {
    constructor(host){
        super(host, 0.7, 0.5, 0.9, 1.2, 1);
    }
}

export default WaterResistComponent;