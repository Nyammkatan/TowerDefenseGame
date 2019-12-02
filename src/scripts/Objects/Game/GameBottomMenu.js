import GameObject from "../GameObject";
import BodyComponent from "../../Components/logic/BodyComponent";
import AirTower from "./Towers/AirTower";
import EarthTower from "./Towers/EarthTower";
import FireTower from "./Towers/FireTower";
import WaterTower from "./Towers/WaterTower";
import ShadowTower from "./Towers/ShadowTower";

class GameBottomMenu extends GameObject {

    constructor(game, tilemap, mobs){
        super(game);
        this.mobs = mobs
        this.currentMob = undefined
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

        this.towerTextures = [
            mainGame.p.gimages["assets/towers/Towers.png"].get(0, 0, 40, 40),
            mainGame.p.gimages["assets/towers/Towers.png"].get(40, 0, 40, 40),
            mainGame.p.gimages["assets/towers/Towers.png"].get(40*2, 0, 40, 40),
            mainGame.p.gimages["assets/towers/Towers.png"].get(40*3, 0, 40, 40),
            mainGame.p.gimages["assets/towers/Towers.png"].get(40*4, 0, 40, 40)
        ];
        this.towerActionsTextures = [
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(0, 0, 40, 40),
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(40, 0, 40, 40),
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(80, 0, 40, 40),
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(0, 40, 40, 40),
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(40, 40, 40, 40),
            mainGame.p.gimages["assets/towers/TowerActions.png"].get(80, 40, 40, 40)
        ]

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
                            p.image(this.towerTextures[2], this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y)
                            break;
                        case 1:
                            p.image(this.towerTextures[3], this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y)
                            break;
                        case 2:
                            p.image(this.towerTextures[0], this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y)
                            break;
                        case 3:
                            p.image(this.towerTextures[1], this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y)
                            break;
                        case 4:
                            p.image(this.towerTextures[4], this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y)
                            break;
                    }
                    //p.rect(this.towerButtonsBodies[i].x, this.towerButtonsBodies[i].y, tileSize, tileSize);
                }
                p.fill(255, 255, 0);
                p.text("Tower cost: 50", 710, 700);
            } else
            if (this.currentBuildType == 2){
                for (let i=0; i < 3; i++){
                    //p.fill(255, 255, 255);
                    //p.rect(this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y, this.towerInsideButtonsBodies[i].w, this.towerInsideButtonsBodies[i].h);
                    if (i == 0 && this.currentObject.towerComponent.upgradeStatsLevel < 5)
                        if (this.currentObject.towerComponent.upgradeStatsCost <= mainGame.money)
                            p.image(this.towerActionsTextures[i], this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y)
                        else
                            p.image(this.towerActionsTextures[i+3], this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y);
                    if (i == 1 && this.currentObject.towerComponent.upgradeAbilityLevel < 5)
                        if (this.currentObject.towerComponent.upgradeAbilityCost <= mainGame.money)
                            p.image(this.towerActionsTextures[i], this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y)
                        else
                            p.image(this.towerActionsTextures[i+3], this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y);
                    if (i == 2)
                        p.image(this.towerActionsTextures[i], this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y)
                    p.stroke(0)
                    p.noFill()
                    if (i == 0 && this.currentObject.towerComponent.upgradeStatsLevel < 5)
                        p.rect(this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y, this.towerInsideButtonsBodies[i].w, this.towerInsideButtonsBodies[i].h);
                    if (i == 1 && this.currentObject.towerComponent.upgradeAbilityLevel < 5)
                        p.rect(this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y, this.towerInsideButtonsBodies[i].w, this.towerInsideButtonsBodies[i].h);
                    if (i == 2)
                        p.rect(this.towerInsideButtonsBodies[i].x, this.towerInsideButtonsBodies[i].y, this.towerInsideButtonsBodies[i].w, this.towerInsideButtonsBodies[i].h);
                    p.fill(255, 255, 0);
                    if (this.currentObject.towerComponent.upgradeStatsLevel < 5)
                    p.text(this.currentObject.towerComponent.upgradeStatsCost+"", 620, 700);
                    if (this.currentObject.towerComponent.upgradeAbilityLevel < 5)
                    p.text(this.currentObject.towerComponent.upgradeAbilityCost+"", 680, 700);
                    p.text(this.currentObject.towerComponent.towerCost/2+"", 740, 700);
                }
                p.fill(255, 255, 0);
                p.text("Type: "+this.currentObject.towerComponent.attackType, 20, 625);
                p.text("Stats Level: "+this.currentObject.towerComponent.upgradeStatsLevel, 20, 645);
                p.text("Ability Level: "+this.currentObject.towerComponent.upgradeAbilityLevel, 20, 665);
                p.text("Attack Damage: "+this.currentObject.towerComponent.attackDamage, 20, 685);
                p.text("Attack Speed: "+(this.currentObject.towerComponent.attackSpeed.toFixed(2)), 20, 705);

            }else
            if (this.currentBuildType == 3){
                if (this.currentMob != undefined){
                    p.fill(255, 255, 0);
                    p.text("Max HP: "+this.currentMob.maxHp, 20, 625);
                    p.text("Fire Resist: "+this.currentMob.resist.resists["fire"].toFixed(2), 20, 640);
                    p.text("Water Resist: "+this.currentMob.resist.resists["water"].toFixed(2), 20, 655);
                    p.text("Earth Resist: "+this.currentMob.resist.resists["earth"].toFixed(2), 20, 670);
                    p.text("Air Resist: "+this.currentMob.resist.resists["air"].toFixed(2), 20, 685);
                    p.text("Shadow Resist: "+this.currentMob.resist.resists["shadow"].toFixed(2), 20, 700);
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
            let map = this.tilemap.tilemapContainerComponent.map;
            this.currJ = Math.floor(x / tileSize);
            this.currI = Math.floor(y / tileSize);
            if (map[this.currI][this.currJ] == 0) {
                let found = false;
                for (let i = 0; i < this.kids.length; i++) {
                    if (this.kids[i].bodyComponent.x == this.currJ * tileSize &&
                        this.kids[i].bodyComponent.y == this.currI * tileSize) {
                        this.currentObject = this.kids[i];
                        found = true;
                    }
                }
                if (!found)
                    this.currentBuildType = 1;
                else
                    this.currentBuildType = 2;
            } else {
                for (let mob of this.mobs){
                    if (mob.bodyComponent.mouseHover(x, y)){
                        this.currentMob = mob;
                        this.currentBuildType = 3;
                    }
                }
            }
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
