import AnimationUtils from "../../AnimationUtils";
import Animation from "../../../Animation";

class MobFire0MoveDown extends Animation {

    constructor(){
        super(AnimationUtils.getFrames("assets/mobs/MobFire0.png", 4, 0, 80, 3),
            0.1, true);

    }

}

export default MobFire0MoveDown;