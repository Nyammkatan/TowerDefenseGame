import MobResistComponent from "./MobResistComponent";

class FireResistComponent extends MobResistComponent {
    constructor(host){
        super(host, 0.5, 1.2, 0.7, 0.9, 1);
    }
}

export default FireResistComponent;