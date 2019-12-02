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
        "assets/ui/BottomMenu.png",
        "assets/mobs/MobsNew.png",
        "assets/mobs/Bosses.png",
        "assets/towers/Towers.png",
        "assets/towers/TowerActions.png",
        "assets/towers/Bullets.png",
        "assets/map/MapFull2.png",
        "assets/MenuPoster.jpg"
        
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
        p.pixelDensity(1);

        lastTime = (new Date()).getTime();
        currTime = 0;

        game = new _scripts_Game__WEBPACK_IMPORTED_MODULE_0__["default"](p);
        window.mainGame = game;
        game.setState(new _scripts_States_MenuState__WEBPACK_IMPORTED_MODULE_1__["default"](game));
    
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

    p.keyPressed = function(){
        game.keyPressed();

    }

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

/***/ "./src/scripts/Components/Animation.js":
/*!*********************************************!*\
  !*** ./src/scripts/Components/Animation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./src/scripts/Components/AnimationControllerComponent.js":
/*!****************************************************************!*\
  !*** ./src/scripts/Components/AnimationControllerComponent.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameComponent */ "./src/scripts/Components/GameComponent.js");


class AnimationControllerComponent extends _GameComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/* harmony default export */ __webpack_exports__["default"] = (AnimationControllerComponent);

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
        this.angle = 0;

    }

    mainMouseHover(){
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
        this.host.towerComponent.attackSpeed -= this.host.towerComponent.attackSpeed * (0.1 + 0.02*this.bufflvl);
    }

    off(){
        this.host.towerComponent.attackSpeed += this.host.towerComponent.attackSpeed * (0.1 + 0.02*this.bufflvl);
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
        let damagePerSecond = delta * this.host.maxHp * (0.008 * this.bufflvl);
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
        this.host.mobMovingComponent.movementSpeed = this.host.mobMovingComponent.movementSpeed - this.host.mobMovingComponent.movementSpeed * 0.07 * this.bufflvl;
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
                for(let i = 0; i < this.mobs.length; i++){
                    if(this.mobs[i].bodyComponent.distanceTo(this.target.bodyComponent) < 90 + 100 * (0.1 * attackTowerC.upgradeAbilityLevel)){
                        this.mobs[i].buffsComponent.tryBuff("burn", attackTowerC.upgradeAbilityLevel);
                    }
                }
            } else
            if(attackTowerC.attackType === "water"){
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

        // if (this.vx >= -10 && this.vx <= 10){
        //     this.host.animationController.setCurrentAnimation("down");
        // } else {
        //     if (this.vx < 0){
        //         this.host.animationController.setCurrentAnimation("left");
        //     } else {
        //         this.host.animationController.setCurrentAnimation("right");
        //     }
        // }

        this.host.bodyComponent.angle = this.angle;

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
        super(host, "air", 0.5, 40, 270);
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
        super(host, "earth", 1.5, 150, 200);
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
        super(host, "fire", 0.4, 30, 200);
    }

    upgradeStats(){
        super.upgradeStats();
        this.attackSpeed -= 0.01;
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
        super(host, "shadow", 1, 90, 300);
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
        if(this.host.buffsComponent.buffs["speed"] != undefined){
            this.host.buffsComponent.cancelBuff("speed");
            this.upgradeStatsLevel += 1;
        } else {
            this.upgradeStatsLevel += 1;
        }
    }

    upgradeAbility(){
        if(this.upgradeAbilityLevel !==5) this.upgradeAbilityLevel += 1;
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
        super(host, "water", 1.2, 90, 250);
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
        this.storeWave(c.MOB_EARTH_1, 15, 1);
        this.storeWave(c.MOB_WATER_1, 15, 1);
        this.storeWave(c.MOB_AIR_1, 15, 1);
        this.storeWave(c.MOB_FIRE_1, 15, 1);
        this.storeWave(c.MOB_SHADOW_1, 2, 1);
        this.storeWave(c.MOB_FIRE_2, 15, 0.7);
        this.storeWave(c.MOB_WATER_2, 15, 0.7);
        this.storeWave(c.MOB_SHADOW_2, 15, 0.7);
        this.storeWave(c.MOB_AIR_2, 15, 1);
        this.storeWave(c.MOB_EARTH_2, 2, 0.5);
        this.storeWave(c.MOB_SHADOW_3, 15, 1);
        this.storeWave(c.MOB_EARTH_3, 15, 1);
        this.storeWave(c.MOB_FIRE_3, 15, 1);
        this.storeWave(c.MOB_AIR_3, 15, 1);
        this.storeWave(c.MOB_WATER_3, 2, 1);
        this.storeWave(c.MOB_EARTH_4, 15, 1);
        this.storeWave(c.MOB_SHADOW_4, 15, 1);
        this.storeWave(c.MOB_WATER_4, 15, 1);
        this.storeWave(c.MOB_AIR_4, 15, 1);
        this.storeWave(c.MOB_FIRE_4, 1, 1);
        

        this.spawningState = 0; //0 - wait | 1 - spawning

        this.timerWaveStart = 0;
        this.timeToStartWave = 1;

        this.timerMobSpawn = 0;
        this.timeToSpawnMob = 1.2;

        this.waveId = 1;

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
        //console.log(this.waveId);
        
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
                this.waveId++;
            }
        }
    }

}
/* harmony default export */ __webpack_exports__["default"] = (WaveMasterLogicComponent);


/***/ }),

/***/ "./src/scripts/Components/render/AnimationUtils.js":
/*!*********************************************************!*\
  !*** ./src/scripts/Components/render/AnimationUtils.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({

    getFrames(image, starti, startj, size, length){
        let frames = [];
        for (let i=0; i < length; i++){
            let subimage = mainGame.p.gimages[image].get(startj*size, starti*size, size, size);
            frames.push(subimage);
            startj++;
        }
        return frames;
    }

});

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
        if (index == 3) {
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
        this.state.drawUpper(2);
        this.state.drawUpper(3);

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

    keyPressed(){
        this.state.keyPressed();
        
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");








class Bullet extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, tower, mob, mobs){
        super(game);
        this.target = mob;
        this.bodyComponent = new _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, 10, 10);
        this.addComponent(this.bodyComponent);
        this.tower = tower;

        let ops = {
            i: 0,
            t: 0.1
        }
        if (tower.towerComponent.attackType == "air"){
            ops.t = 0.05;
        } else
        if (tower.towerComponent.attackType == "fire"){
            ops.i = 3;
        } else
        if (tower.towerComponent.attackType == "earth"){
            ops.i = 2;
        } else
        if (tower.towerComponent.attackType == "water"){
            ops.i = 1;
        } else
        if (tower.towerComponent.attackType == "shadow"){
            ops.t = 0.05;
            ops.i = 4;
        }

        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.animationController.addAnimation("bullet", new _Components_Animation__WEBPACK_IMPORTED_MODULE_5__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_6__["default"].getFrames("assets/towers/Bullets.png", ops.i, 0, 40, 3),
            ops.t, true)
        );
        this.animationController.setCurrentAnimation("bullet");
        this.addComponent(this.animationController);

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.addComponent(this.renderComponent);
        this.renderComponent.draw = () => {}
        this.renderComponent.drawUpper = (index)=> {
            // mainGame.p.stroke(0);
            // mainGame.p.fill(255, 0, 255);
            //mainGame.p.rect(this.bodyComponent.x-5, this.bodyComponent.y-5, this.bodyComponent.w, this.bodyComponent.h)
            if (index == 2)
            mainGame.p.image(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-20, this.bodyComponent.y-20);
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

    constructor(game, tilemap, mobs){
        super(game);
        this.mobs = mobs
        this.currentMob = undefined
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobAir0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1250);
        this.resist.host = this;
        this.bounty = 50;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/Bosses.png", 2, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobAir1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 960);
        this.resist.host = this;
        this.bounty = 16;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 14, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobAir2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 10000);
        this.resist.host = this;
        this.bounty = 125;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 12, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobAir3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 60000);
        this.resist.host = this;
        this.bounty = 750;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 13, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobAir4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2400);
        this.resist.host = this;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 15, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobAir4);

/***/ }),

/***/ "./src/scripts/Objects/Game/Mobs/DyingObject.js":
/*!******************************************************!*\
  !*** ./src/scripts/Objects/Game/Mobs/DyingObject.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/scripts/Objects/GameObject.js");
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");
/* harmony import */ var _Components_logic_BodyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Components/logic/BodyComponent */ "./src/scripts/Components/logic/BodyComponent.js");






class DyingObject extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y) {
        super(game);
        this.x = x;
        this.y = y;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.animationController.addAnimation("die", new _Components_Animation__WEBPACK_IMPORTED_MODULE_2__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getFrames("assets/mobs/MobFire0.png", 3, 0, 80, 4), 0.1,
            false));
        this.animationController.setCurrentAnimation("die");
        this.addComponent(this.animationController);
        this.timer = 0;

    }

    update(delta) {
        super.update(delta);
        this.timer += delta;
        if (this.timer >= 4*0.1+1){
            this.removeFromParent();
        }
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.x-25, this.y-25, 90*Math.PI/180);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (DyingObject);

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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobEarth0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 250);
        this.resist.host = this;
        this.bounty = 3;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 7, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobEarth1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 720);
        this.resist.host = this;
        this.bounty = 10;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 4, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobEarth2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 50000);
        this.resist.host = this;
        this.bounty = 1250;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/Bosses.png", 1, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobEarth3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 30000);
        this.resist.host = this;
        this.bounty = 450;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 6, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobEarth4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100000);
        this.resist.host = this;
        this.bounty = 1200;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 5, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobFire0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100);
        this.bounty = 2;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 1, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobFire1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1100);
        this.resist.host = this;
        this.bounty = 19;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 2, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobFire2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2100);
        this.resist.host = this;
        this.bounty = 50;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 3, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobFire3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 36000);
        this.resist.host = this;
        this.bounty = 600;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 0, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobFire4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 30000);
        this.resist.host = this;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/Bosses.png", 4, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
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
/* harmony import */ var _DyingObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DyingObject */ "./src/scripts/Objects/Game/Mobs/DyingObject.js");
/* harmony import */ var _ParticleEmitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ParticleEmitter */ "./src/scripts/Objects/Game/ParticleEmitter.js");
/* harmony import */ var _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Components/logic/Resist/FireResistComponent */ "./src/scripts/Components/logic/Resist/FireResistComponent.js");
/* harmony import */ var _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components/logic/Resist/WaterResistComponent */ "./src/scripts/Components/logic/Resist/WaterResistComponent.js");
/* harmony import */ var _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Components/logic/Resist/ShadowResistComponent */ "./src/scripts/Components/logic/Resist/ShadowResistComponent.js");
/* harmony import */ var _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Components/logic/Resist/AirResistComponent */ "./src/scripts/Components/logic/Resist/AirResistComponent.js");
/* harmony import */ var _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Components/logic/Resist/EarthResistComponent */ "./src/scripts/Components/logic/Resist/EarthResistComponent.js");













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
        //this.addComponent(this.renderComponent);

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
            // let dyingObject = new DyingObject(this.game, this.bodyComponent.x, this.bodyComponent.y);
            // this.game.state.addGameObject(dyingObject);
            let colors = {r:0, g:0, b:0};
            if (this.resist instanceof _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_7__["default"]){
                colors.r = 200;
            } else
            if (this.resist instanceof _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_8__["default"]){
                colors.b = 200;
            } else
            if (this.resist instanceof _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_9__["default"]){
                colors.r = 150;
                colors.b = 150;
            } else
            if (this.resist instanceof _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_10__["default"]){
                colors.g = 80;
                colors.b = 255;
            } else
            if (this.resist instanceof _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_11__["default"]){
                colors.r = 100;
                colors.g = 180;
            }
            let emitter = new _ParticleEmitter__WEBPACK_IMPORTED_MODULE_6__["default"](this.game, 20, colors.r, colors.g, colors.b);
            emitter.setLocation(this.bodyComponent.x+this.bodyComponent.w/2, this.bodyComponent.y+this.bodyComponent.h/2);
            this.game.state.addGameObject(emitter);
            emitter.start();
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

    drawUpper(index){
        super.drawUpper(index);
        if (index == 1){
           this.draw();
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobShadow0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 400);
        this.resist.host = this;
        this.bounty = 5;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 16, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobShadow1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6000);
        this.resist.host = this;
        this.bounty = 200;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/Bosses.png", 3, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobShadow2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 4300);
        this.resist.host = this;
        this.bounty = 100;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 17, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobShadow3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 15000);
        this.resist.host = this;
        this.bounty = 300;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 18, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobShadow4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 200000);
        this.resist.host = this;
        this.bounty = 1800;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 19, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobWater0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 300);
        this.resist.host = this;
        this.bounty = 4;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 9, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobWater1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 750);
        this.resist.host = this;
        this.bounty = 13;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 10, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobWater2 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 4200);
        this.resist.host = this;
        this.bounty = 75;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 8, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobWater3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 60, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 400000);
        this.resist.host = this;
        this.bounty = 6000;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/Bosses.png", 0, 0, 160, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-50, this.bodyComponent.y-50, this.bodyComponent.angle);
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
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");
/* harmony import */ var _Components_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/Animation */ "./src/scripts/Components/Animation.js");
/* harmony import */ var _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");






class MobWater4 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2300);
        this.resist.host = this;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.animationController.addAnimation("down", new _Components_Animation__WEBPACK_IMPORTED_MODULE_3__["default"](
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_4__["default"].getFrames("assets/mobs/MobsNew.png", 11, 0, 80, 3),
            0.1, true)
        );
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-25, this.bodyComponent.y-25, this.bodyComponent.angle);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (MobWater4);

/***/ }),

/***/ "./src/scripts/Objects/Game/ParticleEmitter.js":
/*!*****************************************************!*\
  !*** ./src/scripts/Objects/Game/ParticleEmitter.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/scripts/Objects/GameObject.js");


class ParticleEmitter extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, count, r, g, b){
        super(game);
        this.x = 0;
        this.y = 0;
        this.count = count;
        this.r = r;
        this.g = g;
        this.b = b;
        this.particles = [];
        this.vxmax = 100;
        this.vymax = 100;
        this.active = false;
        this.timer = 0;

    }

    setLocation(x, y){
        this.x = x;
        this.y = y;

    }

    start(){
        if (!this.active){
            for (let i=0; i < this.count; i++){
                let p = {};
                p.x = this.x;
                p.y = this.y;
                p.r = this.r;
                p.g = this.g;
                p.b = this.b;
                p.vx = Math.random()*this.vxmax*2-this.vxmax;
                p.vy = Math.random()*this.vymax*2-this.vymax;
                this.particles.push(p);
            }
            this.active = true;
        }

    }

    update(delta){
        for (let i=0; i < this.count; i++){
            this.particles[i].x += delta * this.particles[i].vx;
            this.particles[i].y += delta * this.particles[i].vy;
        }
        this.timer += delta;
        if (this.timer >= 2){
            this.particles.length = 0;
            mainGame.state.removeGameObject(this);
        }

    }

    drawUpper(index){
        if (index == 1){
            if (this.active){
                for (let i=0; i < this.count; i++){
                    let part = this.particles[i];
                    mainGame.p.noStroke();
                    // mainGame.p.fill(part.r, part.g, part.b);
                    // mainGame.p.rect(part.x, part.y, 2, 2);
                    this.drawRect(part.x, part.y, 4, 4, part.r, part.g, part.b);
                }
            }
        }

    }
    
}

/* harmony default export */ __webpack_exports__["default"] = (ParticleEmitter);

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
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class AirTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_AirTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(2*40, 0, 40, 40);
        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);

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
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class EarthTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_EarthTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(3*40, 0, 40, 40);
        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
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
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class FireTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_FireTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(0, 0, 40, 40);
        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
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
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class ShadowTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_ShadowTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(4*40, 0, 40, 40);
        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
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
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class WaterTower extends _Tower__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y){
        super(game, x, y);
        this.towerComponent = new _Components_logic_Towers_WaterTowerComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addComponent(this.towerComponent);

        this.texture = mainGame.p.gimages["assets/towers/Towers.png"];
        this.rect = this.texture.get(40, 0, 40, 40);
        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, null);
        this.renderComponent.draw = ()=>{
            mainGame.p.image(this.rect, this.bodyComponent.x, this.bodyComponent.y);
            //mainGame.p.text(this.towerComponent.upgradeStatsLevel+" "+this.towerComponent.upgradeAbilityLevel ,this.bodyComponent.x, this.bodyComponent.y, 40, 40);
        }
        this.addComponent(this.renderComponent);
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

    drawRect(x, y, w, h, r, g, b){
        let p = mainGame.p;
        p.push();
        let halfWidth = w*0.5;
        let halfHeight = h*0.5;
        p.translate(x+halfWidth, y+halfHeight);
        p.fill(r, g, b);
        p.rect(-halfWidth, -halfHeight, w, h);
        p.pop();
    }

    drawSprite(image, x, y, angle){
        let p = mainGame.p;
        p.push();
        let halfWidth = image.width*0.5;
        let halfHeight = image.height*0.5;
        p.translate(x+halfWidth, y+halfHeight);
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
        this.buttonImage_idle = buttonImage.get(0, 73, 167, 73);
        this.buttonImage_hover = buttonImage.get(0, 0, 167, 73);

        this.renderComponent = new _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.bodyComponent, this.buttonImage_idle);
        this.renderComponent.update = (delta)=> {
            if (this.bodyComponent.mainMouseHover()){
                this.renderComponent.image = this.buttonImage_hover;
            } else {
                this.renderComponent.image = this.buttonImage_idle;
            }
        }
        this.renderComponent.mousePressed = ()=>{
            if (this.bodyComponent.mainMouseHover())
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
/* harmony import */ var _MenuState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuState */ "./src/scripts/States/MenuState.js");









class GameState extends _State__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game){
        super(game);
        game.money = 500;
        this.tilemap = new _Objects_Game_Tilemap__WEBPACK_IMPORTED_MODULE_1__["default"](game);
        this.addGameObject(this.tilemap);
        this.waveMaster = new _Objects_Game_WaveMaster__WEBPACK_IMPORTED_MODULE_2__["default"](game, this.tilemap);
        this.addGameObject(this.waveMaster);
        // this.towerBuilder = new TowerBuilder(game, this.tilemap);
        // this.addGameObject(this.towerBuilder);
        this.gameMenuBottom = new _Objects_Game_GameBottomMenu__WEBPACK_IMPORTED_MODULE_6__["default"](game, this.tilemap, this.waveMaster.kids);
        this.addGameObject(this.gameMenuBottom);
        
    }

    keyPressed() {
        super.keyPressed();
        if (mainGame.p.keyCode == mainGame.p.ESCAPE){
            mainGame.setState(new _MenuState__WEBPACK_IMPORTED_MODULE_7__["default"](mainGame));

        }
        if (mainGame.p.keyCode == 80){
            this.running = !this.running;
        }

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
/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameState */ "./src/scripts/States/GameState.js");




class MenuState extends _State__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game){
        super(game);
        let button1 = new _Objects_Menu_Button__WEBPACK_IMPORTED_MODULE_1__["default"](game, game.p.gameWidth/2, game.p.gameHeight/2-50, ()=> {
            this.startGame();
        });
        this.addGameObject(button1);

    }

    startGame(){
        mainGame.setState(new _GameState__WEBPACK_IMPORTED_MODULE_2__["default"](mainGame));

    }

    draw() {
        super.draw();
        mainGame.p.fill(255, 255, 0)
        mainGame.p.text("Start", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);

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
/* harmony default export */ __webpack_exports__["default"] = (State);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL0dhbWVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQXR0YWNrU3BlZWRCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdXJuaW5nQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0N1cnNlQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL1Nsb3dCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvTW9iUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvQnVsbGV0cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL0dhbWVCb3R0b21NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0R5aW5nT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmU0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL01vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9QYXJ0aWNsZUVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9BaXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvV2F2ZU1hc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9NZW51L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL1N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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QUNBO0FBQ0EsMkJBQTJCLDZEQUFPO0FBQ2xDO0FBQ0EsOEJBQThCLGdFQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBYztBQUNoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RDekI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDZ0I7QUFDUjs7QUFFcEMsd0JBQXdCLDhDQUFLOztBQUU3QjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFNO0FBQ2hDO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLGtEQUFTOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1QnpCO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNlLG9FQUFLLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9HYW1lXCI7XHJcbmltcG9ydCBNZW51U3RhdGUgZnJvbSBcIi4vc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlXCI7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vc2NyaXB0cy9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcblxyXG5sZXQgZ2FtZTtcclxuXHJcbmNvbnN0IHMgPSAocCkgPT4ge1xyXG5cclxuICAgIGxldCBsYXN0VGltZTtcclxuICAgIGxldCBjdXJyVGltZTtcclxuXHJcbiAgICBwLmNyb3AgPSBmdW5jdGlvbihpbWFnZSwgeCwgeSwgdywgaCl7XHJcbiAgICAgICAgdmFyIGNyb3BwZWQgPSBwLmNyZWF0ZUltYWdlKHcsIGgpO1xyXG4gICAgICAgIGNyb3BwZWQuY29weShpbWFnZSwgeCwgeSwgeCArIHcsIHkgKyBoLCAwLCAwLCB4ICsgdywgeSArIGgpXHJcbiAgICAgICAgcmV0dXJuIGNyb3BwZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAuaW1hZ2VzQXJyYXkgPSBbXCJhc3NldHMvdWkvYnV0dG9uc19tZW51LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL21hcC9UaWxlc2V0LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL3VpL0JvdHRvbU1lbnUucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL21vYnMvQm9zc2VzLnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvdG93ZXJzL1Rvd2VyQWN0aW9ucy5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy90b3dlcnMvQnVsbGV0cy5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy9tYXAvTWFwRnVsbDIucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvTWVudVBvc3Rlci5qcGdcIlxyXG4gICAgICAgIFxyXG4gICAgXTtcclxuICAgIHAuc291bmRzQXJyYXkgPSBbXCJhc3NldHMvSnVtcDMud2F2XCJdO1xyXG5cclxuICAgIHAuZ2ltYWdlcyA9IHt9O1xyXG4gICAgcC5nc291bmRzID0ge307XHJcblxyXG4gICAgcC5nYW1lV2lkdGggPSA5NjA7XHJcbiAgICBwLmdhbWVIZWlnaHQgPSA3MjA7XHJcblxyXG4gICAgcC5sb2FkR2FtZUltYWdlID0gZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICBwLmdpbWFnZXNbc3RyXSA9IHAubG9hZEltYWdlKHN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubG9hZEdhbWVTb3VuZCA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5nc291bmRzW3N0cl0gPSBwLmxvYWRTb3VuZChzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLmltYWdlc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZUltYWdlKHAuaW1hZ2VzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLnNvdW5kc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZVNvdW5kKHAuc291bmRzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gcC5jcmVhdGVDYW52YXMocC5nYW1lV2lkdGgsIHAuZ2FtZUhlaWdodCk7XHJcbiAgICAgICAgcC5waXhlbERlbnNpdHkoMSk7XHJcblxyXG4gICAgICAgIGxhc3RUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBjdXJyVGltZSA9IDA7XHJcblxyXG4gICAgICAgIGdhbWUgPSBuZXcgR2FtZShwKTtcclxuICAgICAgICB3aW5kb3cubWFpbkdhbWUgPSBnYW1lO1xyXG4gICAgICAgIGdhbWUuc2V0U3RhdGUobmV3IE1lbnVTdGF0ZShnYW1lKSk7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHAuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBsZXQgZGVsdGEgPSAoY3VyclRpbWUgLSBsYXN0VGltZSkvMTAwMDtcclxuXHJcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDApO1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEgPCAwLjIpXHJcbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIGdhbWUuZHJhdyhwKTtcclxuICAgICAgICBcclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lO1xyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHAua2V5UHJlc3NlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5rZXlQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubW91c2VDbGlja2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLm1vdXNlUHJlc3NlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZURyYWdnZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGdhbWVwNSA9IG5ldyBwNShzLCBcIm1haW5cIik7XHJcblxyXG5cclxuIiwiY2xhc3MgQW5pbWF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmcmFtZXMsIHRpbWUsIGxvb3Ape1xyXG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZyYW1lID49IHRoaXMuZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3ApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gdGhpcy5mcmFtZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lKXtcclxuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciAtPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVzW3RoaXMuY3VycmVudEZyYW1lXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb247IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYW5pbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbmltYXRpb24obmFtZSwgYW5pbSl7XHJcbiAgICAgICAgdGhpcy5hbmltc1tuYW1lXSA9IGFuaW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRBbmltYXRpb24obmFtZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW0gPT0gdGhpcy5hbmltc1tuYW1lXSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSB0aGlzLmFuaW1zW25hbWVdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0uY3VycmVudEZyYW1lID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudDsiLCJjbGFzcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCb2R5Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgeCwgeSwgdywgaCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWFpbk1vdXNlSG92ZXIoKXtcclxuICAgICAgICBsZXQgbW91c2VYID0gdGhpcy5ob3N0LmdhbWUucC5tb3VzZVg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VZO1xyXG4gICAgICAgIGlmIChtb3VzZVggPj0gdGhpcy54ICYmIG1vdXNlWCA8IHRoaXMueCt0aGlzLncpe1xyXG4gICAgICAgICAgICBpZiAobW91c2VZID49IHRoaXMueSAmJiBtb3VzZVkgPCB0aGlzLnkrdGhpcy5oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvdmVybGFwcyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBpZiAodGhpcy54IDwgYm9keUNvbXBvbmVudC54ICsgYm9keUNvbXBvbmVudC53ICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMudyA+IGJvZHlDb21wb25lbnQueCAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgPCBib2R5Q29tcG9uZW50LnkgKyBib2R5Q29tcG9uZW50LmggJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oID4gYm9keUNvbXBvbmVudC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUbyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBsZXQgazEgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LngtdGhpcy54KTtcclxuICAgICAgICBsZXQgazIgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LnktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlSG92ZXIoeCwgeSl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHk7XHJcbiAgICAgICAgaWYgKG1vdXNlWCA+PSB0aGlzLnggJiYgbW91c2VYIDwgdGhpcy54K3RoaXMudyl7XHJcbiAgICAgICAgICAgIGlmIChtb3VzZVkgPj0gdGhpcy55ICYmIG1vdXNlWSA8IHRoaXMueSt0aGlzLmgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZVRvUG9pbnQoeCwgeSl7XHJcbiAgICAgICAgbGV0IGsxID0gTWF0aC5hYnMoeC10aGlzLngpO1xyXG4gICAgICAgIGxldCBrMiA9IE1hdGguYWJzKHktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmdsZVRvKGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IGJvZHlDb21wb25lbnQueCAtIHRoaXMueDtcclxuICAgICAgICBsZXQgeURpc3QgPSBib2R5Q29tcG9uZW50LnkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUb1BvaW50KHgsIHkpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IHggLSB0aGlzLng7XHJcbiAgICAgICAgbGV0IHlEaXN0ID0geSAtIHRoaXMueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9keUNvbXBvbmVudDtcclxuIiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiXHJcblxyXG5jbGFzcyBBdHRhY2tTcGVlZEJ1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJhdHRhY2tTcGVlZEF1cmFcIilcclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCAtPSB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKiAoMC4xICsgMC4wMip0aGlzLmJ1ZmZsdmwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCArPSB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKiAoMC4xICsgMC4wMip0aGlzLmJ1ZmZsdmwpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0dGFja1NwZWVkQnVmZjsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVmZkNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHR5cGUpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5idWZmbHZsID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVmZkNvbXBvbmVudDsiLCJpbXBvcnQgQnVybmluZ0J1ZmYgZnJvbSBcIi4vQnVybmluZ0J1ZmZcIjtcclxuaW1wb3J0IEN1cnNlQnVmZiBmcm9tIFwiLi9DdXJzZUJ1ZmZcIjtcclxuaW1wb3J0IEF0dGFja1NwZWVkQnVmZiBmcm9tIFwiLi9BdHRhY2tTcGVlZEJ1ZmZcIjtcclxuaW1wb3J0IFNsb3dCdWZmIGZyb20gXCIuL1Nsb3dCdWZmXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcImJ1cm5cIjogQnVybmluZ0J1ZmYsXHJcbiAgICBcImN1cnNlXCI6IEN1cnNlQnVmZixcclxuICAgIFwic3BlZWRcIjogQXR0YWNrU3BlZWRCdWZmLFxyXG4gICAgXCJzbG93XCI6IFNsb3dCdWZmXHJcblxyXG59OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBCdWZmcyBmcm9tIFwiLi9CdWZmc1wiO1xyXG5cclxuY2xhc3MgQnVmZnNDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJ1ZmZzID0gW107XHJcbiAgICAgICAgdGhpcy5idWZmQ2xhc3NlcyA9IEJ1ZmZzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcHBseUJ1ZmYodHlwZSwgYnVmZmx2bCl7XHJcbiAgICAgICAgbGV0IGJ1ZmZDb21wb25lbnRDbGFzcyA9IHRoaXMuYnVmZkNsYXNzZXNbdHlwZV07XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBidWZmQ29tcG9uZW50Q2xhc3ModGhpcy5ob3N0KTtcclxuICAgICAgICBjb21wb25lbnQuYnVmZmx2bCA9IGJ1ZmZsdmw7XHJcbiAgICAgICAgdGhpcy5ob3N0LmF0dGFjaG1lbnRzW3R5cGVdID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICBjb21wb25lbnQub24oKTtcclxuICAgICAgICB0aGlzLmJ1ZmZzW3R5cGVdID0gYnVmZmx2bDtcclxuICAgIH1cclxuXHJcbiAgICB0cnlCdWZmKHR5cGUsIGJ1ZmZsdmwpe1xyXG4gICAgICAgIGlmICh0aGlzLmJ1ZmZzW3R5cGVdICE9PSBidWZmbHZsKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZnNbdHlwZV0gPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlCdWZmKHR5cGUsIGJ1ZmZsdmwpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKGJ1ZmZsdmwgPiB0aGlzLmJ1ZmZzW3R5cGVdKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnVmZih0eXBlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlCdWZmKHR5cGUsIGJ1ZmZsdmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbEJ1ZmYodHlwZSl7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaG9zdC5hdHRhY2htZW50c1t0eXBlXTtcclxuICAgICAgICBpZiAoY29tcG9uZW50ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5vZmYoKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnJlbW92ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1ZmZzW3R5cGVdID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWZmc0NvbXBvbmVudDsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdXJuaW5nQnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYnVyblwiKTtcclxuICAgICAgICB0aGlzLmJ1cm5UaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5idXJuVGltZSA9IDQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5idXJuVGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgbGV0IGRhbWFnZVBlclNlY29uZCA9IGRlbHRhICogdGhpcy5ob3N0Lm1heEhwICogKDAuMDA4ICogdGhpcy5idWZmbHZsKTtcclxuICAgICAgICBpZih0aGlzLmhvc3QuaHAgPCBkYW1hZ2VQZXJTZWNvbmQpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaHAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5ocCAtPSBkYW1hZ2VQZXJTZWNvbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJ1cm5UaW1lciA+PSB0aGlzLmJ1cm5UaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXJuaW5nQnVmZjsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBDdXJzZUJ1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImN1cnNlXCIpO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJzZVRpbWUgPSA0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIGxldCByZXNpc3RzID0gdGhpcy5ob3N0LnJlc2lzdC5yZXNpc3RzO1xyXG4gICAgICAgIGZvcihsZXQgayBpbiByZXNpc3RzKXtcclxuICAgICAgICAgICAgcmVzaXN0c1trXSArPSAwLjEgKiB0aGlzLmJ1ZmZsdmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5jdXJzZVRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNlVGltZXIgPj0gdGhpcy5jdXJzZVRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZih0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICBsZXQgcmVzaXN0cyA9IHRoaXMuaG9zdC5yZXNpc3QucmVzaXN0cztcclxuICAgICAgICBmb3IobGV0IGsgaW4gcmVzaXN0cyl7XHJcbiAgICAgICAgICAgIHJlc2lzdHNba10gLT0gMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3Vyc2VCdWZmOyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNsb3dCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwic2xvd1wiKTtcclxuICAgICAgICB0aGlzLnNsb3dUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZSA9IDQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkID0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkIC0gdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkICogMC4wNyAqIHRoaXMuYnVmZmx2bDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnNsb3dUaW1lciA+PSB0aGlzLnNsb3dUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkID0gdGhpcy5zdGFydFZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xvd0J1ZmY7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1bGxldENvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGFyZ2V0LCBtb2JzKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1vYnMgPSBtb2JzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzNTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgdEJvZHkgPSB0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50LmFuZ2xlVG9Qb2ludCh0Qm9keS54K3RCb2R5LncvMiwgdEJvZHkueSt0Qm9keS5oLzIpO1xyXG4gICAgICAgIGJvZHkueCArPSBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgYm9keS55ICs9IE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBpZihib2R5Lm92ZXJsYXBzKHRCb2R5KSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ob3N0KTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVjZWl2ZURhbWFnZSh0aGlzLmhvc3QudG93ZXIsIDEpO1xyXG4gICAgICAgICAgICBsZXQgYXR0YWNrVG93ZXJDID0gdGhpcy5ob3N0LnRvd2VyLnRvd2VyQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJmaXJlXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50KSA8IDkwICsgMTAwICogKDAuMSAqIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9ic1tpXS5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwiYnVyblwiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwid2F0ZXJcIil7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQpIDwgMTAwICsgMTAwICogKDAuMiAqIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9ic1tpXS5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwic2xvd1wiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwic2hhZG93XCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYnVmZnNDb21wb25lbnQudHJ5QnVmZihcImN1cnNlXCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcImVhcnRoXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50YXJnZXQgIT09IHRoaXMubW9ic1tpXSAmJiB0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQpIDwgMTAwICsgMTAwICogKDAuMiAqIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9ic1tpXS5yZWNlaXZlRGFtYWdlKHRoaXMuaG9zdC50b3dlciwgMC4yMCphdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYk1vdmluZ0NvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQsIHJvdXRlLCB0aWxlU2l6ZSwgbW92ZW1lbnRTcGVlZCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gYm9keUNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IG1vdmVtZW50U3BlZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaGlmdCA9ICh0aGlzLnRpbGVTaXplKjIpLXRoaXMudGlsZVNpemUtdGhpcy5ib2R5Q29tcG9uZW50LncqMC41O1xyXG4gICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgIHRoaXMudnkgPSAwO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC54ICs9IHRoaXMuc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnkgKz0gdGhpcy5zaGlmdDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRpbGUoKXtcclxuICAgICAgICBsZXQgdGlsZSA9IHRoaXMucm91dGVbdGhpcy5jdXJyZW50Um91dGVJbmRleCsrXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gdGlsZTtcclxuICAgICAgICBpZiAodGlsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgeERpc3QgPSAodGlsZS5qKnRoaXMudGlsZVNpemUpIC0gKHRoaXMuYm9keUNvbXBvbmVudC54IC0gdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIGxldCB5RGlzdCA9ICh0aWxlLmkqdGhpcy50aWxlU2l6ZSkgLSAodGhpcy5ib2R5Q29tcG9uZW50LnkgLSB0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTsvLyAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy52eCA9IE1hdGguY29zKHRoaXMuYW5nbGUpICogdGhpcy5tb3ZlbWVudFNwZWVkO1xyXG4gICAgICAgIHRoaXMudnkgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMubW92ZW1lbnRTcGVlZDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudnggPj0gLTEwICYmIHRoaXMudnggPD0gMTApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmhvc3QuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy52eCA8IDApe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImxlZnRcIik7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmhvc3QuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwicmlnaHRcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50LmFuZ2xlID0gdGhpcy5hbmdsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnggKz0gdGhpcy52eCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC55ICs9IHRoaXMudnkgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHBvaW50eCA9IHRoaXMuY3VycmVudFRpbGUuaip0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnR5ID0gdGhpcy5jdXJyZW50VGlsZS5pKnRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG9Qb2ludChwb2ludHgrdGhpcy5zaGlmdCwgcG9pbnR5K3RoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IDEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JNb3ZpbmdDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAxLjIsIDAuOSwgMC41LCAwLjcsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuOSwgMC43LCAxLjIsIDAuNSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVhcnRoUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuNSwgMS4yLCAwLjcsIDAuOSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlJlc2lzdENvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBmaXJlUmVzaXN0LCB3YXRlclJlc2lzdCwgYWlyUmVzaXN0LCBlYXJ0aFJlc2lzdCwgc2hhZG93UmVzaXN0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnJlc2lzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJmaXJlXCJdID0gZmlyZVJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJ3YXRlclwiXSA9IHdhdGVyUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImFpclwiXSA9IGFpclJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJlYXJ0aFwiXSA9IGVhcnRoUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcInNoYWRvd1wiXSA9IHNoYWRvd1Jlc2lzdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMSwgMSwgMSwgMSwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93UmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAwLjcsIDAuNSwgMC45LCAxLjIsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gW1xyXG4gICAgICAgICAgICBbMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgWzIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDEsIDMsIDIsIDIsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMiwgMiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMywgMywgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwLCAwLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gNDA7XHJcbiAgICAgICAgbWFpbkdhbWUudGlsZVNpemUgPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIG1haW5HYW1lLnRpbGVTaXplID0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLmhvc3QuZ2FtZS50aWxlU2l6ZSA9IDQwO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYWlyXCIsIDAuNSwgNDAsIDI3MCk7XHJcbiAgICAgICAgdGhpcy50aW1lckF1cmEgPSAwO1xyXG4gICAgICAgIHRoaXMuYXVyYVRpbWUgPSAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudGltZXJBdXJhICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyQXVyYSA+PSB0aGlzLmF1cmFUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lckF1cmEgLT0gdGhpcy5hdXJhVGltZTtcclxuICAgICAgICAgICAgbGV0IGFsbFRvd2VycyA9IG1haW5HYW1lLnN0YXRlLmdhbWVNZW51Qm90dG9tLmtpZHM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGFsbFRvd2Vycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgIT0gXCJhaXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy5ob3N0LmJvZHlDb21wb25lbnQpIDwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb3dlcnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcInNwZWVkXCIsIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wMjtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpclRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZWFydGhcIiwgMS41LCAxNTAsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjA3O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFydGhUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZmlyZVwiLCAwLjQsIDMwLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wMTtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Rvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJzaGFkb3dcIiwgMSwgOTAsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLDU7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZVRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL0ZpcmVUb3dlclwiO1xyXG5pbXBvcnQgU2hhZG93VG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuaW1wb3J0IFdhdGVyVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlclwiO1xyXG5pbXBvcnQgRWFydGhUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9FYXJ0aFRvd2VyXCI7XHJcblxyXG5jbGFzcyBUb3dlckJ1aWxkZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihob3N0KVxyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBsZXQgcCA9IHRoaXMuaG9zdC5nYW1lLnA7XHJcbiAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKHAubW91c2VZL3RoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihwLm1vdXNlWC90aGlzLnRpbGVTaXplKTtcclxuICAgICAgICBsZXQgdG93ZXIgPSBuZXcgRWFydGhUb3dlcih0aGlzLmhvc3QuZ2FtZSwgaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZCh0b3dlcik7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJCdWlsZGVyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9CdWxsZXRzL0J1bGxldFwiO1xyXG5cclxuY2xhc3MgVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBhdHRhY2tUeXBlLCBhdHRhY2tTcGVlZCwgYXR0YWNrRGFtYWdlLCBhdHRhY2tSYW5nZSl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrVHlwZSA9IGF0dGFja1R5cGU7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgPSBhdHRhY2tTcGVlZDtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSA9IGF0dGFja0RhbWFnZTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhbmdlID0gYXR0YWNrUmFuZ2U7XHJcblxyXG4gICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMubW9icyA9IG1haW5HYW1lLnN0YXRlLndhdmVNYXN0ZXIua2lkcztcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3dlckNvc3QgPSA1MDtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0Nvc3QgPSAxMDA7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlQWJpbGl0eUNvc3QgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgaWYodGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmJ1ZmZzW1wic3BlZWRcIl0gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYoXCJzcGVlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNMZXZlbCArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBpZih0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwgIT09NSkgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb0ZpcmUpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgICAgICBpZih0aGlzLmF0dGFja1RpbWVyID49IHRoaXMuYXR0YWNrU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciAtPSB0aGlzLmF0dGFja1NwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG9GaXJlKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50KTx0aGlzLmF0dGFja1JhbmdlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldFNwYXduKHRoaXMubW9ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1bGxldFNwYXduKG1vYil7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmhvc3QuZ2FtZSwgYm9keS54K2JvZHkudy8yLCBib2R5LnkrYm9keS5oLzIsIHRoaXMuaG9zdCwgbW9iLCB0aGlzLm1vYnMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZChidWxsZXQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJ3YXRlclwiLCAxLjIsIDkwLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wNjtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcblxyXG5jbGFzcyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICAgICAgIHRoaXMud2F2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBjID0gaG9zdC5nYW1lLmNvbnN0YW50cztcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8wLCAxNSwgMC42KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8wLCAxNSwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8wLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMCwgMTUsIDAuOCk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzAsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8xLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMSwgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMiwgMTUsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzIsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8yLCAyLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMywgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV180LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl80LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV80LCAxLCAxKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDsgLy8wIC0gd2FpdCB8IDEgLSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1N0YXJ0V2F2ZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IDEuMjtcclxuXHJcbiAgICAgICAgdGhpcy53YXZlSWQgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlID0gdGhpcy5maW5kUm91dGUodGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUobWFwKXtcclxuICAgICAgICBsZXQgZHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSB7aTowLCBqOjE3LCBkOmR2YWx1ZX07XHJcbiAgICAgICAgbGV0IGVuZCA9IHtpOjE0LCBqOjh9O1xyXG4gICAgICAgIGxldCBtYXJrZWQgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIG1hcmtlZC5wdXNoKHN0YXJ0KTtcclxuICAgICAgICBjaGVja0Fyb3VuZE1hcmtlZChkdmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQXJvdW5kTWFya2VkKGQpe1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uaSA9PSBlbmQuaSAmJiBtYXJrZWRbaV0uaiA9PSBlbmQuail7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChtYXJrZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2sgZDpcIitkK1wiIG1kOlwiK21hcmtlZFtpXS5kK1wiIG1pOlwiK21hcmtlZFtpXS5pK1wiIG1qOlwiK21hcmtlZFtpXS5qKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uZCA9PSBkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ29vZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrQXJvdW5kVGlsZShtYXJrZWRbaV0sIGQrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbWFya0Fyb3VuZFRpbGUodGlsZSwgbmV3ZCl7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLTEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pKzEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmotMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmorMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKG5ld2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrKGksIGosIG5ld2Qpe1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBtYXJrZWQubGVuZ3RoOyBpaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaWldLmkgPT0gaSAmJiBtYXJrZWRbaWldLmogPT0gail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZC5wdXNoKHtpOmksIGo6aiwgZDpuZXdkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaStcIiBcIitqK1wiIFwiK25ld2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1hcmtlZCk7XHJcbiAgICAgICAgbGV0IGRtYXggPSBwYXRoWzBdLmQ7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGRtYXgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1heC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoZG1heCAhPSAwKTtcclxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVXYXZlKHR5cGUsIGNvdW50LCB0aW1lKXtcclxuICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgIGxldCBhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZXMucHVzaChvKTtcclxuICAgICAgICBvLmEgPSBhO1xyXG4gICAgICAgIG8udGltZSA9IHRpbWU7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgYS5wdXNoKHR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vYigpe1xyXG4gICAgICAgIGxldCBNb2JDbGFzcyA9IHRoaXMuY3VycmVudFdhdmVUb1NwYXduLnNoaWZ0KCk7XHJcbiAgICAgICAgLy9sZXQgbW9iID0gbmV3IG1vYlR5cGUodGhpcy5ob3N0LmdhbWUsIHgsIHksIHJvKVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBuZXcgTW9iQ2xhc3ModGhpcy5ob3N0LmdhbWUsIDE3KnNpemUsIC1zaXplLCBzaXplLCB0aGlzLnJvdXRlKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodGVzdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLndhdmVJZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAodGhpcy5zcGF3bmluZ1N0YXRlID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0Kz1kZWx0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJXYXZlU3RhcnQgPj0gdGhpcy50aW1lVG9TdGFydFdhdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduaW5nU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhdmVPYmplY3QgPSB0aGlzLndhdmVzW3RoaXMuY3VycmVudFdhdmVJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gd2F2ZU9iamVjdC5hO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IHdhdmVPYmplY3QudGltZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgaWYgKHRoaXMuc3Bhd25pbmdTdGF0ZSA9PSAxKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVUb1NwYXduLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lck1vYlNwYXduKz1kZWx0YTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyTW9iU3Bhd24gPj0gdGhpcy50aW1lVG9TcGF3bk1vYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lck1vYlNwYXduID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduTW9iKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ob3N0LmtpZHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F2ZUlkKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudDtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIGdldEZyYW1lcyhpbWFnZSwgc3RhcnRpLCBzdGFydGosIHNpemUsIGxlbmd0aCl7XHJcbiAgICAgICAgbGV0IGZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHN1YmltYWdlID0gbWFpbkdhbWUucC5naW1hZ2VzW2ltYWdlXS5nZXQoc3RhcnRqKnNpemUsIHN0YXJ0aSpzaXplLCBzaXplLCBzaXplKTtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goc3ViaW1hZ2UpO1xyXG4gICAgICAgICAgICBzdGFydGorKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgSFBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBocCA9IHRoaXMuaG9zdC5ocDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgbGV0IGxpZmVCYXJXaWR0aCA9IHRoaXMuaG9zdC5ocCAqIHRoaXMuYm9keUNvbXBvbmVudC53IC8gdGhpcy5ob3N0Lm1heEhwO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIDcpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMjU1LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgbGlmZUJhcldpZHRoLCA3KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLm5vRmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCB0aGlzLmJvZHlDb21wb25lbnQudywgNyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUFJlbmRlckNvbXBvbmVudDtcclxuIiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQsIGltYWdlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGJvZHlDb21wb25lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYm9keUNvbXBvbmVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZShpbWFnZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMuYm9keUNvbXBvbmVudC53LCB0aGlzLmJvZHlDb21wb25lbnQuaCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQubWFwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGhvc3QuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSB0aGlzLnRleHR1cmUuZ2V0KDAsIDAsIDQwLCA0MCk7XHJcbiAgICAgICAgdGhpcy5yb2FkID0gdGhpcy50ZXh0dXJlLmdldCg0MCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLm1hcEZ1bGxUZXh0dXJlID0gaG9zdC5nYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy9tYXAvTWFwRnVsbDIucG5nXCJdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5tYXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBqPTA7IGogPCB0aGlzLm1hcFtpXS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcCA9IHRoaXMuaG9zdC5nYW1lLnA7XHJcbiAgICAgICAgLy8gICAgICAgICBwLnN0cm9rZSgwKTtcclxuICAgICAgICAvLyAgICAgICAgIHN3aXRjaCh0aGlzLm1hcFtpXVtqXSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBwLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gcC5yZWN0KGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLmdyYXNzLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwLmZpbGwoMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHAucmVjdChqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLm1hcEZ1bGxUZXh0dXJlLCAwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVtYXBSZW5kZXJDb21wb25lbnQ7XHJcbiIsImltcG9ydCBNb2JGaXJlMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUwXCI7XHJcbmltcG9ydCBNb2JXYXRlcjAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgwXCI7XHJcbmltcG9ydCBNb2JBaXIwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cwXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMVwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMVwiO1xyXG5pbXBvcnQgTW9iRWFydGgxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMVwiO1xyXG5pbXBvcnQgTW9iQWlyMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMVwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MVwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTJcIjtcclxuaW1wb3J0IE1vYkVhcnRoMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDJcIjtcclxuaW1wb3J0IE1vYldhdGVyMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjJcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzJcIjtcclxuaW1wb3J0IE1vYkFpcjIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjJcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUzXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgzXCI7XHJcbmltcG9ydCBNb2JXYXRlcjMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzXCI7XHJcbmltcG9ydCBNb2JTaGFkb3czIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3czXCI7XHJcbmltcG9ydCBNb2JBaXIzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNFwiO1xyXG5pbXBvcnQgTW9iRWFydGg0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoNFwiO1xyXG5pbXBvcnQgTW9iV2F0ZXI0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNFwiO1xyXG5pbXBvcnQgTW9iU2hhZG93NCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NFwiO1xyXG5pbXBvcnQgTW9iQWlyNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CX0ZJUkVfMDogTW9iRmlyZTAsXHJcbiAgICBNT0JfRUFSVEhfMDogTW9iRWFydGgwLCBcclxuICAgIE1PQl9XQVRFUl8wOiBNb2JXYXRlcjAsXHJcbiAgICBNT0JfU0hBRE9XXzA6IE1vYlNoYWRvdzAsXHJcbiAgICBNT0JfQUlSXzA6IE1vYkFpcjAsXHJcblxyXG4gICAgTU9CX0ZJUkVfMTogTW9iRmlyZTEsXHJcbiAgICBNT0JfRUFSVEhfMTogTW9iRWFydGgxLFxyXG4gICAgTU9CX1dBVEVSXzE6IE1vYldhdGVyMSxcclxuICAgIE1PQl9TSEFET1dfMTogTW9iU2hhZG93MSxcclxuICAgIE1PQl9BSVJfMTogTW9iQWlyMSxcclxuXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9FQVJUSF8yOiBNb2JFYXJ0aDIsXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1NIQURPV18yOiBNb2JTaGFkb3cyLFxyXG4gICAgTU9CX0FJUl8yOiBNb2JBaXIyLFxyXG5cclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0VBUlRIXzM6IE1vYkVhcnRoMyxcclxuICAgIE1PQl9XQVRFUl8zOiBNb2JXYXRlcjMsXHJcbiAgICBNT0JfU0hBRE9XXzM6IE1vYlNoYWRvdzMsXHJcbiAgICBNT0JfQUlSXzM6IE1vYkFpcjMsXHJcblxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX1dBVEVSXzQ6IE1vYldhdGVyNCxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNFxyXG5cclxuICAgIC8qXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRklSRV81OiBNb2JGaXJlNSxcclxuICAgIE1PQl9GSVJFXzY6IE1vYkZpcmU2LFxyXG4gICAgTU9CX0ZJUkVfNzogTW9iRmlyZTcsXHJcbiAgICBNT0JfRklSRV84OiBNb2JGaXJlOCxcclxuICAgIE1PQl9GSVJFXzk6IE1vYkZpcmU5LFxyXG4gICAgTU9CX0VBUlRIXzI6IE1vYkVhcnRoMixcclxuICAgIE1PQl9FQVJUSF8zOiBNb2JFYXJ0aDMsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX0VBUlRIXzU6IE1vYkVhcnRoNSxcclxuICAgIE1PQl9FQVJUSF82OiBNb2JFYXJ0aDYsXHJcbiAgICBNT0JfRUFSVEhfNzogTW9iRWFydGg3LFxyXG4gICAgTU9CX0VBUlRIXzg6IE1vYkVhcnRoOCxcclxuICAgIE1PQl9FQVJUSF85OiBNb2JFYXJ0aDksXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1dBVEVSXzM6IE1vYldhdGVyMyxcclxuICAgIE1PQl9XQVRFUl80OiBNb2JXYXRlcjQsXHJcbiAgICBNT0JfV0FURVJfNTogTW9iV2F0ZXI1LFxyXG4gICAgTU9CX1dBVEVSXzY6IE1vYldhdGVyNixcclxuICAgIE1PQl9XQVRFUl83OiBNb2JXYXRlcjcsXHJcbiAgICBNT0JfV0FURVJfODogTW9iV2F0ZXI4LFxyXG4gICAgTU9CX1dBVEVSXzk6IE1vYldhdGVyOSxcclxuICAgIE1PQl9TSEFET1dfMjogTW9iU2hhZG93MixcclxuICAgIE1PQl9TSEFET1dfMzogTW9iU2hhZG93MyxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9TSEFET1dfNTogTW9iU2hhZG93NSxcclxuICAgIE1PQl9TSEFET1dfNjogTW9iU2hhZG93NixcclxuICAgIE1PQl9TSEFET1dfNzogTW9iU2hhZG93NyxcclxuICAgIE1PQl9TSEFET1dfODogTW9iU2hhZG93OCxcclxuICAgIE1PQl9TSEFET1dfOTogTW9iU2hhZG93OSxcclxuICAgIE1PQl9BSVJfMjogTW9iQWlyMixcclxuICAgIE1PQl9BSVJfMzogTW9iQWlyMyxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNCxcclxuICAgIE1PQl9BSVJfNTogTW9iQWlyNSxcclxuICAgIE1PQl9BSVJfNjogTW9iQWlyNixcclxuICAgIE1PQl9BSVJfNzogTW9iQWlyNyxcclxuICAgIE1PQl9BSVJfODogTW9iQWlyOCxcclxuICAgIE1PQl9BSVJfOTogTW9iQWlyOSwqL1xyXG5cclxufTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocCl7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gQ29uc3RhbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5lYXJJbnRlcnBvbGF0aW9uKGZ4MSwgZngyLCB4MSwgeCwgeDIpe1xyXG4gICAgICAgIGlmICh4MiA8IHgxKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4ID49IHgyKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4IDw9IHgxKSByZXR1cm4gZngxO1xyXG4gICAgICAgIHJldHVybiBmeDErKCBmeDIgLSBmeDEgKSooeCAtIHgxKS8oeDIgLSB4MSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigxKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigyKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUua2V5UHJlc3NlZCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVsbGV0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0J1bGxldHMvQnVsbGV0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdG93ZXIsIG1vYiwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb2I7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgMTAsIDEwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMudG93ZXIgPSB0b3dlcjtcclxuXHJcbiAgICAgICAgbGV0IG9wcyA9IHtcclxuICAgICAgICAgICAgaTogMCxcclxuICAgICAgICAgICAgdDogMC4xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlID09IFwiYWlyXCIpe1xyXG4gICAgICAgICAgICBvcHMudCA9IDAuMDU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgPT0gXCJmaXJlXCIpe1xyXG4gICAgICAgICAgICBvcHMuaSA9IDM7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgPT0gXCJlYXJ0aFwiKXtcclxuICAgICAgICAgICAgb3BzLmkgPSAyO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlID09IFwid2F0ZXJcIil7XHJcbiAgICAgICAgICAgIG9wcy5pID0gMTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSA9PSBcInNoYWRvd1wiKXtcclxuICAgICAgICAgICAgb3BzLnQgPSAwLjA1O1xyXG4gICAgICAgICAgICBvcHMuaSA9IDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiYnVsbGV0XCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy90b3dlcnMvQnVsbGV0cy5wbmdcIiwgb3BzLmksIDAsIDQwLCAzKSxcclxuICAgICAgICAgICAgb3BzLnQsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImJ1bGxldFwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZHJhdyA9ICgpID0+IHt9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZHJhd1VwcGVyID0gKGluZGV4KT0+IHtcclxuICAgICAgICAgICAgLy8gbWFpbkdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIC8vIG1haW5HYW1lLnAuZmlsbCgyNTUsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgIC8vbWFpbkdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LTUsIHRoaXMuYm9keUNvbXBvbmVudC55LTUsIHRoaXMuYm9keUNvbXBvbmVudC53LCB0aGlzLmJvZHlDb21wb25lbnQuaClcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDIpXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTIwLCB0aGlzLmJvZHlDb21wb25lbnQueS0yMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5idWxsZXRDb21wb25lbnQgPSBuZXcgQnVsbGV0Q29tcG9uZW50KHRoaXMsIHRoaXMudGFyZ2V0LCBtb2JzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJ1bGxldENvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0O1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBaXJUb3dlciBmcm9tIFwiLi9Ub3dlcnMvQWlyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuXHJcbmNsYXNzIEdhbWVCb3R0b21NZW51IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5tb2JzID0gbW9ic1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vYiA9IHVuZGVmaW5lZFxyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCA1OyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgMzsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBuZXcgQm9keUNvbXBvbmVudChudWxsLCA1NSArIGkqdGlsZVNpemUgKyAyMCppICsgMTQqdGlsZVNpemUsIDE2KnRpbGVTaXplLCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvd2VySW5kZXhlcyA9IHtcclxuICAgICAgICAgICAgMDogQWlyVG93ZXIsXHJcbiAgICAgICAgICAgIDE6IEVhcnRoVG93ZXIsXHJcbiAgICAgICAgICAgIDI6IEZpcmVUb3dlcixcclxuICAgICAgICAgICAgMzogV2F0ZXJUb3dlcixcclxuICAgICAgICAgICAgNDogU2hhZG93VG93ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJySSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJySiA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMDtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3VpL0JvdHRvbU1lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclRleHR1cmVzID0gW1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl0uZ2V0KDAsIDAsIDQwLCA0MCksXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXS5nZXQoNDAsIDAsIDQwLCA0MCksXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXS5nZXQoNDAqMiwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdLmdldCg0MCozLCAwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl0uZ2V0KDQwKjQsIDAsIDQwLCA0MClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMudG93ZXJBY3Rpb25zVGV4dHVyZXMgPSBbXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJBY3Rpb25zLnBuZ1wiXS5nZXQoMCwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCg0MCwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCg4MCwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCgwLCA0MCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCg0MCwgNDAsIDQwLCA0MCksXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJBY3Rpb25zLnBuZ1wiXS5nZXQoODAsIDQwLCA0MCwgNDApXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpIHtcclxuICAgICAgICBzdXBlci5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmdhbWUucDtcclxuICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRleHR1cmUsIDAsIDE1KjQwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyVGV4dHVyZXNbMl0sIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyVGV4dHVyZXNbM10sIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyVGV4dHVyZXNbMF0sIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyVGV4dHVyZXNbMV0sIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyVGV4dHVyZXNbNF0sIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wLnJlY3QodGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHQoXCJUb3dlciBjb3N0OiA1MFwiLCA3MTAsIDcwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgMzsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3AuZmlsbCgyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3AucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwICYmIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCA8IDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCA8PSBtYWluR2FtZS5tb25leSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy50b3dlckFjdGlvbnNUZXh0dXJlc1tpXSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyQWN0aW9uc1RleHR1cmVzW2krM10sIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEgJiYgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgPCA1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCA8PSBtYWluR2FtZS5tb25leSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy50b3dlckFjdGlvbnNUZXh0dXJlc1tpXSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyQWN0aW9uc1RleHR1cmVzW2krM10sIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy50b3dlckFjdGlvbnNUZXh0dXJlc1tpXSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIHAubm9GaWxsKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwICYmIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCA8IDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxICYmIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsIDwgNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnksIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLncsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwgPCA1KVxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dCh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCtcIlwiLCA2MjAsIDcwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsIDwgNSlcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCtcIlwiLCA2ODAsIDcwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QvMitcIlwiLCA3NDAsIDcwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDApO1xyXG4gICAgICAgICAgICAgICAgcC50ZXh0KFwiVHlwZTogXCIrdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUsIDIwLCA2MjUpO1xyXG4gICAgICAgICAgICAgICAgcC50ZXh0KFwiU3RhdHMgTGV2ZWw6IFwiK3RoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCwgMjAsIDY0NSk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHQoXCJBYmlsaXR5IExldmVsOiBcIit0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCwgMjAsIDY2NSk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHQoXCJBdHRhY2sgRGFtYWdlOiBcIit0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQuYXR0YWNrRGFtYWdlLCAyMCwgNjg1KTtcclxuICAgICAgICAgICAgICAgIHAudGV4dChcIkF0dGFjayBTcGVlZDogXCIrKHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZC50b0ZpeGVkKDIpKSwgMjAsIDcwNSk7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KFwiTWF4IEhQOiBcIit0aGlzLmN1cnJlbnRNb2IubWF4SHAsIDIwLCA2MjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dChcIkZpcmUgUmVzaXN0OiBcIit0aGlzLmN1cnJlbnRNb2IucmVzaXN0LnJlc2lzdHNbXCJmaXJlXCJdLnRvRml4ZWQoMiksIDIwLCA2NDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dChcIldhdGVyIFJlc2lzdDogXCIrdGhpcy5jdXJyZW50TW9iLnJlc2lzdC5yZXNpc3RzW1wid2F0ZXJcIl0udG9GaXhlZCgyKSwgMjAsIDY1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KFwiRWFydGggUmVzaXN0OiBcIit0aGlzLmN1cnJlbnRNb2IucmVzaXN0LnJlc2lzdHNbXCJlYXJ0aFwiXS50b0ZpeGVkKDIpLCAyMCwgNjcwKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQoXCJBaXIgUmVzaXN0OiBcIit0aGlzLmN1cnJlbnRNb2IucmVzaXN0LnJlc2lzdHNbXCJhaXJcIl0udG9GaXhlZCgyKSwgMjAsIDY4NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KFwiU2hhZG93IFJlc2lzdDogXCIrdGhpcy5jdXJyZW50TW9iLnJlc2lzdC5yZXNpc3RzW1wic2hhZG93XCJdLnRvRml4ZWQoMiksIDIwLCA3MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgIHAudGV4dChtYWluR2FtZS5tb25leS50b1N0cmluZygpLCBwLmdhbWVXaWR0aC8yLTE0LCBwLmdhbWVIZWlnaHQtMTAwLCAxMDAsIDI1KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgc3VwZXIubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLmdhbWUucC5tb3VzZVg7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLmdhbWUucC5tb3VzZVk7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgaWYgKHkgPCAxNSp0aWxlU2l6ZSl7XHJcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC5tYXA7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckogPSBNYXRoLmZsb29yKHggLyB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckkgPSBNYXRoLmZsb29yKHkgLyB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIGlmIChtYXBbdGhpcy5jdXJySV1bdGhpcy5jdXJySl0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC54ID09IHRoaXMuY3VyckogKiB0aWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC55ID09IHRoaXMuY3VyckkgKiB0aWxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB0aGlzLmtpZHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG1vYiBvZiB0aGlzLm1vYnMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2IuYm9keUNvbXBvbmVudC5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iID0gbW9iO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMCkgeyAvL25vdGhpbmdcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDEpeyAvL3Rvd2Vyc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS5tb3VzZUhvdmVyKHgsIHkpICYmIHRoaXMudHJ5QnV5KDUwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3dlciA9IG5ldyB0aGlzLnRvd2VySW5kZXhlc1tpXSh0aGlzLCB0aGlzLmN1cnJKKnRpbGVTaXplLCB0aGlzLmN1cnJJKnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdG93ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodG93ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMil7IC8vdXBncmFkZXMsIGRlc3Ryb3lcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYmplY3QgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbMF0ubW91c2VIb3Zlcih4LCB5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCAhPT0gNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlCdXkodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1sxXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgIT09IDUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5QnV5KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudG93ZXJDb3N0ICs9IHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCArPSAyMDAgKiBNYXRoLmZsb29yKE1hdGgucG93KDEuNSwgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzWzJdLm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3Qub25EZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5ICs9ICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudG93ZXJDb3N0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QnV5KHByaWNlKXtcclxuICAgICAgICBpZiAobWFpbkdhbWUubW9uZXkgPj0gcHJpY2Upe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVCb3R0b21NZW51O1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iQWlyMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMTI1MCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA1MDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Cb3NzZXMucG5nXCIsIDIsIDAsIDE2MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtNTAsIHRoaXMuYm9keUNvbXBvbmVudC55LTUwLCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIwO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iQWlyMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgOTYwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDE2O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDE0LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JBaXIyIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTIsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDYwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDc1MDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAxMywgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iQWlyNCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMjQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTUsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIER5aW5nT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZGllXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYkZpcmUwLnBuZ1wiLCAzLCAwLCA4MCwgNCksIDAuMSxcclxuICAgICAgICAgICAgZmFsc2UpKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRpZVwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gNCowLjErMSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMueC0yNSwgdGhpcy55LTI1LCA5MCpNYXRoLlBJLzE4MCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IER5aW5nT2JqZWN0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRWFydGgwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgMjUwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNywgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgwO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDcyMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA0LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCA1MDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjUwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL0Jvc3Nlcy5wbmdcIiwgMSwgMCwgMTYwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC01MCwgdGhpcy5ib2R5Q29tcG9uZW50LnktNTAsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoMjtcclxuIiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0NTA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNiwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRWFydGg0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEyMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGg0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUwIGV4dGVuZHMgTW9iIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDEwMCk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDEsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUwO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDExMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMiwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDMsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUzIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzYwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNjAwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDAsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmU0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL0Jvc3Nlcy5wbmdcIiwgNCwgMCwgMTYwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC01MCwgdGhpcy5ib2R5Q29tcG9uZW50LnktNTAsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmU0O1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBNb2JNb3ZpbmdDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvTW9iTW92aW5nQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSFBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0hQUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEeWluZ09iamVjdCBmcm9tIFwiLi9EeWluZ09iamVjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVFbWl0dGVyIGZyb20gXCIuLi9QYXJ0aWNsZUVtaXR0ZXJcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHNpemUsIHRpbGVTaXplLCByb3V0ZSwgdHVyblRpbWUsIHJlc2lzdCwgaHApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMjtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5tYXhIcCA9IGhwO1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgICAgICB0aGlzLnJlc2lzdCA9IHJlc2lzdDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICAvL3RoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JNb3ZpbmdDb21wb25lbnQgPSBuZXcgTW9iTW92aW5nQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgcm91dGUsIHRpbGVTaXplLCB0dXJuVGltZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5tb2JNb3ZpbmdDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmhwUmVuZGVyQ29tcG9uZW50ID0gbmV3IEhQUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5ocFJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgaWYodGhpcy5ocCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSB0aGlzLmJvdW50eTtcclxuICAgICAgICAgICAgLy8gbGV0IGR5aW5nT2JqZWN0ID0gbmV3IER5aW5nT2JqZWN0KHRoaXMuZ2FtZSwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnN0YXRlLmFkZEdhbWVPYmplY3QoZHlpbmdPYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0ge3I6MCwgZzowLCBiOjB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBGaXJlUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5yID0gMjAwO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXN0IGluc3RhbmNlb2YgV2F0ZXJSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmIgPSAyMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBTaGFkb3dSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnIgPSAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDE1MDtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEFpclJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuZyA9IDgwO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmIgPSAyNTU7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBFYXJ0aFJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuciA9IDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5nID0gMTgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbWl0dGVyID0gbmV3IFBhcnRpY2xlRW1pdHRlcih0aGlzLmdhbWUsIDIwLCBjb2xvcnMuciwgY29sb3JzLmcsIGNvbG9ycy5iKTtcclxuICAgICAgICAgICAgZW1pdHRlci5zZXRMb2NhdGlvbih0aGlzLmJvZHlDb21wb25lbnQueCt0aGlzLmJvZHlDb21wb25lbnQudy8yLCB0aGlzLmJvZHlDb21wb25lbnQueSt0aGlzLmJvZHlDb21wb25lbnQuaC8yKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLmFkZEdhbWVPYmplY3QoZW1pdHRlcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZSh0b3dlciwgY29lZil7XHJcbiAgICAgICAgbGV0IHB1cmVEYW1hZ2UgPSB0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tEYW1hZ2UqY29lZjtcclxuICAgICAgICBsZXQgZGFtYWdlID0gcHVyZURhbWFnZSAqIHRoaXMucmVzaXN0LnJlc2lzdHNbdG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZV07XHJcbiAgICAgICAgaWYodGhpcy5ocCA8IGRhbWFnZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIHN1cGVyLmRyYXdVcHBlcihpbmRleCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEpe1xyXG4gICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYjtcclxuIiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA1O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDE2LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cwO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNjAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvQm9zc2VzLnBuZ1wiLCAzLCAwLCAxNjAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTUwLCB0aGlzLmJvZHlDb21wb25lbnQueS01MCwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MTtcclxuIiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDQzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDE3LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3czIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTIwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNTAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAzMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTgsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDIwMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxODAwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDE5LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3c0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTEwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDksIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMDtcclxuIiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNzUwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDEwLCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNDIwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA3NTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA4LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNDAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDYwMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvQm9zc2VzLnBuZ1wiLCAwLCAwLCAxNjAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTUwLCB0aGlzLmJvZHlDb21wb25lbnQueS01MCwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIzO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyNCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAxMSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXI0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZUVtaXR0ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjb3VudCwgciwgZywgYil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudnhtYXggPSAxMDA7XHJcbiAgICAgICAgdGhpcy52eW1heCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhdGlvbih4LCB5KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcC54ID0gdGhpcy54O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gdGhpcy55O1xyXG4gICAgICAgICAgICAgICAgcC5yID0gdGhpcy5yO1xyXG4gICAgICAgICAgICAgICAgcC5nID0gdGhpcy5nO1xyXG4gICAgICAgICAgICAgICAgcC5iID0gdGhpcy5iO1xyXG4gICAgICAgICAgICAgICAgcC52eCA9IE1hdGgucmFuZG9tKCkqdGhpcy52eG1heCoyLXRoaXMudnhtYXg7XHJcbiAgICAgICAgICAgICAgICBwLnZ5ID0gTWF0aC5yYW5kb20oKSp0aGlzLnZ5bWF4KjItdGhpcy52eW1heDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gocCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS54ICs9IGRlbHRhICogdGhpcy5wYXJ0aWNsZXNbaV0udng7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLnkgKz0gZGVsdGEgKiB0aGlzLnBhcnRpY2xlc1tpXS52eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgbWFpbkdhbWUuc3RhdGUucmVtb3ZlR2FtZU9iamVjdCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydCA9IHRoaXMucGFydGljbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5HYW1lLnAubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWluR2FtZS5wLmZpbGwocGFydC5yLCBwYXJ0LmcsIHBhcnQuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFpbkdhbWUucC5yZWN0KHBhcnQueCwgcGFydC55LCAyLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdSZWN0KHBhcnQueCwgcGFydC55LCA0LCA0LCBwYXJ0LnIsIHBhcnQuZywgcGFydC5iKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVFbWl0dGVyOyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUaWxlbWFwUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL3JlbmRlci9UaWxlbWFwL1RpbGVtYXBSZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvbG9naWMvVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCA9IG5ldyBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFRpbGVtYXBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgQWlyVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0FpclRvd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBBaXJUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdO1xyXG4gICAgICAgIHRoaXMucmVjdCA9IHRoaXMudGV4dHVyZS5nZXQoMio0MCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLnJlY3QsIHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSk7XHJcbiAgICAgICAgICAgIC8vbWFpbkdhbWUucC50ZXh0KHRoaXMudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwrXCIgXCIrdGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsICx0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgbGV0IGFsbFRvd2VycyA9IG1haW5HYW1lLnN0YXRlLmdhbWVNZW51Qm90dG9tLmtpZHM7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgYWxsVG93ZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlICE9IFwiYWlyXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy5ib2R5Q29tcG9uZW50KSA8IDEwMClcclxuICAgICAgICAgICAgICAgICAgICBhbGxUb3dlcnNbaV0uYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZihcInNwZWVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFpclRvd2VyO1xyXG4iLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0VhcnRoVG93ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBFYXJ0aFRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgRWFydGhUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdO1xyXG4gICAgICAgIHRoaXMucmVjdCA9IHRoaXMudGV4dHVyZS5nZXQoMyo0MCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLnJlY3QsIHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSk7XHJcbiAgICAgICAgICAgIC8vbWFpbkdhbWUucC50ZXh0KHRoaXMudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwrXCIgXCIrdGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsICx0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIEVhcnRoVG93ZXI7XHJcbiIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgRmlyZVRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBGaXJlVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXTtcclxuICAgICAgICB0aGlzLnJlY3QgPSB0aGlzLnRleHR1cmUuZ2V0KDAsIDAsIDQwLCA0MCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZHJhdyA9ICgpPT57XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5yZWN0LCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnkpO1xyXG4gICAgICAgICAgICAvL21haW5HYW1lLnAudGV4dCh0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsK1wiIFwiK3RoaXMudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCAsdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCA0MCwgNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlcjtcclxuIiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IFNoYWRvd1Rvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gdGhpcy50ZXh0dXJlLmdldCg0KjQwLCAwLCA0MCwgNDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+e1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmltYWdlKHRoaXMucmVjdCwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy9tYWluR2FtZS5wLnRleHQodGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCtcIiBcIit0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgLHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dUb3dlcjtcclxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgbWFpbkdhbWUudGlsZVNpemUsIG1haW5HYW1lLnRpbGVTaXplKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVG93ZXJCdWlsZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9Ub3dlckJ1aWxkZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyQnVpbGRlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCdWlsZGVyQ29tcG9uZW50ID0gbmV3IFRvd2VyQnVpbGRlckNvbXBvbmVudCh0aGlzLCB0aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQnVpbGRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJCdWlsZGVyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvV2F0ZXJUb3dlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdGVyVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBXYXRlclRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gdGhpcy50ZXh0dXJlLmdldCg0MCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLnJlY3QsIHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSk7XHJcbiAgICAgICAgICAgIC8vbWFpbkdhbWUucC50ZXh0KHRoaXMudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwrXCIgXCIrdGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsICx0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJUb3dlcjtcclxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdmVNYXN0ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCA9IG5ldyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQodGhpcywgdGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy53YXZlTWFzdGVyTG9naWNDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F2ZU1hc3RlcjsiLCJpbXBvcnQgQnVmZnNDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5raWRzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vYnVmZnNcclxuICAgICAgICB0aGlzLmJ1ZmZzQ29tcG9uZW50ID0gbmV3IEJ1ZmZzQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMgPSB7fTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVjdCh4LCB5LCB3LCBoLCByLCBnLCBiKXtcclxuICAgICAgICBsZXQgcCA9IG1haW5HYW1lLnA7XHJcbiAgICAgICAgcC5wdXNoKCk7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IHcqMC41O1xyXG4gICAgICAgIGxldCBoYWxmSGVpZ2h0ID0gaCowLjU7XHJcbiAgICAgICAgcC50cmFuc2xhdGUoeCtoYWxmV2lkdGgsIHkraGFsZkhlaWdodCk7XHJcbiAgICAgICAgcC5maWxsKHIsIGcsIGIpO1xyXG4gICAgICAgIHAucmVjdCgtaGFsZldpZHRoLCAtaGFsZkhlaWdodCwgdywgaCk7XHJcbiAgICAgICAgcC5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKGltYWdlLCB4LCB5LCBhbmdsZSl7XHJcbiAgICAgICAgbGV0IHAgPSBtYWluR2FtZS5wO1xyXG4gICAgICAgIHAucHVzaCgpO1xyXG4gICAgICAgIGxldCBoYWxmV2lkdGggPSBpbWFnZS53aWR0aCowLjU7XHJcbiAgICAgICAgbGV0IGhhbGZIZWlnaHQgPSBpbWFnZS5oZWlnaHQqMC41O1xyXG4gICAgICAgIHAudHJhbnNsYXRlKHgraGFsZldpZHRoLCB5K2hhbGZIZWlnaHQpO1xyXG4gICAgICAgIHAucm90YXRlKCgtOTAgKiBwLlBJIC8gMTgwKSthbmdsZSk7XHJcbiAgICAgICAgcC5pbWFnZShpbWFnZSwgLWltYWdlLndpZHRoKjAuNSwgLWltYWdlLmhlaWdodCowLjUpO1xyXG4gICAgICAgIHAucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0uZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRDb21wb25lbnQoYyl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGMpe1xyXG4gICAgICAgIHRoaXMua2lkcy5wdXNoKGMpO1xyXG4gICAgICAgIGMucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVBhcmVudCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zdGF0ZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb21wb25lbnQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGMpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMua2lkcy5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgb25BY3Rpb24pe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHggLT0gMTY3LzI7XHJcbiAgICAgICAgeSAtPSA3My8yO1xyXG4gICAgICAgIHRoaXMub25BY3Rpb24gPSBvbkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSW1hZ2UgPSBnYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VfaWRsZSA9IGJ1dHRvbkltYWdlLmdldCgwLCA3MywgMTY3LCA3Myk7XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9ob3ZlciA9IGJ1dHRvbkltYWdlLmdldCgwLCAwLCAxNjcsIDczKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgdGhpcy5idXR0b25JbWFnZV9pZGxlKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC51cGRhdGUgPSAoZGVsdGEpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1haW5Nb3VzZUhvdmVyKCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuaW1hZ2UgPSB0aGlzLmJ1dHRvbkltYWdlX2hvdmVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuaW1hZ2UgPSB0aGlzLmJ1dHRvbkltYWdlX2lkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQubW91c2VQcmVzc2VkID0gKCk9PntcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9keUNvbXBvbmVudC5tYWluTW91c2VIb3ZlcigpKVxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBUaWxlbWFwIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvVGlsZW1hcFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1dhdmVNYXN0ZXJcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9PYmplY3RzL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRvd2VyQnVpbGRlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlckJ1aWxkZXJcIjtcclxuaW1wb3J0IEdhbWVCb3R0b21NZW51IGZyb20gXCIuLi9PYmplY3RzL0dhbWUvR2FtZUJvdHRvbU1lbnVcIjtcclxuaW1wb3J0IE1lbnVTdGF0ZSBmcm9tIFwiLi9NZW51U3RhdGVcIjtcclxuXHJcbmNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBnYW1lLm1vbmV5ID0gNTAwO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlciA9IG5ldyBXYXZlTWFzdGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMud2F2ZU1hc3Rlcik7XHJcbiAgICAgICAgLy8gdGhpcy50b3dlckJ1aWxkZXIgPSBuZXcgVG93ZXJCdWlsZGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMudG93ZXJCdWlsZGVyKTtcclxuICAgICAgICB0aGlzLmdhbWVNZW51Qm90dG9tID0gbmV3IEdhbWVCb3R0b21NZW51KGdhbWUsIHRoaXMudGlsZW1hcCwgdGhpcy53YXZlTWFzdGVyLmtpZHMpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLmdhbWVNZW51Qm90dG9tKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzc2VkKCkge1xyXG4gICAgICAgIHN1cGVyLmtleVByZXNzZWQoKTtcclxuICAgICAgICBpZiAobWFpbkdhbWUucC5rZXlDb2RlID09IG1haW5HYW1lLnAuRVNDQVBFKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUuc2V0U3RhdGUobmV3IE1lbnVTdGF0ZShtYWluR2FtZSkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1haW5HYW1lLnAua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9ICF0aGlzLnJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlO1xyXG4iLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vT2JqZWN0cy9NZW51L0J1dHRvblwiO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5cclxuY2xhc3MgTWVudVN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIGxldCBidXR0b24xID0gbmV3IEJ1dHRvbihnYW1lLCBnYW1lLnAuZ2FtZVdpZHRoLzIsIGdhbWUucC5nYW1lSGVpZ2h0LzItNTAsICgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdChidXR0b24xKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgbWFpbkdhbWUuc2V0U3RhdGUobmV3IEdhbWVTdGF0ZShtYWluR2FtZSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAyNTUsIDApXHJcbiAgICAgICAgbWFpbkdhbWUucC50ZXh0KFwiU3RhcnRcIiwgbWFpbkdhbWUucC5nYW1lV2lkdGgvMi0xMywgbWFpbkdhbWUucC5nYW1lSGVpZ2h0LzItNDgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudVN0YXRlO1xyXG4iLCJjbGFzcyBTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkR2FtZU9iamVjdChvKXtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2gobyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUdhbWVPYmplY3Qobyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nYW1lT2JqZWN0cy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcbiAgICAgICAgaWYgICh0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VDbGlja2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgaWYgICh0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgaWYgICh0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAgKHRoaXMucnVubmluZylcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5kcmF3KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZyl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAudGV4dChcIlBBVVNFXCIsIG1haW5HYW1lLnAuZ2FtZVdpZHRoLzItMTMsIG1haW5HYW1lLnAuZ2FtZUhlaWdodC8yLTQ4KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3NlZCgpe1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9