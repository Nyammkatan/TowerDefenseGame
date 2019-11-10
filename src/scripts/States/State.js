class State {

    constructor(game){
        this.game = game;
        this.gameObjects = [];

    }

    addGameObject(o){
        this.gameObjects.push(o);

    }

    removeGameObject(o){
        let index = this.gameObjects.indexOf(o);
        if (index !== -1){
            this.gameObjects.splice(index, 1);

        }

    }

    mouseClicked(){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mouseClicked();

        }

    }

    mousePressed(){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mousePressed();

        }

    }

    mouseDragged(){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mouseDragged();

        }

    }

    update(delta){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].update(delta);

        }

    }

    draw(){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].draw();

        }

    }

}
export default State;