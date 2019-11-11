import GameObject from "../GameObject";
import WaveMasterLogicComponent from "../../Components/logic/WaveMasterLogicComponent";

class WaveMaster extends GameObject {

    constructor(game, tilemap){
        super(game);
        this.waveMasterLogicComponent = new WaveMasterLogicComponent(this, tilemap);
        this.addComponent(this.waveMasterLogicComponent);

    }

}
export default WaveMaster;