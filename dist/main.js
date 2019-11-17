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
        "assets/mobs/MobFire0.png"
        
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
        console.log(this.waveId);
        
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
        this.road = this.texture.get(40, 0, 40, 40);

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
                        p.image(this.road, j*this.tileSize, i*this.tileSize);
                        break;
                    case 2:
                        p.fill(0);
                        p.rect(j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                        break;
                    case 3:
                        p.image(this.road, j*this.tileSize, i*this.tileSize);
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
        super(game, x, y, 60, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1250);
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 960);
        this.resist.host = this;
        this.bounty = 16;
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 10000);
        this.resist.host = this;
        this.bounty = 125;
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 60000);
        this.resist.host = this;
        this.bounty = 750;
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2400);
        this.resist.host = this;
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 400);
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
        super(game, x, y, 60, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6000);
        this.resist.host = this;
        this.bounty = 200;
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 4300);
        this.resist.host = this;
        this.bounty = 100;
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 15000);
        this.resist.host = this;
        this.bounty = 300;
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 200000);
        this.resist.host = this;
        this.bounty = 1800;
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 300);
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 750);
        this.resist.host = this;
        this.bounty = 13;
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 4200);
        this.resist.host = this;
        this.bounty = 75;
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
        super(game, x, y, 60, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 400000);
        this.resist.host = this;
        this.bounty = 6000;
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2300);
        this.resist.host = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL0dhbWVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQXR0YWNrU3BlZWRCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdXJuaW5nQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0N1cnNlQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL1Nsb3dCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvTW9iUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvQnVsbGV0cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL0dhbWVCb3R0b21NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0R5aW5nT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmU0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL01vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9QYXJ0aWNsZUVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9BaXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvV2F2ZU1hc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9NZW51L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL1N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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RUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNlLG9FQUFLLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9HYW1lXCI7XHJcbmltcG9ydCBNZW51U3RhdGUgZnJvbSBcIi4vc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlXCI7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vc2NyaXB0cy9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcblxyXG5sZXQgZ2FtZTtcclxuXHJcbmNvbnN0IHMgPSAocCkgPT4ge1xyXG5cclxuICAgIGxldCBsYXN0VGltZTtcclxuICAgIGxldCBjdXJyVGltZTtcclxuXHJcbiAgICBwLmNyb3AgPSBmdW5jdGlvbihpbWFnZSwgeCwgeSwgdywgaCl7XHJcbiAgICAgICAgdmFyIGNyb3BwZWQgPSBwLmNyZWF0ZUltYWdlKHcsIGgpO1xyXG4gICAgICAgIGNyb3BwZWQuY29weShpbWFnZSwgeCwgeSwgeCArIHcsIHkgKyBoLCAwLCAwLCB4ICsgdywgeSArIGgpXHJcbiAgICAgICAgcmV0dXJuIGNyb3BwZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAuaW1hZ2VzQXJyYXkgPSBbXCJhc3NldHMvdWkvYnV0dG9uc19tZW51LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL21hcC9UaWxlc2V0LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL3VpL0JvdHRvbU1lbnUucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL21vYnMvTW9iRmlyZTAucG5nXCJcclxuICAgICAgICBcclxuICAgIF07XHJcbiAgICBwLnNvdW5kc0FycmF5ID0gW1wiYXNzZXRzL0p1bXAzLndhdlwiXTtcclxuXHJcbiAgICBwLmdpbWFnZXMgPSB7fTtcclxuICAgIHAuZ3NvdW5kcyA9IHt9O1xyXG5cclxuICAgIHAuZ2FtZVdpZHRoID0gOTYwO1xyXG4gICAgcC5nYW1lSGVpZ2h0ID0gNzIwO1xyXG5cclxuICAgIHAubG9hZEdhbWVJbWFnZSA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5naW1hZ2VzW3N0cl0gPSBwLmxvYWRJbWFnZShzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLmxvYWRHYW1lU291bmQgPSBmdW5jdGlvbihzdHIpe1xyXG4gICAgICAgIHAuZ3NvdW5kc1tzdHJdID0gcC5sb2FkU291bmQoc3RyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5wcmVsb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcC5pbWFnZXNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHAubG9hZEdhbWVJbWFnZShwLmltYWdlc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcC5zb3VuZHNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHAubG9hZEdhbWVTb3VuZChwLnNvdW5kc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwLnNldHVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHAuZ2FtZVdpZHRoLCBwLmdhbWVIZWlnaHQpO1xyXG4gICAgICAgIHAucGl4ZWxEZW5zaXR5KDEpO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY3VyclRpbWUgPSAwO1xyXG5cclxuICAgICAgICBnYW1lID0gbmV3IEdhbWUocCk7XHJcbiAgICAgICAgd2luZG93Lm1haW5HYW1lID0gZ2FtZTtcclxuICAgICAgICBnYW1lLnNldFN0YXRlKG5ldyBHYW1lU3RhdGUoZ2FtZSkpO1xyXG4gICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBwLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXJyVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpLzEwMDA7XHJcblxyXG4gICAgICAgIHAuYmFja2dyb3VuZCgwKTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMC4yKVxyXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBnYW1lLmRyYXcocCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZTtcclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwLm1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZVByZXNzZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubW91c2VEcmFnZ2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBnYW1lcDUgPSBuZXcgcDUocywgXCJtYWluXCIpO1xyXG5cclxuXHJcbiIsImNsYXNzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJhbWVzLCB0aW1lLCBsb29wKXtcclxuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGcmFtZSA+PSB0aGlzLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IHRoaXMuZnJhbWVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMudGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgLT0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYW1lc1t0aGlzLmN1cnJlbnRGcmFtZV07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmFuaW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQW5pbWF0aW9uKG5hbWUsIGFuaW0pe1xyXG4gICAgICAgIHRoaXMuYW5pbXNbbmFtZV0gPSBhbmltO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50QW5pbWF0aW9uKG5hbWUpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09IHRoaXMuYW5pbXNbbmFtZV0pIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gdGhpcy5hbmltc1tuYW1lXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltLmN1cnJlbnRGcmFtZSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbS51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQ7IiwiY2xhc3MgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQm9keUNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHgsIHksIHcsIGgpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlSG92ZXIoKXtcclxuICAgICAgICBsZXQgbW91c2VYID0gdGhpcy5ob3N0LmdhbWUucC5tb3VzZVg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VZO1xyXG4gICAgICAgIGlmIChtb3VzZVggPj0gdGhpcy54ICYmIG1vdXNlWCA8IHRoaXMueCt0aGlzLncpe1xyXG4gICAgICAgICAgICBpZiAobW91c2VZID49IHRoaXMueSAmJiBtb3VzZVkgPCB0aGlzLnkrdGhpcy5oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvdmVybGFwcyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBpZiAodGhpcy54IDwgYm9keUNvbXBvbmVudC54ICsgYm9keUNvbXBvbmVudC53ICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMudyA+IGJvZHlDb21wb25lbnQueCAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgPCBib2R5Q29tcG9uZW50LnkgKyBib2R5Q29tcG9uZW50LmggJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oID4gYm9keUNvbXBvbmVudC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUbyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBsZXQgazEgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LngtdGhpcy54KTtcclxuICAgICAgICBsZXQgazIgPSBNYXRoLmFicyhib2R5Q29tcG9uZW50LnktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlSG92ZXIoeCwgeSl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHg7XHJcbiAgICAgICAgbGV0IG1vdXNlWSA9IHk7XHJcbiAgICAgICAgaWYgKG1vdXNlWCA+PSB0aGlzLnggJiYgbW91c2VYIDwgdGhpcy54K3RoaXMudyl7XHJcbiAgICAgICAgICAgIGlmIChtb3VzZVkgPj0gdGhpcy55ICYmIG1vdXNlWSA8IHRoaXMueSt0aGlzLmgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZVRvUG9pbnQoeCwgeSl7XHJcbiAgICAgICAgbGV0IGsxID0gTWF0aC5hYnMoeC10aGlzLngpO1xyXG4gICAgICAgIGxldCBrMiA9IE1hdGguYWJzKHktdGhpcy55KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGsxKmsxICsgazIqazIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmdsZVRvKGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IGJvZHlDb21wb25lbnQueCAtIHRoaXMueDtcclxuICAgICAgICBsZXQgeURpc3QgPSBib2R5Q29tcG9uZW50LnkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUb1BvaW50KHgsIHkpe1xyXG4gICAgICAgIGxldCB4RGlzdCA9IHggLSB0aGlzLng7XHJcbiAgICAgICAgbGV0IHlEaXN0ID0geSAtIHRoaXMueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9keUNvbXBvbmVudDsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCJcclxuXHJcbmNsYXNzIEF0dGFja1NwZWVkQnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImF0dGFja1NwZWVkQXVyYVwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkIC09IHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCAqICgwLjEgKyAwLjAyKnRoaXMuYnVmZmx2bCk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICs9IHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCAqICgwLjEgKyAwLjAyKnRoaXMuYnVmZmx2bCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXR0YWNrU3BlZWRCdWZmOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdWZmQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdHlwZSl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmJ1ZmZsdmwgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWZmQ29tcG9uZW50OyIsImltcG9ydCBCdXJuaW5nQnVmZiBmcm9tIFwiLi9CdXJuaW5nQnVmZlwiO1xyXG5pbXBvcnQgQ3Vyc2VCdWZmIGZyb20gXCIuL0N1cnNlQnVmZlwiO1xyXG5pbXBvcnQgQXR0YWNrU3BlZWRCdWZmIGZyb20gXCIuL0F0dGFja1NwZWVkQnVmZlwiO1xyXG5pbXBvcnQgU2xvd0J1ZmYgZnJvbSBcIi4vU2xvd0J1ZmZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiYnVyblwiOiBCdXJuaW5nQnVmZixcclxuICAgIFwiY3Vyc2VcIjogQ3Vyc2VCdWZmLFxyXG4gICAgXCJzcGVlZFwiOiBBdHRhY2tTcGVlZEJ1ZmYsXHJcbiAgICBcInNsb3dcIjogU2xvd0J1ZmZcclxuXHJcbn07IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1ZmZzIGZyb20gXCIuL0J1ZmZzXCI7XHJcblxyXG5jbGFzcyBCdWZmc0NvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYnVmZnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJ1ZmZDbGFzc2VzID0gQnVmZnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5QnVmZih0eXBlLCBidWZmbHZsKXtcclxuICAgICAgICBsZXQgYnVmZkNvbXBvbmVudENsYXNzID0gdGhpcy5idWZmQ2xhc3Nlc1t0eXBlXTtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IGJ1ZmZDb21wb25lbnRDbGFzcyh0aGlzLmhvc3QpO1xyXG4gICAgICAgIGNvbXBvbmVudC5idWZmbHZsID0gYnVmZmx2bDtcclxuICAgICAgICB0aGlzLmhvc3QuYXR0YWNobWVudHNbdHlwZV0gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5vbigpO1xyXG4gICAgICAgIHRoaXMuYnVmZnNbdHlwZV0gPSBidWZmbHZsO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeUJ1ZmYodHlwZSwgYnVmZmx2bCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVmZnNbdHlwZV0gIT09IGJ1ZmZsdmwpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmc1t0eXBlXSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUJ1ZmYodHlwZSwgYnVmZmx2bCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAoYnVmZmx2bCA+IHRoaXMuYnVmZnNbdHlwZV0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdWZmKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUJ1ZmYodHlwZSwgYnVmZmx2bCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQnVmZih0eXBlKXtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5ob3N0LmF0dGFjaG1lbnRzW3R5cGVdO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY29tcG9uZW50Lm9mZigpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVmZnNbdHlwZV0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZzQ29tcG9uZW50OyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1cm5pbmdCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJidXJuXCIpO1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmJ1cm5UaW1lID0gNDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLmJ1cm5UaW1lciArPSBkZWx0YTtcclxuICAgICAgICBsZXQgZGFtYWdlUGVyU2Vjb25kID0gZGVsdGEgKiB0aGlzLmhvc3QubWF4SHAgKiAoMC4wMDggKiB0aGlzLmJ1ZmZsdmwpO1xyXG4gICAgICAgIGlmKHRoaXMuaG9zdC5ocCA8IGRhbWFnZVBlclNlY29uZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5ocCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmhwIC09IGRhbWFnZVBlclNlY29uZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYnVyblRpbWVyID49IHRoaXMuYnVyblRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZih0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1cm5pbmdCdWZmOyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEN1cnNlQnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiY3Vyc2VcIik7XHJcbiAgICAgICAgdGhpcy5jdXJzZVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmN1cnNlVGltZSA9IDQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgbGV0IHJlc2lzdHMgPSB0aGlzLmhvc3QucmVzaXN0LnJlc2lzdHM7XHJcbiAgICAgICAgZm9yKGxldCBrIGluIHJlc2lzdHMpe1xyXG4gICAgICAgICAgICByZXNpc3RzW2tdICs9IDAuMSAqIHRoaXMuYnVmZmx2bDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLmN1cnNlVGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMuY3Vyc2VUaW1lciA+PSB0aGlzLmN1cnNlVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIGxldCByZXNpc3RzID0gdGhpcy5ob3N0LnJlc2lzdC5yZXNpc3RzO1xyXG4gICAgICAgIGZvcihsZXQgayBpbiByZXNpc3RzKXtcclxuICAgICAgICAgICAgcmVzaXN0c1trXSAtPSAwLjEgKiB0aGlzLmJ1ZmZsdmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDdXJzZUJ1ZmY7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU2xvd0J1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJzbG93XCIpO1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnNsb3dUaW1lID0gNDtcclxuICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQgPSB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQgLSB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQgKiAwLjA3ICogdGhpcy5idWZmbHZsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xvd1RpbWVyID49IHRoaXMuc2xvd1RpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZih0aGlzLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICB0aGlzLmhvc3QubW9iTW92aW5nQ29tcG9uZW50Lm1vdmVtZW50U3BlZWQgPSB0aGlzLnN0YXJ0VmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbG93QnVmZjsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVsbGV0Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0YXJnZXQsIG1vYnMpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubW9icyA9IG1vYnM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDM1MDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIGxldCB0Qm9keSA9IHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQuYW5nbGVUb1BvaW50KHRCb2R5LngrdEJvZHkudy8yLCB0Qm9keS55K3RCb2R5LmgvMik7XHJcbiAgICAgICAgYm9keS54ICs9IE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBib2R5LnkgKz0gTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGlmKGJvZHkub3ZlcmxhcHModEJvZHkpKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmhvc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZWNlaXZlRGFtYWdlKHRoaXMuaG9zdC50b3dlciwgMSk7XHJcbiAgICAgICAgICAgIGxldCBhdHRhY2tUb3dlckMgPSB0aGlzLmhvc3QudG93ZXIudG93ZXJDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcImZpcmVcIil7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQpIDwgOTAgKyAxMDAgKiAoMC4xICogYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JzW2ldLmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJidXJuXCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJ3YXRlclwiKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCAxMDAgKyAxMDAgKiAoMC4yICogYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JzW2ldLmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJzbG93XCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJzaGFkb3dcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwiY3Vyc2VcIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwiZWFydGhcIil7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRhcmdldCAhPT0gdGhpcy5tb2JzW2ldICYmIHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCAxMDAgKyAxMDAgKiAoMC4yICogYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JzW2ldLnJlY2VpdmVEYW1hZ2UodGhpcy5ob3N0LnRvd2VyLCAwLjIwKmF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iTW92aW5nQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCwgcm91dGUsIHRpbGVTaXplLCBtb3ZlbWVudFNwZWVkKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gbW92ZW1lbnRTcGVlZDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNoaWZ0ID0gKHRoaXMudGlsZVNpemUqMiktdGhpcy50aWxlU2l6ZS10aGlzLmJvZHlDb21wb25lbnQudyowLjU7XHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnggKz0gdGhpcy5zaGlmdDtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueSArPSB0aGlzLnNoaWZ0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXh0VGlsZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpe1xyXG4gICAgICAgIGxldCB0aWxlID0gdGhpcy5yb3V0ZVt0aGlzLmN1cnJlbnRSb3V0ZUluZGV4KytdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSB0aWxlO1xyXG4gICAgICAgIGlmICh0aWxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB4RGlzdCA9ICh0aWxlLmoqdGhpcy50aWxlU2l6ZSkgLSAodGhpcy5ib2R5Q29tcG9uZW50LnggLSB0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgbGV0IHlEaXN0ID0gKHRpbGUuaSp0aGlzLnRpbGVTaXplKSAtICh0aGlzLmJvZHlDb21wb25lbnQueSAtIHRoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpOy8vICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLnZ4ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiB0aGlzLm1vdmVtZW50U3BlZWQ7XHJcbiAgICAgICAgdGhpcy52eSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy5tb3ZlbWVudFNwZWVkO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy52eCA+PSAtMTAgJiYgdGhpcy52eCA8PSAxMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaG9zdC5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnZ4IDwgMCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmhvc3QuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwibGVmdFwiKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaG9zdC5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJyaWdodFwiKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5ob3N0LmJvZHlDb21wb25lbnQuYW5nbGUgPSB0aGlzLmFuZ2xlO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueCArPSB0aGlzLnZ4ICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnkgKz0gdGhpcy52eSAqIGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgcG9pbnR4ID0gdGhpcy5jdXJyZW50VGlsZS5qKnRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgICAgIGxldCBwb2ludHkgPSB0aGlzLmN1cnJlbnRUaWxlLmkqdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICAgICAgbGV0IGRpc3QgPSB0aGlzLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUb1BvaW50KHBvaW50eCt0aGlzLnNoaWZ0LCBwb2ludHkrdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgMTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYk1vdmluZ0NvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDEuMiwgMC45LCAwLjUsIDAuNywgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpclJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMC45LCAwLjcsIDEuMiwgMC41LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFydGhSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMC41LCAxLjIsIDAuNywgMC45LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyZVJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGZpcmVSZXNpc3QsIHdhdGVyUmVzaXN0LCBhaXJSZXNpc3QsIGVhcnRoUmVzaXN0LCBzaGFkb3dSZXNpc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMucmVzaXN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImZpcmVcIl0gPSBmaXJlUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcIndhdGVyXCJdID0gd2F0ZXJSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wiYWlyXCJdID0gYWlyUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImVhcnRoXCJdID0gZWFydGhSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wic2hhZG93XCJdID0gc2hhZG93UmVzaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Jlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAxLCAxLCAxLCAxLCAwLjUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdGVyUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuNywgMC41LCAwLjksIDEuMiwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBbXHJcbiAgICAgICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAyLCAyLCAyXSxcclxuICAgICAgICAgICAgWzIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMSwgMywgMiwgMiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAzLCAyLCAyLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAzLCAzLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDAsIDAsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSA0MDtcclxuICAgICAgICBtYWluR2FtZS50aWxlU2l6ZSA9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgbWFpbkdhbWUudGlsZVNpemUgPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMuaG9zdC5nYW1lLnRpbGVTaXplID0gNDA7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJhaXJcIiwgMC41LCA0MCwgMjcwKTtcclxuICAgICAgICB0aGlzLnRpbWVyQXVyYSA9IDA7XHJcbiAgICAgICAgdGhpcy5hdXJhVGltZSA9IDAuMjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50aW1lckF1cmEgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJBdXJhID49IHRoaXMuYXVyYVRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQXVyYSAtPSB0aGlzLmF1cmFUaW1lO1xyXG4gICAgICAgICAgICBsZXQgYWxsVG93ZXJzID0gbWFpbkdhbWUuc3RhdGUuZ2FtZU1lbnVCb3R0b20ua2lkcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgYWxsVG93ZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0udG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSAhPSBcImFpclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLmhvc3QuYm9keUNvbXBvbmVudCkgPCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvd2Vyc1tpXS5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwic3BlZWRcIiwgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjAyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBFYXJ0aFRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJlYXJ0aFwiLCAxLjUsIDE1MCwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDc7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFYXJ0aFRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRmlyZVRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJmaXJlXCIsIDAuNCwgMzAsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjAxO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyZVRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU2hhZG93VG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcInNoYWRvd1wiLCAxLCA5MCwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAsNTtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRvd1Rvd2VyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGaXJlVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBFYXJ0aFRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuXHJcbmNsYXNzIFRvd2VyQnVpbGRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGxldCBwID0gdGhpcy5ob3N0LmdhbWUucDtcclxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IocC5tb3VzZVkvdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKHAubW91c2VYL3RoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIGxldCB0b3dlciA9IG5ldyBFYXJ0aFRvd2VyKHRoaXMuaG9zdC5nYW1lLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENoaWxkKHRvd2VyKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3dlckJ1aWxkZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL0J1bGxldHMvQnVsbGV0XCI7XHJcblxyXG5jbGFzcyBUb3dlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGF0dGFja1R5cGUsIGF0dGFja1NwZWVkLCBhdHRhY2tEYW1hZ2UsIGF0dGFja1JhbmdlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tUeXBlID0gYXR0YWNrVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCA9IGF0dGFja1NwZWVkO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlID0gYXR0YWNrRGFtYWdlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrUmFuZ2UgPSBhdHRhY2tSYW5nZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNMZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JzID0gbWFpbkdhbWUuc3RhdGUud2F2ZU1hc3Rlci5raWRzO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvd2VyQ29zdCA9IDUwO1xyXG4gICAgICAgIHRoaXMudXBncmFkZVN0YXRzQ29zdCA9IDEwMDtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVBYmlsaXR5Q29zdCA9IDIwMDtcclxuICAgICAgICB0aGlzLnJlYWR5VG9GaXJlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBpZih0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuYnVmZnNbXCJzcGVlZFwiXSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZihcInNwZWVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0xldmVsICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNMZXZlbCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5VG9GaXJlKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciArPSBkZWx0YTtcclxuICAgICAgICAgICAgaWYodGhpcy5hdHRhY2tUaW1lciA+PSB0aGlzLmF0dGFja1NwZWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5VG9GaXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgLT0gdGhpcy5hdHRhY2tTcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZWFkeVRvRmlyZSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ob3N0LmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudCk8dGhpcy5hdHRhY2tSYW5nZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRTcGF3bih0aGlzLm1vYnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWxsZXRTcGF3bihtb2Ipe1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IG5ldyBCdWxsZXQodGhpcy5ob3N0LmdhbWUsIGJvZHkueCtib2R5LncvMiwgYm9keS55K2JvZHkuaC8yLCB0aGlzLmhvc3QsIG1vYiwgdGhpcy5tb2JzKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQoYnVsbGV0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwid2F0ZXJcIiwgMS4yLCA5MCwgMjUwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDY7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBNb2IgZnJvbSBcIi4uLy4uL09iamVjdHMvR2FtZS9Nb2JzL01vYlwiO1xyXG5cclxuY2xhc3MgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICB0aGlzLndhdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZUluZGV4ID0gMDtcclxuICAgICAgICBsZXQgYyA9IGhvc3QuZ2FtZS5jb25zdGFudHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8wLCAxNSwgMC42KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8wLCAxNSwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8wLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMCwgMTUsIDAuOCk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzAsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8xLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMSwgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMiwgMTUsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzIsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8yLCAyLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMywgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV180LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl80LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV80LCAxLCAxKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDsgLy8wIC0gd2FpdCB8IDEgLSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1N0YXJ0V2F2ZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IDEuMjtcclxuXHJcbiAgICAgICAgdGhpcy53YXZlSWQgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlID0gdGhpcy5maW5kUm91dGUodGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUobWFwKXtcclxuICAgICAgICBsZXQgZHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSB7aTowLCBqOjE3LCBkOmR2YWx1ZX07XHJcbiAgICAgICAgbGV0IGVuZCA9IHtpOjE0LCBqOjh9O1xyXG4gICAgICAgIGxldCBtYXJrZWQgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIG1hcmtlZC5wdXNoKHN0YXJ0KTtcclxuICAgICAgICBjaGVja0Fyb3VuZE1hcmtlZChkdmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQXJvdW5kTWFya2VkKGQpe1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uaSA9PSBlbmQuaSAmJiBtYXJrZWRbaV0uaiA9PSBlbmQuail7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChtYXJrZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2sgZDpcIitkK1wiIG1kOlwiK21hcmtlZFtpXS5kK1wiIG1pOlwiK21hcmtlZFtpXS5pK1wiIG1qOlwiK21hcmtlZFtpXS5qKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uZCA9PSBkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ29vZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrQXJvdW5kVGlsZShtYXJrZWRbaV0sIGQrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbWFya0Fyb3VuZFRpbGUodGlsZSwgbmV3ZCl7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLTEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pKzEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmotMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmorMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKG5ld2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrKGksIGosIG5ld2Qpe1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBtYXJrZWQubGVuZ3RoOyBpaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaWldLmkgPT0gaSAmJiBtYXJrZWRbaWldLmogPT0gail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZC5wdXNoKHtpOmksIGo6aiwgZDpuZXdkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaStcIiBcIitqK1wiIFwiK25ld2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1hcmtlZCk7XHJcbiAgICAgICAgbGV0IGRtYXggPSBwYXRoWzBdLmQ7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGRtYXgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1heC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoZG1heCAhPSAwKTtcclxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVXYXZlKHR5cGUsIGNvdW50LCB0aW1lKXtcclxuICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgIGxldCBhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZXMucHVzaChvKTtcclxuICAgICAgICBvLmEgPSBhO1xyXG4gICAgICAgIG8udGltZSA9IHRpbWU7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgYS5wdXNoKHR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vYigpe1xyXG4gICAgICAgIGxldCBNb2JDbGFzcyA9IHRoaXMuY3VycmVudFdhdmVUb1NwYXduLnNoaWZ0KCk7XHJcbiAgICAgICAgLy9sZXQgbW9iID0gbmV3IG1vYlR5cGUodGhpcy5ob3N0LmdhbWUsIHgsIHksIHJvKVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBuZXcgTW9iQ2xhc3ModGhpcy5ob3N0LmdhbWUsIDE3KnNpemUsIC1zaXplLCBzaXplLCB0aGlzLnJvdXRlKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodGVzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53YXZlSWQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bhd25pbmdTdGF0ZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCs9ZGVsdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyV2F2ZVN0YXJ0ID49IHRoaXMudGltZVRvU3RhcnRXYXZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJXYXZlU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCB3YXZlT2JqZWN0ID0gdGhpcy53YXZlc1t0aGlzLmN1cnJlbnRXYXZlSW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlVG9TcGF3biA9IHdhdmVPYmplY3QuYTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRvU3Bhd25Nb2IgPSB3YXZlT2JqZWN0LnRpbWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgIGlmICh0aGlzLnNwYXduaW5nU3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlVG9TcGF3bi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3bis9ZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lck1vYlNwYXduID49IHRoaXMudGltZVRvU3Bhd25Nb2Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk1vYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9zdC5raWRzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25pbmdTdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVJZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQ7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIGdldEZyYW1lcyhpbWFnZSwgc3RhcnRpLCBzdGFydGosIHNpemUsIGxlbmd0aCl7XHJcbiAgICAgICAgbGV0IGZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHN1YmltYWdlID0gbWFpbkdhbWUucC5naW1hZ2VzW2ltYWdlXS5nZXQoc3RhcnRqKnNpemUsIHN0YXJ0aSpzaXplLCBzaXplLCBzaXplKTtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goc3ViaW1hZ2UpO1xyXG4gICAgICAgICAgICBzdGFydGorKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgSFBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBocCA9IHRoaXMuaG9zdC5ocDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgbGV0IGxpZmVCYXJXaWR0aCA9IHRoaXMuaG9zdC5ocCAqIHRoaXMuYm9keUNvbXBvbmVudC53IC8gdGhpcy5ob3N0Lm1heEhwO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIDcpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMjU1LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgbGlmZUJhcldpZHRoLCA3KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLm5vRmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCB0aGlzLmJvZHlDb21wb25lbnQudywgNyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgUmVuZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCwgaW1hZ2Upe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gYm9keUNvbXBvbmVudC53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBib2R5Q29tcG9uZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlKGltYWdlKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlID09IG51bGwpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIHRoaXMuYm9keUNvbXBvbmVudC5oKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLmltYWdlLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXBDb250YWluZXJDb21wb25lbnQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gdGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC5tYXA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gaG9zdC5nYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy9tYXAvVGlsZXNldC5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5ncmFzcyA9IHRoaXMudGV4dHVyZS5nZXQoMCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJvYWQgPSB0aGlzLnRleHR1cmUuZ2V0KDQwLCAwLCA0MCwgNDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5tYXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGogPCB0aGlzLm1hcFtpXS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuaG9zdC5nYW1lLnA7XHJcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLm1hcFtpXVtqXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcC5yZWN0KGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLmdyYXNzLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucmVjdChqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwUmVuZGVyQ29tcG9uZW50OyIsImltcG9ydCBNb2JGaXJlMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUwXCI7XHJcbmltcG9ydCBNb2JXYXRlcjAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgwXCI7XHJcbmltcG9ydCBNb2JBaXIwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cwXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMVwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMVwiO1xyXG5pbXBvcnQgTW9iRWFydGgxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMVwiO1xyXG5pbXBvcnQgTW9iQWlyMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMVwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MVwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTJcIjtcclxuaW1wb3J0IE1vYkVhcnRoMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDJcIjtcclxuaW1wb3J0IE1vYldhdGVyMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjJcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzJcIjtcclxuaW1wb3J0IE1vYkFpcjIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjJcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUzXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgzXCI7XHJcbmltcG9ydCBNb2JXYXRlcjMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzXCI7XHJcbmltcG9ydCBNb2JTaGFkb3czIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3czXCI7XHJcbmltcG9ydCBNb2JBaXIzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNFwiO1xyXG5pbXBvcnQgTW9iRWFydGg0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoNFwiO1xyXG5pbXBvcnQgTW9iV2F0ZXI0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNFwiO1xyXG5pbXBvcnQgTW9iU2hhZG93NCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NFwiO1xyXG5pbXBvcnQgTW9iQWlyNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CX0ZJUkVfMDogTW9iRmlyZTAsXHJcbiAgICBNT0JfRUFSVEhfMDogTW9iRWFydGgwLCBcclxuICAgIE1PQl9XQVRFUl8wOiBNb2JXYXRlcjAsXHJcbiAgICBNT0JfU0hBRE9XXzA6IE1vYlNoYWRvdzAsXHJcbiAgICBNT0JfQUlSXzA6IE1vYkFpcjAsXHJcblxyXG4gICAgTU9CX0ZJUkVfMTogTW9iRmlyZTEsXHJcbiAgICBNT0JfRUFSVEhfMTogTW9iRWFydGgxLFxyXG4gICAgTU9CX1dBVEVSXzE6IE1vYldhdGVyMSxcclxuICAgIE1PQl9TSEFET1dfMTogTW9iU2hhZG93MSxcclxuICAgIE1PQl9BSVJfMTogTW9iQWlyMSxcclxuXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9FQVJUSF8yOiBNb2JFYXJ0aDIsXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1NIQURPV18yOiBNb2JTaGFkb3cyLFxyXG4gICAgTU9CX0FJUl8yOiBNb2JBaXIyLFxyXG5cclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0VBUlRIXzM6IE1vYkVhcnRoMyxcclxuICAgIE1PQl9XQVRFUl8zOiBNb2JXYXRlcjMsXHJcbiAgICBNT0JfU0hBRE9XXzM6IE1vYlNoYWRvdzMsXHJcbiAgICBNT0JfQUlSXzM6IE1vYkFpcjMsXHJcblxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX1dBVEVSXzQ6IE1vYldhdGVyNCxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNFxyXG5cclxuICAgIC8qXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRklSRV81OiBNb2JGaXJlNSxcclxuICAgIE1PQl9GSVJFXzY6IE1vYkZpcmU2LFxyXG4gICAgTU9CX0ZJUkVfNzogTW9iRmlyZTcsXHJcbiAgICBNT0JfRklSRV84OiBNb2JGaXJlOCxcclxuICAgIE1PQl9GSVJFXzk6IE1vYkZpcmU5LFxyXG4gICAgTU9CX0VBUlRIXzI6IE1vYkVhcnRoMixcclxuICAgIE1PQl9FQVJUSF8zOiBNb2JFYXJ0aDMsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX0VBUlRIXzU6IE1vYkVhcnRoNSxcclxuICAgIE1PQl9FQVJUSF82OiBNb2JFYXJ0aDYsXHJcbiAgICBNT0JfRUFSVEhfNzogTW9iRWFydGg3LFxyXG4gICAgTU9CX0VBUlRIXzg6IE1vYkVhcnRoOCxcclxuICAgIE1PQl9FQVJUSF85OiBNb2JFYXJ0aDksXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1dBVEVSXzM6IE1vYldhdGVyMyxcclxuICAgIE1PQl9XQVRFUl80OiBNb2JXYXRlcjQsXHJcbiAgICBNT0JfV0FURVJfNTogTW9iV2F0ZXI1LFxyXG4gICAgTU9CX1dBVEVSXzY6IE1vYldhdGVyNixcclxuICAgIE1PQl9XQVRFUl83OiBNb2JXYXRlcjcsXHJcbiAgICBNT0JfV0FURVJfODogTW9iV2F0ZXI4LFxyXG4gICAgTU9CX1dBVEVSXzk6IE1vYldhdGVyOSxcclxuICAgIE1PQl9TSEFET1dfMjogTW9iU2hhZG93MixcclxuICAgIE1PQl9TSEFET1dfMzogTW9iU2hhZG93MyxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9TSEFET1dfNTogTW9iU2hhZG93NSxcclxuICAgIE1PQl9TSEFET1dfNjogTW9iU2hhZG93NixcclxuICAgIE1PQl9TSEFET1dfNzogTW9iU2hhZG93NyxcclxuICAgIE1PQl9TSEFET1dfODogTW9iU2hhZG93OCxcclxuICAgIE1PQl9TSEFET1dfOTogTW9iU2hhZG93OSxcclxuICAgIE1PQl9BSVJfMjogTW9iQWlyMixcclxuICAgIE1PQl9BSVJfMzogTW9iQWlyMyxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNCxcclxuICAgIE1PQl9BSVJfNTogTW9iQWlyNSxcclxuICAgIE1PQl9BSVJfNjogTW9iQWlyNixcclxuICAgIE1PQl9BSVJfNzogTW9iQWlyNyxcclxuICAgIE1PQl9BSVJfODogTW9iQWlyOCxcclxuICAgIE1PQl9BSVJfOTogTW9iQWlyOSwqL1xyXG5cclxufTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocCl7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gQ29uc3RhbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5lYXJJbnRlcnBvbGF0aW9uKGZ4MSwgZngyLCB4MSwgeCwgeDIpe1xyXG4gICAgICAgIGlmICh4MiA8IHgxKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4ID49IHgyKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4IDw9IHgxKSByZXR1cm4gZngxO1xyXG4gICAgICAgIHJldHVybiBmeDErKCBmeDIgLSBmeDEgKSooeCAtIHgxKS8oeDIgLSB4MSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1bGxldENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9CdWxsZXRzL0J1bGxldENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdG93ZXIsIG1vYiwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb2I7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgMTAsIDEwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMudG93ZXIgPSB0b3dlcjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+IHtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueC01LCB0aGlzLmJvZHlDb21wb25lbnQueS01LCB0aGlzLmJvZHlDb21wb25lbnQudywgdGhpcy5ib2R5Q29tcG9uZW50LmgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0Q29tcG9uZW50ID0gbmV3IEJ1bGxldENvbXBvbmVudCh0aGlzLCB0aGlzLnRhcmdldCwgbW9icyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5idWxsZXRDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBaXJUb3dlciBmcm9tIFwiLi9Ub3dlcnMvQWlyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuXHJcbmNsYXNzIEdhbWVCb3R0b21NZW51IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLnRvd2VyQnV0dG9uc0JvZGllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IEJvZHlDb21wb25lbnQobnVsbCwgNTUgKyBpKnRpbGVTaXplICsgMjAqaSArIDE0KnRpbGVTaXplLCAxNip0aWxlU2l6ZSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbmRleGVzID0ge1xyXG4gICAgICAgICAgICAwOiBBaXJUb3dlcixcclxuICAgICAgICAgICAgMTogRWFydGhUb3dlcixcclxuICAgICAgICAgICAgMjogRmlyZVRvd2VyLFxyXG4gICAgICAgICAgICAzOiBXYXRlclRvd2VyLFxyXG4gICAgICAgICAgICA0OiBTaGFkb3dUb3dlclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJJID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJKID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpIHtcclxuICAgICAgICBzdXBlci5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmdhbWUucDtcclxuICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRleHR1cmUsIDAsIDE1KjQwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDAsIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS55LCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgcC50ZXh0KG1haW5HYW1lLm1vbmV5LnRvU3RyaW5nKCksIHAuZ2FtZVdpZHRoLzItMTQsIHAuZ2FtZUhlaWdodC0xMDAsIDEwMCwgMjUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpIHtcclxuICAgICAgICBzdXBlci5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2FtZS5wLm1vdXNlWDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBpZiAoeSA8IDE1KnRpbGVTaXplKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJySiA9IE1hdGguZmxvb3IoeC90aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckkgPSBNYXRoLmZsb29yKHkvdGlsZVNpemUpO1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC54ID09IHRoaXMuY3VyckoqdGlsZVNpemUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMua2lkc1tpXS5ib2R5Q29tcG9uZW50LnkgPT0gdGhpcy5jdXJySSp0aWxlU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdGhpcy5raWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDApIHsgLy9ub3RoaW5nXHJcblxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKXsgLy90b3dlcnNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ubW91c2VIb3Zlcih4LCB5KSAmJiB0aGlzLnRyeUJ1eSg1MCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG93ZXIgPSBuZXcgdGhpcy50b3dlckluZGV4ZXNbaV0odGhpcywgdGhpcy5jdXJySip0aWxlU2l6ZSwgdGhpcy5jdXJySSp0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHRvd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRvd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDIpeyAvL3VwZ3JhZGVzLCBkZXN0cm95XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzWzBdLm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlCdXkodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1sxXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5QnV5KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCArPSAyMDAgKiBNYXRoLmZsb29yKE1hdGgucG93KDEuNSwgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1syXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0Lm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRyeUJ1eShwcmljZSl7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lLm1vbmV5ID49IHByaWNlKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm90dG9tTWVudTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMjUwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDk2MCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxNjtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXIyIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjU7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgNjAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNzUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDI0MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXI0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBEeWluZ09iamVjdCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRpZVwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JGaXJlMC5wbmdcIiwgMywgMCwgODAsIDQpLCAwLjEsXHJcbiAgICAgICAgICAgIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkaWVcIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IDQqMC4xKzEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLngtMjUsIHRoaXMueS0yNSwgOTAqTWF0aC5QSS8xODApO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEeWluZ09iamVjdDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDI1MCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDQsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoMDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDcyMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA2LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCA1MDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0NTA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNywgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRWFydGg0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEyMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGg0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUwIGV4dGVuZHMgTW9iIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDEwMCk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDEsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMTEwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxOTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAyLCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDIxMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMywgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzNjAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA2MDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgNCwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmU0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYk1vdmluZ0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBIUFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IER5aW5nT2JqZWN0IGZyb20gXCIuL0R5aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZUVtaXR0ZXIgZnJvbSBcIi4uL1BhcnRpY2xlRW1pdHRlclwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgc2l6ZSwgdGlsZVNpemUsIHJvdXRlLCB0dXJuVGltZSwgcmVzaXN0LCBocCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLm1heEhwID0gaHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IGhwO1xyXG4gICAgICAgIHRoaXMucmVzaXN0ID0gcmVzaXN0O1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBzaXplLCBzaXplKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIC8vdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCA9IG5ldyBNb2JNb3ZpbmdDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCByb3V0ZSwgdGlsZVNpemUsIHR1cm5UaW1lKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHBSZW5kZXJDb21wb25lbnQgPSBuZXcgSFBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmhwUmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBpZih0aGlzLmhwID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5ICs9IHRoaXMuYm91bnR5O1xyXG4gICAgICAgICAgICAvLyBsZXQgZHlpbmdPYmplY3QgPSBuZXcgRHlpbmdPYmplY3QodGhpcy5nYW1lLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWUuc3RhdGUuYWRkR2FtZU9iamVjdChkeWluZ09iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSB7cjowLCBnOjAsIGI6MH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEZpcmVSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnIgPSAyMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBXYXRlclJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDIwMDtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIFNoYWRvd1Jlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuciA9IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5iID0gMTUwO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXN0IGluc3RhbmNlb2YgQWlyUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5nID0gODA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDI1NTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEVhcnRoUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5yID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmcgPSAxODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgUGFydGljbGVFbWl0dGVyKHRoaXMuZ2FtZSwgMjAsIGNvbG9ycy5yLCBjb2xvcnMuZywgY29sb3JzLmIpO1xyXG4gICAgICAgICAgICBlbWl0dGVyLnNldExvY2F0aW9uKHRoaXMuYm9keUNvbXBvbmVudC54K3RoaXMuYm9keUNvbXBvbmVudC53LzIsIHRoaXMuYm9keUNvbXBvbmVudC55K3RoaXMuYm9keUNvbXBvbmVudC5oLzIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuYWRkR2FtZU9iamVjdChlbWl0dGVyKTtcclxuICAgICAgICAgICAgZW1pdHRlci5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKHRvd2VyLCBjb2VmKXtcclxuICAgICAgICBsZXQgcHVyZURhbWFnZSA9IHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja0RhbWFnZSpjb2VmO1xyXG4gICAgICAgIGxldCBkYW1hZ2UgPSBwdXJlRGFtYWdlICogdGhpcy5yZXNpc3QucmVzaXN0c1t0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlXTtcclxuICAgICAgICBpZih0aGlzLmhwIDwgZGFtYWdlKXtcclxuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2I7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDU7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNjAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyMDA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNDMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgMTUwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMzAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3czOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDIwMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxODAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3c0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXIxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTEwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDc1MCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNDIwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA3NTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNDAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDYwMDA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXI0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTEwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDIzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuXHJcbmNsYXNzIFBhcnRpY2xlRW1pdHRlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNvdW50LCByLCBnLCBiKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy52eG1heCA9IDEwMDtcclxuICAgICAgICB0aGlzLnZ5bWF4ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2F0aW9uKHgsIHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBwID0ge307XHJcbiAgICAgICAgICAgICAgICBwLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSB0aGlzLnk7XHJcbiAgICAgICAgICAgICAgICBwLnIgPSB0aGlzLnI7XHJcbiAgICAgICAgICAgICAgICBwLmcgPSB0aGlzLmc7XHJcbiAgICAgICAgICAgICAgICBwLmIgPSB0aGlzLmI7XHJcbiAgICAgICAgICAgICAgICBwLnZ4ID0gTWF0aC5yYW5kb20oKSp0aGlzLnZ4bWF4KjItdGhpcy52eG1heDtcclxuICAgICAgICAgICAgICAgIHAudnkgPSBNYXRoLnJhbmRvbSgpKnRoaXMudnltYXgqMi10aGlzLnZ5bWF4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLnggKz0gZGVsdGEgKiB0aGlzLnBhcnRpY2xlc1tpXS52eDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ueSArPSBkZWx0YSAqIHRoaXMucGFydGljbGVzW2ldLnZ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zdGF0ZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gdGhpcy5wYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWUucC5ub1N0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1haW5HYW1lLnAuZmlsbChwYXJ0LnIsIHBhcnQuZywgcGFydC5iKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWluR2FtZS5wLnJlY3QocGFydC54LCBwYXJ0LnksIDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlY3QocGFydC54LCBwYXJ0LnksIDQsIDQsIHBhcnQuciwgcGFydC5nLCBwYXJ0LmIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZUVtaXR0ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9UaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUaWxlbWFwIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50ID0gbmV3IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgVGlsZW1hcFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVtYXA7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBBaXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgQWlyVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBhbGxUb3dlcnMgPSBtYWluR2FtZS5zdGF0ZS5nYW1lTWVudUJvdHRvbS5raWRzO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGFsbFRvd2Vycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0udG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSAhPSBcImFpclwiKXtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMuYm9keUNvbXBvbmVudCkgPCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVG93ZXJzW2ldLmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYoXCJzcGVlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBaXJUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0VhcnRoVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBFYXJ0aFRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgRWFydGhUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRmlyZVRvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBGaXJlVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9TaGFkb3dUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU2hhZG93VG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBTaGFkb3dUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93VG93ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgbWFpbkdhbWUudGlsZVNpemUsIG1haW5HYW1lLnRpbGVTaXplKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCg1MCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAudGV4dCh0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsK1wiIFwiK3RoaXMudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCAsdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCA0MCwgNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3dlcjsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVG93ZXJCdWlsZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9Ub3dlckJ1aWxkZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyQnVpbGRlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCdWlsZGVyQ29tcG9uZW50ID0gbmV3IFRvd2VyQnVpbGRlckNvbXBvbmVudCh0aGlzLCB0aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQnVpbGRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJCdWlsZGVyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvV2F0ZXJUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IFdhdGVyVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyVG93ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdmVNYXN0ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCA9IG5ldyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQodGhpcywgdGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy53YXZlTWFzdGVyTG9naWNDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F2ZU1hc3RlcjsiLCJpbXBvcnQgQnVmZnNDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5raWRzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vYnVmZnNcclxuICAgICAgICB0aGlzLmJ1ZmZzQ29tcG9uZW50ID0gbmV3IEJ1ZmZzQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMgPSB7fTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVjdCh4LCB5LCB3LCBoLCByLCBnLCBiKXtcclxuICAgICAgICBsZXQgcCA9IG1haW5HYW1lLnA7XHJcbiAgICAgICAgcC5wdXNoKCk7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IHcqMC41O1xyXG4gICAgICAgIGxldCBoYWxmSGVpZ2h0ID0gaCowLjU7XHJcbiAgICAgICAgcC50cmFuc2xhdGUoeCtoYWxmV2lkdGgsIHkraGFsZkhlaWdodCk7XHJcbiAgICAgICAgcC5maWxsKHIsIGcsIGIpO1xyXG4gICAgICAgIHAucmVjdCgtaGFsZldpZHRoLCAtaGFsZkhlaWdodCwgdywgaCk7XHJcbiAgICAgICAgcC5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKGltYWdlLCB4LCB5LCBhbmdsZSl7XHJcbiAgICAgICAgbGV0IHAgPSBtYWluR2FtZS5wO1xyXG4gICAgICAgIHAucHVzaCgpO1xyXG4gICAgICAgIGxldCBoYWxmV2lkdGggPSBpbWFnZS53aWR0aCowLjU7XHJcbiAgICAgICAgbGV0IGhhbGZIZWlnaHQgPSBpbWFnZS5oZWlnaHQqMC41O1xyXG4gICAgICAgIHAudHJhbnNsYXRlKHgraGFsZldpZHRoLCB5K2hhbGZIZWlnaHQpO1xyXG4gICAgICAgIHAucm90YXRlKCgtOTAgKiBwLlBJIC8gMTgwKSthbmdsZSk7XHJcbiAgICAgICAgcC5pbWFnZShpbWFnZSwgLWltYWdlLndpZHRoKjAuNSwgLWltYWdlLmhlaWdodCowLjUpO1xyXG4gICAgICAgIHAucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0uZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRDb21wb25lbnQoYyl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGMpe1xyXG4gICAgICAgIHRoaXMua2lkcy5wdXNoKGMpO1xyXG4gICAgICAgIGMucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVBhcmVudCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zdGF0ZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb21wb25lbnQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGMpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMua2lkcy5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgb25BY3Rpb24pe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHggLT0gMTY3LzI7XHJcbiAgICAgICAgeSAtPSA3My8yO1xyXG4gICAgICAgIHRoaXMub25BY3Rpb24gPSBvbkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSW1hZ2UgPSBnYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VfaWRsZSA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCA3MywgMTY3LCA3Myk7XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9ob3ZlciA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCAwLCAxNjcsIDczKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgdGhpcy5idXR0b25JbWFnZV9pZGxlKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC51cGRhdGUgPSAoZGVsdGEpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaG92ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaWRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5tb3VzZVByZXNzZWQgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSlcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcbiBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBUaWxlbWFwIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvVGlsZW1hcFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1dhdmVNYXN0ZXJcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9PYmplY3RzL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRvd2VyQnVpbGRlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlckJ1aWxkZXJcIjtcclxuaW1wb3J0IEdhbWVCb3R0b21NZW51IGZyb20gXCIuLi9PYmplY3RzL0dhbWUvR2FtZUJvdHRvbU1lbnVcIjtcclxuXHJcbmNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBnYW1lLm1vbmV5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlciA9IG5ldyBXYXZlTWFzdGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMud2F2ZU1hc3Rlcik7XHJcbiAgICAgICAgLy8gdGhpcy50b3dlckJ1aWxkZXIgPSBuZXcgVG93ZXJCdWlsZGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMudG93ZXJCdWlsZGVyKTtcclxuICAgICAgICB0aGlzLmdhbWVNZW51Qm90dG9tID0gbmV3IEdhbWVCb3R0b21NZW51KGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMuZ2FtZU1lbnVCb3R0b20pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGU7IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL09iamVjdHMvTWVudS9CdXR0b25cIjtcclxuXHJcbmNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBsZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oZ2FtZSwgZ2FtZS5wLmdhbWVXaWR0aC8yLCBnYW1lLnAuZ2FtZUhlaWdodC8yLTEwMCwgKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KGJ1dHRvbjEpO1xyXG4gICAgICAgIGxldCBidXR0b24yID0gbmV3IEJ1dHRvbihnYW1lLCBnYW1lLnAuZ2FtZVdpZHRoLzIsIGdhbWUucC5nYW1lSGVpZ2h0LzIrMTAwLCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QoYnV0dG9uMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdGFydGVkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydE9wdGlvbnMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbnMgc3RhcnRcIik7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZW51U3RhdGU7IiwiY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRHYW1lT2JqZWN0KG8pe1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR2FtZU9iamVjdChvKXtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdhbWVPYmplY3RzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=