import GameComponent from "../../GameComponent";

class TilemapRenderComponent extends GameComponent {

    constructor(host, tilemapContainerComponent){
        super(host);
        this.map = tilemapContainerComponent.map;
        this.tileSize = tilemapContainerComponent.tileSize;
        this.texture = host.game.p.gimages["assets/map/Tileset.png"];
        this.grass = this.texture.get(0, 0, 40, 40);
        this.road = this.texture.get(40, 0, 40, 40);
        this.mapFullTexture = host.game.p.gimages["assets/map/MapFull2.png"];

    }

    draw(){
        // for (let i=0; i < this.map.length; i++){
        //     for (let j=0; j < this.map[i].length; j++){
        //         let p = this.host.game.p;
        //         p.stroke(0);
        //         switch(this.map[i][j]){
        //             case 0:
        //                 // p.fill(0, 100, 0);
        //                 // p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
        //                 p.image(this.grass, j*this.tileSize, i*this.tileSize);
        //                 break;
        //             case 1:
        //                 p.image(this.road, j*this.tileSize, i*this.tileSize);
        //                 break;
        //             case 2:
        //                 p.fill(0);
        //                 p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
        //                 break;
        //             case 3:
        //                 p.image(this.road, j*this.tileSize, i*this.tileSize);
        //                 break;
        //         }
        //     }
        // }
        mainGame.p.image(this.mapFullTexture, 0, 0);

    }

}
export default TilemapRenderComponent;
