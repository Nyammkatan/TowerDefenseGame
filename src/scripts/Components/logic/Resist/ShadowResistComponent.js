import MobResistComponent from "./MobResistComponent";

class ShadowResistComponent extends MobResistComponent {
    constructor(host){
        super(host, 1, 1, 1, 1, 0.5);
    }
}

export default ShadowResistComponent;