import GameComponent from "../../GameComponent";
import Buffs from "./Buffs";

class BuffsComponent extends GameComponent {

    constructor(host){
        super(host);
        this.buffs = [];
        this.buffClasses = Buffs;

    }

    applyBuff(type){
        if (this.buffs[type] !== true){
            let buffComponentClass = this.buffClasses[type];
            let component = new buffComponentClass(this.host);
            this.host.attachments[type] = component;
            this.host.addComponent(component);
            component.on();
            this.buffs[type] = true;
        }
    }

    cancelBuff(type){
        let component = this.host.attachments[type];
        if (component != undefined){
            component.off();
            this.host.removeComponent(component);
        }
        this.buffs[type] = false;
    }

}
export default BuffsComponent;