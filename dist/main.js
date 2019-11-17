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
        "assets/mobs/MobFire0.png",
        
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
        this.attackDamage += 0.5 * this.attackDamage; 
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
        this.storeWave(c.MOB_EARTH_1, 12, 1);
        this.storeWave(c.MOB_WATER_1, 12, 1);
        this.storeWave(c.MOB_AIR_1, 12, 1);
        this.storeWave(c.MOB_FIRE_1, 12, 1);
        this.storeWave(c.MOB_SHADOW_1, 2, 1);
        this.storeWave(c.MOB_FIRE_2, 12, 0.6);
        this.storeWave(c.MOB_WATER_2, 12, 0.7);
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
        this.timeToStartWave = 1;

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

/***/ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveDown.js":
/*!*************************************************************************!*\
  !*** ./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveDown.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Animation */ "./src/scripts/Components/Animation.js");



class MobFire0MoveDown extends _Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {

    constructor(){
        super(_AnimationUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getFrames("assets/mobs/MobFire0.png", 4, 0, 80, 3),
            0.1, true);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (MobFire0MoveDown);

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
        super(game, x, y, 60, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1500);
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1100);
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6750);
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
        super(game, x, y, 30, tileSize, route, 140, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 37500);
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



class MobEarth0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 250);
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
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 875);
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
        super(game, x, y, 60, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100000);
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



class MobEarth3 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 80, new _Components_logic_Resist_EarthResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 27500);
        this.resist.host = this;
        this.bounty = 450;
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
/* harmony import */ var _Components_render_Mobs_MobFire0_MobFire0MoveDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Components/render/Mobs/MobFire0/MobFire0MoveDown */ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveDown.js");
/* harmony import */ var _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Components/AnimationControllerComponent */ "./src/scripts/Components/AnimationControllerComponent.js");





class MobFire0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100);
        this.bounty = 2;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.animationController.addAnimation("down", new _Components_render_Mobs_MobFire0_MobFire0MoveDown__WEBPACK_IMPORTED_MODULE_2__["default"]());
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



class MobFire1 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1600);
        this.resist.host = this;
        this.bounty = 19;
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
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 3000);
        this.resist.host = this;
        this.bounty = 50;
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
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 35000);
        this.resist.host = this;
        this.bounty = 600;
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
        super(game, x, y, 60, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6300);
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 9000);
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 20000);
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2200);
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1000);
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
        super(game, x, y, 30, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6000);
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
        super(game, x, y, 60, tileSize, route, 110, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 300000);
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
        game.money = 50000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL0dhbWVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQXR0YWNrU3BlZWRCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdXJuaW5nQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0N1cnNlQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL1Nsb3dCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvTW9iUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvTW9icy9Nb2JGaXJlMC9Nb2JGaXJlME1vdmVEb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9UaWxlbWFwL1RpbGVtYXBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL0J1bGxldHMvQnVsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9HYW1lQm90dG9tTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9EeWluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGg0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9Nb2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvUGFydGljbGVFbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9UaWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvQWlyVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9FYXJ0aFRvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvRmlyZVRvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvU2hhZG93VG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1dhdGVyVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1dhdmVNYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvTWVudS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL0dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9TdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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OztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ2Usb0VBQUssRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL0dhbWVcIjtcclxuaW1wb3J0IE1lbnVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuXHJcbmxldCBnYW1lO1xyXG5cclxuY29uc3QgcyA9IChwKSA9PiB7XHJcblxyXG4gICAgbGV0IGxhc3RUaW1lO1xyXG4gICAgbGV0IGN1cnJUaW1lO1xyXG5cclxuICAgIHAuY3JvcCA9IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoKXtcclxuICAgICAgICB2YXIgY3JvcHBlZCA9IHAuY3JlYXRlSW1hZ2UodywgaCk7XHJcbiAgICAgICAgY3JvcHBlZC5jb3B5KGltYWdlLCB4LCB5LCB4ICsgdywgeSArIGgsIDAsIDAsIHggKyB3LCB5ICsgaClcclxuICAgICAgICByZXR1cm4gY3JvcHBlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5pbWFnZXNBcnJheSA9IFtcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy9tb2JzL01vYkZpcmUwLnBuZ1wiLFxyXG4gICAgICAgIFxyXG4gICAgXTtcclxuICAgIHAuc291bmRzQXJyYXkgPSBbXCJhc3NldHMvSnVtcDMud2F2XCJdO1xyXG5cclxuICAgIHAuZ2ltYWdlcyA9IHt9O1xyXG4gICAgcC5nc291bmRzID0ge307XHJcblxyXG4gICAgcC5nYW1lV2lkdGggPSA5NjA7XHJcbiAgICBwLmdhbWVIZWlnaHQgPSA3MjA7XHJcblxyXG4gICAgcC5sb2FkR2FtZUltYWdlID0gZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICBwLmdpbWFnZXNbc3RyXSA9IHAubG9hZEltYWdlKHN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubG9hZEdhbWVTb3VuZCA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5nc291bmRzW3N0cl0gPSBwLmxvYWRTb3VuZChzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLmltYWdlc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZUltYWdlKHAuaW1hZ2VzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLnNvdW5kc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZVNvdW5kKHAuc291bmRzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gcC5jcmVhdGVDYW52YXMocC5nYW1lV2lkdGgsIHAuZ2FtZUhlaWdodCk7XHJcbiAgICAgICAgcC5waXhlbERlbnNpdHkoMSk7XHJcblxyXG4gICAgICAgIGxhc3RUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBjdXJyVGltZSA9IDA7XHJcblxyXG4gICAgICAgIGdhbWUgPSBuZXcgR2FtZShwKTtcclxuICAgICAgICB3aW5kb3cubWFpbkdhbWUgPSBnYW1lO1xyXG4gICAgICAgIGdhbWUuc2V0U3RhdGUobmV3IEdhbWVTdGF0ZShnYW1lKSk7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHAuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBsZXQgZGVsdGEgPSAoY3VyclRpbWUgLSBsYXN0VGltZSkvMTAwMDtcclxuXHJcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDApO1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEgPCAwLjIpXHJcbiAgICAgICAgZ2FtZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIGdhbWUuZHJhdyhwKTtcclxuICAgICAgICBcclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lO1xyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHAubW91c2VDbGlja2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLm1vdXNlUHJlc3NlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZURyYWdnZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IGdhbWVwNSA9IG5ldyBwNShzLCBcIm1haW5cIik7XHJcblxyXG5cclxuIiwiY2xhc3MgQW5pbWF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmcmFtZXMsIHRpbWUsIGxvb3Ape1xyXG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZyYW1lID49IHRoaXMuZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3ApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gdGhpcy5mcmFtZXMubGVuZ3RoLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy50aW1lKXtcclxuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciAtPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVzW3RoaXMuY3VycmVudEZyYW1lXTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb247IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYW5pbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbmltYXRpb24obmFtZSwgYW5pbSl7XHJcbiAgICAgICAgdGhpcy5hbmltc1tuYW1lXSA9IGFuaW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRBbmltYXRpb24obmFtZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW0gPT0gdGhpcy5hbmltc1tuYW1lXSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSB0aGlzLmFuaW1zW25hbWVdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0uY3VycmVudEZyYW1lID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudDsiLCJjbGFzcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCb2R5Q29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgeCwgeSwgdywgaCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VIb3Zlcigpe1xyXG4gICAgICAgIGxldCBtb3VzZVggPSB0aGlzLmhvc3QuZ2FtZS5wLm1vdXNlWDtcclxuICAgICAgICBsZXQgbW91c2VZID0gdGhpcy5ob3N0LmdhbWUucC5tb3VzZVk7XHJcbiAgICAgICAgaWYgKG1vdXNlWCA+PSB0aGlzLnggJiYgbW91c2VYIDwgdGhpcy54K3RoaXMudyl7XHJcbiAgICAgICAgICAgIGlmIChtb3VzZVkgPj0gdGhpcy55ICYmIG1vdXNlWSA8IHRoaXMueSt0aGlzLmgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4LCB5KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG92ZXJsYXBzKGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIGlmICh0aGlzLnggPCBib2R5Q29tcG9uZW50LnggKyBib2R5Q29tcG9uZW50LncgJiZcclxuICAgICAgICAgICAgdGhpcy54ICsgdGhpcy53ID4gYm9keUNvbXBvbmVudC54ICYmXHJcbiAgICAgICAgICAgIHRoaXMueSA8IGJvZHlDb21wb25lbnQueSArIGJvZHlDb21wb25lbnQuaCAmJlxyXG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmggPiBib2R5Q29tcG9uZW50LnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZVRvKGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIGxldCBrMSA9IE1hdGguYWJzKGJvZHlDb21wb25lbnQueC10aGlzLngpO1xyXG4gICAgICAgIGxldCBrMiA9IE1hdGguYWJzKGJvZHlDb21wb25lbnQueS10aGlzLnkpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoazEqazEgKyBrMiprMik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VIb3Zlcih4LCB5KXtcclxuICAgICAgICBsZXQgbW91c2VYID0geDtcclxuICAgICAgICBsZXQgbW91c2VZID0geTtcclxuICAgICAgICBpZiAobW91c2VYID49IHRoaXMueCAmJiBtb3VzZVggPCB0aGlzLngrdGhpcy53KXtcclxuICAgICAgICAgICAgaWYgKG1vdXNlWSA+PSB0aGlzLnkgJiYgbW91c2VZIDwgdGhpcy55K3RoaXMuaCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlVG9Qb2ludCh4LCB5KXtcclxuICAgICAgICBsZXQgazEgPSBNYXRoLmFicyh4LXRoaXMueCk7XHJcbiAgICAgICAgbGV0IGsyID0gTWF0aC5hYnMoeS10aGlzLnkpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoazEqazEgKyBrMiprMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlVG8oYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgbGV0IHhEaXN0ID0gYm9keUNvbXBvbmVudC54IC0gdGhpcy54O1xyXG4gICAgICAgIGxldCB5RGlzdCA9IGJvZHlDb21wb25lbnQueSAtIHRoaXMueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmdsZVRvUG9pbnQoeCwgeSl7XHJcbiAgICAgICAgbGV0IHhEaXN0ID0geCAtIHRoaXMueDtcclxuICAgICAgICBsZXQgeURpc3QgPSB5IC0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCb2R5Q29tcG9uZW50OyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIlxyXG5cclxuY2xhc3MgQXR0YWNrU3BlZWRCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYXR0YWNrU3BlZWRBdXJhXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgLT0gdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICogKDAuMSArIDAuMDIqdGhpcy5idWZmbHZsKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKz0gdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICogKDAuMSArIDAuMDIqdGhpcy5idWZmbHZsKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRhY2tTcGVlZEJ1ZmY7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1ZmZDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0eXBlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYnVmZmx2bCA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZDb21wb25lbnQ7IiwiaW1wb3J0IEJ1cm5pbmdCdWZmIGZyb20gXCIuL0J1cm5pbmdCdWZmXCI7XHJcbmltcG9ydCBDdXJzZUJ1ZmYgZnJvbSBcIi4vQ3Vyc2VCdWZmXCI7XHJcbmltcG9ydCBBdHRhY2tTcGVlZEJ1ZmYgZnJvbSBcIi4vQXR0YWNrU3BlZWRCdWZmXCI7XHJcbmltcG9ydCBTbG93QnVmZiBmcm9tIFwiLi9TbG93QnVmZlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJidXJuXCI6IEJ1cm5pbmdCdWZmLFxyXG4gICAgXCJjdXJzZVwiOiBDdXJzZUJ1ZmYsXHJcbiAgICBcInNwZWVkXCI6IEF0dGFja1NwZWVkQnVmZixcclxuICAgIFwic2xvd1wiOiBTbG93QnVmZlxyXG5cclxufTsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVmZnMgZnJvbSBcIi4vQnVmZnNcIjtcclxuXHJcbmNsYXNzIEJ1ZmZzQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5idWZmcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnVmZkNsYXNzZXMgPSBCdWZmcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlCdWZmKHR5cGUsIGJ1ZmZsdmwpe1xyXG4gICAgICAgIGxldCBidWZmQ29tcG9uZW50Q2xhc3MgPSB0aGlzLmJ1ZmZDbGFzc2VzW3R5cGVdO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgYnVmZkNvbXBvbmVudENsYXNzKHRoaXMuaG9zdCk7XHJcbiAgICAgICAgY29tcG9uZW50LmJ1ZmZsdmwgPSBidWZmbHZsO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hdHRhY2htZW50c1t0eXBlXSA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IGJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QnVmZih0eXBlLCBidWZmbHZsKXtcclxuICAgICAgICBpZiAodGhpcy5idWZmc1t0eXBlXSAhPT0gYnVmZmx2bCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZzW3R5cGVdID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmIChidWZmbHZsID4gdGhpcy5idWZmc1t0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1ZmYodHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxCdWZmKHR5cGUpe1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmhvc3QuYXR0YWNobWVudHNbdHlwZV07XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb21wb25lbnQub2ZmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZW1vdmVDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVmZnNDb21wb25lbnQ7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVybmluZ0J1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImJ1cm5cIik7XHJcbiAgICAgICAgdGhpcy5idXJuVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWUgPSA0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGxldCBkYW1hZ2VQZXJTZWNvbmQgPSBkZWx0YSAqIHRoaXMuaG9zdC5tYXhIcCAqICgwLjAwOCAqIHRoaXMuYnVmZmx2bCk7XHJcbiAgICAgICAgaWYodGhpcy5ob3N0LmhwIDwgZGFtYWdlUGVyU2Vjb25kKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmhwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaHAgLT0gZGFtYWdlUGVyU2Vjb25kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5idXJuVGltZXIgPj0gdGhpcy5idXJuVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVybmluZ0J1ZmY7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3Vyc2VCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJjdXJzZVwiKTtcclxuICAgICAgICB0aGlzLmN1cnNlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lID0gNDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICBsZXQgcmVzaXN0cyA9IHRoaXMuaG9zdC5yZXNpc3QucmVzaXN0cztcclxuICAgICAgICBmb3IobGV0IGsgaW4gcmVzaXN0cyl7XHJcbiAgICAgICAgICAgIHJlc2lzdHNba10gKz0gMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5jdXJzZVRpbWVyID49IHRoaXMuY3Vyc2VUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgbGV0IHJlc2lzdHMgPSB0aGlzLmhvc3QucmVzaXN0LnJlc2lzdHM7XHJcbiAgICAgICAgZm9yKGxldCBrIGluIHJlc2lzdHMpe1xyXG4gICAgICAgICAgICByZXNpc3RzW2tdIC09IDAuMSAqIHRoaXMuYnVmZmx2bDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEN1cnNlQnVmZjsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTbG93QnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcInNsb3dcIik7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWUgPSA0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAtIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAqIDAuMDcgKiB0aGlzLmJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLnNsb3dUaW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5zbG93VGltZXIgPj0gdGhpcy5zbG93VGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCA9IHRoaXMuc3RhcnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsb3dCdWZmOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdWxsZXRDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRhcmdldCwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5tb2JzID0gbW9icztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMzUwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IHRCb2R5ID0gdGhpcy50YXJnZXQuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5hbmdsZVRvUG9pbnQodEJvZHkueCt0Qm9keS53LzIsIHRCb2R5LnkrdEJvZHkuaC8yKTtcclxuICAgICAgICBib2R5LnggKz0gTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGJvZHkueSArPSBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgaWYoYm9keS5vdmVybGFwcyh0Qm9keSkpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuaG9zdCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlY2VpdmVEYW1hZ2UodGhpcy5ob3N0LnRvd2VyLCAxKTtcclxuICAgICAgICAgICAgbGV0IGF0dGFja1Rvd2VyQyA9IHRoaXMuaG9zdC50b3dlci50b3dlckNvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwiZmlyZVwiKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCA5MCArIDEwMCAqICgwLjEgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcImJ1cm5cIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcIndhdGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50KSA8IDEwMCArIDEwMCAqICgwLjIgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcInNsb3dcIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcInNoYWRvd1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJjdXJzZVwiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJlYXJ0aFwiKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0ICE9PSB0aGlzLm1vYnNbaV0gJiYgdGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50KSA8IDEwMCArIDEwMCAqICgwLjIgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0ucmVjZWl2ZURhbWFnZSh0aGlzLmhvc3QudG93ZXIsIDAuMjAqYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JNb3ZpbmdDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50LCByb3V0ZSwgdGlsZVNpemUsIG1vdmVtZW50U3BlZWQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSBtb3ZlbWVudFNwZWVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hpZnQgPSAodGhpcy50aWxlU2l6ZSoyKS10aGlzLnRpbGVTaXplLXRoaXMuYm9keUNvbXBvbmVudC53KjAuNTtcclxuICAgICAgICB0aGlzLnZ4ID0gMDtcclxuICAgICAgICB0aGlzLnZ5ID0gMDtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueCArPSB0aGlzLnNoaWZ0O1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC55ICs9IHRoaXMuc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLm5leHRUaWxlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCl7XHJcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnJvdXRlW3RoaXMuY3VycmVudFJvdXRlSW5kZXgrK107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHRpbGU7XHJcbiAgICAgICAgaWYgKHRpbGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHhEaXN0ID0gKHRpbGUuaip0aGlzLnRpbGVTaXplKSAtICh0aGlzLmJvZHlDb21wb25lbnQueCAtIHRoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICBsZXQgeURpc3QgPSAodGlsZS5pKnRoaXMudGlsZVNpemUpIC0gKHRoaXMuYm9keUNvbXBvbmVudC55IC0gdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7Ly8gKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMudnggPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMubW92ZW1lbnRTcGVlZDtcclxuICAgICAgICB0aGlzLnZ5ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiB0aGlzLm1vdmVtZW50U3BlZWQ7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnZ4ID49IC0xMCAmJiB0aGlzLnZ4IDw9IDEwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudnggPCAwKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaG9zdC5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJsZWZ0XCIpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcInJpZ2h0XCIpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5hbmdsZSA9IHRoaXMuYW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC54ICs9IHRoaXMudnggKiBkZWx0YTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueSArPSB0aGlzLnZ5ICogZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCBwb2ludHggPSB0aGlzLmN1cnJlbnRUaWxlLmoqdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICAgICAgbGV0IHBvaW50eSA9IHRoaXMuY3VycmVudFRpbGUuaSp0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IHRoaXMuYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvUG9pbnQocG9pbnR4K3RoaXMuc2hpZnQsIHBvaW50eSt0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCAxMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iTW92aW5nQ29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBaXJSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMS4yLCAwLjksIDAuNSwgMC43LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBFYXJ0aFJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAwLjksIDAuNywgMS4yLCAwLjUsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFYXJ0aFJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRmlyZVJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAwLjUsIDEuMiwgMC43LCAwLjksIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJlUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgZmlyZVJlc2lzdCwgd2F0ZXJSZXNpc3QsIGFpclJlc2lzdCwgZWFydGhSZXNpc3QsIHNoYWRvd1Jlc2lzdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wiZmlyZVwiXSA9IGZpcmVSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wid2F0ZXJcIl0gPSB3YXRlclJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJhaXJcIl0gPSBhaXJSZXNpc3Q7XHJcbiAgICAgICAgdGhpcy5yZXNpc3RzW1wiZWFydGhcIl0gPSBlYXJ0aFJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJzaGFkb3dcIl0gPSBzaGFkb3dSZXNpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYlJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU2hhZG93UmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDEsIDEsIDEsIDEsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRvd1Jlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgTW9iUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuL01vYlJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMC43LCAwLjUsIDAuOSwgMS4yLCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRpbGVtYXBDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1hcCA9IFtcclxuICAgICAgICAgICAgWzIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDIsIDIsIDJdLFxyXG4gICAgICAgICAgICBbMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIFsyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAxLCAzLCAyLCAyLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDIsIDIsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDMsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMCwgMCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDQwO1xyXG4gICAgICAgIG1haW5HYW1lLnRpbGVTaXplID0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBtYWluR2FtZS50aWxlU2l6ZSA9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy5ob3N0LmdhbWUudGlsZVNpemUgPSA0MDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBaXJUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImFpclwiLCAwLjUsIDQwLCAyNzApO1xyXG4gICAgICAgIHRoaXMudGltZXJBdXJhID0gMDtcclxuICAgICAgICB0aGlzLmF1cmFUaW1lID0gMC4yO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLnRpbWVyQXVyYSArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lckF1cmEgPj0gdGhpcy5hdXJhVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJBdXJhIC09IHRoaXMuYXVyYVRpbWU7XHJcbiAgICAgICAgICAgIGxldCBhbGxUb3dlcnMgPSBtYWluR2FtZS5zdGF0ZS5nYW1lTWVudUJvdHRvbS5raWRzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhbGxUb3dlcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlICE9IFwiYWlyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50KSA8IDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG93ZXJzW2ldLmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJzcGVlZFwiLCB0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDI7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImVhcnRoXCIsIDEuNSwgMTUwLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wNztcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSAwLjUgKiB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVhcnRoVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImZpcmVcIiwgMC40LCAzMCwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDE7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJlVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwic2hhZG93XCIsIDEsIDkwLCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMCw1O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93VG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL1NoYWRvd1Rvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL1dhdGVyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvRWFydGhUb3dlclwiO1xyXG5cclxuY2xhc3MgVG93ZXJCdWlsZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdClcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmhvc3QuZ2FtZS5wO1xyXG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcihwLm1vdXNlWS90aGlzLnRpbGVTaXplKTtcclxuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IocC5tb3VzZVgvdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgbGV0IHRvd2VyID0gbmV3IEVhcnRoVG93ZXIodGhpcy5ob3N0LmdhbWUsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodG93ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyQnVpbGRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvQnVsbGV0cy9CdWxsZXRcIjtcclxuXHJcbmNsYXNzIFRvd2VyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYXR0YWNrVHlwZSwgYXR0YWNrU3BlZWQsIGF0dGFja0RhbWFnZSwgYXR0YWNrUmFuZ2Upe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1R5cGUgPSBhdHRhY2tUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkID0gYXR0YWNrU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgPSBhdHRhY2tEYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tSYW5nZSA9IGF0dGFja1JhbmdlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0xldmVsID0gMTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLm1vYnMgPSBtYWluR2FtZS5zdGF0ZS53YXZlTWFzdGVyLmtpZHM7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrVGltZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG93ZXJDb3N0ID0gNTA7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNDb3N0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlDb3N0ID0gMjAwO1xyXG4gICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIGlmKHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5idWZmc1tcInNwZWVkXCJdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKFwic3BlZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0xldmVsICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb0ZpcmUpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgICAgICBpZih0aGlzLmF0dGFja1RpbWVyID49IHRoaXMuYXR0YWNrU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciAtPSB0aGlzLmF0dGFja1NwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG9GaXJlKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50KTx0aGlzLmF0dGFja1JhbmdlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldFNwYXduKHRoaXMubW9ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1bGxldFNwYXduKG1vYil7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmhvc3QuZ2FtZSwgYm9keS54K2JvZHkudy8yLCBib2R5LnkrYm9keS5oLzIsIHRoaXMuaG9zdCwgbW9iLCB0aGlzLm1vYnMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZChidWxsZXQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJ3YXRlclwiLCAxLjIsIDkwLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wNjtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcblxyXG5jbGFzcyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICAgICAgIHRoaXMud2F2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBjID0gaG9zdC5nYW1lLmNvbnN0YW50cztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzAsIDE1LCAwLjYpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzAsIDE1LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1dBVEVSXzAsIDE1LCAwLjcpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18wLCAxNSwgMC44KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9BSVJfMCwgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMSwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1dBVEVSXzEsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9BSVJfMSwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMSwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18xLCAyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzIsIDEyLCAwLjYpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1dBVEVSXzIsIDEyLCAwLjcpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18yLCAxMiwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9BSVJfMiwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzIsIDIsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfU0hBRE9XXzMsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8zLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8zLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzMsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8zLCAyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF80LCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfU0hBRE9XXzQsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl80LCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzQsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzQsIDIsIDEpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnNwYXduaW5nU3RhdGUgPSAwOyAvLzAgLSB3YWl0IHwgMSAtIHNwYXduaW5nXHJcblxyXG4gICAgICAgIHRoaXMudGltZXJXYXZlU3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZVRvU3RhcnRXYXZlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lck1vYlNwYXduID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1NwYXduTW9iID0gMS4yO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlID0gdGhpcy5maW5kUm91dGUodGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUobWFwKXtcclxuICAgICAgICBsZXQgZHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSB7aTowLCBqOjE3LCBkOmR2YWx1ZX07XHJcbiAgICAgICAgbGV0IGVuZCA9IHtpOjE0LCBqOjh9O1xyXG4gICAgICAgIGxldCBtYXJrZWQgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIG1hcmtlZC5wdXNoKHN0YXJ0KTtcclxuICAgICAgICBjaGVja0Fyb3VuZE1hcmtlZChkdmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQXJvdW5kTWFya2VkKGQpe1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uaSA9PSBlbmQuaSAmJiBtYXJrZWRbaV0uaiA9PSBlbmQuail7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChtYXJrZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2sgZDpcIitkK1wiIG1kOlwiK21hcmtlZFtpXS5kK1wiIG1pOlwiK21hcmtlZFtpXS5pK1wiIG1qOlwiK21hcmtlZFtpXS5qKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uZCA9PSBkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ29vZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrQXJvdW5kVGlsZShtYXJrZWRbaV0sIGQrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbWFya0Fyb3VuZFRpbGUodGlsZSwgbmV3ZCl7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLTEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pKzEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmotMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmorMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKG5ld2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrKGksIGosIG5ld2Qpe1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBtYXJrZWQubGVuZ3RoOyBpaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaWldLmkgPT0gaSAmJiBtYXJrZWRbaWldLmogPT0gail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZC5wdXNoKHtpOmksIGo6aiwgZDpuZXdkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaStcIiBcIitqK1wiIFwiK25ld2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1hcmtlZCk7XHJcbiAgICAgICAgbGV0IGRtYXggPSBwYXRoWzBdLmQ7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGRtYXgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1heC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoZG1heCAhPSAwKTtcclxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVXYXZlKHR5cGUsIGNvdW50LCB0aW1lKXtcclxuICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgIGxldCBhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZXMucHVzaChvKTtcclxuICAgICAgICBvLmEgPSBhO1xyXG4gICAgICAgIG8udGltZSA9IHRpbWU7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgYS5wdXNoKHR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vYigpe1xyXG4gICAgICAgIGxldCBNb2JDbGFzcyA9IHRoaXMuY3VycmVudFdhdmVUb1NwYXduLnNoaWZ0KCk7XHJcbiAgICAgICAgLy9sZXQgbW9iID0gbmV3IG1vYlR5cGUodGhpcy5ob3N0LmdhbWUsIHgsIHksIHJvKVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBuZXcgTW9iQ2xhc3ModGhpcy5ob3N0LmdhbWUsIDE3KnNpemUsIC1zaXplLCBzaXplLCB0aGlzLnJvdXRlKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodGVzdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Bhd25pbmdTdGF0ZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCs9ZGVsdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyV2F2ZVN0YXJ0ID49IHRoaXMudGltZVRvU3RhcnRXYXZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJXYXZlU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCB3YXZlT2JqZWN0ID0gdGhpcy53YXZlc1t0aGlzLmN1cnJlbnRXYXZlSW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXYXZlVG9TcGF3biA9IHdhdmVPYmplY3QuYTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRvU3Bhd25Nb2IgPSB3YXZlT2JqZWN0LnRpbWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgIGlmICh0aGlzLnNwYXduaW5nU3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXYXZlVG9TcGF3bi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3bis9ZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lck1vYlNwYXduID49IHRoaXMudGltZVRvU3Bhd25Nb2Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk1vYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9zdC5raWRzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25pbmdTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQ7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIGdldEZyYW1lcyhpbWFnZSwgc3RhcnRpLCBzdGFydGosIHNpemUsIGxlbmd0aCl7XHJcbiAgICAgICAgbGV0IGZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHN1YmltYWdlID0gbWFpbkdhbWUucC5naW1hZ2VzW2ltYWdlXS5nZXQoc3RhcnRqKnNpemUsIHN0YXJ0aSpzaXplLCBzaXplLCBzaXplKTtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goc3ViaW1hZ2UpO1xyXG4gICAgICAgICAgICBzdGFydGorKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYW1lcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgSFBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBocCA9IHRoaXMuaG9zdC5ocDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgbGV0IGxpZmVCYXJXaWR0aCA9IHRoaXMuaG9zdC5ocCAqIHRoaXMuYm9keUNvbXBvbmVudC53IC8gdGhpcy5ob3N0Lm1heEhwO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIDcpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLmZpbGwoMCwgMjU1LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueS0xNSwgbGlmZUJhcldpZHRoLCA3KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLm5vRmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCB0aGlzLmJvZHlDb21wb25lbnQudywgNyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uL0FuaW1hdGlvblV0aWxzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uL0FuaW1hdGlvblwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTBNb3ZlRG93biBleHRlbmRzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JGaXJlMC5wbmdcIiwgNCwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUwTW92ZURvd247IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQsIGltYWdlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGJvZHlDb21wb25lbnQud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYm9keUNvbXBvbmVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZShpbWFnZSl7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMuYm9keUNvbXBvbmVudC53LCB0aGlzLmJvZHlDb21wb25lbnQuaCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQubWFwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGhvc3QuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSB0aGlzLnRleHR1cmUuZ2V0KDAsIDAsIDQwLCA0MCk7XHJcbiAgICAgICAgdGhpcy5yb2FkID0gdGhpcy50ZXh0dXJlLmdldCg0MCwgMCwgNDAsIDQwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubWFwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgdGhpcy5tYXBbaV0ubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmhvc3QuZ2FtZS5wO1xyXG4gICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5tYXBbaV1bal0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcC5maWxsKDAsIDEwMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHAucmVjdChqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy5ncmFzcywgaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy5yb2FkLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnJlY3Qoaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW1hZ2UodGhpcy5yb2FkLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgTW9iRmlyZTAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMFwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMFwiO1xyXG5pbXBvcnQgTW9iRWFydGgwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMFwiO1xyXG5pbXBvcnQgTW9iQWlyMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMFwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MFwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTFcIjtcclxuaW1wb3J0IE1vYldhdGVyMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjFcIjtcclxuaW1wb3J0IE1vYkVhcnRoMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDFcIjtcclxuaW1wb3J0IE1vYkFpcjEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjFcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzFcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUyXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgyXCI7XHJcbmltcG9ydCBNb2JXYXRlcjIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIyXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cyXCI7XHJcbmltcG9ydCBNb2JBaXIyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIyXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlM1wiO1xyXG5pbXBvcnQgTW9iRWFydGgzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoM1wiO1xyXG5pbXBvcnQgTW9iV2F0ZXIzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyM1wiO1xyXG5pbXBvcnQgTW9iU2hhZG93MyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93M1wiO1xyXG5pbXBvcnQgTW9iQWlyMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyM1wiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmU0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTRcIjtcclxuaW1wb3J0IE1vYkVhcnRoNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDRcIjtcclxuaW1wb3J0IE1vYldhdGVyNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjRcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzRcIjtcclxuaW1wb3J0IE1vYkFpcjQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIE1PQl9GSVJFXzA6IE1vYkZpcmUwLFxyXG4gICAgTU9CX0VBUlRIXzA6IE1vYkVhcnRoMCwgXHJcbiAgICBNT0JfV0FURVJfMDogTW9iV2F0ZXIwLFxyXG4gICAgTU9CX1NIQURPV18wOiBNb2JTaGFkb3cwLFxyXG4gICAgTU9CX0FJUl8wOiBNb2JBaXIwLFxyXG5cclxuICAgIE1PQl9GSVJFXzE6IE1vYkZpcmUxLFxyXG4gICAgTU9CX0VBUlRIXzE6IE1vYkVhcnRoMSxcclxuICAgIE1PQl9XQVRFUl8xOiBNb2JXYXRlcjEsXHJcbiAgICBNT0JfU0hBRE9XXzE6IE1vYlNoYWRvdzEsXHJcbiAgICBNT0JfQUlSXzE6IE1vYkFpcjEsXHJcblxyXG4gICAgTU9CX0ZJUkVfMjogTW9iRmlyZTIsXHJcbiAgICBNT0JfRUFSVEhfMjogTW9iRWFydGgyLFxyXG4gICAgTU9CX1dBVEVSXzI6IE1vYldhdGVyMixcclxuICAgIE1PQl9TSEFET1dfMjogTW9iU2hhZG93MixcclxuICAgIE1PQl9BSVJfMjogTW9iQWlyMixcclxuXHJcbiAgICBNT0JfRklSRV8zOiBNb2JGaXJlMyxcclxuICAgIE1PQl9FQVJUSF8zOiBNb2JFYXJ0aDMsXHJcbiAgICBNT0JfV0FURVJfMzogTW9iV2F0ZXIzLFxyXG4gICAgTU9CX1NIQURPV18zOiBNb2JTaGFkb3czLFxyXG4gICAgTU9CX0FJUl8zOiBNb2JBaXIzLFxyXG5cclxuICAgIE1PQl9GSVJFXzQ6IE1vYkZpcmU0LFxyXG4gICAgTU9CX0VBUlRIXzQ6IE1vYkVhcnRoNCxcclxuICAgIE1PQl9XQVRFUl80OiBNb2JXYXRlcjQsXHJcbiAgICBNT0JfU0hBRE9XXzQ6IE1vYlNoYWRvdzQsXHJcbiAgICBNT0JfQUlSXzQ6IE1vYkFpcjRcclxuXHJcbiAgICAvKlxyXG4gICAgTU9CX0ZJUkVfMjogTW9iRmlyZTIsXHJcbiAgICBNT0JfRklSRV8zOiBNb2JGaXJlMyxcclxuICAgIE1PQl9GSVJFXzQ6IE1vYkZpcmU0LFxyXG4gICAgTU9CX0ZJUkVfNTogTW9iRmlyZTUsXHJcbiAgICBNT0JfRklSRV82OiBNb2JGaXJlNixcclxuICAgIE1PQl9GSVJFXzc6IE1vYkZpcmU3LFxyXG4gICAgTU9CX0ZJUkVfODogTW9iRmlyZTgsXHJcbiAgICBNT0JfRklSRV85OiBNb2JGaXJlOSxcclxuICAgIE1PQl9FQVJUSF8yOiBNb2JFYXJ0aDIsXHJcbiAgICBNT0JfRUFSVEhfMzogTW9iRWFydGgzLFxyXG4gICAgTU9CX0VBUlRIXzQ6IE1vYkVhcnRoNCxcclxuICAgIE1PQl9FQVJUSF81OiBNb2JFYXJ0aDUsXHJcbiAgICBNT0JfRUFSVEhfNjogTW9iRWFydGg2LFxyXG4gICAgTU9CX0VBUlRIXzc6IE1vYkVhcnRoNyxcclxuICAgIE1PQl9FQVJUSF84OiBNb2JFYXJ0aDgsXHJcbiAgICBNT0JfRUFSVEhfOTogTW9iRWFydGg5LFxyXG4gICAgTU9CX1dBVEVSXzI6IE1vYldhdGVyMixcclxuICAgIE1PQl9XQVRFUl8zOiBNb2JXYXRlcjMsXHJcbiAgICBNT0JfV0FURVJfNDogTW9iV2F0ZXI0LFxyXG4gICAgTU9CX1dBVEVSXzU6IE1vYldhdGVyNSxcclxuICAgIE1PQl9XQVRFUl82OiBNb2JXYXRlcjYsXHJcbiAgICBNT0JfV0FURVJfNzogTW9iV2F0ZXI3LFxyXG4gICAgTU9CX1dBVEVSXzg6IE1vYldhdGVyOCxcclxuICAgIE1PQl9XQVRFUl85OiBNb2JXYXRlcjksXHJcbiAgICBNT0JfU0hBRE9XXzI6IE1vYlNoYWRvdzIsXHJcbiAgICBNT0JfU0hBRE9XXzM6IE1vYlNoYWRvdzMsXHJcbiAgICBNT0JfU0hBRE9XXzQ6IE1vYlNoYWRvdzQsXHJcbiAgICBNT0JfU0hBRE9XXzU6IE1vYlNoYWRvdzUsXHJcbiAgICBNT0JfU0hBRE9XXzY6IE1vYlNoYWRvdzYsXHJcbiAgICBNT0JfU0hBRE9XXzc6IE1vYlNoYWRvdzcsXHJcbiAgICBNT0JfU0hBRE9XXzg6IE1vYlNoYWRvdzgsXHJcbiAgICBNT0JfU0hBRE9XXzk6IE1vYlNoYWRvdzksXHJcbiAgICBNT0JfQUlSXzI6IE1vYkFpcjIsXHJcbiAgICBNT0JfQUlSXzM6IE1vYkFpcjMsXHJcbiAgICBNT0JfQUlSXzQ6IE1vYkFpcjQsXHJcbiAgICBNT0JfQUlSXzU6IE1vYkFpcjUsXHJcbiAgICBNT0JfQUlSXzY6IE1vYkFpcjYsXHJcbiAgICBNT0JfQUlSXzc6IE1vYkFpcjcsXHJcbiAgICBNT0JfQUlSXzg6IE1vYkFpcjgsXHJcbiAgICBNT0JfQUlSXzk6IE1vYkFpcjksKi9cclxuXHJcbn07IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHApe1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmNvbnN0YW50cyA9IENvbnN0YW50cztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGluZWFySW50ZXJwb2xhdGlvbihmeDEsIGZ4MiwgeDEsIHgsIHgyKXtcclxuICAgICAgICBpZiAoeDIgPCB4MSkgcmV0dXJuIGZ4MjtcclxuICAgICAgICBpZiAoeCA+PSB4MikgcmV0dXJuIGZ4MjtcclxuICAgICAgICBpZiAoeCA8PSB4MSkgcmV0dXJuIGZ4MTtcclxuICAgICAgICByZXR1cm4gZngxKyggZngyIC0gZngxICkqKHggLSB4MSkvKHgyIC0geDEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShzdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLmdhbWVUaW1lICs9IGRlbHRhO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmF3VXBwZXIoMSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1vdXNlUHJlc3NlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VDbGlja2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBCdWxsZXRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1bGxldCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRvd2VyLCBtb2IsIG1vYnMpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbW9iO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IG5ldyBCb2R5Q29tcG9uZW50KHRoaXMsIHgsIHksIDEwLCAxMCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5ib2R5Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLnRvd2VyID0gdG93ZXI7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PiB7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAwLCAyNTUpO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngtNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIHRoaXMuYm9keUNvbXBvbmVudC5oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldENvbXBvbmVudCA9IG5ldyBCdWxsZXRDb21wb25lbnQodGhpcywgdGhpcy50YXJnZXQsIG1vYnMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYnVsbGV0Q29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWlyVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0FpclRvd2VyXCI7XHJcbmltcG9ydCBFYXJ0aFRvd2VyIGZyb20gXCIuL1Rvd2Vycy9FYXJ0aFRvd2VyXCI7XHJcbmltcG9ydCBGaXJlVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0ZpcmVUb3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlciBmcm9tIFwiLi9Ub3dlcnMvV2F0ZXJUb3dlclwiO1xyXG5pbXBvcnQgU2hhZG93VG93ZXIgZnJvbSBcIi4vVG93ZXJzL1NoYWRvd1Rvd2VyXCI7XHJcblxyXG5jbGFzcyBHYW1lQm90dG9tTWVudSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCA1OyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgMzsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBuZXcgQm9keUNvbXBvbmVudChudWxsLCA1NSArIGkqdGlsZVNpemUgKyAyMCppICsgMTQqdGlsZVNpemUsIDE2KnRpbGVTaXplLCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvd2VySW5kZXhlcyA9IHtcclxuICAgICAgICAgICAgMDogQWlyVG93ZXIsXHJcbiAgICAgICAgICAgIDE6IEVhcnRoVG93ZXIsXHJcbiAgICAgICAgICAgIDI6IEZpcmVUb3dlcixcclxuICAgICAgICAgICAgMzogV2F0ZXJUb3dlcixcclxuICAgICAgICAgICAgNDogU2hhZG93VG93ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJySSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJySiA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMDtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3VpL0JvdHRvbU1lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KSB7XHJcbiAgICAgICAgc3VwZXIuZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5nYW1lLnA7XHJcbiAgICAgICAgICAgIHAuaW1hZ2UodGhpcy50ZXh0dXJlLCAwLCAxNSo0MCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHAuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDEwMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMCwgMCwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwLnJlY3QodGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICBwLnJlY3QodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0udywgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0uaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgIHAudGV4dChtYWluR2FtZS5tb25leS50b1N0cmluZygpLCBwLmdhbWVXaWR0aC8yLTE0LCBwLmdhbWVIZWlnaHQtMTAwLCAxMDAsIDI1KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgc3VwZXIubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLmdhbWUucC5tb3VzZVg7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLmdhbWUucC5tb3VzZVk7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgaWYgKHkgPCAxNSp0aWxlU2l6ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckogPSBNYXRoLmZsb29yKHgvdGlsZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJJID0gTWF0aC5mbG9vcih5L3RpbGVTaXplKTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5raWRzW2ldLmJvZHlDb21wb25lbnQueCA9PSB0aGlzLmN1cnJKKnRpbGVTaXplICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC55ID09IHRoaXMuY3VyckkqdGlsZVNpemUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHRoaXMua2lkc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDE7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAwKSB7IC8vbm90aGluZ1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMSl7IC8vdG93ZXJzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLm1vdXNlSG92ZXIoeCwgeSkgJiYgdGhpcy50cnlCdXkoNTApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvd2VyID0gbmV3IHRoaXMudG93ZXJJbmRleGVzW2ldKHRoaXMsIHRoaXMuY3VyckoqdGlsZVNpemUsIHRoaXMuY3VyckkqdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB0b3dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0b3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAyKXsgLy91cGdyYWRlcywgZGVzdHJveVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9iamVjdCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1swXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5QnV5KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudG93ZXJDb3N0ICs9IHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbMV0ubW91c2VIb3Zlcih4LCB5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeUJ1eSh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3QgKz0gMjAwICogTWF0aC5mbG9vcihNYXRoLnBvdygxLjUsIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbMl0ubW91c2VIb3Zlcih4LCB5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC5vbkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWUubW9uZXkgKz0gIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cnlCdXkocHJpY2Upe1xyXG4gICAgICAgIGlmIChtYWluR2FtZS5tb25leSA+PSBwcmljZSl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvdHRvbU1lbnU7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgMTUwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA1MDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyMDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXIxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDE2O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDY3NTApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTI1O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDM3NTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDc1MDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXI0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyNDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyNDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRHlpbmdPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkaWVcIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9iRmlyZTAucG5nXCIsIDMsIDAsIDgwLCA0KSwgMC4xLFxyXG4gICAgICAgICAgICBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZGllXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSA0KjAuMSsxKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy54LTI1LCB0aGlzLnktMjUsIDkwKk1hdGguUEkvMTgwKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRHlpbmdPYmplY3Q7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDI1MCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDg3NSk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTI1MDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyNzUwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0NTA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRWFydGg0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgMjEwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoNDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYkZpcmUwTW92ZURvd24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL01vYnMvTW9iRmlyZTAvTW9iRmlyZTBNb3ZlRG93blwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMCBleHRlbmRzIE1vYiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDApO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMjtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgTW9iRmlyZTBNb3ZlRG93bigpKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDE2MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUzIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzUwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNjAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmU0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlNDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBNb2JNb3ZpbmdDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvTW9iTW92aW5nQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSFBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0hQUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEeWluZ09iamVjdCBmcm9tIFwiLi9EeWluZ09iamVjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVFbWl0dGVyIGZyb20gXCIuLi9QYXJ0aWNsZUVtaXR0ZXJcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHNpemUsIHRpbGVTaXplLCByb3V0ZSwgdHVyblRpbWUsIHJlc2lzdCwgaHApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMjtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5tYXhIcCA9IGhwO1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgICAgICB0aGlzLnJlc2lzdCA9IHJlc2lzdDtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICAvL3RoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JNb3ZpbmdDb21wb25lbnQgPSBuZXcgTW9iTW92aW5nQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgcm91dGUsIHRpbGVTaXplLCB0dXJuVGltZSk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5tb2JNb3ZpbmdDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmhwUmVuZGVyQ29tcG9uZW50ID0gbmV3IEhQUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5ocFJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgaWYodGhpcy5ocCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSB0aGlzLmJvdW50eTtcclxuICAgICAgICAgICAgLy8gbGV0IGR5aW5nT2JqZWN0ID0gbmV3IER5aW5nT2JqZWN0KHRoaXMuZ2FtZSwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnN0YXRlLmFkZEdhbWVPYmplY3QoZHlpbmdPYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0ge3I6MCwgZzowLCBiOjB9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBGaXJlUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5yID0gMjAwO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXN0IGluc3RhbmNlb2YgV2F0ZXJSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmIgPSAyMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBTaGFkb3dSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnIgPSAxNTA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDE1MDtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEFpclJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuZyA9IDgwO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmIgPSAyNTU7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBFYXJ0aFJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuciA9IDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5nID0gMTgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbWl0dGVyID0gbmV3IFBhcnRpY2xlRW1pdHRlcih0aGlzLmdhbWUsIDIwLCBjb2xvcnMuciwgY29sb3JzLmcsIGNvbG9ycy5iKTtcclxuICAgICAgICAgICAgZW1pdHRlci5zZXRMb2NhdGlvbih0aGlzLmJvZHlDb21wb25lbnQueCt0aGlzLmJvZHlDb21wb25lbnQudy8yLCB0aGlzLmJvZHlDb21wb25lbnQueSt0aGlzLmJvZHlDb21wb25lbnQuaC8yKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLmFkZEdhbWVPYmplY3QoZW1pdHRlcik7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZSh0b3dlciwgY29lZil7XHJcbiAgICAgICAgbGV0IHB1cmVEYW1hZ2UgPSB0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tEYW1hZ2UqY29lZjtcclxuICAgICAgICBsZXQgZGFtYWdlID0gcHVyZURhbWFnZSAqIHRoaXMucmVzaXN0LnJlc2lzdHNbdG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZV07XHJcbiAgICAgICAgaWYodGhpcy5ocCA8IGRhbWFnZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDQwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA1O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDYzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMjAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDkwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDIwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDMwMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3c0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTIwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93NDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTEwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA0O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCA2MDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDc1O1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNjAwMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMjMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyNDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5cclxuY2xhc3MgUGFydGljbGVFbWl0dGVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgY291bnQsIHIsIGcsIGIpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICB0aGlzLmcgPSBnO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnZ4bWF4ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudnltYXggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYXRpb24oeCwgeSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB7fTtcclxuICAgICAgICAgICAgICAgIHAueCA9IHRoaXMueDtcclxuICAgICAgICAgICAgICAgIHAueSA9IHRoaXMueTtcclxuICAgICAgICAgICAgICAgIHAuciA9IHRoaXMucjtcclxuICAgICAgICAgICAgICAgIHAuZyA9IHRoaXMuZztcclxuICAgICAgICAgICAgICAgIHAuYiA9IHRoaXMuYjtcclxuICAgICAgICAgICAgICAgIHAudnggPSBNYXRoLnJhbmRvbSgpKnRoaXMudnhtYXgqMi10aGlzLnZ4bWF4O1xyXG4gICAgICAgICAgICAgICAgcC52eSA9IE1hdGgucmFuZG9tKCkqdGhpcy52eW1heCoyLXRoaXMudnltYXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ueCArPSBkZWx0YSAqIHRoaXMucGFydGljbGVzW2ldLnZ4O1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS55ICs9IGRlbHRhICogdGhpcy5wYXJ0aWNsZXNbaV0udnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gMil7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnN0YXRlLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnQgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5wLm5vU3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFpbkdhbWUucC5maWxsKHBhcnQuciwgcGFydC5nLCBwYXJ0LmIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1haW5HYW1lLnAucmVjdChwYXJ0LngsIHBhcnQueSwgMiwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdChwYXJ0LngsIHBhcnQueSwgNCwgNCwgcGFydC5yLCBwYXJ0LmcsIHBhcnQuYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlRW1pdHRlcjsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVGlsZW1hcFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvVGlsZW1hcC9UaWxlbWFwUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBUaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRpbGVtYXAgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQgPSBuZXcgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBUaWxlbWFwUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcDsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEFpclRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9BaXJUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWlyVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBBaXJUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgbGV0IGFsbFRvd2VycyA9IG1haW5HYW1lLnN0YXRlLmdhbWVNZW51Qm90dG9tLmtpZHM7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgYWxsVG93ZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlICE9IFwiYWlyXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy5ib2R5Q29tcG9uZW50KSA8IDEwMClcclxuICAgICAgICAgICAgICAgICAgICBhbGxUb3dlcnNbaV0uYnVmZnNDb21wb25lbnQuY2FuY2VsQnVmZihcInNwZWVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFpclRvd2VyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgRWFydGhUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IEVhcnRoVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0ICBFYXJ0aFRvd2VyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgRmlyZVRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IEZpcmVUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlyZVRvd2VyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgU2hhZG93VG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1NoYWRvd1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IFNoYWRvd1Rvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dUb3dlcjsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVG93ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBtYWluR2FtZS50aWxlU2l6ZSwgbWFpbkdhbWUudGlsZVNpemUpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+e1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDUwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC50ZXh0KHRoaXMudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwrXCIgXCIrdGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsICx0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvd2VyOyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUb3dlckJ1aWxkZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQnVpbGRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVG93ZXJCdWlsZGVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1aWxkZXJDb21wb25lbnQgPSBuZXcgVG93ZXJCdWlsZGVyQ29tcG9uZW50KHRoaXMsIHRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJCdWlsZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3dlckJ1aWxkZXI7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9XYXRlclRvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgV2F0ZXJUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJUb3dlcjsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL1dhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F2ZU1hc3RlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50ID0gbmV3IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCh0aGlzLCB0aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLndhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXZlTWFzdGVyOyIsImltcG9ydCBCdWZmc0NvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdWZmc0NvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmtpZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLy9idWZmc1xyXG4gICAgICAgIHRoaXMuYnVmZnNDb21wb25lbnQgPSBuZXcgQnVmZnNDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cyA9IHt9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdSZWN0KHgsIHksIHcsIGgsIHIsIGcsIGIpe1xyXG4gICAgICAgIGxldCBwID0gbWFpbkdhbWUucDtcclxuICAgICAgICBwLnB1c2goKTtcclxuICAgICAgICBsZXQgaGFsZldpZHRoID0gdyowLjU7XHJcbiAgICAgICAgbGV0IGhhbGZIZWlnaHQgPSBoKjAuNTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSh4K2hhbGZXaWR0aCwgeStoYWxmSGVpZ2h0KTtcclxuICAgICAgICBwLmZpbGwociwgZywgYik7XHJcbiAgICAgICAgcC5yZWN0KC1oYWxmV2lkdGgsIC1oYWxmSGVpZ2h0LCB3LCBoKTtcclxuICAgICAgICBwLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGUoaW1hZ2UsIHgsIHksIGFuZ2xlKXtcclxuICAgICAgICBsZXQgcCA9IG1haW5HYW1lLnA7XHJcbiAgICAgICAgcC5wdXNoKCk7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IGltYWdlLndpZHRoKjAuNTtcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IGltYWdlLmhlaWdodCowLjU7XHJcbiAgICAgICAgcC50cmFuc2xhdGUoeCtoYWxmV2lkdGgsIHkraGFsZkhlaWdodCk7XHJcbiAgICAgICAgcC5yb3RhdGUoKC05MCAqIHAuUEkgLyAxODApK2FuZ2xlKTtcclxuICAgICAgICBwLmltYWdlKGltYWdlLCAtaW1hZ2Uud2lkdGgqMC41LCAtaW1hZ2UuaGVpZ2h0KjAuNSk7XHJcbiAgICAgICAgcC5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZENvbXBvbmVudChjKXtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoYyl7XHJcbiAgICAgICAgdGhpcy5raWRzLnB1c2goYyk7XHJcbiAgICAgICAgYy5wYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tUGFyZW50KCl7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnN0YXRlLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNvbXBvbmVudChjKXtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5raWRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlQ2xpY2tlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VQcmVzc2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZURyYWdnZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBvbkFjdGlvbil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgeCAtPSAxNjcvMjtcclxuICAgICAgICB5IC09IDczLzI7XHJcbiAgICAgICAgdGhpcy5vbkFjdGlvbiA9IG9uQWN0aW9uO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IG5ldyBCb2R5Q29tcG9uZW50KHRoaXMsIHgsIHksIDE2NywgNzMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25JbWFnZSA9IGdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3VpL2J1dHRvbnNfbWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9pZGxlID0gZ2FtZS5wLmNyb3AoYnV0dG9uSW1hZ2UsIDAsIDczLCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkltYWdlX2hvdmVyID0gZ2FtZS5wLmNyb3AoYnV0dG9uSW1hZ2UsIDAsIDAsIDE2NywgNzMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCB0aGlzLmJ1dHRvbkltYWdlX2lkbGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LnVwZGF0ZSA9IChkZWx0YSk9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQubW91c2VIb3ZlcigpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmltYWdlID0gdGhpcy5idXR0b25JbWFnZV9ob3ZlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmltYWdlID0gdGhpcy5idXR0b25JbWFnZV9pZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50Lm1vdXNlUHJlc3NlZCA9ICgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQubW91c2VIb3ZlcigpKVxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IFRpbGVtYXAgZnJvbSBcIi4uL09iamVjdHMvR2FtZS9UaWxlbWFwXCI7XHJcbmltcG9ydCBXYXZlTWFzdGVyIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvV2F2ZU1hc3RlclwiO1xyXG5pbXBvcnQgTW9iIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvTW9icy9Nb2JcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL09iamVjdHMvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVG93ZXJCdWlsZGVyIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyQnVpbGRlclwiO1xyXG5pbXBvcnQgR2FtZUJvdHRvbU1lbnUgZnJvbSBcIi4uL09iamVjdHMvR2FtZS9HYW1lQm90dG9tTWVudVwiO1xyXG5cclxuY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIGdhbWUubW9uZXkgPSA1MDAwMDtcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSBuZXcgVGlsZW1hcChnYW1lKTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QodGhpcy50aWxlbWFwKTtcclxuICAgICAgICB0aGlzLndhdmVNYXN0ZXIgPSBuZXcgV2F2ZU1hc3RlcihnYW1lLCB0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLndhdmVNYXN0ZXIpO1xyXG4gICAgICAgIC8vIHRoaXMudG93ZXJCdWlsZGVyID0gbmV3IFRvd2VyQnVpbGRlcihnYW1lLCB0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLnRvd2VyQnVpbGRlcik7XHJcbiAgICAgICAgdGhpcy5nYW1lTWVudUJvdHRvbSA9IG5ldyBHYW1lQm90dG9tTWVudShnYW1lLCB0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLmdhbWVNZW51Qm90dG9tKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlOyIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi9TdGF0ZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9PYmplY3RzL01lbnUvQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKGdhbWUsIGdhbWUucC5nYW1lV2lkdGgvMiwgZ2FtZS5wLmdhbWVIZWlnaHQvMi0xMDAsICgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdChidXR0b24xKTtcclxuICAgICAgICBsZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oZ2FtZSwgZ2FtZS5wLmdhbWVXaWR0aC8yLCBnYW1lLnAuZ2FtZUhlaWdodC8yKzEwMCwgKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPcHRpb25zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KGJ1dHRvbjIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhcnRlZFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRPcHRpb25zKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zIHN0YXJ0XCIpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudVN0YXRlOyIsImNsYXNzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkR2FtZU9iamVjdChvKXtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2gobyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUdhbWVPYmplY3Qobyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nYW1lT2JqZWN0cy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VDbGlja2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5kcmF3KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9