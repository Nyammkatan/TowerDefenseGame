import BuffsComponent from "../Components/logic/Buffs/BuffsComponent";

class GameObject {

    constructor(game){
        this.game = game;
        this.components = [];
        this.kids = [];
        this.parent = undefined;

        //buffs
        this.buffsComponent = new BuffsComponent(this);
        this.attachments = {};

    }

    update(delta){
        for (let i=0; i < this.components.length; i++){
            this.components[i].update(delta);
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].update(delta);
        }

    }

    drawRect(x, y, w, h, color){
        let p = mainGame.p;
        p.push();
        let halfWidth = w*0.5;
        let halfHeight = h*0.5;
        p.translate(x+halfWidth, y+halfHeight);
        p.stroke(0);
        p.fill(color);
        p.rect(-halfWidth, -halfHeight, w, h);
        p.pop();
    }

    drawSprite(image, x, y, angle, scale=1){
        let p = mainGame.p;
        p.push();
        let halfWidth = image.width*0.5;
        let halfHeight = image.height*0.5;
        p.translate(x+halfWidth, y+halfHeight);
        p.scale(scale);
        p.rotate((-90 * p.PI / 180)+angle);
        p.image(image, -image.width*0.5, -image.height*0.5);
        p.pop();
    }

    draw(){
        for (let i=0; i < this.components.length; i++){
            this.components[i].draw();
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].draw();
        }

    }

    drawUpper(index){
        for (let i=0; i < this.components.length; i++){
            this.components[i].drawUpper(index);
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].drawUpper(index);
        }

    }


    addComponent(c){
        this.components.push(c);

    }

    addChild(c){
        this.kids.push(c);
        c.parent = this;

    }

    removeFromParent(){
        if (this.parent == undefined){
            mainGame.state.removeGameObject(this);
        } else
        this.parent.removeChild(this);

    }

    removeComponent(c){
        let index = this.components.indexOf(c);
        if (index !== -1){
            this.components.splice(index, 1);

        }

    }

    removeChild(c){
        let index = this.kids.indexOf(c);
        if (index !== -1){
            this.kids.splice(index, 1);

        }

    }

    mouseClicked(){
        for (let i=0; i < this.components.length; i++){
            this.components[i].mouseClicked();
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].mouseClicked();
        }

    }

    mousePressed(){
        for (let i=0; i < this.components.length; i++){
            this.components[i].mousePressed();
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].mousePressed();
        }

    }

    mouseDragged(){
        for (let i=0; i < this.components.length; i++){
            this.components[i].mouseDragged();
        }
        for (let i=0; i < this.kids.length; i++){
            this.kids[i].mouseDragged();
        }

    }

}
export default GameObject;