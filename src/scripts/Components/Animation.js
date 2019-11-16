class Animation {

    constructor(frames, time, loop){
        this.loop = loop;
        this.timer = 0;
        this.time = time;
        this.currentFrame = 0;
        this.frames = frames;

    }

    nextFrame(){
        this.currentFrame++;
        if (this.currentFrame >= this.frames.length){
            if (this.loop)
                this.currentFrame = 0;
            else
                this.currentFrame = this.frames.length-1;
        }
    }

    update(delta) {
        this.timer += delta;
        if (this.timer >= this.time){
            this.nextFrame();
            this.timer -= this.time;
        }
    }

    getFrame(){
        return this.frames[this.currentFrame];

    }

}

export default Animation;