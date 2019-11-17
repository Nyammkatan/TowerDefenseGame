import GameObject from "../GameObject";
import BodyComponent from "../../Components/logic/BodyComponent";
import AirTower from "./Towers/AirTower";
import EarthTower from "./Towers/EarthTower";
import FireTower from "./Towers/FireTower";
import WaterTower from "./Towers/WaterTower";
import ShadowTower from "./Towers/ShadowTower";

class GameBottomMenu extends GameObject {

    constructor(game, tilemap){
        super(game);
        this.tilemap = tilemap;
        let tileSize = this.tilemap.tilemapContainerComponent.tileSize;
        this.towerButtonsBodies = [];
        for (let i=0; i < 5; i++){
            let body = new BodyComponent(null, 55 + i*tileSize + 20*i + 14*tileSize, 16*tileSize, tileSize, tileSize);
            this.towerButtonsBodies.push(body);
        }
        this.towerInsideButtonsBodies = [];
        for (let i=0; i < 3; i++){
            let body = new BodyComponent(null, 55 + i*tileSize + 20*i + 14*tileSize, 16*tileSize, tileSize, tileSize);
            this.towerInsideButtonsBodies.push(body);
        }
        this.towerIndexes = {
            0: AirTower,
            1: EarthTower,
            2: FireTower,
            3: WaterTower,
            4: ShadowTower
        }
        this.currI = 0;
        this.currJ = 0;
        this.currentBuildType = 0;
        this.texture = this.game.p.gimages["assets/ui/BottomMenu.png"];
        this.currentObject = undefined;

    }

    update(delta) {
        super.update(delta);

    }

    drawUpper(index) {
        super.drawUpper(index);
        let tileSize = this.tilemap.tilemapContainerComponent.tileSize;
        if (index == 1){
            let p = this.game.p;
            p.image(this.texture, 0, 15*40);
            if (this.currentBuildType == 1) {
                for (let i = 0; i < 5; i++){
                    p.stroke(0);
                    switch (i){
                        case 0:
                            p.fill(0, 100, 100);
                            break;
                        case 1:
                            p.fill(100, 100, 0);
                            break;
                        case 2:
                            p.fill(255, 0, 0);
                            break;
                        case 3:
                            p.fill(0, 0, 255);
                            break;
                        case 4:
                            p.fill(100);
                            break;
                    }
                    p.rect(this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y, tileSize, tileSize);
                }
            } else
            if (this.currentBuildType == 2){
                for (let i=0; i < 3; i++){
                    p.fill(255, 255, 255);
                    p.rect(this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y, this.towerInsideButtonsBodies[i].w, this.towerInsideButtonsBodies[i].h);

                }
            }
            p.fill(255, 255, 0);
            p.text(mainGame.money.toString(), p.gameWidth/2-14, p.gameHeight-100, 100, 25);
        }


    }

    mouseClicked() {
        super.mouseClicked();
        let x = this.game.p.mouseX;
        let y = this.game.p.mouseY;
        let tileSize = this.tilemap.tilemapContainerComponent.tileSize;
        if (y < 15*tileSize){
            this.currJ = Math.floor(x/tileSize);
            this.currI = Math.floor(y/tileSize);
            let found = false;
            for (let i=0; i < this.kids.length; i++){
                if (this.kids[i].bodyComponent.x == this.currJ*tileSize &&
                this.kids[i].bodyComponent.y == this.currI*tileSize){
                    this.currentObject = this.kids[i];
                    found = true;
                }
            }
            if (!found)
                this.currentBuildType = 1;
            else
                this.currentBuildType = 2;
        } else {
            if (this.currentBuildType == 0) { //nothing

            } else
            if (this.currentBuildType == 1){ //towers
                for (let i = 0; i < 5; i++){
                    if (this.towerButtonsBodies[i].mouseHover(x, y) && this.tryBuy(50)){
                        let tower = new this.towerIndexes[i](this, this.currJ*tileSize, this.currI*tileSize);
                        this.currentObject = tower;
                        this.addChild(tower);
                        this.currentBuildType = 2;
                    }
                }
            } else
            if (this.currentBuildType == 2){ //upgrades, destroy
                if (this.currentObject != undefined){
                    if (this.towerInsideButtonsBodies[0].mouseHover(x, y)){
                        if(this.currentObject.towerComponent.upgradeStatsLevel !== 5){
                            if (this.tryBuy(this.currentObject.towerComponent.upgradeStatsCost)){
                                this.currentObject.towerComponent.upgradeStats();
                                this.currentObject.towerComponent.towerCost += this.currentObject.towerComponent.upgradeStatsCost;
                                this.currentObject.towerComponent.upgradeStatsCost += this.currentObject.towerComponent.upgradeStatsCost;
                            }
                        }
                    } else
                    if (this.towerInsideButtonsBodies[1].mouseHover(x, y)){
                        if(this.currentObject.towerComponent.upgradeAbilityLevel !== 5){
                            if (this.tryBuy(this.currentObject.towerComponent.upgradeAbilityCost)){
                                this.currentObject.towerComponent.upgradeAbility();
                                this.currentObject.towerComponent.towerCost += this.currentObject.towerComponent.upgradeAbilityCost;
                                this.currentObject.towerComponent.upgradeAbilityCost += 200 * Math.floor(Math.pow(1.5, this.currentObject.towerComponent.upgradeAbilityLevel));
                            }  
                        }
                    } else
                    if (this.towerInsideButtonsBodies[2].mouseHover(x, y)){
                        this.currentBuildType = 0;
                        this.currentObject.onDestroy();
                        this.currentObject.removeFromParent();
                        mainGame.money +=  this.currentObject.towerComponent.towerCost / 2;
                        this.currentObject = undefined;
                    }
                }
            }
        }

    }

    tryBuy(price){
        if (mainGame.money >= price){
            mainGame.money -= price;
            return true;
        } else
            return false;
    }

}

export default GameBottomMenu;