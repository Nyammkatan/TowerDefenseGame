class State {

    constructor(game){
        this.game = game;
        this.gameObjects = [];
        this.running = true;

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
        if  (this.running)
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mouseClicked();

        }

    }

    mousePressed(){
        if  (this.running)
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mousePressed();

        }

    }

    mouseDragged(){
        if  (this.running)
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].mouseDragged();

        }

    }

    update(delta){
        if  (this.running)
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].update(delta);

        }

    }

    draw(){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].draw();

        }
        if (!this.running){
            mainGame.p.fill(255, 255, 0);
            mainGame.p.text("PAUSE", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);

        }

    }

    drawUpper(index){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].drawUpper(index);

        }

    }

    keyPressed(){


    }

}
export default State;
