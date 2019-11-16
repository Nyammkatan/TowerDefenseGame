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
        super(host, "earth", 1.5, 180, 200);
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
        super(host, "fire", 0.8, 120, 200);
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
        super(host, "shadow", 1, 120, 300);
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
        super(_AnimationUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getFrames("assets/mobs/MobFire0.png", 4, 0, 40, 3),
            0.1, true);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (MobFire0MoveDown);

/***/ }),

/***/ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveLeft.js":
/*!*************************************************************************!*\
  !*** ./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveLeft.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Animation */ "./src/scripts/Components/Animation.js");



class MobFire0MoveLeft extends _Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {

    constructor(host){
        super(_AnimationUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getFrames("assets/mobs/MobFire0.png", 1, 0, 40, 4),
            0.1, true);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (MobFire0MoveLeft);

/***/ }),

/***/ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveRight.js":
/*!**************************************************************************!*\
  !*** ./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveRight.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../AnimationUtils */ "./src/scripts/Components/render/AnimationUtils.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Animation */ "./src/scripts/Components/Animation.js");



class MobFire0MoveRight extends _Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {

    constructor(host){
        super(_AnimationUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getFrames("assets/mobs/MobFire0.png", 2, 0, 40, 4),
            0.1, true);

    }

}

/* harmony default export */ __webpack_exports__["default"] = (MobFire0MoveRight);

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
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 1100);
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
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 7500);
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
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 42500);
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
        super(game, x, y, 30, tileSize, route, 170, new _Components_logic_Resist_AirResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 2400);
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
            _Components_render_AnimationUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getFrames("assets/mobs/MobFire0.png", 3, 0, 40, 4), 0.1,
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
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.x, this.y, 90*Math.PI/180);
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
/* harmony import */ var _Components_render_Mobs_MobFire0_MobFire0MoveLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Components/render/Mobs/MobFire0/MobFire0MoveLeft */ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveLeft.js");
/* harmony import */ var _Components_render_Mobs_MobFire0_MobFire0MoveRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Components/render/Mobs/MobFire0/MobFire0MoveRight */ "./src/scripts/Components/render/Mobs/MobFire0/MobFire0MoveRight.js");







class MobFire0 extends _Mob__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, tileSize, route){
        super(game, x, y, 30, tileSize, route, 100, new _Components_logic_Resist_FireResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 100);
        this.bounty = 2;
        this.animationController = new _Components_AnimationControllerComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.animationController.addAnimation("down", new _Components_render_Mobs_MobFire0_MobFire0MoveDown__WEBPACK_IMPORTED_MODULE_2__["default"]());
        // this.animationController.addAnimation("left", new MobFire0MoveLeft());
        // this.animationController.addAnimation("right", new MobFire0MoveRight());
        this.animationController.setCurrentAnimation("down");
        this.addComponent(this.animationController);
        
    }

    draw() {
        super.draw();
        this.drawSprite(this.animationController.currentAnim.getFrame(), this.bodyComponent.x-5, this.bodyComponent.y, this.bodyComponent.angle);
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
            let dyingObject = new _DyingObject__WEBPACK_IMPORTED_MODULE_5__["default"](this.game, this.bodyComponent.x, this.bodyComponent.y);
            this.game.state.addGameObject(dyingObject);
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
        super(game, x, y, 60, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6300);
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
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 9000);
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
        super(game, x, y, 30, tileSize, route, 150, new _Components_logic_Resist_ShadowResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 20000);
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
        super(game, x, y, 30, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 6000);
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
        super(game, x, y, 60, tileSize, route, 120, new _Components_logic_Resist_WaterResistComponent__WEBPACK_IMPORTED_MODULE_1__["default"](null), 300000);
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

    drawRect(x, y, w, h, color){
        let p = mainGame.p;
        let halfWidth = w*0.5;
        let halfHeight = h*0.5;
        p.translate(x+halfWidth, y+halfHeight);
        p.stroke(0);
        p.fill(color);
        p.rect(-halfWidth, -halfHeight, w, h);
        p.resetMatrix();
    }

    drawSprite(image, x, y, angle){
        let p = mainGame.p;
        let halfWidth = image.width*0.5;
        let halfHeight = image.height*0.5;
        p.translate(x+halfWidth, y+halfHeight);
        p.rotate((-90 * p.PI / 180)+angle);
        p.image(image, -image.width*0.5, -image.height*0.5);
        p.resetMatrix();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL0dhbWVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQXR0YWNrU3BlZWRCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdXJuaW5nQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0N1cnNlQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL1Nsb3dCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvTW9iUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvTW9icy9Nb2JGaXJlMC9Nb2JGaXJlME1vdmVEb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL01vYnMvTW9iRmlyZTAvTW9iRmlyZTBNb3ZlTGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9Nb2JzL01vYkZpcmUwL01vYkZpcmUwTW92ZVJpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9UaWxlbWFwL1RpbGVtYXBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL0J1bGxldHMvQnVsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9HYW1lQm90dG9tTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9EeWluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGg0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9Nb2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVGlsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0FpclRvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvRWFydGhUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0ZpcmVUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1NoYWRvd1Rvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9XYXRlclRvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9XYXZlTWFzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL01lbnUvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9HYW1lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL01lbnVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvU3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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O0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBYztBQUNoRDs7QUFFQTs7QUFFQTtBQUNlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQ3pCeEI7QUFBQTtBQUFBO0FBQTRCO0FBQ2dCOztBQUU1Qyx3QkFBd0IsOENBQUs7O0FBRTdCO0FBQ0E7QUFDQSwwQkFBMEIsNERBQU07QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwwQkFBMEIsNERBQU07QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ2Usd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDN0J4QjtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ2Usb0VBQUssRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL0dhbWVcIjtcclxuaW1wb3J0IE1lbnVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9zY3JpcHRzL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuXHJcbmxldCBnYW1lO1xyXG5cclxuY29uc3QgcyA9IChwKSA9PiB7XHJcblxyXG4gICAgbGV0IGxhc3RUaW1lO1xyXG4gICAgbGV0IGN1cnJUaW1lO1xyXG5cclxuICAgIHAuY3JvcCA9IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoKXtcclxuICAgICAgICB2YXIgY3JvcHBlZCA9IHAuY3JlYXRlSW1hZ2UodywgaCk7XHJcbiAgICAgICAgY3JvcHBlZC5jb3B5KGltYWdlLCB4LCB5LCB4ICsgdywgeSArIGgsIDAsIDAsIHggKyB3LCB5ICsgaClcclxuICAgICAgICByZXR1cm4gY3JvcHBlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5pbWFnZXNBcnJheSA9IFtcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbWFwL1RpbGVzZXQucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy9tb2JzL01vYkZpcmUwLnBuZ1wiXHJcbiAgICBdO1xyXG4gICAgcC5zb3VuZHNBcnJheSA9IFtcImFzc2V0cy9KdW1wMy53YXZcIl07XHJcblxyXG4gICAgcC5naW1hZ2VzID0ge307XHJcbiAgICBwLmdzb3VuZHMgPSB7fTtcclxuXHJcbiAgICBwLmdhbWVXaWR0aCA9IDk2MDtcclxuICAgIHAuZ2FtZUhlaWdodCA9IDcyMDtcclxuXHJcbiAgICBwLmxvYWRHYW1lSW1hZ2UgPSBmdW5jdGlvbihzdHIpe1xyXG4gICAgICAgIHAuZ2ltYWdlc1tzdHJdID0gcC5sb2FkSW1hZ2Uoc3RyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5sb2FkR2FtZVNvdW5kID0gZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICBwLmdzb3VuZHNbc3RyXSA9IHAubG9hZFNvdW5kKHN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAucHJlbG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHAuaW1hZ2VzQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBwLmxvYWRHYW1lSW1hZ2UocC5pbWFnZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHAuc291bmRzQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBwLmxvYWRHYW1lU291bmQocC5zb3VuZHNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyhwLmdhbWVXaWR0aCwgcC5nYW1lSGVpZ2h0KTtcclxuICAgICAgICBwLnBpeGVsRGVuc2l0eSgxKTtcclxuXHJcbiAgICAgICAgbGFzdFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGN1cnJUaW1lID0gMDtcclxuXHJcbiAgICAgICAgZ2FtZSA9IG5ldyBHYW1lKHApO1xyXG4gICAgICAgIHdpbmRvdy5tYWluR2FtZSA9IGdhbWU7XHJcbiAgICAgICAgZ2FtZS5zZXRTdGF0ZShuZXcgR2FtZVN0YXRlKGdhbWUpKTtcclxuICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3VyclRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBkZWx0YSA9IChjdXJyVGltZSAtIGxhc3RUaW1lKS8xMDAwO1xyXG5cclxuICAgICAgICBwLmJhY2tncm91bmQoMCk7XHJcblxyXG4gICAgICAgIGlmIChkZWx0YSA8IDAuMilcclxuICAgICAgICBnYW1lLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgZ2FtZS5kcmF3KHApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWU7XHJcbiAgICBcclxuICAgIH07XHJcblxyXG4gICAgcC5tb3VzZUNsaWNrZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VDbGlja2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubW91c2VQcmVzc2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlUHJlc3NlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLm1vdXNlRHJhZ2dlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgZ2FtZXA1ID0gbmV3IHA1KHMsIFwibWFpblwiKTtcclxuXHJcblxyXG4iLCJjbGFzcyBBbmltYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZyYW1lcywgdGltZSwgbG9vcCl7XHJcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmV4dEZyYW1lKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RnJhbWUgPj0gdGhpcy5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9vcClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSB0aGlzLmZyYW1lcy5sZW5ndGgtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyIC09IHRoaXMudGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mcmFtZXNbdGhpcy5jdXJyZW50RnJhbWVdO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbjsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5hbmltcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuaW1hdGlvbihuYW1lLCBhbmltKXtcclxuICAgICAgICB0aGlzLmFuaW1zW25hbWVdID0gYW5pbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEFuaW1hdGlvbihuYW1lKXtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbSA9PSB0aGlzLmFuaW1zW25hbWVdKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IHRoaXMuYW5pbXNbbmFtZV07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbS5jdXJyZW50RnJhbWUgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW0udXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50OyIsImNsYXNzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJvZHlDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB4LCB5LCB3LCBoKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUhvdmVyKCl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VYO1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSB0aGlzLmhvc3QuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBpZiAobW91c2VYID49IHRoaXMueCAmJiBtb3VzZVggPCB0aGlzLngrdGhpcy53KXtcclxuICAgICAgICAgICAgaWYgKG1vdXNlWSA+PSB0aGlzLnkgJiYgbW91c2VZIDwgdGhpcy55K3RoaXMuaCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxhcHMoYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IGJvZHlDb21wb25lbnQueCArIGJvZHlDb21wb25lbnQudyAmJlxyXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLncgPiBib2R5Q29tcG9uZW50LnggJiZcclxuICAgICAgICAgICAgdGhpcy55IDwgYm9keUNvbXBvbmVudC55ICsgYm9keUNvbXBvbmVudC5oICYmXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaCA+IGJvZHlDb21wb25lbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlVG8oYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgbGV0IGsxID0gTWF0aC5hYnMoYm9keUNvbXBvbmVudC54LXRoaXMueCk7XHJcbiAgICAgICAgbGV0IGsyID0gTWF0aC5hYnMoYm9keUNvbXBvbmVudC55LXRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChrMSprMSArIGsyKmsyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUhvdmVyKHgsIHkpe1xyXG4gICAgICAgIGxldCBtb3VzZVggPSB4O1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSB5O1xyXG4gICAgICAgIGlmIChtb3VzZVggPj0gdGhpcy54ICYmIG1vdXNlWCA8IHRoaXMueCt0aGlzLncpe1xyXG4gICAgICAgICAgICBpZiAobW91c2VZID49IHRoaXMueSAmJiBtb3VzZVkgPCB0aGlzLnkrdGhpcy5oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUb1BvaW50KHgsIHkpe1xyXG4gICAgICAgIGxldCBrMSA9IE1hdGguYWJzKHgtdGhpcy54KTtcclxuICAgICAgICBsZXQgazIgPSBNYXRoLmFicyh5LXRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChrMSprMSArIGsyKmsyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUbyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBsZXQgeERpc3QgPSBib2R5Q29tcG9uZW50LnggLSB0aGlzLng7XHJcbiAgICAgICAgbGV0IHlEaXN0ID0gYm9keUNvbXBvbmVudC55IC0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlVG9Qb2ludCh4LCB5KXtcclxuICAgICAgICBsZXQgeERpc3QgPSB4IC0gdGhpcy54O1xyXG4gICAgICAgIGxldCB5RGlzdCA9IHkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlDb21wb25lbnQ7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiXHJcblxyXG5jbGFzcyBBdHRhY2tTcGVlZEJ1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJhdHRhY2tTcGVlZEF1cmFcIilcclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC50b3dlckNvbXBvbmVudC5hdHRhY2tTcGVlZCAtPSB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKiAwLjE1KnRoaXMuYnVmZmx2bDtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKz0gdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICogMC4xNSp0aGlzLmJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXR0YWNrU3BlZWRCdWZmOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdWZmQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdHlwZSl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmJ1ZmZsdmwgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWZmQ29tcG9uZW50OyIsImltcG9ydCBCdXJuaW5nQnVmZiBmcm9tIFwiLi9CdXJuaW5nQnVmZlwiO1xyXG5pbXBvcnQgQ3Vyc2VCdWZmIGZyb20gXCIuL0N1cnNlQnVmZlwiO1xyXG5pbXBvcnQgQXR0YWNrU3BlZWRCdWZmIGZyb20gXCIuL0F0dGFja1NwZWVkQnVmZlwiO1xyXG5pbXBvcnQgU2xvd0J1ZmYgZnJvbSBcIi4vU2xvd0J1ZmZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiYnVyblwiOiBCdXJuaW5nQnVmZixcclxuICAgIFwiY3Vyc2VcIjogQ3Vyc2VCdWZmLFxyXG4gICAgXCJzcGVlZFwiOiBBdHRhY2tTcGVlZEJ1ZmYsXHJcbiAgICBcInNsb3dcIjogU2xvd0J1ZmZcclxuXHJcbn07IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1ZmZzIGZyb20gXCIuL0J1ZmZzXCI7XHJcblxyXG5jbGFzcyBCdWZmc0NvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYnVmZnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJ1ZmZDbGFzc2VzID0gQnVmZnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5QnVmZih0eXBlLCBidWZmbHZsKXtcclxuICAgICAgICBsZXQgYnVmZkNvbXBvbmVudENsYXNzID0gdGhpcy5idWZmQ2xhc3Nlc1t0eXBlXTtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IGJ1ZmZDb21wb25lbnRDbGFzcyh0aGlzLmhvc3QpO1xyXG4gICAgICAgIGNvbXBvbmVudC5idWZmbHZsID0gYnVmZmx2bDtcclxuICAgICAgICB0aGlzLmhvc3QuYXR0YWNobWVudHNbdHlwZV0gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5vbigpO1xyXG4gICAgICAgIHRoaXMuYnVmZnNbdHlwZV0gPSBidWZmbHZsO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeUJ1ZmYodHlwZSwgYnVmZmx2bCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVmZnNbdHlwZV0gIT09IGJ1ZmZsdmwpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmc1t0eXBlXSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUJ1ZmYodHlwZSwgYnVmZmx2bCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAoYnVmZmx2bCA+IHRoaXMuYnVmZnNbdHlwZV0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdWZmKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUJ1ZmYodHlwZSwgYnVmZmx2bCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQnVmZih0eXBlKXtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5ob3N0LmF0dGFjaG1lbnRzW3R5cGVdO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY29tcG9uZW50Lm9mZigpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVmZnNbdHlwZV0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZzQ29tcG9uZW50OyIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1cm5pbmdCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJidXJuXCIpO1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmJ1cm5UaW1lID0gNDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLmJ1cm5UaW1lciArPSBkZWx0YTtcclxuICAgICAgICBsZXQgZGFtYWdlUGVyU2Vjb25kID0gZGVsdGEgKiB0aGlzLmhvc3QubWF4SHAgKiAoMC4wMiAqIHRoaXMuYnVmZmx2bCk7XHJcbiAgICAgICAgaWYodGhpcy5ob3N0LmhwIDwgZGFtYWdlUGVyU2Vjb25kKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmhwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaHAgLT0gZGFtYWdlUGVyU2Vjb25kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5idXJuVGltZXIgPj0gdGhpcy5idXJuVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVybmluZ0J1ZmY7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3Vyc2VCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJjdXJzZVwiKTtcclxuICAgICAgICB0aGlzLmN1cnNlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lID0gNDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICBsZXQgcmVzaXN0cyA9IHRoaXMuaG9zdC5yZXNpc3QucmVzaXN0cztcclxuICAgICAgICBmb3IobGV0IGsgaW4gcmVzaXN0cyl7XHJcbiAgICAgICAgICAgIHJlc2lzdHNba10gKz0gMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5jdXJzZVRpbWVyID49IHRoaXMuY3Vyc2VUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgbGV0IHJlc2lzdHMgPSB0aGlzLmhvc3QucmVzaXN0LnJlc2lzdHM7XHJcbiAgICAgICAgZm9yKGxldCBrIGluIHJlc2lzdHMpe1xyXG4gICAgICAgICAgICByZXNpc3RzW2tdIC09IDAuMSAqIHRoaXMuYnVmZmx2bDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEN1cnNlQnVmZjsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTbG93QnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcInNsb3dcIik7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWUgPSA0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAtIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAqIDAuMSAqIHRoaXMuYnVmZmx2bDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnNsb3dUaW1lciA+PSB0aGlzLnNsb3dUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm1vYk1vdmluZ0NvbXBvbmVudC5tb3ZlbWVudFNwZWVkID0gdGhpcy5zdGFydFZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xvd0J1ZmY7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1bGxldENvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgdGFyZ2V0LCBtb2JzKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLm1vYnMgPSBtb2JzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzNTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgdEJvZHkgPSB0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50LmFuZ2xlVG9Qb2ludCh0Qm9keS54K3RCb2R5LncvMiwgdEJvZHkueSt0Qm9keS5oLzIpO1xyXG4gICAgICAgIGJvZHkueCArPSBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgYm9keS55ICs9IE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBpZihib2R5Lm92ZXJsYXBzKHRCb2R5KSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ob3N0KTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVjZWl2ZURhbWFnZSh0aGlzLmhvc3QudG93ZXIsIDEpO1xyXG4gICAgICAgICAgICBsZXQgYXR0YWNrVG93ZXJDID0gdGhpcy5ob3N0LnRvd2VyLnRvd2VyQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJmaXJlXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYnVmZnNDb21wb25lbnQudHJ5QnVmZihcImJ1cm5cIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwid2F0ZXJcIil7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRhcmdldC5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwic2xvd1wiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQpIDwgMTAwICsgMTAwICogKDAuMiAqIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9ic1tpXS5idWZmc0NvbXBvbmVudC50cnlCdWZmKFwic2xvd1wiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwic2hhZG93XCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYnVmZnNDb21wb25lbnQudHJ5QnVmZihcImN1cnNlXCIsIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcImVhcnRoXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50YXJnZXQgIT09IHRoaXMubW9ic1tpXSAmJiB0aGlzLm1vYnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMudGFyZ2V0LmJvZHlDb21wb25lbnQpIDwgMTAwICsgMTAwICogKDAuMiAqIGF0dGFja1Rvd2VyQy51cGdyYWRlQWJpbGl0eUxldmVsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9ic1tpXS5yZWNlaXZlRGFtYWdlKHRoaXMuaG9zdC50b3dlciwgMC4yMCphdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYk1vdmluZ0NvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQsIHJvdXRlLCB0aWxlU2l6ZSwgbW92ZW1lbnRTcGVlZCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gYm9keUNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IG1vdmVtZW50U3BlZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaGlmdCA9ICh0aGlzLnRpbGVTaXplKjIpLXRoaXMudGlsZVNpemUtdGhpcy5ib2R5Q29tcG9uZW50LncqMC41O1xyXG4gICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgIHRoaXMudnkgPSAwO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC54ICs9IHRoaXMuc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnkgKz0gdGhpcy5zaGlmdDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFRpbGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRpbGUoKXtcclxuICAgICAgICBsZXQgdGlsZSA9IHRoaXMucm91dGVbdGhpcy5jdXJyZW50Um91dGVJbmRleCsrXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gdGlsZTtcclxuICAgICAgICBpZiAodGlsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgeERpc3QgPSAodGlsZS5qKnRoaXMudGlsZVNpemUpIC0gKHRoaXMuYm9keUNvbXBvbmVudC54IC0gdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIGxldCB5RGlzdCA9ICh0aWxlLmkqdGhpcy50aWxlU2l6ZSkgLSAodGhpcy5ib2R5Q29tcG9uZW50LnkgLSB0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTsvLyAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy52eCA9IE1hdGguY29zKHRoaXMuYW5nbGUpICogdGhpcy5tb3ZlbWVudFNwZWVkO1xyXG4gICAgICAgIHRoaXMudnkgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMubW92ZW1lbnRTcGVlZDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudnggPj0gLTEwICYmIHRoaXMudnggPD0gMTApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmhvc3QuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy52eCA8IDApe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImxlZnRcIik7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmhvc3QuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwicmlnaHRcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50LmFuZ2xlID0gdGhpcy5hbmdsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50LnggKz0gdGhpcy52eCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC55ICs9IHRoaXMudnkgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHBvaW50eCA9IHRoaXMuY3VycmVudFRpbGUuaip0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnR5ID0gdGhpcy5jdXJyZW50VGlsZS5pKnRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgICAgIGxldCBkaXN0ID0gdGhpcy5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG9Qb2ludChwb2ludHgrdGhpcy5zaGlmdCwgcG9pbnR5K3RoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IDEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JNb3ZpbmdDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAxLjIsIDAuOSwgMC41LCAwLjcsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuOSwgMC43LCAxLjIsIDAuNSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVhcnRoUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuNSwgMS4yLCAwLjcsIDAuOSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlJlc2lzdENvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBmaXJlUmVzaXN0LCB3YXRlclJlc2lzdCwgYWlyUmVzaXN0LCBlYXJ0aFJlc2lzdCwgc2hhZG93UmVzaXN0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnJlc2lzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJmaXJlXCJdID0gZmlyZVJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJ3YXRlclwiXSA9IHdhdGVyUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImFpclwiXSA9IGFpclJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJlYXJ0aFwiXSA9IGVhcnRoUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcInNoYWRvd1wiXSA9IHNoYWRvd1Jlc2lzdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMSwgMSwgMSwgMSwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93UmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAwLjcsIDAuNSwgMC45LCAxLjIsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gW1xyXG4gICAgICAgICAgICBbMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgWzIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDEsIDMsIDIsIDIsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMiwgMiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMywgMywgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwLCAwLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gNDA7XHJcbiAgICAgICAgbWFpbkdhbWUudGlsZVNpemUgPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIG1haW5HYW1lLnRpbGVTaXplID0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLmhvc3QuZ2FtZS50aWxlU2l6ZSA9IDQwO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYWlyXCIsIDAuNSwgNDAsIDI3MCk7XHJcbiAgICAgICAgdGhpcy50aW1lckF1cmEgPSAwO1xyXG4gICAgICAgIHRoaXMuYXVyYVRpbWUgPSAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudGltZXJBdXJhICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyQXVyYSA+PSB0aGlzLmF1cmFUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lckF1cmEgLT0gdGhpcy5hdXJhVGltZTtcclxuICAgICAgICAgICAgbGV0IGFsbFRvd2VycyA9IG1haW5HYW1lLnN0YXRlLmdhbWVNZW51Qm90dG9tLmtpZHM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGFsbFRvd2Vycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgIT0gXCJhaXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFRvd2Vyc1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy5ob3N0LmJvZHlDb21wb25lbnQpIDwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb3dlcnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcInNwZWVkXCIsIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wMjtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpclRvd2VyQ29tcG9uZW50OyIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZWFydGhcIiwgMS41LCAxODAsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjA3O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFydGhUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZmlyZVwiLCAwLjgsIDEyMCwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAuMDM7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJlVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwic2hhZG93XCIsIDEsIDEyMCwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmF0dGFja1NwZWVkIC09IDAsNTtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRvd1Rvd2VyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBGaXJlVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBFYXJ0aFRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuXHJcbmNsYXNzIFRvd2VyQnVpbGRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGxldCBwID0gdGhpcy5ob3N0LmdhbWUucDtcclxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IocC5tb3VzZVkvdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKHAubW91c2VYL3RoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIGxldCB0b3dlciA9IG5ldyBFYXJ0aFRvd2VyKHRoaXMuaG9zdC5nYW1lLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENoaWxkKHRvd2VyKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3dlckJ1aWxkZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL0J1bGxldHMvQnVsbGV0XCI7XHJcblxyXG5jbGFzcyBUb3dlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGF0dGFja1R5cGUsIGF0dGFja1NwZWVkLCBhdHRhY2tEYW1hZ2UsIGF0dGFja1JhbmdlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tUeXBlID0gYXR0YWNrVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCA9IGF0dGFja1NwZWVkO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlID0gYXR0YWNrRGFtYWdlO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrUmFuZ2UgPSBhdHRhY2tSYW5nZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNMZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JzID0gbWFpbkdhbWUuc3RhdGUud2F2ZU1hc3Rlci5raWRzO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFja1RpbWVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvd2VyQ29zdCA9IDUwO1xyXG4gICAgICAgIHRoaXMudXBncmFkZVN0YXRzQ29zdCA9IDEwMDtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVBYmlsaXR5Q29zdCA9IDIwMDtcclxuICAgICAgICB0aGlzLnJlYWR5VG9GaXJlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlU3RhdHMoKXtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0xldmVsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkeVRvRmlyZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrVGltZXIgKz0gZGVsdGE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXR0YWNrVGltZXIgPj0gdGhpcy5hdHRhY2tTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyIC09IHRoaXMuYXR0YWNrU3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlUb0ZpcmUpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2JzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQpPHRoaXMuYXR0YWNrUmFuZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0U3Bhd24odGhpcy5tb2JzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5VG9GaXJlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsbGV0U3Bhd24obW9iKXtcclxuICAgICAgICBsZXQgYm9keSA9IHRoaXMuaG9zdC5ib2R5Q29tcG9uZW50O1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuaG9zdC5nYW1lLCBib2R5LngrYm9keS53LzIsIGJvZHkueStib2R5LmgvMiwgdGhpcy5ob3N0LCBtb2IsIHRoaXMubW9icyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZENoaWxkKGJ1bGxldCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdGVyVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBUb3dlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcIndhdGVyXCIsIDEuMiwgOTAsIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjA2O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTW9iIGZyb20gXCIuLi8uLi9PYmplY3RzL0dhbWUvTW9icy9Nb2JcIjtcclxuXHJcbmNsYXNzIFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgICAgICAgdGhpcy53YXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGMgPSBob3N0LmdhbWUuY29uc3RhbnRzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMCwgMTUsIDAuNik7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMCwgMTUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMCwgMTUsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfU0hBRE9XXzAsIDE1LCAwLjgpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8wLCAyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8xLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMSwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8xLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8xLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfU0hBRE9XXzEsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMiwgMTIsIDAuNik7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMiwgMTIsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfU0hBRE9XXzIsIDEyLCAwLjcpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8yLCAxMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMiwgMiwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMywgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzMsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzMsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9BSVJfMywgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1dBVEVSXzMsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzQsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfNCwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1dBVEVSXzQsIDEyLCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9BSVJfNCwgMTIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfNCwgMiwgMSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25pbmdTdGF0ZSA9IDA7IC8vMCAtIHdhaXQgfCAxIC0gc3Bhd25pbmdcclxuXHJcbiAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lVG9TdGFydFdhdmUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTW9iU3Bhd24gPSAwO1xyXG4gICAgICAgIHRoaXMudGltZVRvU3Bhd25Nb2IgPSAxLjI7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUgPSB0aGlzLmZpbmRSb3V0ZSh0aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQubWFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZVRvU3Bhd24gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRSb3V0ZShtYXApe1xyXG4gICAgICAgIGxldCBkdmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHtpOjAsIGo6MTcsIGQ6ZHZhbHVlfTtcclxuICAgICAgICBsZXQgZW5kID0ge2k6MTQsIGo6OH07XHJcbiAgICAgICAgbGV0IG1hcmtlZCA9IFtdO1xyXG4gICAgICAgIGxldCBwYXRoID0gW107XHJcbiAgICAgICAgbWFya2VkLnB1c2goc3RhcnQpO1xyXG4gICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKGR2YWx1ZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBcm91bmRNYXJrZWQoZCl7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5pID09IGVuZC5pICYmIG1hcmtlZFtpXS5qID09IGVuZC5qKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZClcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVjayBkOlwiK2QrXCIgbWQ6XCIrbWFya2VkW2ldLmQrXCIgbWk6XCIrbWFya2VkW2ldLmkrXCIgbWo6XCIrbWFya2VkW2ldLmopO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnb29kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtBcm91bmRUaWxlKG1hcmtlZFtpXSwgZCsxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrQXJvdW5kVGlsZSh0aWxlLCBuZXdkKXtcclxuICAgICAgICAgICAgbWFyayh0aWxlLmktMSwgdGlsZS5qLCBuZXdkKTtcclxuICAgICAgICAgICAgbWFyayh0aWxlLmkrMSwgdGlsZS5qLCBuZXdkKTtcclxuICAgICAgICAgICAgbWFyayh0aWxlLmksIHRpbGUuai0xLCBuZXdkKTtcclxuICAgICAgICAgICAgbWFyayh0aWxlLmksIHRpbGUuaisxLCBuZXdkKTtcclxuICAgICAgICAgICAgY2hlY2tBcm91bmRNYXJrZWQobmV3ZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1hcmsoaSwgaiwgbmV3ZCl7XHJcbiAgICAgICAgICAgIGlmIChtYXBbaV0gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXBbaV1bal0gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpaT0wOyBpaSA8IG1hcmtlZC5sZW5ndGg7IGlpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpaV0uaSA9PSBpICYmIG1hcmtlZFtpaV0uaiA9PSBqKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkLnB1c2goe2k6aSwgajpqLCBkOm5ld2R9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpK1wiIFwiK2orXCIgXCIrbmV3ZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobWFya2VkKTtcclxuICAgICAgICBsZXQgZG1heCA9IHBhdGhbMF0uZDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFya2VkW2ldLmQgPT0gZG1heC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2gobWFya2VkW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBkbWF4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChkbWF4ICE9IDApO1xyXG4gICAgICAgIHBhdGgucmV2ZXJzZSgpO1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZVdhdmUodHlwZSwgY291bnQsIHRpbWUpe1xyXG4gICAgICAgIGxldCBvID0ge307XHJcbiAgICAgICAgbGV0IGEgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy53YXZlcy5wdXNoKG8pO1xyXG4gICAgICAgIG8uYSA9IGE7XHJcbiAgICAgICAgby50aW1lID0gdGltZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb3VudDsgaSsrKVxyXG4gICAgICAgICAgICBhLnB1c2godHlwZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTW9iKCl7XHJcbiAgICAgICAgbGV0IE1vYkNsYXNzID0gdGhpcy5jdXJyZW50V2F2ZVRvU3Bhd24uc2hpZnQoKTtcclxuICAgICAgICAvL2xldCBtb2IgPSBuZXcgbW9iVHlwZSh0aGlzLmhvc3QuZ2FtZSwgeCwgeSwgcm8pXHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBsZXQgdGVzdCA9IG5ldyBNb2JDbGFzcyh0aGlzLmhvc3QuZ2FtZSwgMTcqc2l6ZSwgLXNpemUsIHNpemUsIHRoaXMucm91dGUpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZCh0ZXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAodGhpcy5zcGF3bmluZ1N0YXRlID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0Kz1kZWx0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJXYXZlU3RhcnQgPj0gdGhpcy50aW1lVG9TdGFydFdhdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduaW5nU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhdmVPYmplY3QgPSB0aGlzLndhdmVzW3RoaXMuY3VycmVudFdhdmVJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gd2F2ZU9iamVjdC5hO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IHdhdmVPYmplY3QudGltZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgaWYgKHRoaXMuc3Bhd25pbmdTdGF0ZSA9PSAxKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdhdmVUb1NwYXduLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lck1vYlNwYXduKz1kZWx0YTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyTW9iU3Bhd24gPj0gdGhpcy50aW1lVG9TcGF3bk1vYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lck1vYlNwYXduID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduTW9iKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ob3N0LmtpZHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudDsiLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgZ2V0RnJhbWVzKGltYWdlLCBzdGFydGksIHN0YXJ0aiwgc2l6ZSwgbGVuZ3RoKXtcclxuICAgICAgICBsZXQgZnJhbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgc3ViaW1hZ2UgPSBtYWluR2FtZS5wLmdpbWFnZXNbaW1hZ2VdLmdldChzdGFydGoqc2l6ZSwgc3RhcnRpKnNpemUsIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChzdWJpbWFnZSk7XHJcbiAgICAgICAgICAgIHN0YXJ0aisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnJhbWVzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBIUFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGhwID0gdGhpcy5ob3N0LmhwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5ub1N0cm9rZSgpO1xyXG4gICAgICAgICAgICBsZXQgbGlmZUJhcldpZHRoID0gdGhpcy5ob3N0LmhwICogdGhpcy5ib2R5Q29tcG9uZW50LncgLyB0aGlzLmhvc3QubWF4SHA7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuZmlsbCgwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCB0aGlzLmJvZHlDb21wb25lbnQudywgNyk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuZmlsbCgwLCAyNTUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCBsaWZlQmFyV2lkdGgsIDcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAubm9GaWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnktMTUsIHRoaXMuYm9keUNvbXBvbmVudC53LCA3KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQUmVuZGVyQ29tcG9uZW50OyIsImltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vQW5pbWF0aW9uVXRpbHNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vQW5pbWF0aW9uXCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlME1vdmVEb3duIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYkZpcmUwLnBuZ1wiLCA0LCAwLCA0MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTBNb3ZlRG93bjsiLCJpbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uL0FuaW1hdGlvblV0aWxzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uL0FuaW1hdGlvblwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTBNb3ZlTGVmdCBleHRlbmRzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9iRmlyZTAucG5nXCIsIDEsIDAsIDQwLCA0KSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlME1vdmVMZWZ0OyIsImltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vQW5pbWF0aW9uVXRpbHNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vQW5pbWF0aW9uXCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlME1vdmVSaWdodCBleHRlbmRzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9iRmlyZTAucG5nXCIsIDIsIDAsIDQwLCA0KSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlME1vdmVSaWdodDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgUmVuZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCwgaW1hZ2Upe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gYm9keUNvbXBvbmVudC53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBib2R5Q29tcG9uZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlKGltYWdlKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlID09IG51bGwpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIHRoaXMuYm9keUNvbXBvbmVudC5oKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLmltYWdlLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXBDb250YWluZXJDb21wb25lbnQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gdGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC5tYXA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gaG9zdC5nYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy9tYXAvVGlsZXNldC5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5ncmFzcyA9IHRoaXMudGV4dHVyZS5nZXQoMCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJvYWQgPSB0aGlzLnRleHR1cmUuZ2V0KDQwLCAwLCA0MCwgNDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5tYXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGogPCB0aGlzLm1hcFtpXS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuaG9zdC5nYW1lLnA7XHJcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLm1hcFtpXVtqXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwLmZpbGwoMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcC5yZWN0KGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLmdyYXNzLCBqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucmVjdChqKnRoaXMudGlsZVNpemUsIGkqdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnJvYWQsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaWxlbWFwUmVuZGVyQ29tcG9uZW50OyIsImltcG9ydCBNb2JGaXJlMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUwXCI7XHJcbmltcG9ydCBNb2JXYXRlcjAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIwXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgwXCI7XHJcbmltcG9ydCBNb2JBaXIwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cwXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMVwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMVwiO1xyXG5pbXBvcnQgTW9iRWFydGgxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMVwiO1xyXG5pbXBvcnQgTW9iQWlyMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMVwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MVwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTJcIjtcclxuaW1wb3J0IE1vYkVhcnRoMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDJcIjtcclxuaW1wb3J0IE1vYldhdGVyMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjJcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzJcIjtcclxuaW1wb3J0IE1vYkFpcjIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjJcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUzXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgzXCI7XHJcbmltcG9ydCBNb2JXYXRlcjMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIzXCI7XHJcbmltcG9ydCBNb2JTaGFkb3czIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3czXCI7XHJcbmltcG9ydCBNb2JBaXIzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlNFwiO1xyXG5pbXBvcnQgTW9iRWFydGg0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoNFwiO1xyXG5pbXBvcnQgTW9iV2F0ZXI0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyNFwiO1xyXG5pbXBvcnQgTW9iU2hhZG93NCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NFwiO1xyXG5pbXBvcnQgTW9iQWlyNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyNFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgTU9CX0ZJUkVfMDogTW9iRmlyZTAsXHJcbiAgICBNT0JfRUFSVEhfMDogTW9iRWFydGgwLCBcclxuICAgIE1PQl9XQVRFUl8wOiBNb2JXYXRlcjAsXHJcbiAgICBNT0JfU0hBRE9XXzA6IE1vYlNoYWRvdzAsXHJcbiAgICBNT0JfQUlSXzA6IE1vYkFpcjAsXHJcblxyXG4gICAgTU9CX0ZJUkVfMTogTW9iRmlyZTEsXHJcbiAgICBNT0JfRUFSVEhfMTogTW9iRWFydGgxLFxyXG4gICAgTU9CX1dBVEVSXzE6IE1vYldhdGVyMSxcclxuICAgIE1PQl9TSEFET1dfMTogTW9iU2hhZG93MSxcclxuICAgIE1PQl9BSVJfMTogTW9iQWlyMSxcclxuXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9FQVJUSF8yOiBNb2JFYXJ0aDIsXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1NIQURPV18yOiBNb2JTaGFkb3cyLFxyXG4gICAgTU9CX0FJUl8yOiBNb2JBaXIyLFxyXG5cclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0VBUlRIXzM6IE1vYkVhcnRoMyxcclxuICAgIE1PQl9XQVRFUl8zOiBNb2JXYXRlcjMsXHJcbiAgICBNT0JfU0hBRE9XXzM6IE1vYlNoYWRvdzMsXHJcbiAgICBNT0JfQUlSXzM6IE1vYkFpcjMsXHJcblxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX1dBVEVSXzQ6IE1vYldhdGVyNCxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNFxyXG5cclxuICAgIC8qXHJcbiAgICBNT0JfRklSRV8yOiBNb2JGaXJlMixcclxuICAgIE1PQl9GSVJFXzM6IE1vYkZpcmUzLFxyXG4gICAgTU9CX0ZJUkVfNDogTW9iRmlyZTQsXHJcbiAgICBNT0JfRklSRV81OiBNb2JGaXJlNSxcclxuICAgIE1PQl9GSVJFXzY6IE1vYkZpcmU2LFxyXG4gICAgTU9CX0ZJUkVfNzogTW9iRmlyZTcsXHJcbiAgICBNT0JfRklSRV84OiBNb2JGaXJlOCxcclxuICAgIE1PQl9GSVJFXzk6IE1vYkZpcmU5LFxyXG4gICAgTU9CX0VBUlRIXzI6IE1vYkVhcnRoMixcclxuICAgIE1PQl9FQVJUSF8zOiBNb2JFYXJ0aDMsXHJcbiAgICBNT0JfRUFSVEhfNDogTW9iRWFydGg0LFxyXG4gICAgTU9CX0VBUlRIXzU6IE1vYkVhcnRoNSxcclxuICAgIE1PQl9FQVJUSF82OiBNb2JFYXJ0aDYsXHJcbiAgICBNT0JfRUFSVEhfNzogTW9iRWFydGg3LFxyXG4gICAgTU9CX0VBUlRIXzg6IE1vYkVhcnRoOCxcclxuICAgIE1PQl9FQVJUSF85OiBNb2JFYXJ0aDksXHJcbiAgICBNT0JfV0FURVJfMjogTW9iV2F0ZXIyLFxyXG4gICAgTU9CX1dBVEVSXzM6IE1vYldhdGVyMyxcclxuICAgIE1PQl9XQVRFUl80OiBNb2JXYXRlcjQsXHJcbiAgICBNT0JfV0FURVJfNTogTW9iV2F0ZXI1LFxyXG4gICAgTU9CX1dBVEVSXzY6IE1vYldhdGVyNixcclxuICAgIE1PQl9XQVRFUl83OiBNb2JXYXRlcjcsXHJcbiAgICBNT0JfV0FURVJfODogTW9iV2F0ZXI4LFxyXG4gICAgTU9CX1dBVEVSXzk6IE1vYldhdGVyOSxcclxuICAgIE1PQl9TSEFET1dfMjogTW9iU2hhZG93MixcclxuICAgIE1PQl9TSEFET1dfMzogTW9iU2hhZG93MyxcclxuICAgIE1PQl9TSEFET1dfNDogTW9iU2hhZG93NCxcclxuICAgIE1PQl9TSEFET1dfNTogTW9iU2hhZG93NSxcclxuICAgIE1PQl9TSEFET1dfNjogTW9iU2hhZG93NixcclxuICAgIE1PQl9TSEFET1dfNzogTW9iU2hhZG93NyxcclxuICAgIE1PQl9TSEFET1dfODogTW9iU2hhZG93OCxcclxuICAgIE1PQl9TSEFET1dfOTogTW9iU2hhZG93OSxcclxuICAgIE1PQl9BSVJfMjogTW9iQWlyMixcclxuICAgIE1PQl9BSVJfMzogTW9iQWlyMyxcclxuICAgIE1PQl9BSVJfNDogTW9iQWlyNCxcclxuICAgIE1PQl9BSVJfNTogTW9iQWlyNSxcclxuICAgIE1PQl9BSVJfNjogTW9iQWlyNixcclxuICAgIE1PQl9BSVJfNzogTW9iQWlyNyxcclxuICAgIE1PQl9BSVJfODogTW9iQWlyOCxcclxuICAgIE1PQl9BSVJfOTogTW9iQWlyOSwqL1xyXG5cclxufTsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocCl7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnRzID0gQ29uc3RhbnRzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5lYXJJbnRlcnBvbGF0aW9uKGZ4MSwgZngyLCB4MSwgeCwgeDIpe1xyXG4gICAgICAgIGlmICh4MiA8IHgxKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4ID49IHgyKSByZXR1cm4gZngyO1xyXG4gICAgICAgIGlmICh4IDw9IHgxKSByZXR1cm4gZngxO1xyXG4gICAgICAgIHJldHVybiBmeDErKCBmeDIgLSBmeDEgKSooeCAtIHgxKS8oeDIgLSB4MSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRyYXdVcHBlcigxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEJ1bGxldENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9CdWxsZXRzL0J1bGxldENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdG93ZXIsIG1vYiwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb2I7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgMTAsIDEwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMudG93ZXIgPSB0b3dlcjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+IHtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueC01LCB0aGlzLmJvZHlDb21wb25lbnQueS01LCB0aGlzLmJvZHlDb21wb25lbnQudywgdGhpcy5ib2R5Q29tcG9uZW50LmgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0Q29tcG9uZW50ID0gbmV3IEJ1bGxldENvbXBvbmVudCh0aGlzLCB0aGlzLnRhcmdldCwgbW9icyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5idWxsZXRDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBaXJUb3dlciBmcm9tIFwiLi9Ub3dlcnMvQWlyVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXIgZnJvbSBcIi4vVG93ZXJzL0VhcnRoVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlciBmcm9tIFwiLi9Ub3dlcnMvRmlyZVRvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyIGZyb20gXCIuL1Rvd2Vycy9XYXRlclRvd2VyXCI7XHJcbmltcG9ydCBTaGFkb3dUb3dlciBmcm9tIFwiLi9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuXHJcbmNsYXNzIEdhbWVCb3R0b21NZW51IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLnRvd2VyQnV0dG9uc0JvZGllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IEJvZHlDb21wb25lbnQobnVsbCwgNTUgKyBpKnRpbGVTaXplICsgMjAqaSArIDE0KnRpbGVTaXplLCAxNip0aWxlU2l6ZSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbmRleGVzID0ge1xyXG4gICAgICAgICAgICAwOiBBaXJUb3dlcixcclxuICAgICAgICAgICAgMTogRWFydGhUb3dlcixcclxuICAgICAgICAgICAgMjogRmlyZVRvd2VyLFxyXG4gICAgICAgICAgICAzOiBXYXRlclRvd2VyLFxyXG4gICAgICAgICAgICA0OiBTaGFkb3dUb3dlclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJJID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJKID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpIHtcclxuICAgICAgICBzdXBlci5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAxKXtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmdhbWUucDtcclxuICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRleHR1cmUsIDAsIDE1KjQwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5maWxsKDAsIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmZpbGwoMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZmlsbCgxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS55LCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucmVjdCh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS53LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS5oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgcC50ZXh0KG1haW5HYW1lLm1vbmV5LnRvU3RyaW5nKCksIHAuZ2FtZVdpZHRoLzItMTQsIHAuZ2FtZUhlaWdodC0xMDAsIDEwMCwgMjUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpIHtcclxuICAgICAgICBzdXBlci5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2FtZS5wLm1vdXNlWDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBpZiAoeSA8IDE1KnRpbGVTaXplKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJySiA9IE1hdGguZmxvb3IoeC90aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyckkgPSBNYXRoLmZsb29yKHkvdGlsZVNpemUpO1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtpZHNbaV0uYm9keUNvbXBvbmVudC54ID09IHRoaXMuY3VyckoqdGlsZVNpemUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMua2lkc1tpXS5ib2R5Q29tcG9uZW50LnkgPT0gdGhpcy5jdXJySSp0aWxlU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdGhpcy5raWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDApIHsgLy9ub3RoaW5nXHJcblxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAxKXsgLy90b3dlcnNcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ubW91c2VIb3Zlcih4LCB5KSAmJiB0aGlzLnRyeUJ1eSg1MCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG93ZXIgPSBuZXcgdGhpcy50b3dlckluZGV4ZXNbaV0odGhpcywgdGhpcy5jdXJySip0aWxlU2l6ZSwgdGhpcy5jdXJySSp0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHRvd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRvd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDIpeyAvL3VwZ3JhZGVzLCBkZXN0cm95XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzWzBdLm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlCdXkodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0Nvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1sxXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHJ5QnV5KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUNvc3QpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCArPSB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCArPSAyMDAgKiBNYXRoLmZsb29yKE1hdGgucG93KDEuNSwgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1syXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0Lm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5tb25leSArPSAgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRyeUJ1eShwcmljZSl7XHJcbiAgICAgICAgaWYgKG1haW5HYW1lLm1vbmV5ID49IHByaWNlKXtcclxuICAgICAgICAgICAgbWFpbkdhbWUubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm90dG9tTWVudTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JBaXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTcwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxNTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNzAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDExMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTY7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE3MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgNzUwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjU7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iQWlyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE3MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgNDI1MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNzUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNzAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDI0MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXI0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBEeWluZ09iamVjdCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRpZVwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JGaXJlMC5wbmdcIiwgMywgMCwgNDAsIDQpLCAwLjEsXHJcbiAgICAgICAgICAgIGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkaWVcIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IDQqMC4xKzEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLngsIHRoaXMueSwgOTAqTWF0aC5QSS8xODApO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEeWluZ09iamVjdDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRWFydGgwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgMjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoMDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRWFydGgxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgNzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDEwMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMjUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDI3NTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDQ1MDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMTAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGg0OyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgTW9iRmlyZTBNb3ZlRG93biBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvTW9icy9Nb2JGaXJlMC9Nb2JGaXJlME1vdmVEb3duXCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYkZpcmUwTW92ZUxlZnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL01vYnMvTW9iRmlyZTAvTW9iRmlyZTBNb3ZlTGVmdFwiO1xyXG5pbXBvcnQgTW9iRmlyZTBNb3ZlUmlnaHQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL01vYnMvTW9iRmlyZTAvTW9iRmlyZTBNb3ZlUmlnaHRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUwIGV4dGVuZHMgTW9iIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDEwMCk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBNb2JGaXJlME1vdmVEb3duKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJsZWZ0XCIsIG5ldyBNb2JGaXJlME1vdmVMZWZ0KCkpO1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJyaWdodFwiLCBuZXcgTW9iRmlyZTBNb3ZlUmlnaHQoKSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC01LCB0aGlzLmJvZHlDb21wb25lbnQueSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTA7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDE2MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkZpcmUxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUzIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzUwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNjAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmU0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlNDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBNb2JNb3ZpbmdDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvTW9iTW92aW5nQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSFBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0hQUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEeWluZ09iamVjdCBmcm9tIFwiLi9EeWluZ09iamVjdFwiO1xyXG5cclxuY2xhc3MgTW9iIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgc2l6ZSwgdGlsZVNpemUsIHJvdXRlLCB0dXJuVGltZSwgcmVzaXN0LCBocCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLm1heEhwID0gaHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IGhwO1xyXG4gICAgICAgIHRoaXMucmVzaXN0ID0gcmVzaXN0O1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBzaXplLCBzaXplKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIC8vdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCA9IG5ldyBNb2JNb3ZpbmdDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCByb3V0ZSwgdGlsZVNpemUsIHR1cm5UaW1lKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHBSZW5kZXJDb21wb25lbnQgPSBuZXcgSFBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmhwUmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBpZih0aGlzLmhwID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5ICs9IHRoaXMuYm91bnR5O1xyXG4gICAgICAgICAgICBsZXQgZHlpbmdPYmplY3QgPSBuZXcgRHlpbmdPYmplY3QodGhpcy5nYW1lLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuYWRkR2FtZU9iamVjdChkeWluZ09iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVEYW1hZ2UodG93ZXIsIGNvZWYpe1xyXG4gICAgICAgIGxldCBwdXJlRGFtYWdlID0gdG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrRGFtYWdlKmNvZWY7XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IHB1cmVEYW1hZ2UgKiB0aGlzLnJlc2lzdC5yZXNpc3RzW3Rvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGVdO1xyXG4gICAgICAgIGlmKHRoaXMuaHAgPCBkYW1hZ2Upe1xyXG4gICAgICAgICAgICB0aGlzLmhwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhwIC09IGRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3cwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCA0MDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MDsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3cxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCA2MzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDIwMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3cyIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCA5MDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEwMDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3czIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTUwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCAyMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAzMDA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93NCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE1MCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgMjIwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzQ7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIwOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjEgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIxOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgNjAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA3NTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIyOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDYwMDA7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXI0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTIwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDIzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9UaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUaWxlbWFwIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50ID0gbmV3IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgVGlsZW1hcFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVtYXA7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBBaXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclRvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgQWlyVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBhbGxUb3dlcnMgPSBtYWluR2FtZS5zdGF0ZS5nYW1lTWVudUJvdHRvbS5raWRzO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGFsbFRvd2Vycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0udG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSAhPSBcImFpclwiKXtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxUb3dlcnNbaV0uYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMuYm9keUNvbXBvbmVudCkgPCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVG93ZXJzW2ldLmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYoXCJzcGVlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBaXJUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEVhcnRoVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0VhcnRoVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBFYXJ0aFRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgRWFydGhUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IEZpcmVUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRmlyZVRvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBGaXJlVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlcjsiLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9TaGFkb3dUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU2hhZG93VG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBTaGFkb3dUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93VG93ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gbmV3IEJvZHlDb21wb25lbnQodGhpcywgeCwgeSwgbWFpbkdhbWUudGlsZVNpemUsIG1haW5HYW1lLnRpbGVTaXplKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZmlsbCg1MCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAudGV4dCh0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsK1wiIFwiK3RoaXMudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCAsdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCA0MCwgNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3dlcjsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgVG93ZXJCdWlsZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9Ub3dlckJ1aWxkZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFRvd2VyQnVpbGRlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCdWlsZGVyQ29tcG9uZW50ID0gbmV3IFRvd2VyQnVpbGRlckNvbXBvbmVudCh0aGlzLCB0aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQnVpbGRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJCdWlsZGVyOyIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgV2F0ZXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvV2F0ZXJUb3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IFdhdGVyVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyVG93ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFdhdmVNYXN0ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLndhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCA9IG5ldyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQodGhpcywgdGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy53YXZlTWFzdGVyTG9naWNDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F2ZU1hc3RlcjsiLCJpbXBvcnQgQnVmZnNDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5raWRzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vYnVmZnNcclxuICAgICAgICB0aGlzLmJ1ZmZzQ29tcG9uZW50ID0gbmV3IEJ1ZmZzQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMgPSB7fTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVjdCh4LCB5LCB3LCBoLCBjb2xvcil7XHJcbiAgICAgICAgbGV0IHAgPSBtYWluR2FtZS5wO1xyXG4gICAgICAgIGxldCBoYWxmV2lkdGggPSB3KjAuNTtcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IGgqMC41O1xyXG4gICAgICAgIHAudHJhbnNsYXRlKHgraGFsZldpZHRoLCB5K2hhbGZIZWlnaHQpO1xyXG4gICAgICAgIHAuc3Ryb2tlKDApO1xyXG4gICAgICAgIHAuZmlsbChjb2xvcik7XHJcbiAgICAgICAgcC5yZWN0KC1oYWxmV2lkdGgsIC1oYWxmSGVpZ2h0LCB3LCBoKTtcclxuICAgICAgICBwLnJlc2V0TWF0cml4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShpbWFnZSwgeCwgeSwgYW5nbGUpe1xyXG4gICAgICAgIGxldCBwID0gbWFpbkdhbWUucDtcclxuICAgICAgICBsZXQgaGFsZldpZHRoID0gaW1hZ2Uud2lkdGgqMC41O1xyXG4gICAgICAgIGxldCBoYWxmSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0KjAuNTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSh4K2hhbGZXaWR0aCwgeStoYWxmSGVpZ2h0KTtcclxuICAgICAgICBwLnJvdGF0ZSgoLTkwICogcC5QSSAvIDE4MCkrYW5nbGUpO1xyXG4gICAgICAgIHAuaW1hZ2UoaW1hZ2UsIC1pbWFnZS53aWR0aCowLjUsIC1pbWFnZS5oZWlnaHQqMC41KTtcclxuICAgICAgICBwLnJlc2V0TWF0cml4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0uZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRDb21wb25lbnQoYyl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGMpe1xyXG4gICAgICAgIHRoaXMua2lkcy5wdXNoKGMpO1xyXG4gICAgICAgIGMucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVBhcmVudCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zdGF0ZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb21wb25lbnQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGMpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMua2lkcy5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgb25BY3Rpb24pe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHggLT0gMTY3LzI7XHJcbiAgICAgICAgeSAtPSA3My8yO1xyXG4gICAgICAgIHRoaXMub25BY3Rpb24gPSBvbkFjdGlvbjtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmJvZHlDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSW1hZ2UgPSBnYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy91aS9idXR0b25zX21lbnUucG5nXCJdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uSW1hZ2VfaWRsZSA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCA3MywgMTY3LCA3Myk7XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9ob3ZlciA9IGdhbWUucC5jcm9wKGJ1dHRvbkltYWdlLCAwLCAwLCAxNjcsIDczKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgdGhpcy5idXR0b25JbWFnZV9pZGxlKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC51cGRhdGUgPSAoZGVsdGEpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaG92ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaWRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5tb3VzZVByZXNzZWQgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoKSlcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcbiBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBUaWxlbWFwIGZyb20gXCIuLi9PYmplY3RzL0dhbWUvVGlsZW1hcFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1dhdmVNYXN0ZXJcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9PYmplY3RzL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRvd2VyQnVpbGRlciBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9Ub3dlckJ1aWxkZXJcIjtcclxuaW1wb3J0IEdhbWVCb3R0b21NZW51IGZyb20gXCIuLi9PYmplY3RzL0dhbWUvR2FtZUJvdHRvbU1lbnVcIjtcclxuXHJcbmNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBnYW1lLm1vbmV5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IG5ldyBUaWxlbWFwKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdCh0aGlzLnRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlciA9IG5ldyBXYXZlTWFzdGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMud2F2ZU1hc3Rlcik7XHJcbiAgICAgICAgLy8gdGhpcy50b3dlckJ1aWxkZXIgPSBuZXcgVG93ZXJCdWlsZGVyKGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMudG93ZXJCdWlsZGVyKTtcclxuICAgICAgICB0aGlzLmdhbWVNZW51Qm90dG9tID0gbmV3IEdhbWVCb3R0b21NZW51KGdhbWUsIHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMuZ2FtZU1lbnVCb3R0b20pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhdGU7IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL09iamVjdHMvTWVudS9CdXR0b25cIjtcclxuXHJcbmNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBsZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oZ2FtZSwgZ2FtZS5wLmdhbWVXaWR0aC8yLCBnYW1lLnAuZ2FtZUhlaWdodC8yLTEwMCwgKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KGJ1dHRvbjEpO1xyXG4gICAgICAgIGxldCBidXR0b24yID0gbmV3IEJ1dHRvbihnYW1lLCBnYW1lLnAuZ2FtZVdpZHRoLzIsIGdhbWUucC5nYW1lSGVpZ2h0LzIrMTAwLCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE9wdGlvbnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QoYnV0dG9uMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdGFydGVkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydE9wdGlvbnMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbnMgc3RhcnRcIik7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZW51U3RhdGU7IiwiY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRHYW1lT2JqZWN0KG8pe1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR2FtZU9iamVjdChvKXtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdhbWVPYmplY3RzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5tb3VzZURyYWdnZWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXcoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=