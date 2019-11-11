import GameComponent from "../../GameComponent";

class TilemapRenderComponent extends GameComponent {

    constructor(host, tilemapContainerComponent){
        super(host);
        this.map = tilemapContainerComponent.map;
        this.tileSize = tilemapContainerComponent.tileSize;

    }

    draw(){
        for (let i=0; i < this.map.length; i++){
            for (let j=0; j < this.map[i].length; j++){
                let p = this.host.game.p;
                switch(this.map[i][j]){
                    case 0:
                        p.fill(20, 172, 5);
                        break;
                    case 1:
                        p.fill(100, 50, 0);
                        break;
                    case 2:
                        p.fill(0);
                        break;
                }
                p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);    

            }

        }

    }

}
export default TilemapRenderComponent;