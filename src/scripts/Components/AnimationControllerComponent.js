import GameComponent from "./GameComponent";

class AnimationControllerComponent extends GameComponent {

    constructor(host){
        super(host);
        this.anims = [];
        this.currentAnim = undefined;
        this.scale = 1;

    }

    addAnimation(name, anim){
        this.anims[name] = anim;

    }

    setCurrentAnimation(name){
        if (this.currentAnim == this.anims[name]) return;
        this.currentAnim = this.anims[name];
        this.currentAnim.currentFrame = 0;

    }

    update(delta) {
        super.update(delta);
        this.currentAnim.update(delta);

    }

}

export default AnimationControllerComponent;