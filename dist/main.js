/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Game */ "./src/scripts/Game.js");
/* harmony import */ var _scripts_States_MenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/States/MenuState */ "./src/scripts/States/MenuState.js");
/* harmony import */ var _scripts_States_GameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/States/GameState */ "./src/scripts/States/GameState.js");




let game;

const s = (p) => {

    let lastTime;
    let currTime;

    p.crop = function(image, x, y, w, h){
        var cropped = p.createImage(w, h);
        cropped.copy(image, x, y, x + w, y + h, 0, 0, x + w, y + h)
        return cropped;

    }

    p.imagesArray = ["assets/ui/buttons_menu.png",
        "assets/map/Tileset.png",
        "assets/ui/BottomMenu.png"
    ];
    p.soundsArray = ["assets/Jump3.wav"];

    p.gimages = {};
    p.gsounds = {};

    p.gameWidth = 960;
    p.gameHeight = 720;

    p.loadGameImage = function(str){
        p.gimages[str] = p.loadImage(str);

    }

    p.loadGameSound = function(str){
        p.gsounds[str] = p.loadSound(str);

    }

    p.preload = function() {
        for (let i=0; i < p.imagesArray.length; i++){
            p.loadGameImage(p.imagesArray[i]);
        }
        for (let i=0; i < p.soundsArray.length; i++){
            p.loadGameSound(p.soundsArray[i]);
        }

    };

    p.setup = function() {
        let canvas = p.createCanvas(p.gameWidth, p.gameHeight);

        lastTime = (new Date()).getTime();
        currTime = 0;

        game = new _scripts_Game__WEBPACK_IMPORTED_MODULE_0__["default"](p);
        window.mainGame = game;
        game.setState(new _scripts_States_GameState__WEBPACK_IMPORTED_MODULE_2__["default"](game));
    
    };
    
    p.draw = function() {
        currTime = (new Date()).getTime();
        let delta = (currTime - lastTime)/1000;

        p.background(0);

        if (delta < 0.2)
        game.update(delta);
        game.draw(p);
        
        lastTime = currTime;
    
    };

    p.mouseClicked = function(){
        game.mouseClicked();

    }

    p.mousePressed = function(){
        game.mousePressed();

    }

    p.mouseDragged = function(){
        game.mouseDragged();

    }

}

let gamep5 = new p5(s, "main");




/***/ }),

/***/ "./src/scripts/Components/GameComponent.js":
/*!*************************************************!*\
  !*** ./src/scripts/Components/GameComponent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameComponent {

    constructor(host){
        this.host = host;

    }

    update(delta){

    }

    draw(){

    }

    drawUpper(index){

    }

    mouseClicked(){

    }

    mousePressed(){

    }

    mouseDragged(){

    }

}
/* harmony default export */ __webpack_exports__["default"] = (GameComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/BodyComponent.js":
/*!*******************************************************!*\
  !*** ./src/scripts/Components/logic/BodyComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");


class BodyComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, x, y, w, h){
        super(host);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    mouseHover(){
        let mouseX = this.host.game.p.mouseX;
        let mouseY = this.host.game.p.mouseY;
        if (mouseX >= this.x && mouseX < this.x+this.w){
            if (mouseY >= this.y && mouseY < this.y+this.h){
                return true;
            }
        }
        return false;

    }

    setPosition(x, y){
        this.x = x;
        this.y = y;

    }

    overlaps(bodyComponent){
        if (this.x < bodyComponent.x + bodyComponent.w &&
            this.x + this.w > bodyComponent.x &&
            this.y < bodyComponent.y + bodyComponent.h &&
            this.y + this.h > bodyComponent.y) {
                return true;

        }
        return false;

    }

    distanceTo(bodyComponent){
        let k1 = Math.abs(bodyComponent.x-this.x);
        let k2 = Math.abs(bodyComponent.y-this.y);
        return Math.sqrt(k1*k1 + k2*k2);
        
    }

    mouseHover(x, y){
        let mouseX = x;
        let mouseY = y;
        if (mouseX >= this.x && mouseX < this.x+this.w){
            if (mouseY >= this.y && mouseY < this.y+this.h){
                return true;
            }
        }
        return false;

    }

    distanceToPoint(x, y){
        let k1 = Math.abs(x-this.x);
        let k2 = Math.abs(y-this.y);
        return Math.sqrt(k1*k1 + k2*k2);

    }

    angleTo(bodyComponent){
        let xDist = bodyComponent.x - this.x;
        let yDist = bodyComponent.y - this.y;
        return Math.atan2(yDist, xDist);

    }

    angleToPoint(x, y){
        let xDist = x - this.x;
        let yDist = y - this.y;
        return Math.atan2(yDist, xDist);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (BodyComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/AttackSpeedBuff.js":
/*!***************************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/AttackSpeedBuff.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuffComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuffComponent */ "./src/scripts/Components/logic/Buffs/BuffComponent.js");


class AttackSpeedBuff extends _BuffComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(host){
        super(host, "attackSpeedAura")
    }

    on(){
        this.host.towerComponent.attackSpeed -= this.host.towerComponent.attackSpeed * 0.15*this.bufflvl;
    }

    off(){
        this.host.towerComponent.attackSpeed += this.host.towerComponent.attackSpeed * 0.15*this.bufflvl;
    }


}

/* harmony default export */ __webpack_exports__["default"] = (AttackSpeedBuff);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/BuffComponent.js":
/*!*************************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/BuffComponent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");


class BuffComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, type){
        super(host);
        this.type = type;
        this.bufflvl = 1;

    }

    on(){
        
    }

    update(delta){

    }

    off(){
        
    }

}
/* harmony default export */ __webpack_exports__["default"] = (BuffComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/Buffs.js":
/*!*****************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/Buffs.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurningBuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurningBuff */ "./src/scripts/Components/logic/Buffs/BurningBuff.js");
/* harmony import */ var _CurseBuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurseBuff */ "./src/scripts/Components/logic/Buffs/CurseBuff.js");
/* harmony import */ var _AttackSpeedBuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttackSpeedBuff */ "./src/scripts/Components/logic/Buffs/AttackSpeedBuff.js");
/* harmony import */ var _SlowBuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlowBuff */ "./src/scripts/Components/logic/Buffs/SlowBuff.js");





/* harmony default export */ __webpack_exports__["default"] = ({
    "burn": _BurningBuff__WEBPACK_IMPORTED_MODULE_0__["default"],
    "curse": _CurseBuff__WEBPACK_IMPORTED_MODULE_1__["default"],
    "speed": _AttackSpeedBuff__WEBPACK_IMPORTED_MODULE_2__["default"],
    "slow": _SlowBuff__WEBPACK_IMPORTED_MODULE_3__["default"]

});

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/BuffsComponent.js":
/*!**************************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/BuffsComponent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");
/* harmony import */ var _Buffs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buffs */ "./src/scripts/Components/logic/Buffs/Buffs.js");



class BuffsComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host){
        super(host);
        this.buffs = [];
        this.buffClasses = _Buffs__WEBPACK_IMPORTED_MODULE_1__["default"];

    }

    applyBuff(type, bufflvl){
        let buffComponentClass = this.buffClasses[type];
        let component = new buffComponentClass(this.host);
        component.bufflvl = bufflvl;
        this.host.attachments[type] = component;
        this.host.addComponent(component);
        component.on();
        this.buffs[type] = bufflvl;
    }

    tryBuff(type, bufflvl){
        if (this.buffs[type] !== bufflvl){
            if (this.buffs[type] == undefined){
                this.applyBuff(type, bufflvl);
            } else
            if (bufflvl > this.buffs[type]){
                this.cancelBuff(type);
                this.applyBuff(type, bufflvl);
            }
        }
    }

    cancelBuff(type){
        let component = this.host.attachments[type];
        if (component != undefined){
            component.off();
            this.host.removeComponent(component);
        }
        this.buffs[type] = undefined;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (BuffsComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/BurningBuff.js":
/*!***********************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/BurningBuff.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuffComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuffComponent */ "./src/scripts/Components/logic/Buffs/BuffComponent.js");


class BurningBuff extends _BuffComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host){
        super(host, "burn");
        this.burnTimer = 0;
        this.burnTime = 4;

    }

    on(){

    }

    update(delta){
        this.burnTimer += delta;
        let damagePerSecond = delta * this.host.maxHp * (0.02 * this.bufflvl);
        if(this.host.hp < damagePerSecond){
            this.host.hp = 0;
        } else {
            this.host.hp -= damagePerSecond;
        }
        if (this.burnTimer >= this.burnTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){

    }

}
/* harmony default export */ __webpack_exports__["default"] = (BurningBuff);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/CurseBuff.js":
/*!*********************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/CurseBuff.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuffComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuffComponent */ "./src/scripts/Components/logic/Buffs/BuffComponent.js");


class CurseBuff extends _BuffComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host){
        super(host, "curse");
        this.curseTimer = 0;
        this.curseTime = 4;

    }

    on(){
        let resists = this.host.resist.resists;
        for(let k in resists){
            resists[k] += 0.1 * this.bufflvl;
        }
    }

    update(delta){
        this.curseTimer += delta;
        if (this.curseTimer >= this.curseTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){
        let resists = this.host.resist.resists;
        for(let k in resists){
            resists[k] -= 0.1 * this.bufflvl;
        }
    }

}
/* harmony default export */ __webpack_exports__["default"] = (CurseBuff);

/***/ }),

/***/ "./src/scripts/Components/logic/Buffs/SlowBuff.js":
/*!********************************************************!*\
  !*** ./src/scripts/Components/logic/Buffs/SlowBuff.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuffComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuffComponent */ "./src/scripts/Components/logic/Buffs/BuffComponent.js");


class SlowBuff extends _BuffComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(host){
        super(host, "slow");
        this.slowTimer = 0;
        this.slowTime = 4;
        this.startValue = this.host.mobMovingComponent.movementSpeed;
    }

    on(){
        this.host.mobMovingComponent.movementSpeed = this.host.mobMovingComponent.movementSpeed - this.host.mobMovingComponent.movementSpeed * 0.1 * this.bufflvl;
    }

    update(delta){
        this.slowTimer += delta;
        if (this.slowTimer >= this.slowTime){
            this.host.buffsComponent.cancelBuff(this.type);
        }
    }

    off(){
        this.host.mobMovingComponent.movementSpeed = this.startValue;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (SlowBuff);

/***/ }),

/***/ "./src/scripts/Components/logic/Bullets/BulletComponent.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/Components/logic/Bullets/BulletComponent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");


class BulletComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host, target, mobs){
        super(host);
        this.mobs = mobs;
        this.target = target;
        this.speed = 350;
    }

    update(delta) {
        let body = this.host.bodyComponent;
        let tBody = this.target.bodyComponent;
        let angle = this.host.bodyComponent.angleToPoint(tBody.x+tBody.w/2, tBody.y+tBody.h/2);
        body.x += Math.cos(angle) * this.speed * delta;
        body.y += Math.sin(angle) * this.speed * delta;
        if(body.overlaps(tBody)){
            this.host.parent.removeChild(this.host);
            this.target.receiveDamage(this.host.tower, 1);
            let attackTowerC = this.host.tower.towerComponent;
            if(attackTowerC.attackType === "fire"){
                this.target.buffsComponent.tryBuff("burn", attackTowerC.upgradeAbilityLevel);
            } else
            if(attackTowerC.attackType === "water"){
                // this.target.buffsComponent.tryBuff("slow", attackTowerC.upgradeAbilityLevel);
                for(let i = 0; i < this.mobs.length; i++){
                    if(this.mobs[i].bodyComponent.distanceTo(this.target.bodyComponent) < 100 + 100 * (0.2 * attackTowerC.upgradeAbilityLevel)){
                        this.mobs[i].buffsComponent.tryBuff("slow", attackTowerC.upgradeAbilityLevel);
                    }
                }
            } else
            if(attackTowerC.attackType === "shadow"){
                this.target.buffsComponent.tryBuff("curse", attackTowerC.upgradeAbilityLevel);
            } else
            if(attackTowerC.attackType === "earth"){
                for(let i = 0; i < this.mobs.length; i++){
                    if(this.target !== this.mobs[i] && this.mobs[i].bodyComponent.distanceTo(this.target.bodyComponent) < 100 + 100 * (0.2 * attackTowerC.upgradeAbilityLevel)){
                        this.mobs[i].receiveDamage(this.host.tower, 0.20*attackTowerC.upgradeAbilityLevel);
                    }
                }
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (BulletComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/MobMovingComponent.js":
/*!************************************************************!*\
  !*** ./src/scripts/Components/logic/MobMovingComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");


class MobMovingComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, bodyComponent, route, tileSize, movementSpeed){
        super(host);
        this.bodyComponent = bodyComponent;
        this.route = route;
        this.tileSize = tileSize;
        this.movementSpeed = movementSpeed;
        
        this.shift = (this.tileSize*2)-this.tileSize-this.bodyComponent.w*0.5;
        this.vx = 0;
        this.vy = 0;
        this.bodyComponent.x += this.shift;
        this.bodyComponent.y += this.shift;
        this.currentRouteIndex = 0;
        this.currentTile = undefined;
        this.angle = 0;
        this.nextTile();

    }

    nextTile(){
        let tile = this.route[this.currentRouteIndex++];
        this.currentTile = tile;
        if (tile != undefined){
            let xDist = (tile.j*this.tileSize) - (this.bodyComponent.x - this.shift);
            let yDist = (tile.i*this.tileSize) - (this.bodyComponent.y - this.shift);
            this.angle = Math.atan2(yDist, xDist);// * 180 / Math.PI;
        }
    }

    update(delta){
        this.vx = Math.cos(this.angle) * this.movementSpeed;
        this.vy = Math.sin(this.angle) * this.movementSpeed;

        this.bodyComponent.x += this.vx * delta;
        this.bodyComponent.y += this.vy * delta;

        if (this.currentTile != undefined){
            let pointx = this.currentTile.j*this.tileSize;
            let pointy = this.currentTile.i*this.tileSize;
            let dist = this.bodyComponent.distanceToPoint(pointx+this.shift, pointy+this.shift);
            if (dist < 10){
                this.nextTile();
            }
        } else {
            this.host.removeFromParent();
        }        

    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobMovingComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/AirResistComponent.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/AirResistComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobResistComponent */ "./src/scripts/Components/logic/Resist/MobResistComponent.js");


class AirResistComponent extends _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, 1.2, 0.9, 0.5, 0.7, 1);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (AirResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/EarthResistComponent.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/EarthResistComponent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobResistComponent */ "./src/scripts/Components/logic/Resist/MobResistComponent.js");


class EarthResistComponent extends _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, 0.9, 0.7, 1.2, 0.5, 1);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EarthResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/FireResistComponent.js":
/*!********************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/FireResistComponent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobResistComponent */ "./src/scripts/Components/logic/Resist/MobResistComponent.js");


class FireResistComponent extends _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, 0.5, 1.2, 0.7, 0.9, 1);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (FireResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/MobResistComponent.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/MobResistComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");


class MobResistComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(host, fireResist, waterResist, airResist, earthResist, shadowResist){
        super(host);
        this.resists = [];
        this.resists["fire"] = fireResist;
        this.resists["water"] = waterResist;
        this.resists["air"] = airResist;
        this.resists["earth"] = earthResist;
        this.resists["shadow"] = shadowResist;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (MobResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/ShadowResistComponent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobResistComponent */ "./src/scripts/Components/logic/Resist/MobResistComponent.js");


class ShadowResistComponent extends _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, 1, 1, 1, 1, 0.5);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ShadowResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Resist/WaterResistComponent.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/Components/logic/Resist/WaterResistComponent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobResistComponent */ "./src/scripts/Components/logic/Resist/MobResistComponent.js");


class WaterResistComponent extends _MobResistComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, 0.7, 0.5, 0.9, 1.2, 1);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (WaterResistComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/TilemapContainerComponent.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/Components/logic/TilemapContainerComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");


class TilemapContainerComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host){
        super(host);
        this.map = [
            [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 3, 2, 2, 2, 2, 2],
            [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 3, 2, 2, 2, 0, 0],
            [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 3, 2, 2, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 0, 0, 0],
            [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
            [0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 3, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
            [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.tileSize = 40;
        mainGame.tileSize = this.tileSize;
        mainGame.tileSize = this.tileSize;
        this.host.game.tileSize = 40;

    }

}
/* harmony default export */ __webpack_exports__["default"] = (TilemapContainerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/AirTowerComponent.js":
/*!******************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/AirTowerComponent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TowerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TowerComponent */ "./src/scripts/Components/logic/Towers/TowerComponent.js");


class AirTowerComponent extends _TowerComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host){
        super(host, "air", 0.5, 75, 350);
        this.timerAura = 0;
        this.auraTime = 0.2;
    }

    update(delta){
        super.update(delta);
        this.timerAura += delta;
        if (this.timerAura >= this.auraTime){
            this.timerAura -= this.auraTime;
            let allTowers = mainGame.state.gameMenuBottom.kids;
            for (let i=0; i < allTowers.length; i++){
                if (allTowers[i].towerComponent.attackType != "air"){
                    if (allTowers[i].bodyComponent.distanceTo(this.host.bodyComponent) < 100)
                        allTowers[i].buffsComponent.tryBuff("speed", this.upgradeAbilityLevel);
                }
            }
        }

    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.02;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

/* harmony default export */ __webpack_exports__["default"] = (AirTowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/EarthTowerComponent.js":
/*!********************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/EarthTowerComponent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TowerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TowerComponent */ "./src/scripts/Components/logic/Towers/TowerComponent.js");


class EarthTowerComponent extends _TowerComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, "earth", 1.5, 200, 250);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.07;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

/* harmony default export */ __webpack_exports__["default"] = (EarthTowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/FireTowerComponent.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/FireTowerComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TowerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TowerComponent */ "./src/scripts/Components/logic/Towers/TowerComponent.js");


class FireTowerComponent extends _TowerComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, "fire", 0.8, 120, 250);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.03;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

/* harmony default export */ __webpack_exports__["default"] = (FireTowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/ShadowTowerComponent.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/ShadowTowerComponent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TowerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TowerComponent */ "./src/scripts/Components/logic/Towers/TowerComponent.js");


class ShadowTowerComponent extends _TowerComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, "shadow", 1, 120, 400);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0,5;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

/* harmony default export */ __webpack_exports__["default"] = (ShadowTowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/TowerBuilderComponent.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/TowerBuilderComponent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");
/* harmony import */ var _Objects_Game_Towers_FireTower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Objects/Game/Towers/FireTower */ "./src/scripts/Objects/Game/Towers/FireTower.js");
/* harmony import */ var _Objects_Game_Towers_ShadowTower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Objects/Game/Towers/ShadowTower */ "./src/scripts/Objects/Game/Towers/ShadowTower.js");
/* harmony import */ var _Objects_Game_Towers_WaterTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Objects/Game/Towers/WaterTower */ "./src/scripts/Objects/Game/Towers/WaterTower.js");
/* harmony import */ var _Objects_Game_Towers_EarthTower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Objects/Game/Towers/EarthTower */ "./src/scripts/Objects/Game/Towers/EarthTower.js");






class TowerBuilderComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, tilemap){
        super(host)
        this.tilemap = tilemap;
        this.tileSize = this.tilemap.tilemapContainerComponent.tileSize;

    }

    mouseClicked(){
        let p = this.host.game.p;
        let i = Math.floor(p.mouseY/this.tileSize);
        let j = Math.floor(p.mouseX/this.tileSize);
        let tower = new _Objects_Game_Towers_EarthTower__WEBPACK_IMPORTED_MODULE_4__["default"](this.host.game, j*this.tileSize, i*this.tileSize);
        this.host.addChild(tower);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (TowerBuilderComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/TowerComponent.js":
/*!***************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/TowerComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");
/* harmony import */ var _Objects_Game_Bullets_Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Objects/Game/Bullets/Bullet */ "./src/scripts/Objects/Game/Bullets/Bullet.js");



class TowerComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, attackType, attackSpeed, attackDamage, attackRange){
        super(host);

        this.attackType = attackType;

        this.attackSpeed = attackSpeed;
        this.attackDamage = attackDamage;
        this.attackRange = attackRange;

        this.upgradeStatsLevel = 1;
        this.upgradeAbilityLevel = 1;

        this.mobs = mainGame.state.waveMaster.kids;

        this.attackTimer = 0;
        
        this.towerCost = 50;
        this.upgradeStatsCost = 100;
        this.upgradeAbilityCost = 200;
        this.readyToFire = true;
    }

    upgradeStats(){
        this.upgradeStatsLevel += 1;
    }

    upgradeAbility(){
        this.upgradeAbilityLevel += 1;
    }

    update(delta){
        if (!this.readyToFire){
            this.attackTimer += delta;
            if(this.attackTimer >= this.attackSpeed) {
                this.readyToFire = true;
                this.attackTimer -= this.attackSpeed;
            }
        }
        if (this.readyToFire){
            for(let i = 0; i < this.mobs.length; i++){
                if(this.host.bodyComponent.distanceTo(this.mobs[i].bodyComponent)<this.attackRange){
                    this.bulletSpawn(this.mobs[i]);
                    this.readyToFire = false;
                    break;
                }
            }
        }
    }

    bulletSpawn(mob){
        let body = this.host.bodyComponent;
        let bullet = new _Objects_Game_Bullets_Bullet__WEBPACK_IMPORTED_MODULE_1__["default"](this.host.game, body.x+body.w/2, body.y+body.h/2, this.host, mob, this.mobs);
        this.host.addChild(bullet);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (TowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/Towers/WaterTowerComponent.js":
/*!********************************************************************!*\
  !*** ./src/scripts/Components/logic/Towers/WaterTowerComponent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TowerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TowerComponent */ "./src/scripts/Components/logic/Towers/TowerComponent.js");


class WaterTowerComponent extends _TowerComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(host){
        super(host, "water", 1.2, 90, 300);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.06;
        this.attackDamage += this.attackDamage; 
    }

    upgradeAbility(){
        super.upgradeAbility();

    }

}

/* harmony default export */ __webpack_exports__["default"] = (WaterTowerComponent);

/***/ }),

/***/ "./src/scripts/Components/logic/WaveMasterLogicComponent.js":
/*!******************************************************************!*\
  !*** ./src/scripts/Components/logic/WaveMasterLogicComponent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");
/* harmony import */ var _Objects_Game_Mobs_Mob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Objects/Game/Mobs/Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");



class WaveMasterLogicComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, tilemap){
        super(host);
        this.tilemap = tilemap;
        this.waves = [];
        this.currentWaveIndex = 0;
        let c = host.game.constants;
        this.storeWave(c.MOB_FIRE_0, 15, 0.6);
        this.storeWave(c.MOB_EARTH_0, 15, 0.5);
        this.storeWave(c.MOB_WATER_0, 15, 0.7);
        this.storeWave(c.MOB_SHADOW_0, 15, 0.8);
        this.storeWave(c.MOB_AIR_0, 2, 1);
        this.storeWave(c.MOB_EARTH_1, 12, 1);
        this.storeWave(c.MOB_WATER_1, 12, 1);
        this.storeWave(c.MOB_AIR_1, 12, 1);
        this.storeWave(c.MOB_FIRE_1, 12, 1);
        this.storeWave(c.MOB_SHADOW_1, 2, 1);
        this.storeWave(c.MOB_FIRE_2, 12, 0.3);
        this.storeWave(c.MOB_WATER_2, 12, 0.5);
        this.storeWave(c.MOB_SHADOW_2, 12, 0.7);
        this.storeWave(c.MOB_AIR_2, 12, 1);
        this.storeWave(c.MOB_EARTH_2, 2, 0.5);
        this.storeWave(c.MOB_SHADOW_3, 12, 1);
        this.storeWave(c.MOB_EARTH_3, 12, 1);
        this.storeWave(c.MOB_FIRE_3, 12, 1);
        this.storeWave(c.MOB_AIR_3, 12, 1);
        this.storeWave(c.MOB_WATER_3, 2, 1);
        this.storeWave(c.MOB_EARTH_4, 12, 1);
        this.storeWave(c.MOB_SHADOW_4, 12, 1);
        this.storeWave(c.MOB_WATER_4, 12, 1);
        this.storeWave(c.MOB_AIR_4, 12, 1);
        this.storeWave(c.MOB_FIRE_4, 2, 1);
        

        this.spawningState = 0; //0 - wait | 1 - spawning

        this.timerWaveStart = 0;
        this.timeToStartWave = 0.5;

        this.timerMobSpawn = 0;
        this.timeToSpawnMob = 1.2;

        this.route = this.findRoute(tilemap.tilemapContainerComponent.map);

        this.currentWaveToSpawn = undefined;

    }

    findRoute(map){
        let dvalue = 0;
        let start = {i:0, j:17, d:dvalue};
        let end = {i:14, j:8};
        let marked = [];
        let path = [];
        marked.push(start);
        checkAroundMarked(dvalue);
        function checkAroundMarked(d){
            let found = false;
            for (let i=0; i < marked.length; i++){
                if (marked[i].i == end.i && marked[i].j == end.j){
                    found = true;
                    path.push(marked[i]);
                    break;
                }
            }
            if (!found)
            for (let i=0; i < marked.length; i++){
                //console.log("check d:"+d+" md:"+marked[i].d+" mi:"+marked[i].i+" mj:"+marked[i].j);
                if (marked[i].d == d){
                    //console.log("good");
                    markAroundTile(marked[i], d+1);
                }
            }
        }
        function markAroundTile(tile, newd){
            mark(tile.i-1, tile.j, newd);
            mark(tile.i+1, tile.j, newd);
            mark(tile.i, tile.j-1, newd);
            mark(tile.i, tile.j+1, newd);
            checkAroundMarked(newd);
        }
        function mark(i, j, newd){
            if (map[i] != undefined){
                if (map[i][j] != undefined){
                    if (map[i][j] == 1){
                        for (let ii=0; ii < marked.length; ii++){
                            if (marked[ii].i == i && marked[ii].j == j){
                                return;
                            }
                        }
                        marked.push({i:i, j:j, d:newd});
                        //console.log(i+" "+j+" "+newd);
                    }
                }
            }
        }
        //console.log(marked);
        let dmax = path[0].d;
        do {
            for (let i=0; i < marked.length; i++){
                if (marked[i].d == dmax-1){
                    path.push(marked[i]);
                    dmax--;
                    break;
                }
            }
        } while (dmax != 0);
        path.reverse();
        return path;

    }

    storeWave(type, count, time){
        let o = {};
        let a = [];

        this.waves.push(o);
        o.a = a;
        o.time = time;
        for (let i=0; i < count; i++)
            a.push(type);

    }

    spawnMob(){
        let MobClass = this.currentWaveToSpawn.shift();
        //let mob = new mobType(this.host.game, x, y, ro)
        let size = this.tilemap.tilemapContainerComponent.tileSize;
        let test = new MobClass(this.host.game, 17*size, -size, size, this.route);
        this.host.addChild(test);

    }

    update(delta){
        if (this.spawningState == 0){
            this.timerWaveStart+=delta;
            if (this.timerWaveStart >= this.timeToStartWave){
                this.timerWaveStart = 0;
                this.spawningState = 1;
                let waveObject = this.waves[this.currentWaveIndex++];
                this.currentWaveToSpawn = waveObject.a;
                this.timeToSpawnMob = waveObject.time;

            }
        } else 
        if (this.spawningState == 1){
            if (this.currentWaveToSpawn.length > 0){
                this.timerMobSpawn+=delta;
                if (this.timerMobSpawn >= this.timeToSpawnMob){
                    this.timerMobSpawn = 0;
                    this.spawnMob();
                }
            } else
            if (this.host.kids.length == 0){
                this.spawningState = 0;

            }
        }
    }

}
/* harmony default export */ __webpack_exports__["default"] = (WaveMasterLogicComponent);

/***/ }),

/***/ "./src/scripts/Components/render/HPRenderComponent.js":
/*!************************************************************!*\
  !*** ./src/scripts/Components/render/HPRenderComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");


class HPRenderComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, bodyComponent){
        super(host);
        this.bodyComponent = bodyComponent;

    }

    drawUpper(index){
        if (index == 1) {
            let hp = this.host.hp;

            this.host.game.p.noStroke();
            let lifeBarWidth = this.host.hp * this.bodyComponent.w / this.host.maxHp;
            this.host.game.p.fill(0, 100, 0);
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, this.bodyComponent.w, 7);
            this.host.game.p.fill(0, 255, 0);
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, lifeBarWidth, 7);

            this.host.game.p.stroke(0);
            this.host.game.p.noFill();
            this.host.game.p.rect(this.bodyComponent.x, this.bodyComponent.y-15, this.bodyComponent.w, 7);

        }

    }

}

/* harmony default export */ __webpack_exports__["default"] = (HPRenderComponent);

/***/ }),

/***/ "./src/scripts/Components/render/RenderComponent.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Components/render/RenderComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameComponent */ "./src/scripts/Components/GameComponent.js");


class RenderComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, bodyComponent, image){
        super(host);
        this.bodyComponent = bodyComponent;
        this.image = image;
        if (this.image != null){
            this.width = image.width;
            this.height = image.height;

        } else {
            this.width = bodyComponent.width;
            this.height = bodyComponent.height;

        }
    }

    setImage(image){
        if (this.image != null){
            this.width = image.width;
            this.height = image.height;

        }
        this.image = image;

    }

    draw(){
        if (this.image == null){
            mainGame.p.fill(255, 0, 0);
            mainGame.p.rect(this.bodyComponent.x, this.bodyComponent.y, this.bodyComponent.w, this.bodyComponent.h);
        } else
            mainGame.p.image(this.image, this.bodyComponent.x, this.bodyComponent.y, this.width, this.height);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (RenderComponent);

/***/ }),

/***/ "./src/scripts/Components/render/Tilemap/TilemapRenderComponent.js":
/*!*************************************************************************!*\
  !*** ./src/scripts/Components/render/Tilemap/TilemapRenderComponent.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameComponent */ "./src/scripts/Components/GameComponent.js");


class TilemapRenderComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(host, tilemapContainerComponent){
        super(host);
        this.map = tilemapContainerComponent.map;
        this.tileSize = tilemapContainerComponent.tileSize;
        this.texture = host.game.p.gimages["assets/map/Tileset.png"];
        this.grass = this.texture.get(0, 0, 40, 40);

    }

    draw(){
        for (let i=0; i < this.map.length; i++){
            for (let j=0; j < this.map[i].length; j++){
                let p = this.host.game.p;
                p.stroke(0);
                switch(this.map[i][j]){
                    case 0:
                        // p.fill(0, 100, 0);
                        // p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                        p.image(this.grass, j*this.tileSize, i*this.tileSize);
                        break;
                    case 1:
                        p.fill(100, 50, 0);
                        p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 2:
                        p.fill(0);
                        p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 3:
                        p.fill(100, 50, 0);
                        p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                        break;
                }


            }

        }

    }

}
/* harmony default export */ __webpack_exports__["default"] = (TilemapRenderComponent);

/***/ }),

/***/ "./src/scripts/Constants.js":
/*!**********************************!*\
  !*** ./src/scripts/Constants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Objects_Game_Mobs_Fire_MobFire0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Objects/Game/Mobs/Fire/MobFire0 */ "./src/scripts/Objects/Game/Mobs/Fire/MobFire0.js");
/* harmony import */ var _Objects_Game_Mobs_Water_MobWater0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects/Game/Mobs/Water/MobWater0 */ "./src/scripts/Objects/Game/Mobs/Water/MobWater0.js");
/* harmony import */ var _Objects_Game_Mobs_Earth_MobEarth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Objects/Game/Mobs/Earth/MobEarth0 */ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth0.js");
/* harmony import */ var _Objects_Game_Mobs_Air_MobAir0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/Game/Mobs/Air/MobAir0 */ "./src/scripts/Objects/Game/Mobs/Air/MobAir0.js");
/* harmony import */ var _Objects_Game_Mobs_Shadow_MobShadow0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Objects/Game/Mobs/Shadow/MobShadow0 */ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow0.js");
/* harmony import */ var _Objects_Game_Mobs_Fire_MobFire1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Objects/Game/Mobs/Fire/MobFire1 */ "./src/scripts/Objects/Game/Mobs/Fire/MobFire1.js");
/* harmony import */ var _Objects_Game_Mobs_Water_MobWater1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Objects/Game/Mobs/Water/MobWater1 */ "./src/scripts/Objects/Game/Mobs/Water/MobWater1.js");
/* harmony import */ var _Objects_Game_Mobs_Earth_MobEarth1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Objects/Game/Mobs/Earth/MobEarth1 */ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth1.js");
/* harmony import */ var _Objects_Game_Mobs_Air_MobAir1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Objects/Game/Mobs/Air/MobAir1 */ "./src/scripts/Objects/Game/Mobs/Air/MobAir1.js");
/* harmony import */ var _Objects_Game_Mobs_Shadow_MobShadow1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Objects/Game/Mobs/Shadow/MobShadow1 */ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow1.js");
/* harmony import */ var _Objects_Game_Mobs_Fire_MobFire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Objects/Game/Mobs/Fire/MobFire2 */ "./src/scripts/Objects/Game/Mobs/Fire/MobFire2.js");
/* harmony import */ var _Objects_Game_Mobs_Earth_MobEarth2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Objects/Game/Mobs/Earth/MobEarth2 */ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth2.js");
/* harmony import */ var _Objects_Game_Mobs_Water_MobWater2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Objects/Game/Mobs/Water/MobWater2 */ "./src/scripts/Objects/Game/Mobs/Water/MobWater2.js");
/* harmony import */ var _Objects_Game_Mobs_Shadow_MobShadow2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Objects/Game/Mobs/Shadow/MobShadow2 */ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow2.js");
/* harmony import */ var _Objects_Game_Mobs_Air_MobAir2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Objects/Game/Mobs/Air/MobAir2 */ "./src/scripts/Objects/Game/Mobs/Air/MobAir2.js");
/* harmony import */ var _Objects_Game_Mobs_Fire_MobFire3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Objects/Game/Mobs/Fire/MobFire3 */ "./src/scripts/Objects/Game/Mobs/Fire/MobFire3.js");
/* harmony import */ var _Objects_Game_Mobs_Earth_MobEarth3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Objects/Game/Mobs/Earth/MobEarth3 */ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth3.js");
/* harmony import */ var _Objects_Game_Mobs_Water_MobWater3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Objects/Game/Mobs/Water/MobWater3 */ "./src/scripts/Objects/Game/Mobs/Water/MobWater3.js");
/* harmony import */ var _Objects_Game_Mobs_Shadow_MobShadow3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Objects/Game/Mobs/Shadow/MobShadow3 */ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow3.js");
/* harmony import */ var _Objects_Game_Mobs_Air_MobAir3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Objects/Game/Mobs/Air/MobAir3 */ "./src/scripts/Objects/Game/Mobs/Air/MobAir3.js");
/* harmony import */ var _Objects_Game_Mobs_Fire_MobFire4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Objects/Game/Mobs/Fire/MobFire4 */ "./src/scripts/Objects/Game/Mobs/Fire/MobFire4.js");
/* harmony import */ var _Objects_Game_Mobs_Earth_MobEarth4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Objects/Game/Mobs/Earth/MobEarth4 */ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth4.js");
/* harmony import */ var _Objects_Game_Mobs_Water_MobWater4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Objects/Game/Mobs/Water/MobWater4 */ "./src/scripts/Objects/Game/Mobs/Water/MobWater4.js");
/* harmony import */ var _Objects_Game_Mobs_Shadow_MobShadow4__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Objects/Game/Mobs/Shadow/MobShadow4 */ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow4.js");
/* harmony import */ var _Objects_Game_Mobs_Air_MobAir4__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Objects/Game/Mobs/Air/MobAir4 */ "./src/scripts/Objects/Game/Mobs/Air/MobAir4.js");






























/* harmony default export */ __webpack_exports__["default"] = ({
    MOB_FIRE_0: _Objects_Game_Mobs_Fire_MobFire0__WEBPACK_IMPORTED_MODULE_0__["default"],
    MOB_EARTH_0: _Objects_Game_Mobs_Earth_MobEarth0__WEBPACK_IMPORTED_MODULE_2__["default"], 
    MOB_WATER_0: _Objects_Game_Mobs_Water_MobWater0__WEBPACK_IMPORTED_MODULE_1__["default"],
    MOB_SHADOW_0: _Objects_Game_Mobs_Shadow_MobShadow0__WEBPACK_IMPORTED_MODULE_4__["default"],
    MOB_AIR_0: _Objects_Game_Mobs_Air_MobAir0__WEBPACK_IMPORTED_MODULE_3__["default"],

    MOB_FIRE_1: _Objects_Game_Mobs_Fire_MobFire1__WEBPACK_IMPORTED_MODULE_5__["default"],
    MOB_EARTH_1: _Objects_Game_Mobs_Earth_MobEarth1__WEBPACK_IMPORTED_MODULE_7__["default"],
    MOB_WATER_1: _Objects_Game_Mobs_Water_MobWater1__WEBPACK_IMPORTED_MODULE_6__["default"],
    MOB_SHADOW_1: _Objects_Game_Mobs_Shadow_MobShadow1__WEBPACK_IMPORTED_MODULE_9__["default"],
    MOB_AIR_1: _Objects_Game_Mobs_Air_MobAir1__WEBPACK_IMPORTED_MODULE_8__["default"],

    MOB_FIRE_2: _Objects_Game_Mobs_Fire_MobFire2__WEBPACK_IMPORTED_MODULE_10__["default"],
    MOB_EARTH_2: _Objects_Game_Mobs_Earth_MobEarth2__WEBPACK_IMPORTED_MODULE_11__["default"],
    MOB_WATER_2: _Objects_Game_Mobs_Water_MobWater2__WEBPACK_IMPORTED_MODULE_12__["default"],
    MOB_SHADOW_2: _Objects_Game_Mobs_Shadow_MobShadow2__WEBPACK_IMPORTED_MODULE_13__["default"],
    MOB_AIR_2: _Objects_Game_Mobs_Air_MobAir2__WEBPACK_IMPORTED_MODULE_14__["default"],

    MOB_FIRE_3: _Objects_Game_Mobs_Fire_MobFire3__WEBPACK_IMPORTED_MODULE_15__["default"],
    MOB_EARTH_3: _Objects_Game_Mobs_Earth_MobEarth3__WEBPACK_IMPORTED_MODULE_16__["default"],
    MOB_WATER_3: _Objects_Game_Mobs_Water_MobWater3__WEBPACK_IMPORTED_MODULE_17__["default"],
    MOB_SHADOW_3: _Objects_Game_Mobs_Shadow_MobShadow3__WEBPACK_IMPORTED_MODULE_18__["default"],
    MOB_AIR_3: _Objects_Game_Mobs_Air_MobAir3__WEBPACK_IMPORTED_MODULE_19__["default"],

    MOB_FIRE_4: _Objects_Game_Mobs_Fire_MobFire4__WEBPACK_IMPORTED_MODULE_20__["default"],
    MOB_EARTH_4: _Objects_Game_Mobs_Earth_MobEarth4__WEBPACK_IMPORTED_MODULE_21__["default"],
    MOB_WATER_4: _Objects_Game_Mobs_Water_MobWater4__WEBPACK_IMPORTED_MODULE_22__["default"],
    MOB_SHADOW_4: _Objects_Game_Mobs_Shadow_MobShadow4__WEBPACK_IMPORTED_MODULE_23__["default"],
    MOB_AIR_4: _Objects_Game_Mobs_Air_MobAir4__WEBPACK_IMPORTED_MODULE_24__["default"]

    /*
    MOB_FIRE_2: MobFire2,
    MOB_FIRE_3: MobFire3,
    MOB_FIRE_4: MobFire4,
    MOB_FIRE_5: MobFire5,
    MOB_FIRE_6: MobFire6,
    MOB_FIRE_7: MobFire7,
    MOB_FIRE_8: MobFire8,
    MOB_FIRE_9: MobFire9,
    MOB_EARTH_2: MobEarth2,
    MOB_EARTH_3: MobEarth3,
    MOB_EARTH_4: MobEarth4,
    MOB_EARTH_5: MobEarth5,
    MOB_EARTH_6: MobEarth6,
    MOB_EARTH_7: MobEarth7,
    MOB_EARTH_8: MobEarth8,
    MOB_EARTH_9: MobEarth9,
    MOB_WATER_2: MobWater2,
    MOB_WATER_3: MobWater3,
    MOB_WATER_4: MobWater4,
    MOB_WATER_5: MobWater5,
    MOB_WATER_6: MobWater6,
    MOB_WATER_7: MobWater7,
    MOB_WATER_8: MobWater8,
    MOB_WATER_9: MobWater9,
    MOB_SHADOW_2: MobShadow2,
    MOB_SHADOW_3: MobShadow3,
    MOB_SHADOW_4: MobShadow4,
    MOB_SHADOW_5: MobShadow5,
    MOB_SHADOW_6: MobShadow6,
    MOB_SHADOW_7: MobShadow7,
    MOB_SHADOW_8: MobShadow8,
    MOB_SHADOW_9: MobShadow9,
    MOB_AIR_2: MobAir2,
    MOB_AIR_3: MobAir3,
    MOB_AIR_4: MobAir4,
    MOB_AIR_5: MobAir5,
    MOB_AIR_6: MobAir6,
    MOB_AIR_7: MobAir7,
    MOB_AIR_8: MobAir8,
    MOB_AIR_9: MobAir9,*/

});

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/scripts/Constants.js");


class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;
        this.gameTime = 0;
        this.constants = _Constants__WEBPACK_IMPORTED_MODULE_0__["default"];

    }

    linearInterpolation(fx1, fx2, x1, x, x2){
        if (x2 < x1) return fx2;
        if (x >= x2) return fx2;
        if (x <= x1) return fx1;
        return fx1+( fx2 - fx1 )*(x - x1)/(x2 - x1);

    }

    setState(state){
        this.state = state;

    }

    update(delta){
        this.state.update(delta);
        this.gameTime += delta;

    }

    draw(){
        this.state.draw();
        this.state.drawUpper(1);

    }

    mousePressed(){
        this.mouseDown = true;
        this.state.mousePressed();

    }

    mouseClicked(){
        this.mouseDown = false;
        this.state.mouseClicked();

    }

    mouseDragged(){
        this.state.mouseDragged();

    }

}
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/Objects/Game/Bullets/Bullet.js":
/*!****************************************************!*\
  !*** ./src/scripts/Objects/Game/Bullets/Bullet.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");
/* harmony import */ var _Components_logic_Bullets_BulletComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/logic/Bullets/BulletComponent */ "./src/scripts/Components/logic/Bullets/BulletComponent.js");





class Bullet extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, tower, mob, mobs){
        super(game);
        this.target = mob;
        this.bodyComponent = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, 10, 10);
        this.addComponent(this.bodyComponent);
        this.tower = tower;

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);
        this.renderComponent.draw = ()=> {
            mainGame.p.stroke(0);
            mainGame.p.fill(255, 0, 255);
            mainGame.p.rect(this.bodyComponent.x-5, this.bodyComponent.y-5, this.bodyComponent.w, this.bodyComponent.h);
        };

        this.bulletComponent = new _Components_logic_Bullets_BulletComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this, this.target, mobs);
        this.addComponent(this.bulletComponent);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./src/scripts/Objects/Game/GameBottomMenu.js":
/*!****************************************************!*\
  !*** ./src/scripts/Objects/Game/GameBottomMenu.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");
/* harmony import */ var _Towers_AirTower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Towers/AirTower */ "./src/scripts/Objects/Game/Towers/AirTower.js");
/* harmony import */ var _Towers_EarthTower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Towers/EarthTower */ "./src/scripts/Objects/Game/Towers/EarthTower.js");
/* harmony import */ var _Towers_FireTower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Towers/FireTower */ "./src/scripts/Objects/Game/Towers/FireTower.js");
/* harmony import */ var _Towers_WaterTower__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Towers/WaterTower */ "./src/scripts/Objects/Game/Towers/WaterTower.js");
/* harmony import */ var _Towers_ShadowTower__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Towers/ShadowTower */ "./src/scripts/Objects/Game/Towers/ShadowTower.js");








class GameBottomMenu extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, tilemap){
        super(game);
        this.tilemap = tilemap;
        let tileSize = this.tilemap.tilemapContainerComponent.tileSize;
        this.towerButtonsBodies = [];
        for (let i=0; i < 5; i++){
            let body = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null, 55 + i*tileSize + 20*i + 14*tileSize, 16*tileSize, tileSize, tileSize);
            this.towerButtonsBodies.push(body);
        }
        this.towerInsideButtonsBodies = [];
        for (let i=0; i < 3; i++){
            let body = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null, 55 + i*tileSize + 20*i + 14*tileSize, 16*tileSize, tileSize, tileSize);
            this.towerInsideButtonsBodies.push(body);
        }
        this.towerIndexes = {
            0: _Towers_AirTower__WEBPACK_IMPORTED_MODULE_2__["default"],
            1: _Towers_EarthTower__WEBPACK_IMPORTED_MODULE_3__["default"],
            2: _Towers_FireTower__WEBPACK_IMPORTED_MODULE_4__["default"],
            3: _Towers_WaterTower__WEBPACK_IMPORTED_MODULE_5__["default"],
            4: _Towers_ShadowTower__WEBPACK_IMPORTED_MODULE_6__["default"]
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
                        if (this.tryBuy(this.currentObject.towerComponent.upgradeStatsCost)){
                            this.currentObject.towerComponent.upgradeStats();
                            this.currentObject.towerComponent.towerCost += this.currentObject.towerComponent.upgradeStatsCost;
                            this.currentObject.towerComponent.upgradeStatsCost += this.currentObject.towerComponent.upgradeStatsCost;
                        }
                    } else
                    if (this.towerInsideButtonsBodies[1].mouseHover(x, y)){
                        if (this.tryBuy(this.currentObject.towerComponent.upgradeAbilityCost)){
                            this.currentObject.towerComponent.upgradeAbility();
                            this.currentObject.towerComponent.towerCost += this.currentObject.towerComponent.upgradeAbilityCost;
                            this.currentObject.towerComponent.upgradeAbilityCost += 200 * Math.floor(Math.pow(1.5, this.currentObject.towerComponent.upgradeAbilityLevel));
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

/* harmony default export */ __webpack_exports__["default"] = (GameBottomMenu);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Air/MobAir0.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Air/MobAir0.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");



class MobAir0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1500);
        this.resist.host = this;
        this.bounty = 50;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir0);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Air/MobAir1.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Air/MobAir1.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");



class MobAir1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1300);
        this.resist.host = this;
        this.bounty = 14;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir1);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Air/MobAir2.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Air/MobAir2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");



class MobAir2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1400);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir2);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Air/MobAir3.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Air/MobAir3.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");



class MobAir3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1900);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir3);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Air/MobAir4.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Air/MobAir4.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");



class MobAir4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2400);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth0.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Earth/MobEarth0.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");



class MobEarth0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 200);
        this.resist.host = this;
        this.bounty = 3;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobEarth0);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth1.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Earth/MobEarth1.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");



class MobEarth1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 700);
        this.resist.host = this;
        this.bounty = 10;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobEarth1);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth2.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Earth/MobEarth2.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");



class MobEarth2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 7500);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobEarth2);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth3.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Earth/MobEarth3.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");



class MobEarth3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1700);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobEarth3);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Earth/MobEarth4.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Earth/MobEarth4.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");



class MobEarth4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2100);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobEarth4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Fire/MobFire0.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Fire/MobFire0.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class MobFire0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100);
        this.bounty = 2;
        
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobFire0);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Fire/MobFire1.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Fire/MobFire1.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");



class MobFire1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1600);
        this.resist.host = this;
        this.bounty = 16;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobFire1);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Fire/MobFire2.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Fire/MobFire2.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");



class MobFire2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1100);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobFire2);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Fire/MobFire3.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Fire/MobFire3.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");



class MobFire3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1800);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobFire3);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Fire/MobFire4.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Fire/MobFire4.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");



class MobFire4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 30000);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobFire4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Mob.js":
/*!**********************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Mob.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");
/* harmony import */ var _Components_logic_MobMovingComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/logic/MobMovingComponent */ "./src/scripts/Components/logic/MobMovingComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");
/* harmony import */ var _Components_render_HPRenderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Components/render/HPRenderComponent */ "./src/scripts/Components/render/HPRenderComponent.js");






class Mob extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, size, tileSize, route, turnTime, resist, hp){
        super(game);
        this.bounty = 2;
        this.route = route;
        this.maxHp = hp;
        this.hp = hp;
        this.resist = resist;

        this.bodyComponent = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, size, size);
        this.addChild(this.bodyComponent);

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);

        this.mobMovingComponent = new _Components_logic_MobMovingComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, route, tileSize, turnTime);
        this.addComponent(this.mobMovingComponent);

        this.hpRenderComponent = new _Components_render_HPRenderComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this, this.bodyComponent);
        this.addComponent(this.hpRenderComponent);

    }

    update(delta) {
        super.update(delta);
        if(this.hp === 0){
            this.removeFromParent();
            mainGame.money += this.bounty;
        }
    }

    receiveDamage(tower, coef){
        let pureDamage = tower.towerComponent.attackDamage*coef;
        let damage = pureDamage * this.resist.resists[tower.towerComponent.attackType];
        if(this.hp < damage){
            this.hp = 0;
        } else {
            this.hp -= damage;
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Mob);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow0.js":
/*!************************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Shadow/MobShadow0.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");



class MobShadow0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 400);
        this.resist.host = this;
        this.bounty = 5;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobShadow0);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow1.js":
/*!************************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Shadow/MobShadow1.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");



class MobShadow1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 12000);
        this.resist.host = this;
        this.bounty = 150;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobShadow1);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow2.js":
/*!************************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Shadow/MobShadow2.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");



class MobShadow2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1300);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobShadow2);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow3.js":
/*!************************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Shadow/MobShadow3.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");



class MobShadow3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1600);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobShadow3);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Shadow/MobShadow4.js":
/*!************************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Shadow/MobShadow4.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");



class MobShadow4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2200);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobShadow4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Water/MobWater0.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Water/MobWater0.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");



class MobWater0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 300);
        this.resist.host = this;
        this.bounty = 4;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater0);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Water/MobWater1.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Water/MobWater1.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");



class MobWater1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1000);
        this.resist.host = this;
        this.bounty = 12;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater1);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Water/MobWater2.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Water/MobWater2.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");



class MobWater2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1200);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater2);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Water/MobWater3.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Water/MobWater3.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");



class MobWater3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 10000);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater3);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/Water/MobWater4.js":
/*!**********************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/Water/MobWater4.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");



class MobWater4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2300);
        this.resist.host = this;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Tilemap.js":
/*!*********************************************!*\
  !*** ./src/scripts/Objects/Game/Tilemap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_render_Tilemap_TilemapRenderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/render/Tilemap/TilemapRenderComponent */ "./src/scripts/Components/render/Tilemap/TilemapRenderComponent.js");
/* harmony import */ var _Components_logic_TilemapContainerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/logic/TilemapContainerComponent */ "./src/scripts/Components/logic/TilemapContainerComponent.js");




class Tilemap extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game){
        super(game);
        this.tilemapContainerComponent = new _Components_logic_TilemapContainerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.renderComponent = new _Components_render_Tilemap_TilemapRenderComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.tilemapContainerComponent);
        this.addComponent(this.renderComponent);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (Tilemap);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/AirTower.js":
/*!*****************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/AirTower.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Objects/Game/Towers/Tower.js");
/* harmony import */ var _Components_logic_Towers_AirTowerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/AirTowerComponent */ "./src/scripts/Components/logic/Towers/AirTowerComponent.js");



class AirTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_AirTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

    }

    onDestroy(){
        let allTowers = mainGame.state.gameMenuBottom.kids;
        for (let i=0; i < allTowers.length; i++){
            if (allTowers[i].towerComponent.attackType != "air"){
                if (allTowers[i].bodyComponent.distanceTo(this.bodyComponent) < 100)
                    allTowers[i].buffsComponent.cancelBuff("speed");
            }
        }
        
    }
}
/* harmony default export */ __webpack_exports__["default"] = (AirTower);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/EarthTower.js":
/*!*******************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/EarthTower.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Objects/Game/Towers/Tower.js");
/* harmony import */ var _Components_logic_Towers_EarthTowerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/EarthTowerComponent */ "./src/scripts/Components/logic/Towers/EarthTowerComponent.js");



class EarthTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_EarthTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (EarthTower);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/FireTower.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/FireTower.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Objects/Game/Towers/Tower.js");
/* harmony import */ var _Components_logic_Towers_FireTowerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/FireTowerComponent */ "./src/scripts/Components/logic/Towers/FireTowerComponent.js");



class FireTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_FireTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (FireTower);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/ShadowTower.js":
/*!********************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/ShadowTower.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Objects/Game/Towers/Tower.js");
/* harmony import */ var _Components_logic_Towers_ShadowTowerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/ShadowTowerComponent */ "./src/scripts/Components/logic/Towers/ShadowTowerComponent.js");



class ShadowTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_ShadowTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (ShadowTower);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/Tower.js":
/*!**************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/Tower.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class Tower extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game);
        
        this.bodyComponent = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, mainGame.tileSize, mainGame.tileSize);
        this.addComponent(this.bodyComponent);

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.fill(255, 0, 0);
            mainGame.p.rect(this.bodyComponent.x, this.bodyComponent.y, 40, 40);
            mainGame.p.fill(50);
            mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
    }

    onDestroy(){

        
    }

}
/* harmony default export */ __webpack_exports__["default"] = (Tower);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/TowerBuilder.js":
/*!*********************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/TowerBuilder.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_Towers_TowerBuilderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/TowerBuilderComponent */ "./src/scripts/Components/logic/Towers/TowerBuilderComponent.js");



class TowerBuilder extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, tilemap){
        super(game);
        this.towerBuilderComponent = new _Components_logic_Towers_TowerBuilderComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, tilemap);
        this.addComponent(this.towerBuilderComponent);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (TowerBuilder);

/***/ }),

/***/ "./src/scripts/Objects/Game/Towers/WaterTower.js":
/*!*******************************************************!*\
  !*** ./src/scripts/Objects/Game/Towers/WaterTower.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tower */ "./src/scripts/Objects/Game/Towers/Tower.js");
/* harmony import */ var _Components_logic_Towers_WaterTowerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/logic/Towers/WaterTowerComponent */ "./src/scripts/Components/logic/Towers/WaterTowerComponent.js");



class WaterTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_WaterTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (WaterTower);

/***/ }),

/***/ "./src/scripts/Objects/Game/WaveMaster.js":
/*!************************************************!*\
  !*** ./src/scripts/Objects/Game/WaveMaster.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_WaveMasterLogicComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/logic/WaveMasterLogicComponent */ "./src/scripts/Components/logic/WaveMasterLogicComponent.js");



class WaveMaster extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, tilemap){
        super(game);
        this.waveMasterLogicComponent = new _Components_logic_WaveMasterLogicComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, tilemap);
        this.addComponent(this.waveMasterLogicComponent);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (WaveMaster);

/***/ }),

/***/ "./src/scripts/Objects/GameObject.js":
/*!*******************************************!*\
  !*** ./src/scripts/Objects/GameObject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_logic_Buffs_BuffsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/logic/Buffs/BuffsComponent */ "./src/scripts/Components/logic/Buffs/BuffsComponent.js");


class GameObject {

    constructor(game){
        this.game = game;
        this.components = [];
        this.kids = [];
        this.parent = undefined;

        //buffs
        this.buffsComponent = new _Components_logic_Buffs_BuffsComponent__WEBPACK_IMPORTED_MODULE_0__["default"](this);
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
/* harmony default export */ __webpack_exports__["default"] = (GameObject);

/***/ }),

/***/ "./src/scripts/Objects/Menu/Button.js":
/*!********************************************!*\
  !*** ./src/scripts/Objects/Menu/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class Button extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, onAction){
        super(game);
        x -= 167/2;
        y -= 73/2;
        this.onAction = onAction;
        this.bodyComponent = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, 167, 73);
        this.addComponent(this.bodyComponent);

        let buttonImage = game.p.gimages["assets/ui/buttons_menu.png"];
        this.buttonImage_idle = game.p.crop(buttonImage, 0, 73, 167, 73);
        this.buttonImage_hover = game.p.crop(buttonImage, 0, 0, 167, 73);

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, this.buttonImage_idle);
        this.renderComponent.update = (delta)=> {
            if (this.bodyComponent.mouseHover()){
                this.renderComponent.image = this.buttonImage_hover;
            } else {
                this.renderComponent.image = this.buttonImage_idle;
            }
        }
        this.renderComponent.mousePressed = ()=>{
            if (this.bodyComponent.mouseHover())
                onAction();
        }
        this.addComponent(this.renderComponent);

    }
 
}
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/scripts/States/GameState.js":
/*!*****************************************!*\
  !*** ./src/scripts/States/GameState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/scripts/States/State.js");
/* harmony import */ var _Objects_Game_Tilemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Objects/Game/Tilemap */ "./src/scripts/Objects/Game/Tilemap.js");
/* harmony import */ var _Objects_Game_WaveMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Objects/Game/WaveMaster */ "./src/scripts/Objects/Game/WaveMaster.js");
/* harmony import */ var _Objects_Game_Mobs_Mob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Objects/Game/Mobs/Mob */ "./src/scripts/Objects/Game/Mobs/Mob.js");
/* harmony import */ var _Objects_GameObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Objects/GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Objects_Game_Towers_TowerBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Objects/Game/Towers/TowerBuilder */ "./src/scripts/Objects/Game/Towers/TowerBuilder.js");
/* harmony import */ var _Objects_Game_GameBottomMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Objects/Game/GameBottomMenu */ "./src/scripts/Objects/Game/GameBottomMenu.js");








class GameState extends _State__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game){
        super(game);
        game.money = 100;
        this.tilemap = new _Objects_Game_Tilemap__WEBPACK_IMPORTED_MODULE_1__["default"](game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new _Objects_Game_WaveMaster__WEBPACK_IMPORTED_MODULE_2__["default"](game, this.tilemap);
        this.addGameObject(this.waveMaster);
        // this.towerBuilder = new TowerBuilder(game, this.tilemap);
        // this.addGameObject(this.towerBuilder);
        this.gameMenuBottom = new _Objects_Game_GameBottomMenu__WEBPACK_IMPORTED_MODULE_6__["default"](game, this.tilemap);
        this.addGameObject(this.gameMenuBottom);
        
    }

}
/* harmony default export */ __webpack_exports__["default"] = (GameState);

/***/ }),

/***/ "./src/scripts/States/MenuState.js":
/*!*****************************************!*\
  !*** ./src/scripts/States/MenuState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/scripts/States/State.js");
/* harmony import */ var _Objects_Menu_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Objects/Menu/Button */ "./src/scripts/Objects/Menu/Button.js");



class MenuState extends _State__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game){
        super(game);
        let button1 = new _Objects_Menu_Button__WEBPACK_IMPORTED_MODULE_1__["default"](game, game.p.gameWidth/2, game.p.gameHeight/2-100, ()=> {
            this.startGame();
        });
        this.addGameObject(button1);
        let button2 = new _Objects_Menu_Button__WEBPACK_IMPORTED_MODULE_1__["default"](game, game.p.gameWidth/2, game.p.gameHeight/2+100, ()=> {
            this.startOptions();
        });
        this.addGameObject(button2);

    }

    startGame(){
        console.log("Game started");

    }

    startOptions(){
        console.log("Options start");

    }

}
/* harmony default export */ __webpack_exports__["default"] = (MenuState);

/***/ }),

/***/ "./src/scripts/States/State.js":
/*!*************************************!*\
  !*** ./src/scripts/States/State.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

    drawUpper(index){
        for (let i=0; i < this.gameObjects.length; i++){
            this.gameObjects[i].drawUpper(index);

        }

    }

}
/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvR2FtZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9BdHRhY2tTcGVlZEJ1ZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdWZmQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdWZmc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1cm5pbmdCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQ3Vyc2VCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvU2xvd0J1ZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWxsZXRzL0J1bGxldENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL01vYk1vdmluZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9Nb2JSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9BaXJUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9FYXJ0aFRvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0ZpcmVUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9TaGFkb3dUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9Ub3dlckJ1aWxkZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvV2F0ZXJUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1dhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9IUFJlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvVGlsZW1hcC9UaWxlbWFwUmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9CdWxsZXRzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvR2FtZUJvdHRvbU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvTW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3czLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3c0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9BaXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvV2F2ZU1hc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9NZW51L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL1N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDaUI7QUFDQTs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsMEJBQTBCO0FB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QUs7O0FBRTdCO0FBQ0E7QUFDQSwwQkFBMEIsNERBQU07QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQkFBMEIsNERBQU07QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ2Usd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDN0J4QjtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ2Usb0VBQUssRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL0dhbWVcIjtcclxuaW1wb3J0IE1lbnVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuXHJcbmxldCBnYW1lO1xyXG5cclxuY29uc3QgcyA9IChwKSA9PiB7XHJcblxyXG4gICAgbGV0IGxhc3RUaW1lO1xyXG4gICAgbGV0IGN1cnJUaW1lO1xyXG5cclxuICAgIHAuY3JvcCA9IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoKXtcclxuICAgICAgICB2YXIgY3JvcHBlZCA9IHAuY3JlYXRlSW1hZ2UodywgaCk7XHJcbiAgICAgICAgY3JvcHBlZC5jb3B5KGltYWdlLCB4LCB5LCB4ICsgdywgeSArIGgsIDAsIDAsIHggKyB3LCB5ICsgaClcclxuICAgICAgICByZXR1cm4gY3JvcHBlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5pbWFnZXNBcnJheSA9IFtcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIlxyXG4gICAgXTtcclxuICAgIHAuc291bmRzQXJyYXkgPSBbXCJhc3NldHMvSnVtcDMud2F2XCJdO1xyXG5cclxuICAgIHAuZ2ltYWdlcyA9IHt9O1xyXG4gICAgcC5nc291bmRzID0ge307XHJcblxyXG4gICAgcC5nYW1lV2lkdGggPSA5NjA7XHJcbiAgICBwLmdhbWVIZWlnaHQgPSA3MjA7XHJcblxyXG4gICAgcC5sb2FkR2FtZUltYWdlID0gZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICBwLmdpbWFnZXNbc3RyXSA9IHAubG9hZEltYWdlKHN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubG9hZEdhbWVTb3VuZCA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5nc291bmRzW3N0cl0gPSBwLmxvYWRTb3VuZChzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLmltYWdlc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZUltYWdlKHAuaW1hZ2VzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLnNvdW5kc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZVNvdW5kKHAuc291bmRzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gcC5jcmVhdGVDYW52YXMocC5nYW1lV2lkdGgsIHAuZ2FtZUhlaWdodCk7XHJcblxyXG4gICAgICAgIGxhc3RUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBjdXJyVGltZSA9IDA7XHJcblxyXG4gICAgICAgIGdhbWUgPSBuZXcgR2FtZShwKTtcclxuICAgICAgICB3aW5kb3cubWFpbkdhbWUgPSBnYW1lO1xyXG4gICAgICAgIGdhbWUuc2V0U3RhdGUobmV3IEdhbWVTdGF0ZShnYW1lKSk7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHAuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBsZXQgZGVsdGEgPSAoY3VyclRpbWUgLSBsYXN0VGltZSkvMTAwMDtcclxuXHJcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDApO1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEgPCAwLjIpXHJcbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIGdhbWUuZHJhdyhwKTtcclxuICAgICAgICBcclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lO1xyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHAubW91c2VDbGlja2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLm1vdXNlUHJlc3NlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZURyYWdnZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGdhbWVwNSA9IG5ldyBwNShzLCBcIm1haW5cIik7XHJcblxyXG5cclxuIiwiY2xhc3MgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQm9keUNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHgsIHksIHcsIGgpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlSG92ZXIoKXtcclxuICAgICAgICBsZXQgbW91c2VYID0gdGhpcy5ob3N0LmdhbWUucC5tb3VzZVg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VZO1xyXG4gICAgICAgIGlmIChtb3VzZVggPj0gdGhpcy54ICYmIG1vdXNlWCA8IHRoaXMueCt0aGlzLncpe1xyXG4gICAgICAgICAgICBpZiAobW91c2VZID49IHRoaXMueSAmJiBtb3VzZVkgPCB0aGlzLnkrdGhpcy5oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvdmVybGFwcyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBpZiAodGhpcy54IDwgYm9keUNvbXBvbmVudC54ICsgYm9keUNvbXBvbmVudC53ICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMudyA+IGJvZHlDb21wb25lbnQueCAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgPCBib2R5Q29tcG9uZW50LnkgKyBib2R5Q29tcG9uZW50LmggJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oID4gYm9keUNvbXBvbmVudC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUbyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBsZXQgazEgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LngtdGhpcy54KTtcclxuICAgICAgICBsZXQgazIgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LnktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlSG92ZXIoeCwgeSl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHk7XHJcbiAgICAgICAgaWYgKG1vdXNlWCA+PSB0aGlzLnggJiYgbW91c2VYIDwgdGhpcy54K3RoaXMudyl7XHJcbiAgICAgICAgICAgIGlmIChtb3VzZVkgPj0gdGhpcy55ICYmIG1vdXNlWSA8IHRoaXMueSt0aGlzLmgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZVRvUG9pbnQoeCwgeSl7XHJcbiAgICAgICAgbGV0IGsxID0gTWF0aC5hYnMoeC10aGlzLngpO1xyXG4gICAgICAgIGxldCBrMiA9IE1hdGguYWJzKHktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmdsZVRvKGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IGJvZHlDb21wb25lbnQueCAtIHRoaXMueDtcclxuICAgICAgICBsZXQgeURpc3QgPSBib2R5Q29tcG9uZW50LnkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUb1BvaW50KHgsIHkpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IHggLSB0aGlzLng7XHJcbiAgICAgICAgbGV0IHlEaXN0ID0geSAtIHRoaXMueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9keUNvbXBvbmVudDsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCJcclxuXHJcbmNsYXNzIEF0dGFja1NwZWVkQnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImF0dGFja1NwZWVkQXVyYVwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkIC09IHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCAqIDAuMTUqdGhpcy5idWZmbHZsO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCArPSB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKiAwLjE1KnRoaXMuYnVmZmx2bDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRhY2tTcGVlZEJ1ZmY7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1ZmZDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0eXBlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYnVmZmx2bCA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZDb21wb25lbnQ7IiwiaW1wb3J0IEJ1cm5pbmdCdWZmIGZyb20gXCIuL0J1cm5pbmdCdWZmXCI7XHJcbmltcG9ydCBDdXJzZUJ1ZmYgZnJvbSBcIi4vQ3Vyc2VCdWZmXCI7XHJcbmltcG9ydCBBdHRhY2tTcGVlZEJ1ZmYgZnJvbSBcIi4vQXR0YWNrU3BlZWRCdWZmXCI7XHJcbmltcG9ydCBTbG93QnVmZiBmcm9tIFwiLi9TbG93QnVmZlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJidXJuXCI6IEJ1cm5pbmdCdWZmLFxyXG4gICAgXCJjdXJzZVwiOiBDdXJzZUJ1ZmYsXHJcbiAgICBcInNwZWVkXCI6IEF0dGFja1NwZWVkQnVmZixcclxuICAgIFwic2xvd1wiOiBTbG93QnVmZlxyXG5cclxufTsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVmZnMgZnJvbSBcIi4vQnVmZnNcIjtcclxuXHJcbmNsYXNzIEJ1ZmZzQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5idWZmcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnVmZkNsYXNzZXMgPSBCdWZmcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlCdWZmKHR5cGUsIGJ1ZmZsdmwpe1xyXG4gICAgICAgIGxldCBidWZmQ29tcG9uZW50Q2xhc3MgPSB0aGlzLmJ1ZmZDbGFzc2VzW3R5cGVdO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgYnVmZkNvbXBvbmVudENsYXNzKHRoaXMuaG9zdCk7XHJcbiAgICAgICAgY29tcG9uZW50LmJ1ZmZsdmwgPSBidWZmbHZsO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hdHRhY2htZW50c1t0eXBlXSA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IGJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QnVmZih0eXBlLCBidWZmbHZsKXtcclxuICAgICAgICBpZiAodGhpcy5idWZmc1t0eXBlXSAhPT0gYnVmZmx2bCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZzW3R5cGVdID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmIChidWZmbHZsID4gdGhpcy5idWZmc1t0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1ZmYodHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxCdWZmKHR5cGUpe1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmhvc3QuYXR0YWNobWVudHNbdHlwZV07XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb21wb25lbnQub2ZmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZW1vdmVDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVmZnNDb21wb25lbnQ7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVybmluZ0J1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImJ1cm5cIik7XHJcbiAgICAgICAgdGhpcy5idXJuVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWUgPSA0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGxldCBkYW1hZ2VQZXJTZWNvbmQgPSBkZWx0YSAqIHRoaXMuaG9zdC5tYXhIcCAqICgwLjAyICogdGhpcy5idWZmbHZsKTtcclxuICAgICAgICBpZih0aGlzLmhvc3QuaHAgPCBkYW1hZ2VQZXJTZWNvbmQpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaHAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5ocCAtPSBkYW1hZ2VQZXJTZWNvbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJ1cm5UaW1lciA+PSB0aGlzLmJ1cm5UaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXJuaW5nQnVmZjsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBDdXJzZUJ1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImN1cnNlXCIpO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJzZVRpbWUgPSA0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIGxldCByZXNpc3RzID0gdGhpcy5ob3N0LnJlc2lzdC5yZXNpc3RzO1xyXG4gICAgICAgIGZvcihsZXQgayBpbiByZXNpc3RzKXtcclxuICAgICAgICAgICAgcmVzaXN0c1trXSArPSAwLjEgKiB0aGlzLmJ1ZmZsdmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5jdXJzZVRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNlVGltZXIgPj0gdGhpcy5jdXJzZVRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZih0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICBsZXQgcmVzaXN0cyA9IHRoaXMuaG9zdC5yZXNpc3QucmVzaXN0cztcclxuICAgICAgICBmb3IobGV0IGsgaW4gcmVzaXN0cyl7XHJcbiAgICAgICAgICAgIHJlc2lzdHNba10gLT0gMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3Vyc2VCdWZmOyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNsb3dCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwic2xvd1wiKTtcclxuICAgICAgICB0aGlzLnNsb3dUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZSA9IDQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkID0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkIC0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkICogMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xvd1RpbWVyID49IHRoaXMuc2xvd1RpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZih0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQgPSB0aGlzLnN0YXJ0VmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbG93QnVmZjsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVsbGV0Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0YXJnZXQsIG1vYnMpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubW9icyA9IG1vYnM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDM1MDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIGxldCB0Qm9keSA9IHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQuYW5nbGVUb1BvaW50KHRCb2R5LngrdEJvZHkudy8yLCB0Qm9keS55K3RCb2R5LmgvMik7XHJcbiAgICAgICAgYm9keS54ICs9IE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBib2R5LnkgKz0gTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGlmKGJvZHkub3ZlcmxhcHModEJvZHkpKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmhvc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZWNlaXZlRGFtYWdlKHRoaXMuaG9zdC50b3dlciwgMSk7XHJcbiAgICAgICAgICAgIGxldCBhdHRhY2tUb3dlckMgPSB0aGlzLmhvc3QudG93ZXIudG93ZXJDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcImZpcmVcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwiYnVyblwiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJ3YXRlclwiKXtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFyZ2V0LmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJzbG93XCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCAxMDAgKyAxMDAgKiAoMC4yICogYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JzW2ldLmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJzbG93XCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJzaGFkb3dcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwiY3Vyc2VcIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwiZWFydGhcIil7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRhcmdldCAhPT0gdGhpcy5tb2JzW2ldICYmIHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCAxMDAgKyAxMDAgKiAoMC4yICogYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JzW2ldLnJlY2VpdmVEYW1hZ2UodGhpcy5ob3N0LnRvd2VyLCAwLjIwKmF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iTW92aW5nQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCwgcm91dGUsIHRpbGVTaXplLCBtb3ZlbWVudFNwZWVkKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gbW92ZW1lbnRTcGVlZDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNoaWZ0ID0gKHRoaXMudGlsZVNpemUqMiktdGhpcy50aWxlU2l6ZS10aGlzLmJvZHlDb21wb25lbnQudyowLjU7XHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnggKz0gdGhpcy5zaGlmdDtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueSArPSB0aGlzLnNoaWZ0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXh0VGlsZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpe1xyXG4gICAgICAgIGxldCB0aWxlID0gdGhpcy5yb3V0ZVt0aGlzLmN1cnJlbnRSb3V0ZUluZGV4KytdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSB0aWxlO1xyXG4gICAgICAgIGlmICh0aWxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB4RGlzdCA9ICh0aWxlLmoqdGhpcy50aWxlU2l6ZSkgLSAodGhpcy5ib2R5Q29tcG9uZW50LnggLSB0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgbGV0IHlEaXN0ID0gKHRpbGUuaSp0aGlzLnRpbGVTaXplKSAtICh0aGlzLmJvZHlDb21wb25lbnQueSAtIHRoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpOy8vICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLnZ4ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiB0aGlzLm1vdmVtZW50U3BlZWQ7XHJcbiAgICAgICAgdGhpcy52eSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy5tb3ZlbWVudFNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueCArPSB0aGlzLnZ4ICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnkgKz0gdGhpcy52eSAqIGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgcG9pbnR4ID0gdGhpcy5jdXJyZW50VGlsZS5qKnRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgICAgIGxldCBwb2ludHkgPSB0aGlzLmN1cnJlbnRUaWxlLmkqdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSB0aGlzLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUb1BvaW50KHBvaW50eCt0aGlzLnNoaWZ0LCBwb2ludHkrdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgMTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYk1vdmluZ0NvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDEuMiwgMC45LCAwLjUsIDAuNywgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpclJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMC45LCAwLjcsIDEuMiwgMC41LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFydGhSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMC41LCAxLjIsIDAuNywgMC45LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyZVJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGZpcmVSZXNpc3QsIHdhdGVyUmVzaXN0LCBhaXJSZXNpc3QsIGVhcnRoUmVzaXN0LCBzaGFkb3dSZXNpc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMucmVzaXN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImZpcmVcIl0gPSBmaXJlUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcIndhdGVyXCJdID0gd2F0ZXJSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wiYWlyXCJdID0gYWlyUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImVhcnRoXCJdID0gZWFydGhSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wic2hhZG93XCJdID0gc2hhZG93UmVzaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Jlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAxLCAxLCAxLCAxLCAwLjUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdGVyUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuNywgMC41LCAwLjksIDEuMiwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBbXHJcbiAgICAgICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAyLCAyLCAyXSxcclxuICAgICAgICAgICAgWzIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMSwgMywgMiwgMiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAzLCAyLCAyLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAzLCAzLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDAsIDAsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSA0MDtcclxuICAgICAgICBtYWluR2FtZS50aWxlU2l6ZSA9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgbWFpbkdhbWUudGlsZVNpemUgPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMuaG9zdC5nYW1lLnRpbGVTaXplID0gNDA7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJhaXJcIiwgMC41LCA3NSwgMzUwKTtcclxuICAgICAgICB0aGlzLnRpbWVyQXVyYSA9IDA7XHJcbiAgICAgICAgdGhpcy5hdXJhVGltZSA9IDAuMjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50aW1lckF1cmEgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJBdXJhID49IHRoaXMuYXVyYVRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQXVyYSAtPSB0aGlzLmF1cmFUaW1lO1xyXG4gICAgICAgICAgICBsZXQgYWxsVG93ZXJzID0gbWFpbkdhbWUuc3RhdGUuZ2FtZU1lbnVCb3R0b20ua2lkcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgYWxsVG93ZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0udG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSAhPSBcImFpclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLmhvc3QuYm9keUNvbXBvbmVudCkgPCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvd2Vyc1tpXS5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwic3BlZWRcIiwgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjAyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBFYXJ0aFRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJlYXJ0aFwiLCAxLjUsIDIwMCwgMjUwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDc7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFYXJ0aFRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRmlyZVRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJmaXJlXCIsIDAuOCwgMTIwLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wMztcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Rvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJzaGFkb3dcIiwgMSwgMTIwLCA0MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMCw1O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93VG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL1NoYWRvd1Rvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL1dhdGVyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvRWFydGhUb3dlclwiO1xyXG5cclxuY2xhc3MgVG93ZXJCdWlsZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdClcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmhvc3QuZ2FtZS5wO1xyXG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihwLm1vdXNlWS90aGlzLnRpbGVTaXplKTtcclxuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IocC5tb3VzZVgvdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgbGV0IHRvd2VyID0gbmV3IEVhcnRoVG93ZXIodGhpcy5ob3N0LmdhbWUsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodG93ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyQnVpbGRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvQnVsbGV0cy9CdWxsZXRcIjtcclxuXHJcbmNsYXNzIFRvd2VyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYXR0YWNrVHlwZSwgYXR0YWNrU3BlZWQsIGF0dGFja0RhbWFnZSwgYXR0YWNrUmFuZ2Upe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1R5cGUgPSBhdHRhY2tUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkID0gYXR0YWNrU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgPSBhdHRhY2tEYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tSYW5nZSA9IGF0dGFja1JhbmdlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0xldmVsID0gMTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLm1vYnMgPSBtYWluR2FtZS5zdGF0ZS53YXZlTWFzdGVyLmtpZHM7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG93ZXJDb3N0ID0gNTA7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNDb3N0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlDb3N0ID0gMjAwO1xyXG4gICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5VG9GaXJlKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciArPSBkZWx0YTtcclxuICAgICAgICAgICAgaWYodGhpcy5hdHRhY2tUaW1lciA+PSB0aGlzLmF0dGFja1NwZWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5VG9GaXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgLT0gdGhpcy5hdHRhY2tTcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvRmlyZSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob3N0LmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudCk8dGhpcy5hdHRhY2tSYW5nZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRTcGF3bih0aGlzLm1vYnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWxsZXRTcGF3bihtb2Ipe1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IG5ldyBCdWxsZXQodGhpcy5ob3N0LmdhbWUsIGJvZHkueCtib2R5LncvMiwgYm9keS55K2JvZHkuaC8yLCB0aGlzLmhvc3QsIG1vYiwgdGhpcy5tb2JzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQoYnVsbGV0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwid2F0ZXJcIiwgMS4yLCA5MCwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDY7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBNb2IgZnJvbSBcIi4uLy4uL09iamVjdHMvR2FtZS9Nb2JzL01vYlwiO1xyXG5cclxuY2xhc3MgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICB0aGlzLndhdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYyA9IGhvc3QuZ2FtZS5jb25zdGFudHM7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8wLCAxNSwgMC42KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8wLCAxNSwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8wLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMCwgMTUsIDAuOCk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzAsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzEsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8xLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzEsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzEsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMSwgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8yLCAxMiwgMC4zKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8yLCAxMiwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMiwgMTIsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzIsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8yLCAyLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18zLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMywgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMywgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8zLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMywgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfNCwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV180LCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfNCwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl80LCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV80LCAyLCAxKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDsgLy8wIC0gd2FpdCB8IDEgLSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1N0YXJ0V2F2ZSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lck1vYlNwYXduID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1NwYXduTW9iID0gMS4yO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlID0gdGhpcy5maW5kUm91dGUodGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUobWFwKXtcclxuICAgICAgICBsZXQgZHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSB7aTowLCBqOjE3LCBkOmR2YWx1ZX07XHJcbiAgICAgICAgbGV0IGVuZCA9IHtpOjE0LCBqOjh9O1xyXG4gICAgICAgIGxldCBtYXJrZWQgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIG1hcmtlZC5wdXNoKHN0YXJ0KTtcclxuICAgICAgICBjaGVja0Fyb3VuZE1hcmtlZChkdmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQXJvdW5kTWFya2VkKGQpe1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uaSA9PSBlbmQuaSAmJiBtYXJrZWRbaV0uaiA9PSBlbmQuail7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChtYXJrZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2sgZDpcIitkK1wiIG1kOlwiK21hcmtlZFtpXS5kK1wiIG1pOlwiK21hcmtlZFtpXS5pK1wiIG1qOlwiK21hcmtlZFtpXS5qKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uZCA9PSBkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ29vZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrQXJvdW5kVGlsZShtYXJrZWRbaV0sIGQrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbWFya0Fyb3VuZFRpbGUodGlsZSwgbmV3ZCl7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLTEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pKzEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmotMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmorMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKG5ld2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrKGksIGosIG5ld2Qpe1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBtYXJrZWQubGVuZ3RoOyBpaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaWldLmkgPT0gaSAmJiBtYXJrZWRbaWldLmogPT0gail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZC5wdXNoKHtpOmksIGo6aiwgZDpuZXdkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaStcIiBcIitqK1wiIFwiK25ld2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1hcmtlZCk7XHJcbiAgICAgICAgbGV0IGRtYXggPSBwYXRoWzBdLmQ7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGRtYXgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1heC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoZG1heCAhPSAwKTtcclxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVXYXZlKHR5cGUsIGNvdW50LCB0aW1lKXtcclxuICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgIGxldCBhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZXMucHVzaChvKTtcclxuICAgICAgICBvLmEgPSBhO1xyXG4gICAgICAgIG8udGltZSA9IHRpbWU7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgYS5wdXNoKHR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vYigpe1xyXG4gICAgICAgIGxldCBNb2JDbGFzcyA9IHRoaXMuY3VycmVudFdhdmVUb1NwYXduLnNoaWZ0KCk7XHJcbiAgICAgICAgLy9sZXQgbW9iID0gbmV3IG1vYlR5cGUodGhpcy5ob3N0LmdhbWUsIHgsIHksIHJvKVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBuZXcgTW9iQ2xhc3ModGhpcy5ob3N0LmdhbWUsIDE3KnNpemUsIC1zaXplLCBzaXplLCB0aGlzLnJvdXRlKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodGVzdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bhd25pbmdTdGF0ZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCs9ZGVsdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyV2F2ZVN0YXJ0ID49IHRoaXMudGltZVRvU3RhcnRXYXZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJXYXZlU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCB3YXZlT2JqZWN0ID0gdGhpcy53YXZlc1t0aGlzLmN1cnJlbnRXYXZlSW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlVG9TcGF3biA9IHdhdmVPYmplY3QuYTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRvU3Bhd25Nb2IgPSB3YXZlT2JqZWN0LnRpbWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgIGlmICh0aGlzLnNwYXduaW5nU3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlVG9TcGF3bi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3bis9ZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lck1vYlNwYXduID49IHRoaXMudGltZVRvU3Bhd25Nb2Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk1vYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9zdC5raWRzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25pbmdTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEhQUmVuZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gYm9keUNvbXBvbmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgaHAgPSB0aGlzLmhvc3QuaHA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLm5vU3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGxldCBsaWZlQmFyV2lkdGggPSB0aGlzLmhvc3QuaHAgKiB0aGlzLmJvZHlDb21wb25lbnQudyAvIHRoaXMuaG9zdC5tYXhIcDtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5maWxsKDAsIDEwMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnktMTUsIHRoaXMuYm9keUNvbXBvbmVudC53LCA3KTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5maWxsKDAsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnktMTUsIGxpZmVCYXJXaWR0aCwgNyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5ub0ZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIDcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFBSZW5kZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQsIGltYWdlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGJvZHlDb21wb25lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYm9keUNvbXBvbmVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZShpbWFnZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMuYm9keUNvbXBvbmVudC53LCB0aGlzLmJvZHlDb21wb25lbnQuaCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQubWFwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGhvc3QuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSB0aGlzLnRleHR1cmUuZ2V0KDAsIDAsIDQwLCA0MCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLm1hcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgaiA8IHRoaXMubWFwW2ldLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5ob3N0LmdhbWUucDtcclxuICAgICAgICAgICAgICAgIHAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMubWFwW2ldW2pdKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHAuZmlsbCgwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwLnJlY3Qoaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMuZ3Jhc3MsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMTAwLCA1MCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucmVjdChqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnJlY3Qoaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgxMDAsIDUwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwUmVuZGVyQ29tcG9uZW50OyIsImltcG9ydCBNb2JGaXJlMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUwXCI7XHJcbmltcG9ydCBNb2JXYXRlcjAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgwXCI7XHJcbmltcG9ydCBNb2JBaXIwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cwXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMVwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMVwiO1xyXG5pbXBvcnQgTW9iRWFydGgxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMVwiO1xyXG5pbXBvcnQgTW9iQWlyMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMVwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MVwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTJcIjtcclxuaW1wb3J0IE1vYkVhcnRoMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDJcIjtcclxuaW1wb3J0IE1vYldhdGVyMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjJcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzJcIjtcclxuaW1wb3J0IE1vYkFpcjIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjJcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUzXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgzXCI7XHJcbmltcG9ydCBNb2JXYXRlcjMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzXCI7XHJcbmltcG9ydCBNb2JTaGFkb3czIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3czXCI7XHJcbmltcG9ydCBNb2JBaXIzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNFwiO1xyXG5pbXBvcnQgTW9iRWFydGg0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoNFwiO1xyXG5pbXBvcnQgTW9iV2F0ZXI0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNFwiO1xyXG5pbXBvcnQgTW9iU2hhZG93NCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NFwiO1xyXG5pbXBvcnQgTW9iQWlyNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CX0ZJUkVfMDogTW9iRmlyZTAsXHJcbiAgICBNT0JfRUFSVEhfMDogTW9iRWFydGgwLCBcclxuICAgIE1PQl9XQVRFUl8wOiBNb2JXYXRlcjAsXHJcbiAgICBNT0JfU0hBRE9XXzA6IE1vYlNoYWRvdzAsXHJcbiAgICBNT0JfQUlSXzA6IE1vYkFpcjAsXHJcblxyXG4gICAgTU9CX0ZJUkVfMTogTW9iRmlyZTEsXHJcbiAgICBNT0JfRUFSVEhfMTogTW9iRWFydGgxLFxyXG4gICAgTU9CX1dBVEVSXzE6IE1vYldhdGVyMSxcclxuICAgIE1PQl9TSEFET1dfMTogTW9iU2hhZG93MSxcclxuICAgIE1PQl9BSVJfMTogTW9iQWlyMSxcclxuXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9FQVJUSF8yOiBNb2JFYXJ0aDIsXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1NIQURPV18yOiBNb2JTaGFkb3cyLFxyXG4gICAgTU9CX0FJUl8yOiBNb2JBaXIyLFxyXG5cclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0VBUlRIXzM6IE1vYkVhcnRoMyxcclxuICAgIE1PQl9XQVRFUl8zOiBNb2JXYXRlcjMsXHJcbiAgICBNT0JfU0hBRE9XXzM6IE1vYlNoYWRvdzMsXHJcbiAgICBNT0JfQUlSXzM6IE1vYkFpcjMsXHJcblxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX1dBVEVSXzQ6IE1vYldhdGVyNCxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNFxyXG5cclxuICAgIC8qXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRklSRV81OiBNb2JGaXJlNSxcclxuICAgIE1PQl9GSVJFXzY6IE1vYkZpcmU2LFxyXG4gICAgTU9CX0ZJUkVfNzogTW9iRmlyZTcsXHJcbiAgICBNT0JfRklSRV84OiBNb2JGaXJlOCxcclxuICAgIE1PQl9GSVJFXzk6IE1vYkZpcmU5LFxyXG4gICAgTU9CX0VBUlRIXzI6IE1vYkVhcnRoMixcclxuICAgIE1PQl9FQVJUSF8zOiBNb2JFYXJ0aDMsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX0VBUlRIXzU6IE1vYkVhcnRoNSxcclxuICAgIE1PQl9FQVJUSF82OiBNb2JFYXJ0aDYsXHJcbiAgICBNT0JfRUFSVEhfNzogTW9iRWFydGg3LFxyXG4gICAgTU9CX0VBUlRIXzg6IE1vYkVhcnRoOCxcclxuICAgIE1PQl9FQVJUSF85OiBNb2JFYXJ0aDksXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1dBVEVSXzM6IE1vYldhdGVyMyxcclxuICAgIE1PQl9XQVRFUl80OiBNb2JXYXRlcjQsXHJcbiAgICBNT0JfV0FURVJfNTogTW9iV2F0ZXI1LFxyXG4gICAgTU9CX1dBVEVSXzY6IE1vYldhdGVyNixcclxuICAgIE1PQl9XQVRFUl83OiBNb2JXYXRlcjcsXHJcbiAgICBNT0JfV0FURVJfODogTW9iV2F0ZXI4LFxyXG4gICAgTU9CX1dBVEVSXzk6IE1vYldhdGVyOSxcclxuICAgIE1PQl9TSEFET1dfMjogTW9iU2hhZG93MixcclxuICAgIE1PQl9TSEFET1dfMzogTW9iU2hhZG93MyxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9TSEFET1dfNTogTW9iU2hhZG93NSxcclxuICAgIE1PQl9TSEFET1dfNjogTW9iU2hhZG93NixcclxuICAgIE1PQl9TSEFET1dfNzogTW9iU2hhZG93NyxcclxuICAgIE1PQl9TSEFET1dfODogTW9iU2hhZG93OCxcclxuICAgIE1PQl9TSEFET1dfOTogTW9iU2hhZG93OSxcclxuICAgIE1PQl9BSVJfMjogTW9iQWlyMixcclxuICAgIE1PQl9BSVJfMzogTW9iQWlyMyxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNCxcclxuICAgIE1PQl9BSVJfNTogTW9iQWlyNSxcclxuICAgIE1PQl9BSVJfNjogTW9iQWlyNixcclxuICAgIE1PQl9BSVJfNzogTW9iQWlyNyxcclxuICAgIE1PQl9BSVJfODogTW9iQWlyOCxcclxuICAgIE1PQl9BSVJfOTogTW9iQWlyOSwqL1xyXG5cclxufTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocCl7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gQ29uc3RhbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5lYXJJbnRlcnBvbGF0aW9uKGZ4MSwgZngyLCB4MSwgeCwgeDIpe1xyXG4gICAgICAgIGlmICh4MiA8IHgxKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4ID49IHgyKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4IDw9IHgxKSByZXR1cm4gZngxO1xyXG4gICAgICAgIHJldHVybiBmeDErKCBmeDIgLSBmeDEgKSooeCAtIHgxKS8oeDIgLSB4MSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1bGxldENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9CdWxsZXRzL0J1bGxldENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdG93ZXIsIG1vYiwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb2I7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgMTAsIDEwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMudG93ZXIgPSB0b3dlcjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+IHtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueC01LCB0aGlzLmJvZHlDb21wb25lbnQueS01LCB0aGlzLmJvZHlDb21wb25lbnQudywgdGhpcy5ib2R5Q29tcG9uZW50LmgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0Q29tcG9uZW50ID0gbmV3IEJ1bGxldENvbXBvbmVudCh0aGlzLCB0aGlzLnRhcmdldCwgbW9icyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5idWxsZXRDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBaXJUb3dlciBmcm9tIFwiLi9Ub3dlcnMvQWlyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuXHJcbmNsYXNzIEdhbWVCb3R0b21NZW51IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLnRvd2VyQnV0dG9uc0JvZGllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IEJvZHlDb21wb25lbnQobnVsbCwgNTUgKyBpKnRpbGVTaXplICsgMjAqaSArIDE0KnRpbGVTaXplLCAxNip0aWxlU2l6ZSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbmRleGVzID0ge1xyXG4gICAgICAgICAgICAwOiBBaXJUb3dlcixcclxuICAgICAgICAgICAgMTogRWFydGhUb3dlcixcclxuICAgICAgICAgICAgMjogRmlyZVRvd2VyLFxyXG4gICAgICAgICAgICAzOiBXYXRlclRvd2VyLFxyXG4gICAgICAgICAgICA0OiBTaGFkb3dUb3dlclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJJID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJKID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpIHtcclxuICAgICAgICBzdXBlci5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmdhbWUucDtcclxuICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRleHR1cmUsIDAsIDE1KjQwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDAsIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS55LCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgcC50ZXh0KG1haW5HYW1lLm1vbmV5LnRvU3RyaW5nKCksIHAuZ2FtZVdpZHRoLzItMTQsIHAuZ2FtZUhlaWdodC0xMDAsIDEwMCwgMjUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpIHtcclxuICAgICAgICBzdXBlci5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2FtZS5wLm1vdXNlWDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBpZiAoeSA8IDE1KnRpbGVTaXplKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJySiA9IE1hdGguZmxvb3IoeC90aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckkgPSBNYXRoLmZsb29yKHkvdGlsZVNpemUpO1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC54ID09IHRoaXMuY3VyckoqdGlsZVNpemUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMua2lkc1tpXS5ib2R5Q29tcG9uZW50LnkgPT0gdGhpcy5jdXJySSp0aWxlU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdGhpcy5raWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDApIHsgLy9ub3RoaW5nXHJcblxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKXsgLy90b3dlcnNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ubW91c2VIb3Zlcih4LCB5KSAmJiB0aGlzLnRyeUJ1eSg1MCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG93ZXIgPSBuZXcgdGhpcy50b3dlckluZGV4ZXNbaV0odGhpcywgdGhpcy5jdXJySip0aWxlU2l6ZSwgdGhpcy5jdXJySSp0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHRvd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRvd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDIpeyAvL3VwZ3JhZGVzLCBkZXN0cm95XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzWzBdLm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlCdXkodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1sxXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5QnV5KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCArPSAyMDAgKiBNYXRoLmZsb29yKE1hdGgucG93KDEuNSwgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1syXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0Lm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRyeUJ1eShwcmljZSl7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lLm1vbmV5ID49IHByaWNlKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm90dG9tTWVudTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTcwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNzAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDEzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE3MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMTQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE3MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMTkwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyNCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE3MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMjQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjQ7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDIwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDcwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCA3NTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGg0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwKTtcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDE2O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUyIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMTEwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxODAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlNCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDMwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTW9iTW92aW5nQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL01vYk1vdmluZ0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEhQUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9IUFJlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgc2l6ZSwgdGlsZVNpemUsIHJvdXRlLCB0dXJuVGltZSwgcmVzaXN0LCBocCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLm1heEhwID0gaHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IGhwO1xyXG4gICAgICAgIHRoaXMucmVzaXN0ID0gcmVzaXN0O1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBzaXplLCBzaXplKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JNb3ZpbmdDb21wb25lbnQgPSBuZXcgTW9iTW92aW5nQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgcm91dGUsIHRpbGVTaXplLCB0dXJuVGltZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5tb2JNb3ZpbmdDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmhwUmVuZGVyQ29tcG9uZW50ID0gbmV3IEhQUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5ocFJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgaWYodGhpcy5ocCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSB0aGlzLmJvdW50eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZSh0b3dlciwgY29lZil7XHJcbiAgICAgICAgbGV0IHB1cmVEYW1hZ2UgPSB0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tEYW1hZ2UqY29lZjtcclxuICAgICAgICBsZXQgZGFtYWdlID0gcHVyZURhbWFnZSAqIHRoaXMucmVzaXN0LnJlc2lzdHNbdG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZV07XHJcbiAgICAgICAgaWYodGhpcy5ocCA8IGRhbWFnZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNTAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA1O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxNTAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDEyMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDE1MDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3cyIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3czIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3c0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93NDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTIwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEyO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyNCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXI0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUaWxlbWFwUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL3JlbmRlci9UaWxlbWFwL1RpbGVtYXBSZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvbG9naWMvVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCA9IG5ldyBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFRpbGVtYXBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgQWlyVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0FpclRvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBaXJUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IEFpclRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgYWxsVG93ZXJzID0gbWFpbkdhbWUuc3RhdGUuZ2FtZU1lbnVCb3R0b20ua2lkcztcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhbGxUb3dlcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgIT0gXCJhaXJcIil7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLmJvZHlDb21wb25lbnQpIDwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvd2Vyc1tpXS5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKFwic3BlZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWlyVG93ZXI7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBFYXJ0aFRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9FYXJ0aFRvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBFYXJ0aFRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgRWFydGhUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIEVhcnRoVG93ZXI7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBGaXJlVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0ZpcmVUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRmlyZVRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgRmlyZVRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaXJlVG93ZXI7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Rvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgU2hhZG93VG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRvd1Rvd2VyOyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUb3dlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IG5ldyBCb2R5Q29tcG9uZW50KHRoaXMsIHgsIHksIG1haW5HYW1lLnRpbGVTaXplLCBtYWluR2FtZS50aWxlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5ib2R5Q29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZHJhdyA9ICgpPT57XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCA0MCwgNDApO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoNTApO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLnRleHQodGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCtcIiBcIit0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgLHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRvd2VyQnVpbGRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUb3dlckJ1aWxkZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnRvd2VyQnVpbGRlckNvbXBvbmVudCA9IG5ldyBUb3dlckJ1aWxkZXJDb21wb25lbnQodGhpcywgdGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckJ1aWxkZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyQnVpbGRlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IFdhdGVyVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdGVyVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBXYXRlclRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclRvd2VyOyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvbG9naWMvV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXZlTWFzdGVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy53YXZlTWFzdGVyTG9naWNDb21wb25lbnQgPSBuZXcgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50KHRoaXMsIHRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMud2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhdmVNYXN0ZXI7IiwiaW1wb3J0IEJ1ZmZzQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMua2lkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvL2J1ZmZzXHJcbiAgICAgICAgdGhpcy5idWZmc0NvbXBvbmVudCA9IG5ldyBCdWZmc0NvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzID0ge307XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0uZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRDb21wb25lbnQoYyl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGMpe1xyXG4gICAgICAgIHRoaXMua2lkcy5wdXNoKGMpO1xyXG4gICAgICAgIGMucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVBhcmVudCgpe1xyXG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb21wb25lbnQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGMpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMua2lkcy5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgb25BY3Rpb24pe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHggLT0gMTY3LzI7XHJcbiAgICAgICAgeSAtPSA3My8yO1xyXG4gICAgICAgIHRoaXMub25BY3Rpb24gPSBvbkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSW1hZ2UgPSBnYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VfaWRsZSA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCA3MywgMTY3LCA3Myk7XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9ob3ZlciA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCAwLCAxNjcsIDczKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgdGhpcy5idXR0b25JbWFnZV9pZGxlKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC51cGRhdGUgPSAoZGVsdGEpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaG92ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaWRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5tb3VzZVByZXNzZWQgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSlcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcbiBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBUaWxlbWFwIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvVGlsZW1hcFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1dhdmVNYXN0ZXJcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9PYmplY3RzL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRvd2VyQnVpbGRlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlckJ1aWxkZXJcIjtcclxuaW1wb3J0IEdhbWVCb3R0b21NZW51IGZyb20gXCIuLi9PYmplY3RzL0dhbWUvR2FtZUJvdHRvbU1lbnVcIjtcclxuXHJcbmNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBnYW1lLm1vbmV5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlciA9IG5ldyBXYXZlTWFzdGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMud2F2ZU1hc3Rlcik7XHJcbiAgICAgICAgLy8gdGhpcy50b3dlckJ1aWxkZXIgPSBuZXcgVG93ZXJCdWlsZGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMudG93ZXJCdWlsZGVyKTtcclxuICAgICAgICB0aGlzLmdhbWVNZW51Qm90dG9tID0gbmV3IEdhbWVCb3R0b21NZW51KGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMuZ2FtZU1lbnVCb3R0b20pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGU7IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL09iamVjdHMvTWVudS9CdXR0b25cIjtcclxuXHJcbmNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBsZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oZ2FtZSwgZ2FtZS5wLmdhbWVXaWR0aC8yLCBnYW1lLnAuZ2FtZUhlaWdodC8yLTEwMCwgKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KGJ1dHRvbjEpO1xyXG4gICAgICAgIGxldCBidXR0b24yID0gbmV3IEJ1dHRvbihnYW1lLCBnYW1lLnAuZ2FtZVdpZHRoLzIsIGdhbWUucC5nYW1lSGVpZ2h0LzIrMTAwLCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QoYnV0dG9uMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdGFydGVkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydE9wdGlvbnMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbnMgc3RhcnRcIik7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZW51U3RhdGU7IiwiY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRHYW1lT2JqZWN0KG8pe1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR2FtZU9iamVjdChvKXtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdhbWVPYmplY3RzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=