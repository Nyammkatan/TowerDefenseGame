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
/* harmony import */ var _States_EndState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../States/EndState */ "./src/scripts/States/EndState.js");



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
            mainGame.lifes--;
            if (mainGame.lifes == 0){
                mainGame.setState(new _States_EndState__WEBPACK_IMPORTED_MODULE_1__["default"](mainGame, false));
            }
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
            try {
                let allTowers = mainGame.state.gameMenuBottom.kids;
                for (let i = 0; i < allTowers.length; i++) {
                    if (allTowers[i].towerComponent.attackType != "air") {
                        if (allTowers[i].bodyComponent.distanceTo(this.host.bodyComponent) < 100)
                            allTowers[i].buffsComponent.tryBuff("speed", this.upgradeAbilityLevel);
                    }
                }
            } catch (e) {
                console.log("found and fixed error");
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
/* harmony import */ var _States_EndState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../States/EndState */ "./src/scripts/States/EndState.js");




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
                try {
                    this.currentWaveToSpawn = waveObject.a;
                    this.timeToSpawnMob = waveObject.time;
                } catch (e) {
                    mainGame.setState(new _States_EndState__WEBPACK_IMPORTED_MODULE_2__["default"](mainGame, true));
                }
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

/***/ "./src/scripts/States/EndState.js":
/*!****************************************!*\
  !*** ./src/scripts/States/EndState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/scripts/States/State.js");
/* harmony import */ var _MenuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuState */ "./src/scripts/States/MenuState.js");



class EndState extends _State__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, victory){
        super(game);
        this.victory = victory;
        this.timer = 0;

    }

    update(delta) {
        super.update(delta);
        this.timer += delta;
        if (this.timer >= 4){
            mainGame.setState(new _MenuState__WEBPACK_IMPORTED_MODULE_1__["default"](mainGame));

        }

    }

    draw() {
        super.draw();
        mainGame.p.fill(255, 255, 0);
        if (this.victory){
            mainGame.p.text("VICTORY", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);
        } else {
            mainGame.p.text("DEFEAT", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-48);
        }

    }

}
/* harmony default export */ __webpack_exports__["default"] = (EndState);


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
        game.money = 100;
        game.lifes = 10;
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

    draw() {
        super.draw();
        mainGame.p.fill(255, 255, 0);
        mainGame.p.text("Lives: "+mainGame.lifes, 15, 25);

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
        this.button1 = new _Objects_Menu_Button__WEBPACK_IMPORTED_MODULE_1__["default"](game, game.p.gameWidth/2, game.p.gameHeight/2-30, ()=> {
            this.startGame();
        });
        this.addGameObject(this.button1);

    }

    startGame(){
        mainGame.setState(new _GameState__WEBPACK_IMPORTED_MODULE_2__["default"](mainGame));

    }

    draw() {
        super.draw();
        mainGame.p.image(mainGame.p.gimages["assets/MenuPoster.jpg"], 0, 0);
        this.button1.renderComponent.draw();
        mainGame.p.fill(255, 255, 0)
        mainGame.p.text("Start", mainGame.p.gameWidth/2-13, mainGame.p.gameHeight/2-28);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL0dhbWVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQXR0YWNrU3BlZWRCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0J1ZmZzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVmZnMvQnVmZnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdXJuaW5nQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL0N1cnNlQnVmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL0J1ZmZzL1Nsb3dCdWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvTW9iUmVzaXN0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1RpbGVtYXBDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9GaXJlVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvU2hhZG93VG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvVG93ZXJCdWlsZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1dhdGVyVG93ZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9sb2dpYy9XYXZlTWFzdGVyTG9naWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvQnVsbGV0cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL0dhbWVCb3R0b21NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0R5aW5nT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmU0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL01vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXI0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9QYXJ0aWNsZUVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9BaXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL0VhcnRoVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9GaXJlVG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9HYW1lL1Rvd2Vycy9TaGFkb3dUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvVG93ZXJzL1Rvd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWUvV2F2ZU1hc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9NZW51L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvRW5kU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU3RhdGVzL0dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9TdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ2lCO0FBQ0E7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixxREFBSTtBQUN2QjtBQUNBLDBCQUEwQixpRUFBUzs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDcEN4QjtBQUFBO0FBQTRDOztBQUU1QywyQ0FBMkMsc0RBQWE7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsMkZBQTRCLEU7Ozs7Ozs7Ozs7OztBQ2hDM0M7QUFBQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ2UsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDaEM1QjtBQUFBO0FBQTZDOztBQUU3Qyw0QkFBNEIsc0RBQWE7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3JGN0I7QUFBQTtBQUEyQzs7QUFFM0MsOEJBQThCLHNEQUFhO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFZSw4RUFBZSxFOzs7Ozs7Ozs7Ozs7QUNsQjlCO0FBQUE7QUFBZ0Q7O0FBRWhELDRCQUE0QixzREFBYTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDZSw0RUFBYSxFOzs7Ozs7Ozs7Ozs7QUN4QjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDSjtBQUNZO0FBQ2Q7O0FBRW5CO0FBQ2YsWUFBWSxvREFBVztBQUN2QixhQUFhLGtEQUFTO0FBQ3RCLGFBQWEsd0RBQWU7QUFDNUIsWUFBWSxpREFBUTs7QUFFcEIsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNYRDtBQUFBO0FBQUE7QUFBZ0Q7QUFDcEI7O0FBRTVCLDZCQUE2QixzREFBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFLOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUM1QzdCO0FBQUE7QUFBNEM7O0FBRTVDLDBCQUEwQixzREFBYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNqQzFCO0FBQUE7QUFBNEM7O0FBRTVDLHdCQUF3QixzREFBYTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUNqQ3hCO0FBQUE7QUFBNEM7O0FBRTVDLHVCQUF1QixzREFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDM0J2QjtBQUFBO0FBQWdEOztBQUVoRCw4QkFBOEIsc0RBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDhFQUFlLEU7Ozs7Ozs7Ozs7OztBQ2hEOUI7QUFBQTtBQUFBO0FBQTZDO0FBQ0E7O0FBRTdDLGlDQUFpQyxzREFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3REFBUTtBQUM5QztBQUNBLFM7O0FBRUE7O0FBRUE7QUFDZSxpRkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZFbEM7QUFBQTtBQUFzRDs7QUFFdEQsaUNBQWlDLDJEQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDUmpDO0FBQUE7QUFBc0Q7O0FBRXRELG1DQUFtQywyREFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ1JuQztBQUFBO0FBQXNEOztBQUV0RCxrQ0FBa0MsMkRBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNSbEM7QUFBQTtBQUFnRDs7QUFFaEQsaUNBQWlDLHNEQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNkakM7QUFBQTtBQUFzRDs7QUFFdEQsb0NBQW9DLDJEQUFrQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDUnBDO0FBQUE7QUFBc0Q7O0FBRXRELG1DQUFtQywyREFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ1JuQztBQUFBO0FBQTZDOztBQUU3Qyx3Q0FBd0Msc0RBQWE7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDL0J4QztBQUFBO0FBQThDOztBQUU5QyxnQ0FBZ0MsdURBQWM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFZSxnRkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNDakM7QUFBQTtBQUE4Qzs7QUFFOUMsa0NBQWtDLHVEQUFjO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ3BCbEM7QUFBQTtBQUE4Qzs7QUFFOUMsaUNBQWlDLHVEQUFjO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ3BCakM7QUFBQTtBQUE4Qzs7QUFFOUMsbUNBQW1DLHVEQUFjO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ3BCbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ2U7QUFDSTtBQUNGO0FBQ0E7O0FBRWpFLG9DQUFvQyxzREFBYTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQVU7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQzFCcEM7QUFBQTtBQUFBO0FBQWdEO0FBQ1U7O0FBRTFELDZCQUE2QixzREFBYTs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsb0VBQU07QUFDL0I7O0FBRUE7O0FBRUE7QUFDZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUNuRTdCO0FBQUE7QUFBOEM7O0FBRTlDLGtDQUFrQyx1REFBYztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNwQmxDO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ0M7QUFDRDs7QUFFN0MsdUNBQXVDLHNEQUFhOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLCtCQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwwQ0FBMEMsd0RBQVE7QUFDbEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx1RkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdLeEM7QUFBZTs7QUFFZjtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBNkM7O0FBRTdDLGdDQUFnQyxzREFBYTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVlLGdGQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0JqQztBQUFBO0FBQTZDOztBQUU3Qyw4QkFBOEIsc0RBQWE7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNlLDhFQUFlLEU7Ozs7Ozs7Ozs7OztBQ3ZDOUI7QUFBQTtBQUFnRDs7QUFFaEQscUNBQXFDLHNEQUFhOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3Qyw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UscUZBQXNCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1Q3RDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDRztBQUNBO0FBQ047QUFDUzs7QUFFTjtBQUNHO0FBQ0E7QUFDTjtBQUNTOztBQUVOO0FBQ0c7QUFDQTtBQUNHO0FBQ1Q7O0FBRUc7QUFDRztBQUNBO0FBQ0c7QUFDVDs7QUFFRztBQUNHO0FBQ0E7QUFDRztBQUNUOztBQUV2QztBQUNmLGdCQUFnQix3RUFBUTtBQUN4QixpQkFBaUIsMEVBQVM7QUFDMUIsaUJBQWlCLDBFQUFTO0FBQzFCLGtCQUFrQiw0RUFBVTtBQUM1QixlQUFlLHNFQUFPOztBQUV0QixnQkFBZ0Isd0VBQVE7QUFDeEIsaUJBQWlCLDBFQUFTO0FBQzFCLGlCQUFpQiwwRUFBUztBQUMxQixrQkFBa0IsNEVBQVU7QUFDNUIsZUFBZSxzRUFBTzs7QUFFdEIsZ0JBQWdCLHlFQUFRO0FBQ3hCLGlCQUFpQiwyRUFBUztBQUMxQixpQkFBaUIsMkVBQVM7QUFDMUIsa0JBQWtCLDZFQUFVO0FBQzVCLGVBQWUsdUVBQU87O0FBRXRCLGdCQUFnQix5RUFBUTtBQUN4QixpQkFBaUIsMkVBQVM7QUFDMUIsaUJBQWlCLDJFQUFTO0FBQzFCLGtCQUFrQiw2RUFBVTtBQUM1QixlQUFlLHVFQUFPOztBQUV0QixnQkFBZ0IseUVBQVE7QUFDeEIsaUJBQWlCLDJFQUFTO0FBQzFCLGlCQUFpQiwyRUFBUztBQUMxQixrQkFBa0IsNkVBQVU7QUFDNUIsZUFBZSx1RUFBTzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3ZHRDtBQUFBO0FBQW9DOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFTOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0RwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQzBCO0FBQ0s7QUFDTztBQUNZO0FBQ3RDO0FBQ2lCOztBQUV2RSxxQkFBcUIsbURBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RUFBYTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDREQUE0RCw2REFBUztBQUNyRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQywwRUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLGlGQUFlO0FBQ2xEOztBQUVBOztBQUVBOztBQUVlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoRXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDMEI7QUFDeEI7QUFDSTtBQUNGO0FBQ0U7QUFDRTs7QUFFL0MsNkJBQTZCLG1EQUFVOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLDJCQUEyQix1RUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QiwyQkFBMkIsdUVBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBUTtBQUN2QixlQUFlLDBEQUFVO0FBQ3pCLGVBQWUseURBQVM7QUFDeEIsZUFBZSwwREFBVTtBQUN6QixlQUFlLDJEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkNBQTZDOztBQUU3QyxhQUFhO0FBQ2IsNENBQTRDO0FBQzVDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVlLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3TzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUMrRDtBQUNPO0FBQ3RDO0FBQ2lCOztBQUUxRSxzQkFBc0IsNENBQUc7QUFDekI7QUFDQSx3REFBd0QsbUZBQWtCO0FBQzFFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQytEO0FBQ087QUFDdEM7QUFDaUI7O0FBRTFFLHNCQUFzQiw0Q0FBRztBQUN6QjtBQUNBLHdEQUF3RCxtRkFBa0I7QUFDMUU7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUMzQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUMrRDtBQUNPO0FBQ3RDO0FBQ2lCOztBQUUxRSxzQkFBc0IsNENBQUc7QUFDekI7QUFDQSx3REFBd0QsbUZBQWtCO0FBQzFFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDM0J0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDK0Q7QUFDTztBQUN0QztBQUNpQjs7QUFFMUUsc0JBQXNCLDRDQUFHO0FBQ3pCO0FBQ0Esd0RBQXdELG1GQUFrQjtBQUMxRTtBQUNBO0FBQ0EsdUNBQXVDLGdGQUE0QjtBQUNuRSwwREFBMEQsNkRBQVM7QUFDbkUsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQzNCdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQytEO0FBQ087QUFDdEM7QUFDaUI7O0FBRTFFLHNCQUFzQiw0Q0FBRztBQUN6QjtBQUNBLHdEQUF3RCxtRkFBa0I7QUFDMUU7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDMUJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDa0Q7QUFDdEM7QUFDaUI7QUFDSDs7QUFFcEUsMEJBQTBCLG1EQUFVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUseURBQXlELDZEQUFTO0FBQ2xFLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNwQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNtRTtBQUNHO0FBQ3RDO0FBQ2lCOztBQUUxRSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQSx1REFBdUQscUZBQW9CO0FBQzNFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ21FO0FBQ0c7QUFDdEM7QUFDaUI7O0FBRTFFLHdCQUF3Qiw0Q0FBRztBQUMzQjtBQUNBLHVEQUF1RCxxRkFBb0I7QUFDM0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUMzQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNtRTtBQUNHO0FBQ3RDO0FBQ2lCOztBQUUxRSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQSx1REFBdUQscUZBQW9CO0FBQzNFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ21FO0FBQ0c7QUFDdEM7QUFDaUI7O0FBRTFFLHdCQUF3Qiw0Q0FBRztBQUMzQjtBQUNBLHVEQUF1RCxxRkFBb0I7QUFDM0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUMzQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNtRTtBQUNHO0FBQ3RDO0FBQ2lCOztBQUUxRSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQSx1REFBdUQscUZBQW9CO0FBQzNFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDM0J4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDaUU7QUFDSztBQUN0QztBQUNpQjs7QUFFMUUsdUJBQXVCLDRDQUFHOztBQUUxQjtBQUNBLHdEQUF3RCxvRkFBbUI7QUFDM0U7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ2lFO0FBQ0s7QUFDdEM7QUFDaUI7O0FBRTFFLHVCQUF1Qiw0Q0FBRztBQUMxQjtBQUNBLHdEQUF3RCxvRkFBbUI7QUFDM0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ2lFO0FBQ0s7QUFDdEM7QUFDaUI7O0FBRTFFLHVCQUF1Qiw0Q0FBRztBQUMxQjtBQUNBLHdEQUF3RCxvRkFBbUI7QUFDM0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ2lFO0FBQ0s7QUFDdEM7QUFDaUI7O0FBRTFFLHVCQUF1Qiw0Q0FBRztBQUMxQjtBQUNBLHdEQUF3RCxvRkFBbUI7QUFDM0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ2lFO0FBQ0s7QUFDdEM7QUFDaUI7O0FBRTFFLHVCQUF1Qiw0Q0FBRztBQUMxQjtBQUNBLHdEQUF3RCxvRkFBbUI7QUFDM0U7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDMEI7QUFDVTtBQUNMO0FBQ0k7QUFDckM7QUFDUztBQUNzQztBQUNFO0FBQ0U7QUFDTjtBQUNJOztBQUV6RixrQkFBa0IsbURBQVU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyx1RUFBYTtBQUM5Qzs7QUFFQSxtQ0FBbUMsMEVBQWU7QUFDbEQ7O0FBRUEsc0NBQXNDLDRFQUFrQjtBQUN4RDs7QUFFQSxxQ0FBcUMsNEVBQWlCO0FBQ3REOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLHVDQUF1QyxvRkFBbUI7QUFDMUQ7QUFDQSxhQUFhO0FBQ2IsdUNBQXVDLHFGQUFvQjtBQUMzRDtBQUNBLGFBQWE7QUFDYix1Q0FBdUMsc0ZBQXFCO0FBQzVEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUNBQXVDLG9GQUFrQjtBQUN6RDtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVDQUF1QyxzRkFBb0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGtFQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Rm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNxRTtBQUNDO0FBQ3RDO0FBQ2lCOztBQUUxRSx5QkFBeUIsNENBQUc7QUFDNUI7QUFDQSx3REFBd0Qsc0ZBQXFCO0FBQzdFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ3FFO0FBQ0M7QUFDdEM7QUFDaUI7O0FBRTFFLHlCQUF5Qiw0Q0FBRztBQUM1QjtBQUNBLHdEQUF3RCxzRkFBcUI7QUFDN0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0IxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDcUU7QUFDQztBQUN0QztBQUNpQjs7QUFFMUUseUJBQXlCLDRDQUFHO0FBQzVCO0FBQ0Esd0RBQXdELHNGQUFxQjtBQUM3RTtBQUNBO0FBQ0EsdUNBQXVDLGdGQUE0QjtBQUNuRSwwREFBMEQsNkRBQVM7QUFDbkUsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQzNCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ3FFO0FBQ0M7QUFDdEM7QUFDaUI7O0FBRTFFLHlCQUF5Qiw0Q0FBRztBQUM1QjtBQUNBLHdEQUF3RCxzRkFBcUI7QUFDN0U7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUMzQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNxRTtBQUNDO0FBQ3RDO0FBQ2lCOztBQUUxRSx5QkFBeUIsNENBQUc7QUFDNUI7QUFDQSx3REFBd0Qsc0ZBQXFCO0FBQzdFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDM0J6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDbUU7QUFDRztBQUN0QztBQUNpQjs7QUFFMUUsd0JBQXdCLDRDQUFHO0FBQzNCO0FBQ0Esd0RBQXdELHFGQUFvQjtBQUM1RTtBQUNBO0FBQ0EsdUNBQXVDLGdGQUE0QjtBQUNuRSwwREFBMEQsNkRBQVM7QUFDbkUsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNtRTtBQUNHO0FBQ3RDO0FBQ2lCOztBQUUxRSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQSx3REFBd0QscUZBQW9CO0FBQzVFO0FBQ0E7QUFDQSx1Q0FBdUMsZ0ZBQTRCO0FBQ25FLDBEQUEwRCw2REFBUztBQUNuRSxZQUFZLHlFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDM0J4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDbUU7QUFDRztBQUN0QztBQUNpQjs7QUFFMUUsd0JBQXdCLDRDQUFHO0FBQzNCO0FBQ0Esd0RBQXdELHFGQUFvQjtBQUM1RTtBQUNBO0FBQ0EsdUNBQXVDLGdGQUE0QjtBQUNuRSwwREFBMEQsNkRBQVM7QUFDbkUsWUFBWSx5RUFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQzNCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ21FO0FBQ0c7QUFDdEM7QUFDaUI7O0FBRTFFLHdCQUF3Qiw0Q0FBRztBQUMzQjtBQUNBLHdEQUF3RCxxRkFBb0I7QUFDNUU7QUFDQTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0J6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDbUU7QUFDRztBQUN0QztBQUNpQjs7QUFFMUUsd0JBQXdCLDRDQUFHO0FBQzNCO0FBQ0Esd0RBQXdELHFGQUFvQjtBQUM1RTtBQUNBLHVDQUF1QyxnRkFBNEI7QUFDbkUsMERBQTBELDZEQUFTO0FBQ25FLFlBQVkseUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUMxQnhCO0FBQUE7QUFBdUM7O0FBRXZDLDhCQUE4QixtREFBVTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDMUU5QjtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNxRDtBQUNIOztBQUV6RixzQkFBc0IsbURBQVU7O0FBRWhDO0FBQ0E7QUFDQSw2Q0FBNkMsbUZBQXlCO0FBQ3RFLG1DQUFtQyx5RkFBc0I7QUFDekQ7O0FBRUE7O0FBRUE7QUFDZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUNmdEI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDdUQ7QUFDVjs7QUFFekUsdUJBQXVCLDhDQUFLOztBQUU1QjtBQUNBO0FBQ0Esa0NBQWtDLGtGQUFpQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDBFQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pDeEI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDMkQ7QUFDZDs7QUFFekUseUJBQXlCLDhDQUFLOztBQUU5QjtBQUNBO0FBQ0Esa0NBQWtDLG9GQUFtQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDBFQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNnQix5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdEIzQjtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUN5RDtBQUNaOztBQUV6RSx3QkFBd0IsOENBQUs7O0FBRTdCO0FBQ0E7QUFDQSxrQ0FBa0MsbUZBQWtCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsMEVBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RCekI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDNkQ7QUFDaEI7O0FBRXpFLDBCQUEwQiw4Q0FBSzs7QUFFL0I7QUFDQTtBQUNBLGtDQUFrQyxxRkFBb0I7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywwRUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdEIzQjtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUMwQjtBQUNLOztBQUV6RSxvQkFBb0IsbURBQVU7O0FBRTlCO0FBQ0E7O0FBRUEsaUNBQWlDLHVFQUFhO0FBQzlDOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNlLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQnJCO0FBQUE7QUFBQTtBQUEwQztBQUNpRDs7QUFFM0YsMkJBQTJCLG1EQUFVOztBQUVyQztBQUNBO0FBQ0EseUNBQXlDLHNGQUFxQjtBQUM5RDs7QUFFQTs7QUFFQTs7QUFFZSwyRUFBWSxFOzs7Ozs7Ozs7Ozs7QUNkM0I7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDMkQ7QUFDZDs7QUFFekUseUJBQXlCLDhDQUFLOztBQUU5QjtBQUNBO0FBQ0Esa0NBQWtDLG9GQUFtQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDBFQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0QjFCO0FBQUE7QUFBQTtBQUF1QztBQUNnRDs7QUFFdkYseUJBQXlCLG1EQUFVOztBQUVuQztBQUNBO0FBQ0EsNENBQTRDLGtGQUF3QjtBQUNwRTs7QUFFQTs7QUFFQTtBQUNlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ2J6QjtBQUFBO0FBQXNFOztBQUV0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDhFQUFjO0FBQ2hEOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUN6SXpCO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQzBCO0FBQ0s7O0FBRXRFLHFCQUFxQixtREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RUFBYTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLDBFQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ25DdEI7QUFBQTtBQUFBO0FBQTRCO0FBQ1E7O0FBRXBDLHVCQUF1Qiw4Q0FBSzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVM7O0FBRTNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNrQjtBQUNNO0FBQ1Q7QUFDSTtBQUNnQjtBQUNIO0FBQ3hCOztBQUVwQyx3QkFBd0IsOENBQUs7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFPO0FBQ2xDO0FBQ0EsOEJBQThCLGdFQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBYztBQUNoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzlDekI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDZ0I7QUFDUjs7QUFFcEMsd0JBQXdCLDhDQUFLOztBQUU3QjtBQUNBO0FBQ0EsMkJBQTJCLDREQUFNO0FBQ2pDO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLGtEQUFTOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJ6QjtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDZSxvRUFBSyxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvR2FtZVwiO1xyXG5pbXBvcnQgTWVudVN0YXRlIGZyb20gXCIuL3NjcmlwdHMvU3RhdGVzL01lbnVTdGF0ZVwiO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL3NjcmlwdHMvU3RhdGVzL0dhbWVTdGF0ZVwiO1xyXG5cclxubGV0IGdhbWU7XHJcblxyXG5jb25zdCBzID0gKHApID0+IHtcclxuXHJcbiAgICBsZXQgbGFzdFRpbWU7XHJcbiAgICBsZXQgY3VyclRpbWU7XHJcblxyXG4gICAgcC5jcm9wID0gZnVuY3Rpb24oaW1hZ2UsIHgsIHksIHcsIGgpe1xyXG4gICAgICAgIHZhciBjcm9wcGVkID0gcC5jcmVhdGVJbWFnZSh3LCBoKTtcclxuICAgICAgICBjcm9wcGVkLmNvcHkoaW1hZ2UsIHgsIHksIHggKyB3LCB5ICsgaCwgMCwgMCwgeCArIHcsIHkgKyBoKVxyXG4gICAgICAgIHJldHVybiBjcm9wcGVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLmltYWdlc0FycmF5ID0gW1wiYXNzZXRzL3VpL2J1dHRvbnNfbWVudS5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy9tYXAvVGlsZXNldC5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy91aS9Cb3R0b21NZW51LnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy9tb2JzL0Jvc3Nlcy5wbmdcIixcclxuICAgICAgICBcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvdG93ZXJzL0J1bGxldHMucG5nXCIsXHJcbiAgICAgICAgXCJhc3NldHMvbWFwL01hcEZ1bGwyLnBuZ1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL01lbnVQb3N0ZXIuanBnXCJcclxuICAgICAgICBcclxuICAgIF07XHJcbiAgICBwLnNvdW5kc0FycmF5ID0gW1wiYXNzZXRzL0p1bXAzLndhdlwiXTtcclxuXHJcbiAgICBwLmdpbWFnZXMgPSB7fTtcclxuICAgIHAuZ3NvdW5kcyA9IHt9O1xyXG5cclxuICAgIHAuZ2FtZVdpZHRoID0gOTYwO1xyXG4gICAgcC5nYW1lSGVpZ2h0ID0gNzIwO1xyXG5cclxuICAgIHAubG9hZEdhbWVJbWFnZSA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5naW1hZ2VzW3N0cl0gPSBwLmxvYWRJbWFnZShzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLmxvYWRHYW1lU291bmQgPSBmdW5jdGlvbihzdHIpe1xyXG4gICAgICAgIHAuZ3NvdW5kc1tzdHJdID0gcC5sb2FkU291bmQoc3RyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5wcmVsb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcC5pbWFnZXNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHAubG9hZEdhbWVJbWFnZShwLmltYWdlc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcC5zb3VuZHNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHAubG9hZEdhbWVTb3VuZChwLnNvdW5kc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwLnNldHVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHAuZ2FtZVdpZHRoLCBwLmdhbWVIZWlnaHQpO1xyXG4gICAgICAgIHAucGl4ZWxEZW5zaXR5KDEpO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY3VyclRpbWUgPSAwO1xyXG5cclxuICAgICAgICBnYW1lID0gbmV3IEdhbWUocCk7XHJcbiAgICAgICAgd2luZG93Lm1haW5HYW1lID0gZ2FtZTtcclxuICAgICAgICBnYW1lLnNldFN0YXRlKG5ldyBNZW51U3RhdGUoZ2FtZSkpO1xyXG4gICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBwLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXJyVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpLzEwMDA7XHJcblxyXG4gICAgICAgIHAuYmFja2dyb3VuZCgwKTtcclxuXHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMC4yKVxyXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBnYW1lLmRyYXcocCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZTtcclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwLmtleVByZXNzZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUua2V5UHJlc3NlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLm1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZVByZXNzZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubW91c2VEcmFnZ2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBnYW1lcDUgPSBuZXcgcDUocywgXCJtYWluXCIpO1xyXG5cclxuXHJcbiIsImNsYXNzIEFuaW1hdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJhbWVzLCB0aW1lLCBsb29wKXtcclxuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGcmFtZSA+PSB0aGlzLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IHRoaXMuZnJhbWVzLmxlbmd0aC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMudGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgLT0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyYW1lc1t0aGlzLmN1cnJlbnRGcmFtZV07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLmFuaW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQW5pbWF0aW9uKG5hbWUsIGFuaW0pe1xyXG4gICAgICAgIHRoaXMuYW5pbXNbbmFtZV0gPSBhbmltO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50QW5pbWF0aW9uKG5hbWUpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltID09IHRoaXMuYW5pbXNbbmFtZV0pIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltID0gdGhpcy5hbmltc1tuYW1lXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBbmltLmN1cnJlbnRGcmFtZSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbS51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQ7IiwiY2xhc3MgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3VXBwZXIoaW5kZXgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQm9keUNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHgsIHksIHcsIGgpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1haW5Nb3VzZUhvdmVyKCl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VYO1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSB0aGlzLmhvc3QuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBpZiAobW91c2VYID49IHRoaXMueCAmJiBtb3VzZVggPCB0aGlzLngrdGhpcy53KXtcclxuICAgICAgICAgICAgaWYgKG1vdXNlWSA+PSB0aGlzLnkgJiYgbW91c2VZIDwgdGhpcy55K3RoaXMuaCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxhcHMoYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IGJvZHlDb21wb25lbnQueCArIGJvZHlDb21wb25lbnQudyAmJlxyXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLncgPiBib2R5Q29tcG9uZW50LnggJiZcclxuICAgICAgICAgICAgdGhpcy55IDwgYm9keUNvbXBvbmVudC55ICsgYm9keUNvbXBvbmVudC5oICYmXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaCA+IGJvZHlDb21wb25lbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlVG8oYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgbGV0IGsxID0gTWF0aC5hYnMoYm9keUNvbXBvbmVudC54LXRoaXMueCk7XHJcbiAgICAgICAgbGV0IGsyID0gTWF0aC5hYnMoYm9keUNvbXBvbmVudC55LXRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChrMSprMSArIGsyKmsyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUhvdmVyKHgsIHkpe1xyXG4gICAgICAgIGxldCBtb3VzZVggPSB4O1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSB5O1xyXG4gICAgICAgIGlmIChtb3VzZVggPj0gdGhpcy54ICYmIG1vdXNlWCA8IHRoaXMueCt0aGlzLncpe1xyXG4gICAgICAgICAgICBpZiAobW91c2VZID49IHRoaXMueSAmJiBtb3VzZVkgPCB0aGlzLnkrdGhpcy5oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUb1BvaW50KHgsIHkpe1xyXG4gICAgICAgIGxldCBrMSA9IE1hdGguYWJzKHgtdGhpcy54KTtcclxuICAgICAgICBsZXQgazIgPSBNYXRoLmFicyh5LXRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChrMSprMSArIGsyKmsyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUbyhib2R5Q29tcG9uZW50KXtcclxuICAgICAgICBsZXQgeERpc3QgPSBib2R5Q29tcG9uZW50LnggLSB0aGlzLng7XHJcbiAgICAgICAgbGV0IHlEaXN0ID0gYm9keUNvbXBvbmVudC55IC0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlVG9Qb2ludCh4LCB5KXtcclxuICAgICAgICBsZXQgeERpc3QgPSB4IC0gdGhpcy54O1xyXG4gICAgICAgIGxldCB5RGlzdCA9IHkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlDb21wb25lbnQ7XHJcbiIsImltcG9ydCBCdWZmQ29tcG9uZW50IGZyb20gXCIuL0J1ZmZDb21wb25lbnRcIlxyXG5cclxuY2xhc3MgQXR0YWNrU3BlZWRCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYXR0YWNrU3BlZWRBdXJhXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgLT0gdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICogKDAuMSArIDAuMDIqdGhpcy5idWZmbHZsKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKXtcclxuICAgICAgICB0aGlzLmhvc3QudG93ZXJDb21wb25lbnQuYXR0YWNrU3BlZWQgKz0gdGhpcy5ob3N0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkICogKDAuMSArIDAuMDIqdGhpcy5idWZmbHZsKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRhY2tTcGVlZEJ1ZmY7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJ1ZmZDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0eXBlKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYnVmZmx2bCA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZDb21wb25lbnQ7IiwiaW1wb3J0IEJ1cm5pbmdCdWZmIGZyb20gXCIuL0J1cm5pbmdCdWZmXCI7XHJcbmltcG9ydCBDdXJzZUJ1ZmYgZnJvbSBcIi4vQ3Vyc2VCdWZmXCI7XHJcbmltcG9ydCBBdHRhY2tTcGVlZEJ1ZmYgZnJvbSBcIi4vQXR0YWNrU3BlZWRCdWZmXCI7XHJcbmltcG9ydCBTbG93QnVmZiBmcm9tIFwiLi9TbG93QnVmZlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJidXJuXCI6IEJ1cm5pbmdCdWZmLFxyXG4gICAgXCJjdXJzZVwiOiBDdXJzZUJ1ZmYsXHJcbiAgICBcInNwZWVkXCI6IEF0dGFja1NwZWVkQnVmZixcclxuICAgIFwic2xvd1wiOiBTbG93QnVmZlxyXG5cclxufTsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQnVmZnMgZnJvbSBcIi4vQnVmZnNcIjtcclxuXHJcbmNsYXNzIEJ1ZmZzQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5idWZmcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnVmZkNsYXNzZXMgPSBCdWZmcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlCdWZmKHR5cGUsIGJ1ZmZsdmwpe1xyXG4gICAgICAgIGxldCBidWZmQ29tcG9uZW50Q2xhc3MgPSB0aGlzLmJ1ZmZDbGFzc2VzW3R5cGVdO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgYnVmZkNvbXBvbmVudENsYXNzKHRoaXMuaG9zdCk7XHJcbiAgICAgICAgY29tcG9uZW50LmJ1ZmZsdmwgPSBidWZmbHZsO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hdHRhY2htZW50c1t0eXBlXSA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50Lm9uKCk7XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IGJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5QnVmZih0eXBlLCBidWZmbHZsKXtcclxuICAgICAgICBpZiAodGhpcy5idWZmc1t0eXBlXSAhPT0gYnVmZmx2bCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZzW3R5cGVdID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmIChidWZmbHZsID4gdGhpcy5idWZmc1t0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1ZmYodHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QnVmZih0eXBlLCBidWZmbHZsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxCdWZmKHR5cGUpe1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmhvc3QuYXR0YWNobWVudHNbdHlwZV07XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb21wb25lbnQub2ZmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZW1vdmVDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWZmc1t0eXBlXSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVmZnNDb21wb25lbnQ7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQnVybmluZ0J1ZmYgZXh0ZW5kcyBCdWZmQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcImJ1cm5cIik7XHJcbiAgICAgICAgdGhpcy5idXJuVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWUgPSA0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuYnVyblRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGxldCBkYW1hZ2VQZXJTZWNvbmQgPSBkZWx0YSAqIHRoaXMuaG9zdC5tYXhIcCAqICgwLjAwOCAqIHRoaXMuYnVmZmx2bCk7XHJcbiAgICAgICAgaWYodGhpcy5ob3N0LmhwIDwgZGFtYWdlUGVyU2Vjb25kKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmhwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuaHAgLT0gZGFtYWdlUGVyU2Vjb25kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5idXJuVGltZXIgPj0gdGhpcy5idXJuVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVybmluZ0J1ZmY7IiwiaW1wb3J0IEJ1ZmZDb21wb25lbnQgZnJvbSBcIi4vQnVmZkNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ3Vyc2VCdWZmIGV4dGVuZHMgQnVmZkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJjdXJzZVwiKTtcclxuICAgICAgICB0aGlzLmN1cnNlVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lID0gNDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb24oKXtcclxuICAgICAgICBsZXQgcmVzaXN0cyA9IHRoaXMuaG9zdC5yZXNpc3QucmVzaXN0cztcclxuICAgICAgICBmb3IobGV0IGsgaW4gcmVzaXN0cyl7XHJcbiAgICAgICAgICAgIHJlc2lzdHNba10gKz0gMC4xICogdGhpcy5idWZmbHZsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMuY3Vyc2VUaW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5jdXJzZVRpbWVyID49IHRoaXMuY3Vyc2VUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYodGhpcy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCl7XHJcbiAgICAgICAgbGV0IHJlc2lzdHMgPSB0aGlzLmhvc3QucmVzaXN0LnJlc2lzdHM7XHJcbiAgICAgICAgZm9yKGxldCBrIGluIHJlc2lzdHMpe1xyXG4gICAgICAgICAgICByZXNpc3RzW2tdIC09IDAuMSAqIHRoaXMuYnVmZmx2bDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEN1cnNlQnVmZjsiLCJpbXBvcnQgQnVmZkNvbXBvbmVudCBmcm9tIFwiLi9CdWZmQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTbG93QnVmZiBleHRlbmRzIEJ1ZmZDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCBcInNsb3dcIik7XHJcbiAgICAgICAgdGhpcy5zbG93VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2xvd1RpbWUgPSA0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBvbigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCA9IHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAtIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCAqIDAuMDcgKiB0aGlzLmJ1ZmZsdmw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLnNsb3dUaW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5zbG93VGltZXIgPj0gdGhpcy5zbG93VGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKHRoaXMudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZigpe1xyXG4gICAgICAgIHRoaXMuaG9zdC5tb2JNb3ZpbmdDb21wb25lbnQubW92ZW1lbnRTcGVlZCA9IHRoaXMuc3RhcnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsb3dCdWZmOyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdWxsZXRDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRhcmdldCwgbW9icyl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5tb2JzID0gbW9icztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMzUwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5ob3N0LmJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgbGV0IHRCb2R5ID0gdGhpcy50YXJnZXQuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5hbmdsZVRvUG9pbnQodEJvZHkueCt0Qm9keS53LzIsIHRCb2R5LnkrdEJvZHkuaC8yKTtcclxuICAgICAgICBib2R5LnggKz0gTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGJvZHkueSArPSBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgaWYoYm9keS5vdmVybGFwcyh0Qm9keSkpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuaG9zdCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlY2VpdmVEYW1hZ2UodGhpcy5ob3N0LnRvd2VyLCAxKTtcclxuICAgICAgICAgICAgbGV0IGF0dGFja1Rvd2VyQyA9IHRoaXMuaG9zdC50b3dlci50b3dlckNvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYoYXR0YWNrVG93ZXJDLmF0dGFja1R5cGUgPT09IFwiZmlyZVwiKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50LmRpc3RhbmNlVG8odGhpcy50YXJnZXQuYm9keUNvbXBvbmVudCkgPCA5MCArIDEwMCAqICgwLjEgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcImJ1cm5cIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcIndhdGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50KSA8IDEwMCArIDEwMCAqICgwLjIgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcInNsb3dcIiwgYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Rvd2VyQy5hdHRhY2tUeXBlID09PSBcInNoYWRvd1wiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmJ1ZmZzQ29tcG9uZW50LnRyeUJ1ZmYoXCJjdXJzZVwiLCBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZihhdHRhY2tUb3dlckMuYXR0YWNrVHlwZSA9PT0gXCJlYXJ0aFwiKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vYnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0ICE9PSB0aGlzLm1vYnNbaV0gJiYgdGhpcy5tb2JzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLnRhcmdldC5ib2R5Q29tcG9uZW50KSA8IDEwMCArIDEwMCAqICgwLjIgKiBhdHRhY2tUb3dlckMudXBncmFkZUFiaWxpdHlMZXZlbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vYnNbaV0ucmVjZWl2ZURhbWFnZSh0aGlzLmhvc3QudG93ZXIsIDAuMjAqYXR0YWNrVG93ZXJDLnVwZ3JhZGVBYmlsaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBFbmRTdGF0ZSBmcm9tIFwiLi4vLi4vU3RhdGVzL0VuZFN0YXRlXCI7XHJcblxyXG5jbGFzcyBNb2JNb3ZpbmdDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50LCByb3V0ZSwgdGlsZVNpemUsIG1vdmVtZW50U3BlZWQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSBtb3ZlbWVudFNwZWVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hpZnQgPSAodGhpcy50aWxlU2l6ZSoyKS10aGlzLnRpbGVTaXplLXRoaXMuYm9keUNvbXBvbmVudC53KjAuNTtcclxuICAgICAgICB0aGlzLnZ4ID0gMDtcclxuICAgICAgICB0aGlzLnZ5ID0gMDtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueCArPSB0aGlzLnNoaWZ0O1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC55ICs9IHRoaXMuc2hpZnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLm5leHRUaWxlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCl7XHJcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnJvdXRlW3RoaXMuY3VycmVudFJvdXRlSW5kZXgrK107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHRpbGU7XHJcbiAgICAgICAgaWYgKHRpbGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHhEaXN0ID0gKHRpbGUuaip0aGlzLnRpbGVTaXplKSAtICh0aGlzLmJvZHlDb21wb25lbnQueCAtIHRoaXMuc2hpZnQpO1xyXG4gICAgICAgICAgICBsZXQgeURpc3QgPSAodGlsZS5pKnRoaXMudGlsZVNpemUpIC0gKHRoaXMuYm9keUNvbXBvbmVudC55IC0gdGhpcy5zaGlmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7Ly8gKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMudnggPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMubW92ZW1lbnRTcGVlZDtcclxuICAgICAgICB0aGlzLnZ5ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiB0aGlzLm1vdmVtZW50U3BlZWQ7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnZ4ID49IC0xMCAmJiB0aGlzLnZ4IDw9IDEwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudnggPCAwKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaG9zdC5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJsZWZ0XCIpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ob3N0LmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcInJpZ2h0XCIpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5hbmdsZSA9IHRoaXMuYW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudC54ICs9IHRoaXMudnggKiBkZWx0YTtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQueSArPSB0aGlzLnZ5ICogZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCBwb2ludHggPSB0aGlzLmN1cnJlbnRUaWxlLmoqdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICAgICAgbGV0IHBvaW50eSA9IHRoaXMuY3VycmVudFRpbGUuaSp0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgICAgICBsZXQgZGlzdCA9IHRoaXMuYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvUG9pbnQocG9pbnR4K3RoaXMuc2hpZnQsIHBvaW50eSt0aGlzLnNoaWZ0KTtcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCAxMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5saWZlcy0tO1xyXG4gICAgICAgICAgICBpZiAobWFpbkdhbWUubGlmZXMgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBtYWluR2FtZS5zZXRTdGF0ZShuZXcgRW5kU3RhdGUobWFpbkdhbWUsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYk1vdmluZ0NvbXBvbmVudDtcclxuIiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAxLjIsIDAuOSwgMC41LCAwLjcsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IE1vYlJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi9Nb2JSZXNpc3RDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuOSwgMC43LCAxLjIsIDAuNSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVhcnRoUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBGaXJlUmVzaXN0Q29tcG9uZW50IGV4dGVuZHMgTW9iUmVzaXN0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIDAuNSwgMS4yLCAwLjcsIDAuOSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVSZXNpc3RDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uLy4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIE1vYlJlc2lzdENvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBmaXJlUmVzaXN0LCB3YXRlclJlc2lzdCwgYWlyUmVzaXN0LCBlYXJ0aFJlc2lzdCwgc2hhZG93UmVzaXN0KXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnJlc2lzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJmaXJlXCJdID0gZmlyZVJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJ3YXRlclwiXSA9IHdhdGVyUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcImFpclwiXSA9IGFpclJlc2lzdDtcclxuICAgICAgICB0aGlzLnJlc2lzdHNbXCJlYXJ0aFwiXSA9IGVhcnRoUmVzaXN0O1xyXG4gICAgICAgIHRoaXMucmVzaXN0c1tcInNoYWRvd1wiXSA9IHNoYWRvd1Jlc2lzdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iUmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTaGFkb3dSZXNpc3RDb21wb25lbnQgZXh0ZW5kcyBNb2JSZXNpc3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgMSwgMSwgMSwgMSwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZG93UmVzaXN0Q29tcG9uZW50OyIsImltcG9ydCBNb2JSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4vTW9iUmVzaXN0Q29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclJlc2lzdENvbXBvbmVudCBleHRlbmRzIE1vYlJlc2lzdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcclxuICAgICAgICBzdXBlcihob3N0LCAwLjcsIDAuNSwgMC45LCAxLjIsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclJlc2lzdENvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gW1xyXG4gICAgICAgICAgICBbMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgICAgICAgIFsyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgWzIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDEsIDMsIDIsIDIsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMiwgMiwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLCAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMywgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMywgMywgMywgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAzLCAwLCAwLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gNDA7XHJcbiAgICAgICAgbWFpbkdhbWUudGlsZVNpemUgPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIG1haW5HYW1lLnRpbGVTaXplID0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLmhvc3QuZ2FtZS50aWxlU2l6ZSA9IDQwO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEFpclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiYWlyXCIsIDAuNSwgNDAsIDI3MCk7XHJcbiAgICAgICAgdGhpcy50aW1lckF1cmEgPSAwO1xyXG4gICAgICAgIHRoaXMuYXVyYVRpbWUgPSAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudGltZXJBdXJhICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyQXVyYSA+PSB0aGlzLmF1cmFUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lckF1cmEgLT0gdGhpcy5hdXJhVGltZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxUb3dlcnMgPSBtYWluR2FtZS5zdGF0ZS5nYW1lTWVudUJvdHRvbS5raWRzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUb3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgIT0gXCJhaXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLmhvc3QuYm9keUNvbXBvbmVudCkgPCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb3dlcnNbaV0uYnVmZnNDb21wb25lbnQudHJ5QnVmZihcInNwZWVkXCIsIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kIGFuZCBmaXhlZCBlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjAyO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyVG93ZXJDb21wb25lbnQ7XHJcbiIsImltcG9ydCBUb3dlckNvbXBvbmVudCBmcm9tIFwiLi9Ub3dlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRWFydGhUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZWFydGhcIiwgMS41LCAxNTAsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLjA3O1xyXG4gICAgICAgIHRoaXMuYXR0YWNrRGFtYWdlICs9IHRoaXMuYXR0YWNrRGFtYWdlOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlQWJpbGl0eSgpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVBYmlsaXR5KCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWFydGhUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVUb3dlckNvbXBvbmVudCBleHRlbmRzIFRvd2VyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QsIFwiZmlyZVwiLCAwLjQsIDMwLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wMTtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmVUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgVG93ZXJDb21wb25lbnQgZnJvbSBcIi4vVG93ZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Rvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJzaGFkb3dcIiwgMSwgOTAsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZVN0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tTcGVlZCAtPSAwLDU7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tEYW1hZ2UgKz0gdGhpcy5hdHRhY2tEYW1hZ2U7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVBYmlsaXR5KCl7XHJcbiAgICAgICAgc3VwZXIudXBncmFkZUFiaWxpdHkoKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFkb3dUb3dlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRmlyZVRvd2VyIGZyb20gXCIuLi8uLi8uLi9PYmplY3RzL0dhbWUvVG93ZXJzL0ZpcmVUb3dlclwiO1xyXG5pbXBvcnQgU2hhZG93VG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvU2hhZG93VG93ZXJcIjtcclxuaW1wb3J0IFdhdGVyVG93ZXIgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9Ub3dlcnMvV2F0ZXJUb3dlclwiO1xyXG5pbXBvcnQgRWFydGhUb3dlciBmcm9tIFwiLi4vLi4vLi4vT2JqZWN0cy9HYW1lL1Rvd2Vycy9FYXJ0aFRvd2VyXCI7XHJcblxyXG5jbGFzcyBUb3dlckJ1aWxkZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihob3N0KVxyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50LnRpbGVTaXplO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBsZXQgcCA9IHRoaXMuaG9zdC5nYW1lLnA7XHJcbiAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKHAubW91c2VZL3RoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihwLm1vdXNlWC90aGlzLnRpbGVTaXplKTtcclxuICAgICAgICBsZXQgdG93ZXIgPSBuZXcgRWFydGhUb3dlcih0aGlzLmhvc3QuZ2FtZSwgaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZCh0b3dlcik7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJCdWlsZGVyQ29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi8uLi9HYW1lQ29tcG9uZW50XCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4uLy4uLy4uL09iamVjdHMvR2FtZS9CdWxsZXRzL0J1bGxldFwiO1xyXG5cclxuY2xhc3MgVG93ZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBhdHRhY2tUeXBlLCBhdHRhY2tTcGVlZCwgYXR0YWNrRGFtYWdlLCBhdHRhY2tSYW5nZSl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrVHlwZSA9IGF0dGFja1R5cGU7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgPSBhdHRhY2tTcGVlZDtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSA9IGF0dGFja0RhbWFnZTtcclxuICAgICAgICB0aGlzLmF0dGFja1JhbmdlID0gYXR0YWNrUmFuZ2U7XHJcblxyXG4gICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMudXBncmFkZUFiaWxpdHlMZXZlbCA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMubW9icyA9IG1haW5HYW1lLnN0YXRlLndhdmVNYXN0ZXIua2lkcztcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2tUaW1lciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3dlckNvc3QgPSA1MDtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVTdGF0c0Nvc3QgPSAxMDA7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlQWJpbGl0eUNvc3QgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZVN0YXRzKCl7XHJcbiAgICAgICAgaWYodGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmJ1ZmZzW1wic3BlZWRcIl0gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmJ1ZmZzQ29tcG9uZW50LmNhbmNlbEJ1ZmYoXCJzcGVlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy51cGdyYWRlU3RhdHNMZXZlbCArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZVN0YXRzTGV2ZWwgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBpZih0aGlzLnVwZ3JhZGVBYmlsaXR5TGV2ZWwgIT09NSkgdGhpcy51cGdyYWRlQWJpbGl0eUxldmVsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZHlUb0ZpcmUpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFja1RpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgICAgICBpZih0aGlzLmF0dGFja1RpbWVyID49IHRoaXMuYXR0YWNrU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb0ZpcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tUaW1lciAtPSB0aGlzLmF0dGFja1NwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5VG9GaXJlKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9icy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhvc3QuYm9keUNvbXBvbmVudC5kaXN0YW5jZVRvKHRoaXMubW9ic1tpXS5ib2R5Q29tcG9uZW50KTx0aGlzLmF0dGFja1JhbmdlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldFNwYXduKHRoaXMubW9ic1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvRmlyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1bGxldFNwYXduKG1vYil7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmhvc3QuYm9keUNvbXBvbmVudDtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLmhvc3QuZ2FtZSwgYm9keS54K2JvZHkudy8yLCBib2R5LnkrYm9keS5oLzIsIHRoaXMuaG9zdCwgbW9iLCB0aGlzLm1vYnMpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRDaGlsZChidWxsZXQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IFRvd2VyQ29tcG9uZW50IGZyb20gXCIuL1Rvd2VyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBXYXRlclRvd2VyQ29tcG9uZW50IGV4dGVuZHMgVG93ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoaG9zdCl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCwgXCJ3YXRlclwiLCAxLjIsIDkwLCAyNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZ3JhZGVTdGF0cygpe1xyXG4gICAgICAgIHN1cGVyLnVwZ3JhZGVTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrU3BlZWQgLT0gMC4wNjtcclxuICAgICAgICB0aGlzLmF0dGFja0RhbWFnZSArPSB0aGlzLmF0dGFja0RhbWFnZTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBncmFkZUFiaWxpdHkoKXtcclxuICAgICAgICBzdXBlci51cGdyYWRlQWJpbGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhdGVyVG93ZXJDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYiBmcm9tIFwiLi4vLi4vT2JqZWN0cy9HYW1lL01vYnMvTW9iXCI7XHJcbmltcG9ydCBFbmRTdGF0ZSBmcm9tIFwiLi4vLi4vU3RhdGVzL0VuZFN0YXRlXCI7XHJcblxyXG5jbGFzcyBXYXZlTWFzdGVyTG9naWNDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB0aWxlbWFwKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICAgICAgIHRoaXMud2F2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBjID0gaG9zdC5nYW1lLmNvbnN0YW50cztcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8wLCAxNSwgMC42KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8wLCAxNSwgMC41KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8wLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMCwgMTUsIDAuOCk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzAsIDIsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0VBUlRIXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8xLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9GSVJFXzEsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMSwgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9XQVRFUl8yLCAxNSwgMC43KTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9TSEFET1dfMiwgMTUsIDAuNyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfQUlSXzIsIDE1LCAxKTtcclxuICAgICAgICB0aGlzLnN0b3JlV2F2ZShjLk1PQl9FQVJUSF8yLCAyLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV18zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0ZJUkVfMywgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl8zLCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfMywgMiwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRUFSVEhfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX1NIQURPV180LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfV0FURVJfNCwgMTUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVXYXZlKGMuTU9CX0FJUl80LCAxNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdhdmUoYy5NT0JfRklSRV80LCAxLCAxKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zcGF3bmluZ1N0YXRlID0gMDsgLy8wIC0gd2FpdCB8IDEgLSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVUb1N0YXJ0V2F2ZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJNb2JTcGF3biA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IDEuMjtcclxuXHJcbiAgICAgICAgdGhpcy53YXZlSWQgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlID0gdGhpcy5maW5kUm91dGUodGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdhdmVUb1NwYXduID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUobWFwKXtcclxuICAgICAgICBsZXQgZHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSB7aTowLCBqOjE3LCBkOmR2YWx1ZX07XHJcbiAgICAgICAgbGV0IGVuZCA9IHtpOjE0LCBqOjh9O1xyXG4gICAgICAgIGxldCBtYXJrZWQgPSBbXTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIG1hcmtlZC5wdXNoKHN0YXJ0KTtcclxuICAgICAgICBjaGVja0Fyb3VuZE1hcmtlZChkdmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQXJvdW5kTWFya2VkKGQpe1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbWFya2VkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uaSA9PSBlbmQuaSAmJiBtYXJrZWRbaV0uaiA9PSBlbmQuail7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChtYXJrZWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1hcmtlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2sgZDpcIitkK1wiIG1kOlwiK21hcmtlZFtpXS5kK1wiIG1pOlwiK21hcmtlZFtpXS5pK1wiIG1qOlwiK21hcmtlZFtpXS5qKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaV0uZCA9PSBkKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ29vZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrQXJvdW5kVGlsZShtYXJrZWRbaV0sIGQrMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbWFya0Fyb3VuZFRpbGUodGlsZSwgbmV3ZCl7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLTEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pKzEsIHRpbGUuaiwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmotMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIG1hcmsodGlsZS5pLCB0aWxlLmorMSwgbmV3ZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQXJvdW5kTWFya2VkKG5ld2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtYXJrKGksIGosIG5ld2Qpe1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBtYXJrZWQubGVuZ3RoOyBpaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZWRbaWldLmkgPT0gaSAmJiBtYXJrZWRbaWldLmogPT0gail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZC5wdXNoKHtpOmksIGo6aiwgZDpuZXdkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaStcIiBcIitqK1wiIFwiK25ld2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1hcmtlZCk7XHJcbiAgICAgICAgbGV0IGRtYXggPSBwYXRoWzBdLmQ7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtYXJrZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlZFtpXS5kID09IGRtYXgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1hcmtlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1heC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoZG1heCAhPSAwKTtcclxuICAgICAgICBwYXRoLnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVXYXZlKHR5cGUsIGNvdW50LCB0aW1lKXtcclxuICAgICAgICBsZXQgbyA9IHt9O1xyXG4gICAgICAgIGxldCBhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZXMucHVzaChvKTtcclxuICAgICAgICBvLmEgPSBhO1xyXG4gICAgICAgIG8udGltZSA9IHRpbWU7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgYS5wdXNoKHR5cGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk1vYigpe1xyXG4gICAgICAgIGxldCBNb2JDbGFzcyA9IHRoaXMuY3VycmVudFdhdmVUb1NwYXduLnNoaWZ0KCk7XHJcbiAgICAgICAgLy9sZXQgbW9iID0gbmV3IG1vYlR5cGUodGhpcy5ob3N0LmdhbWUsIHgsIHksIHJvKVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBuZXcgTW9iQ2xhc3ModGhpcy5ob3N0LmdhbWUsIDE3KnNpemUsIC1zaXplLCBzaXplLCB0aGlzLnJvdXRlKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkQ2hpbGQodGVzdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLndhdmVJZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICBpZiAodGhpcy5zcGF3bmluZ1N0YXRlID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyV2F2ZVN0YXJ0Kz1kZWx0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJXYXZlU3RhcnQgPj0gdGhpcy50aW1lVG9TdGFydFdhdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcldhdmVTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduaW5nU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhdmVPYmplY3QgPSB0aGlzLndhdmVzW3RoaXMuY3VycmVudFdhdmVJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V2F2ZVRvU3Bhd24gPSB3YXZlT2JqZWN0LmE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lVG9TcGF3bk1vYiA9IHdhdmVPYmplY3QudGltZTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZS5zZXRTdGF0ZShuZXcgRW5kU3RhdGUobWFpbkdhbWUsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBcclxuICAgICAgICBpZiAodGhpcy5zcGF3bmluZ1N0YXRlID09IDEpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V2F2ZVRvU3Bhd24ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyTW9iU3Bhd24rPWRlbHRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXJNb2JTcGF3biA+PSB0aGlzLnRpbWVUb1NwYXduTW9iKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyTW9iU3Bhd24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Nb2IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhvc3Qua2lkcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduaW5nU3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXZlSWQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgZ2V0RnJhbWVzKGltYWdlLCBzdGFydGksIHN0YXJ0aiwgc2l6ZSwgbGVuZ3RoKXtcclxuICAgICAgICBsZXQgZnJhbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgc3ViaW1hZ2UgPSBtYWluR2FtZS5wLmdpbWFnZXNbaW1hZ2VdLmdldChzdGFydGoqc2l6ZSwgc3RhcnRpKnNpemUsIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChzdWJpbWFnZSk7XHJcbiAgICAgICAgICAgIHN0YXJ0aisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnJhbWVzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBIUFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGJvZHlDb21wb25lbnQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IGhwID0gdGhpcy5ob3N0LmhwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5ub1N0cm9rZSgpO1xyXG4gICAgICAgICAgICBsZXQgbGlmZUJhcldpZHRoID0gdGhpcy5ob3N0LmhwICogdGhpcy5ib2R5Q29tcG9uZW50LncgLyB0aGlzLmhvc3QubWF4SHA7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuZmlsbCgwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCB0aGlzLmJvZHlDb21wb25lbnQudywgNyk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAuZmlsbCgwLCAyNTUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuZ2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LTE1LCBsaWZlQmFyV2lkdGgsIDcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAubm9GaWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5nYW1lLnAucmVjdCh0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnktMTUsIHRoaXMuYm9keUNvbXBvbmVudC53LCA3KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQUmVuZGVyQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgUmVuZGVyQ29tcG9uZW50IGV4dGVuZHMgR2FtZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaG9zdCwgYm9keUNvbXBvbmVudCwgaW1hZ2Upe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IGJvZHlDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gYm9keUNvbXBvbmVudC53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBib2R5Q29tcG9uZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlKGltYWdlKXtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlID09IG51bGwpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5yZWN0KHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIHRoaXMuYm9keUNvbXBvbmVudC5oKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLmltYWdlLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNvbXBvbmVudDsiLCJpbXBvcnQgR2FtZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vR2FtZUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVGlsZW1hcFJlbmRlckNvbXBvbmVudCBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QsIHRpbGVtYXBDb250YWluZXJDb21wb25lbnQpe1xyXG4gICAgICAgIHN1cGVyKGhvc3QpO1xyXG4gICAgICAgIHRoaXMubWFwID0gdGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC5tYXA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gaG9zdC5nYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy9tYXAvVGlsZXNldC5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5ncmFzcyA9IHRoaXMudGV4dHVyZS5nZXQoMCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJvYWQgPSB0aGlzLnRleHR1cmUuZ2V0KDQwLCAwLCA0MCwgNDApO1xyXG4gICAgICAgIHRoaXMubWFwRnVsbFRleHR1cmUgPSBob3N0LmdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL21hcC9NYXBGdWxsMi5wbmdcIl07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICAvLyBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLm1hcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGo9MDsgaiA8IHRoaXMubWFwW2ldLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwID0gdGhpcy5ob3N0LmdhbWUucDtcclxuICAgICAgICAvLyAgICAgICAgIHAuc3Ryb2tlKDApO1xyXG4gICAgICAgIC8vICAgICAgICAgc3dpdGNoKHRoaXMubWFwW2ldW2pdKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHAuZmlsbCgwLCAxMDAsIDApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBwLnJlY3Qoaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUsIHRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMuZ3Jhc3MsIGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMucm9hZCwgaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHAuZmlsbCgwKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcC5yZWN0KGoqdGhpcy50aWxlU2l6ZSwgaSp0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplLCB0aGlzLnRpbGVTaXplKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMucm9hZCwgaip0aGlzLnRpbGVTaXplLCBpKnRoaXMudGlsZVNpemUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBtYWluR2FtZS5wLmltYWdlKHRoaXMubWFwRnVsbFRleHR1cmUsIDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGlsZW1hcFJlbmRlckNvbXBvbmVudDtcclxuIiwiaW1wb3J0IE1vYkZpcmUwIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTBcIjtcclxuaW1wb3J0IE1vYldhdGVyMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjBcIjtcclxuaW1wb3J0IE1vYkVhcnRoMCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDBcIjtcclxuaW1wb3J0IE1vYkFpcjAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjBcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzAgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzBcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlMSBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmUxXCI7XHJcbmltcG9ydCBNb2JXYXRlcjEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXIxXCI7XHJcbmltcG9ydCBNb2JFYXJ0aDEgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGgxXCI7XHJcbmltcG9ydCBNb2JBaXIxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXIxXCI7XHJcbmltcG9ydCBNb2JTaGFkb3cxIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3cxXCI7XHJcblxyXG5pbXBvcnQgTW9iRmlyZTIgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRmlyZS9Nb2JGaXJlMlwiO1xyXG5pbXBvcnQgTW9iRWFydGgyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0VhcnRoL01vYkVhcnRoMlwiO1xyXG5pbXBvcnQgTW9iV2F0ZXIyIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1dhdGVyL01vYldhdGVyMlwiO1xyXG5pbXBvcnQgTW9iU2hhZG93MiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9TaGFkb3cvTW9iU2hhZG93MlwiO1xyXG5pbXBvcnQgTW9iQWlyMiBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9BaXIvTW9iQWlyMlwiO1xyXG5cclxuaW1wb3J0IE1vYkZpcmUzIGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0ZpcmUvTW9iRmlyZTNcIjtcclxuaW1wb3J0IE1vYkVhcnRoMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9FYXJ0aC9Nb2JFYXJ0aDNcIjtcclxuaW1wb3J0IE1vYldhdGVyMyBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9XYXRlci9Nb2JXYXRlcjNcIjtcclxuaW1wb3J0IE1vYlNoYWRvdzMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvU2hhZG93L01vYlNoYWRvdzNcIjtcclxuaW1wb3J0IE1vYkFpcjMgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvQWlyL01vYkFpcjNcIjtcclxuXHJcbmltcG9ydCBNb2JGaXJlNCBmcm9tIFwiLi9PYmplY3RzL0dhbWUvTW9icy9GaXJlL01vYkZpcmU0XCI7XHJcbmltcG9ydCBNb2JFYXJ0aDQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvRWFydGgvTW9iRWFydGg0XCI7XHJcbmltcG9ydCBNb2JXYXRlcjQgZnJvbSBcIi4vT2JqZWN0cy9HYW1lL01vYnMvV2F0ZXIvTW9iV2F0ZXI0XCI7XHJcbmltcG9ydCBNb2JTaGFkb3c0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL1NoYWRvdy9Nb2JTaGFkb3c0XCI7XHJcbmltcG9ydCBNb2JBaXI0IGZyb20gXCIuL09iamVjdHMvR2FtZS9Nb2JzL0Fpci9Nb2JBaXI0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBNT0JfRklSRV8wOiBNb2JGaXJlMCxcclxuICAgIE1PQl9FQVJUSF8wOiBNb2JFYXJ0aDAsIFxyXG4gICAgTU9CX1dBVEVSXzA6IE1vYldhdGVyMCxcclxuICAgIE1PQl9TSEFET1dfMDogTW9iU2hhZG93MCxcclxuICAgIE1PQl9BSVJfMDogTW9iQWlyMCxcclxuXHJcbiAgICBNT0JfRklSRV8xOiBNb2JGaXJlMSxcclxuICAgIE1PQl9FQVJUSF8xOiBNb2JFYXJ0aDEsXHJcbiAgICBNT0JfV0FURVJfMTogTW9iV2F0ZXIxLFxyXG4gICAgTU9CX1NIQURPV18xOiBNb2JTaGFkb3cxLFxyXG4gICAgTU9CX0FJUl8xOiBNb2JBaXIxLFxyXG5cclxuICAgIE1PQl9GSVJFXzI6IE1vYkZpcmUyLFxyXG4gICAgTU9CX0VBUlRIXzI6IE1vYkVhcnRoMixcclxuICAgIE1PQl9XQVRFUl8yOiBNb2JXYXRlcjIsXHJcbiAgICBNT0JfU0hBRE9XXzI6IE1vYlNoYWRvdzIsXHJcbiAgICBNT0JfQUlSXzI6IE1vYkFpcjIsXHJcblxyXG4gICAgTU9CX0ZJUkVfMzogTW9iRmlyZTMsXHJcbiAgICBNT0JfRUFSVEhfMzogTW9iRWFydGgzLFxyXG4gICAgTU9CX1dBVEVSXzM6IE1vYldhdGVyMyxcclxuICAgIE1PQl9TSEFET1dfMzogTW9iU2hhZG93MyxcclxuICAgIE1PQl9BSVJfMzogTW9iQWlyMyxcclxuXHJcbiAgICBNT0JfRklSRV80OiBNb2JGaXJlNCxcclxuICAgIE1PQl9FQVJUSF80OiBNb2JFYXJ0aDQsXHJcbiAgICBNT0JfV0FURVJfNDogTW9iV2F0ZXI0LFxyXG4gICAgTU9CX1NIQURPV180OiBNb2JTaGFkb3c0LFxyXG4gICAgTU9CX0FJUl80OiBNb2JBaXI0XHJcblxyXG4gICAgLypcclxuICAgIE1PQl9GSVJFXzI6IE1vYkZpcmUyLFxyXG4gICAgTU9CX0ZJUkVfMzogTW9iRmlyZTMsXHJcbiAgICBNT0JfRklSRV80OiBNb2JGaXJlNCxcclxuICAgIE1PQl9GSVJFXzU6IE1vYkZpcmU1LFxyXG4gICAgTU9CX0ZJUkVfNjogTW9iRmlyZTYsXHJcbiAgICBNT0JfRklSRV83OiBNb2JGaXJlNyxcclxuICAgIE1PQl9GSVJFXzg6IE1vYkZpcmU4LFxyXG4gICAgTU9CX0ZJUkVfOTogTW9iRmlyZTksXHJcbiAgICBNT0JfRUFSVEhfMjogTW9iRWFydGgyLFxyXG4gICAgTU9CX0VBUlRIXzM6IE1vYkVhcnRoMyxcclxuICAgIE1PQl9FQVJUSF80OiBNb2JFYXJ0aDQsXHJcbiAgICBNT0JfRUFSVEhfNTogTW9iRWFydGg1LFxyXG4gICAgTU9CX0VBUlRIXzY6IE1vYkVhcnRoNixcclxuICAgIE1PQl9FQVJUSF83OiBNb2JFYXJ0aDcsXHJcbiAgICBNT0JfRUFSVEhfODogTW9iRWFydGg4LFxyXG4gICAgTU9CX0VBUlRIXzk6IE1vYkVhcnRoOSxcclxuICAgIE1PQl9XQVRFUl8yOiBNb2JXYXRlcjIsXHJcbiAgICBNT0JfV0FURVJfMzogTW9iV2F0ZXIzLFxyXG4gICAgTU9CX1dBVEVSXzQ6IE1vYldhdGVyNCxcclxuICAgIE1PQl9XQVRFUl81OiBNb2JXYXRlcjUsXHJcbiAgICBNT0JfV0FURVJfNjogTW9iV2F0ZXI2LFxyXG4gICAgTU9CX1dBVEVSXzc6IE1vYldhdGVyNyxcclxuICAgIE1PQl9XQVRFUl84OiBNb2JXYXRlcjgsXHJcbiAgICBNT0JfV0FURVJfOTogTW9iV2F0ZXI5LFxyXG4gICAgTU9CX1NIQURPV18yOiBNb2JTaGFkb3cyLFxyXG4gICAgTU9CX1NIQURPV18zOiBNb2JTaGFkb3czLFxyXG4gICAgTU9CX1NIQURPV180OiBNb2JTaGFkb3c0LFxyXG4gICAgTU9CX1NIQURPV181OiBNb2JTaGFkb3c1LFxyXG4gICAgTU9CX1NIQURPV182OiBNb2JTaGFkb3c2LFxyXG4gICAgTU9CX1NIQURPV183OiBNb2JTaGFkb3c3LFxyXG4gICAgTU9CX1NIQURPV184OiBNb2JTaGFkb3c4LFxyXG4gICAgTU9CX1NIQURPV185OiBNb2JTaGFkb3c5LFxyXG4gICAgTU9CX0FJUl8yOiBNb2JBaXIyLFxyXG4gICAgTU9CX0FJUl8zOiBNb2JBaXIzLFxyXG4gICAgTU9CX0FJUl80OiBNb2JBaXI0LFxyXG4gICAgTU9CX0FJUl81OiBNb2JBaXI1LFxyXG4gICAgTU9CX0FJUl82OiBNb2JBaXI2LFxyXG4gICAgTU9CX0FJUl83OiBNb2JBaXI3LFxyXG4gICAgTU9CX0FJUl84OiBNb2JBaXI4LFxyXG4gICAgTU9CX0FJUl85OiBNb2JBaXI5LCovXHJcblxyXG59OyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwKXtcclxuICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb25zdGFudHMgPSBDb25zdGFudHM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxpbmVhckludGVycG9sYXRpb24oZngxLCBmeDIsIHgxLCB4LCB4Mil7XHJcbiAgICAgICAgaWYgKHgyIDwgeDEpIHJldHVybiBmeDI7XHJcbiAgICAgICAgaWYgKHggPj0geDIpIHJldHVybiBmeDI7XHJcbiAgICAgICAgaWYgKHggPD0geDEpIHJldHVybiBmeDE7XHJcbiAgICAgICAgcmV0dXJuIGZ4MSsoIGZ4MiAtIGZ4MSApKih4IC0geDEpLyh4MiAtIHgxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5nYW1lVGltZSArPSBkZWx0YTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHJhd1VwcGVyKDEpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHJhd1VwcGVyKDIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZHJhd1VwcGVyKDMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVByZXNzZWQoKXtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZVByZXNzZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5rZXlQcmVzc2VkKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBCdWxsZXRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQnVsbGV0cy9CdWxsZXRDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBCdWxsZXQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0b3dlciwgbW9iLCBtb2JzKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IG1vYjtcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCAxMCwgMTApO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy50b3dlciA9IHRvd2VyO1xyXG5cclxuICAgICAgICBsZXQgb3BzID0ge1xyXG4gICAgICAgICAgICBpOiAwLFxyXG4gICAgICAgICAgICB0OiAwLjFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgPT0gXCJhaXJcIil7XHJcbiAgICAgICAgICAgIG9wcy50ID0gMC4wNTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSA9PSBcImZpcmVcIil7XHJcbiAgICAgICAgICAgIG9wcy5pID0gMztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAodG93ZXIudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSA9PSBcImVhcnRoXCIpe1xyXG4gICAgICAgICAgICBvcHMuaSA9IDI7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgPT0gXCJ3YXRlclwiKXtcclxuICAgICAgICAgICAgb3BzLmkgPSAxO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmICh0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlID09IFwic2hhZG93XCIpe1xyXG4gICAgICAgICAgICBvcHMudCA9IDAuMDU7XHJcbiAgICAgICAgICAgIG9wcy5pID0gNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJidWxsZXRcIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL3Rvd2Vycy9CdWxsZXRzLnBuZ1wiLCBvcHMuaSwgMCwgNDAsIDMpLFxyXG4gICAgICAgICAgICBvcHMudCwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiYnVsbGV0XCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCkgPT4ge31cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3VXBwZXIgPSAoaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAvLyBtYWluR2FtZS5wLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgLy8gbWFpbkdhbWUucC5maWxsKDI1NSwgMCwgMjU1KTtcclxuICAgICAgICAgICAgLy9tYWluR2FtZS5wLnJlY3QodGhpcy5ib2R5Q29tcG9uZW50LngtNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktNSwgdGhpcy5ib2R5Q29tcG9uZW50LncsIHRoaXMuYm9keUNvbXBvbmVudC5oKVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMilcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjAsIHRoaXMuYm9keUNvbXBvbmVudC55LTIwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldENvbXBvbmVudCA9IG5ldyBCdWxsZXRDb21wb25lbnQodGhpcywgdGhpcy50YXJnZXQsIG1vYnMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYnVsbGV0Q29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXQ7XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IEFpclRvd2VyIGZyb20gXCIuL1Rvd2Vycy9BaXJUb3dlclwiO1xyXG5pbXBvcnQgRWFydGhUb3dlciBmcm9tIFwiLi9Ub3dlcnMvRWFydGhUb3dlclwiO1xyXG5pbXBvcnQgRmlyZVRvd2VyIGZyb20gXCIuL1Rvd2Vycy9GaXJlVG93ZXJcIjtcclxuaW1wb3J0IFdhdGVyVG93ZXIgZnJvbSBcIi4vVG93ZXJzL1dhdGVyVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyIGZyb20gXCIuL1Rvd2Vycy9TaGFkb3dUb3dlclwiO1xyXG5cclxuY2xhc3MgR2FtZUJvdHRvbU1lbnUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB0aWxlbWFwLCBtb2JzKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLm1vYnMgPSBtb2JzXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9iID0gdW5kZWZpbmVkXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLnRvd2VyQnV0dG9uc0JvZGllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IEJvZHlDb21wb25lbnQobnVsbCwgNTUgKyBpKnRpbGVTaXplICsgMjAqaSArIDE0KnRpbGVTaXplLCAxNip0aWxlU2l6ZSwgdGlsZVNpemUsIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBCb2R5Q29tcG9uZW50KG51bGwsIDU1ICsgaSp0aWxlU2l6ZSArIDIwKmkgKyAxNCp0aWxlU2l6ZSwgMTYqdGlsZVNpemUsIHRpbGVTaXplLCB0aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG93ZXJJbmRleGVzID0ge1xyXG4gICAgICAgICAgICAwOiBBaXJUb3dlcixcclxuICAgICAgICAgICAgMTogRWFydGhUb3dlcixcclxuICAgICAgICAgICAgMjogRmlyZVRvd2VyLFxyXG4gICAgICAgICAgICAzOiBXYXRlclRvd2VyLFxyXG4gICAgICAgICAgICA0OiBTaGFkb3dUb3dlclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJJID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJKID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdWkvQm90dG9tTWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVGV4dHVyZXMgPSBbXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXS5nZXQoMCwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdLmdldCg0MCwgMCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdLmdldCg0MCoyLCAwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl0uZ2V0KDQwKjMsIDAsIDQwLCA0MCksXHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXS5nZXQoNDAqNCwgMCwgNDAsIDQwKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy50b3dlckFjdGlvbnNUZXh0dXJlcyA9IFtcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCgwLCAwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2VyQWN0aW9ucy5wbmdcIl0uZ2V0KDQwLCAwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2VyQWN0aW9ucy5wbmdcIl0uZ2V0KDgwLCAwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2VyQWN0aW9ucy5wbmdcIl0uZ2V0KDAsIDQwLCA0MCwgNDApLFxyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2VyQWN0aW9ucy5wbmdcIl0uZ2V0KDQwLCA0MCwgNDAsIDQwKSxcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlckFjdGlvbnMucG5nXCJdLmdldCg4MCwgNDAsIDQwLCA0MClcclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXdVcHBlcihpbmRleCk7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlbWFwLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQudGlsZVNpemU7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMuZ2FtZS5wO1xyXG4gICAgICAgICAgICBwLmltYWdlKHRoaXMudGV4dHVyZSwgMCwgMTUqNDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnVpbGRUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJUZXh0dXJlc1syXSwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJUZXh0dXJlc1szXSwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJUZXh0dXJlc1swXSwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJUZXh0dXJlc1sxXSwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJUZXh0dXJlc1s0XSwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckJ1dHRvbnNCb2RpZXNbaV0ueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL3AucmVjdCh0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VyQnV0dG9uc0JvZGllc1tpXS55LCB0aWxlU2l6ZSwgdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgICAgIHAudGV4dChcIlRvd2VyIGNvc3Q6IDUwXCIsIDcxMCwgNzAwKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcC5yZWN0KHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnksIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLncsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDAgJiYgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsIDwgNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0IDw9IG1haW5HYW1lLm1vbmV5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyQWN0aW9uc1RleHR1cmVzW2ldLCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJBY3Rpb25zVGV4dHVyZXNbaSszXSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMSAmJiB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCA8IDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0IDw9IG1haW5HYW1lLm1vbmV5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyQWN0aW9uc1RleHR1cmVzW2ldLCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmltYWdlKHRoaXMudG93ZXJBY3Rpb25zVGV4dHVyZXNbaSszXSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbWFnZSh0aGlzLnRvd2VyQWN0aW9uc1RleHR1cmVzW2ldLCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS54LCB0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1tpXS55KVxyXG4gICAgICAgICAgICAgICAgICAgIHAuc3Ryb2tlKDApXHJcbiAgICAgICAgICAgICAgICAgICAgcC5ub0ZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDAgJiYgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsIDwgNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnksIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLncsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEgJiYgdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgPCA1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnJlY3QodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueCwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0ueSwgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0udywgdGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbaV0uaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5yZWN0KHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLngsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLnksIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLncsIHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzW2ldLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCA8IDUpXHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0K1wiXCIsIDYyMCwgNzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgPCA1KVxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dCh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0K1wiXCIsIDY4MCwgNzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnRvd2VyQ29zdC8yK1wiXCIsIDc0MCwgNzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHQoXCJUeXBlOiBcIit0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQuYXR0YWNrVHlwZSwgMjAsIDYyNSk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHQoXCJTdGF0cyBMZXZlbDogXCIrdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsLCAyMCwgNjQ1KTtcclxuICAgICAgICAgICAgICAgIHAudGV4dChcIkFiaWxpdHkgTGV2ZWw6IFwiK3RoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsLCAyMCwgNjY1KTtcclxuICAgICAgICAgICAgICAgIHAudGV4dChcIkF0dGFjayBEYW1hZ2U6IFwiK3RoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC5hdHRhY2tEYW1hZ2UsIDIwLCA2ODUpO1xyXG4gICAgICAgICAgICAgICAgcC50ZXh0KFwiQXR0YWNrIFNwZWVkOiBcIisodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LmF0dGFja1NwZWVkLnRvRml4ZWQoMikpLCAyMCwgNzA1KTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TW9iICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQoXCJNYXggSFA6IFwiK3RoaXMuY3VycmVudE1vYi5tYXhIcCwgMjAsIDYyNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KFwiRmlyZSBSZXNpc3Q6IFwiK3RoaXMuY3VycmVudE1vYi5yZXNpc3QucmVzaXN0c1tcImZpcmVcIl0udG9GaXhlZCgyKSwgMjAsIDY0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0KFwiV2F0ZXIgUmVzaXN0OiBcIit0aGlzLmN1cnJlbnRNb2IucmVzaXN0LnJlc2lzdHNbXCJ3YXRlclwiXS50b0ZpeGVkKDIpLCAyMCwgNjU1KTtcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQoXCJFYXJ0aCBSZXNpc3Q6IFwiK3RoaXMuY3VycmVudE1vYi5yZXNpc3QucmVzaXN0c1tcImVhcnRoXCJdLnRvRml4ZWQoMiksIDIwLCA2NzApO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dChcIkFpciBSZXNpc3Q6IFwiK3RoaXMuY3VycmVudE1vYi5yZXNpc3QucmVzaXN0c1tcImFpclwiXS50b0ZpeGVkKDIpLCAyMCwgNjg1KTtcclxuICAgICAgICAgICAgICAgICAgICBwLnRleHQoXCJTaGFkb3cgUmVzaXN0OiBcIit0aGlzLmN1cnJlbnRNb2IucmVzaXN0LnJlc2lzdHNbXCJzaGFkb3dcIl0udG9GaXhlZCgyKSwgMjAsIDcwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgICAgcC50ZXh0KG1haW5HYW1lLm1vbmV5LnRvU3RyaW5nKCksIHAuZ2FtZVdpZHRoLzItMTQsIHAuZ2FtZUhlaWdodC0xMDAsIDEwMCwgMjUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpIHtcclxuICAgICAgICBzdXBlci5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuZ2FtZS5wLm1vdXNlWDtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVtYXAudGlsZW1hcENvbnRhaW5lckNvbXBvbmVudC50aWxlU2l6ZTtcclxuICAgICAgICBpZiAoeSA8IDE1KnRpbGVTaXplKXtcclxuICAgICAgICAgICAgbGV0IG1hcCA9IHRoaXMudGlsZW1hcC50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50Lm1hcDtcclxuICAgICAgICAgICAgdGhpcy5jdXJySiA9IE1hdGguZmxvb3IoeCAvIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJySSA9IE1hdGguZmxvb3IoeSAvIHRpbGVTaXplKTtcclxuICAgICAgICAgICAgaWYgKG1hcFt0aGlzLmN1cnJJXVt0aGlzLmN1cnJKXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2lkc1tpXS5ib2R5Q29tcG9uZW50LnggPT0gdGhpcy5jdXJySiAqIHRpbGVTaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2lkc1tpXS5ib2R5Q29tcG9uZW50LnkgPT0gdGhpcy5jdXJySSAqIHRpbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdCA9IHRoaXMua2lkc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbW9iIG9mIHRoaXMubW9icyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vYi5ib2R5Q29tcG9uZW50Lm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb2IgPSBtb2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAwKSB7IC8vbm90aGluZ1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCdWlsZFR5cGUgPT0gMSl7IC8vdG93ZXJzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJCdXR0b25zQm9kaWVzW2ldLm1vdXNlSG92ZXIoeCwgeSkgJiYgdGhpcy50cnlCdXkoNTApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvd2VyID0gbmV3IHRoaXMudG93ZXJJbmRleGVzW2ldKHRoaXMsIHRoaXMuY3VyckoqdGlsZVNpemUsIHRoaXMuY3VyckkqdGlsZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB0b3dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0b3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9PSAyKXsgLy91cGdyYWRlcywgZGVzdHJveVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9iamVjdCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvd2VySW5zaWRlQnV0dG9uc0JvZGllc1swXS5tb3VzZUhvdmVyKHgsIHkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsICE9PSA1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyeUJ1eSh0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzQ29zdCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudG93ZXJDb3N0ICs9IHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0ICs9IHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNDb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG93ZXJJbnNpZGVCdXR0b25zQm9kaWVzWzFdLm1vdXNlSG92ZXIoeCwgeSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCAhPT0gNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cnlCdXkodGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgKz0gdGhpcy5jdXJyZW50T2JqZWN0LnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5Q29zdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlDb3N0ICs9IDIwMCAqIE1hdGguZmxvb3IoTWF0aC5wb3coMS41LCB0aGlzLmN1cnJlbnRPYmplY3QudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3dlckluc2lkZUJ1dHRvbnNCb2RpZXNbMl0ubW91c2VIb3Zlcih4LCB5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJ1aWxkVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9iamVjdC5vbkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWUubW9uZXkgKz0gIHRoaXMuY3VycmVudE9iamVjdC50b3dlckNvbXBvbmVudC50b3dlckNvc3QgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cnlCdXkocHJpY2Upe1xyXG4gICAgICAgIGlmIChtYWluR2FtZS5tb25leSA+PSBwcmljZSl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvdHRvbU1lbnU7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JBaXIwIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMjUwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDUwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL0Jvc3Nlcy5wbmdcIiwgMiwgMCwgMTYwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC01MCwgdGhpcy5ib2R5Q29tcG9uZW50LnktNTAsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjA7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JBaXIxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCA5NjApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTY7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTQsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkFpcjE7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBBaXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0FpclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkFpcjIgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxNDAsIG5ldyBBaXJSZXNpc3RDb21wb25lbnQobnVsbCksIDEwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEyNTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAxMiwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyMjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEFpclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvQWlyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iQWlyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDE0MCwgbmV3IEFpclJlc2lzdENvbXBvbmVudChudWxsKSwgNjAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNzUwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDEzLCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JBaXIzOyIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JBaXI0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTQwLCBuZXcgQWlyUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyNDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAxNSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iQWlyNDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuaW1wb3J0IEJvZHlDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvQm9keUNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgRHlpbmdPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkaWVcIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9iRmlyZTAucG5nXCIsIDMsIDAsIDgwLCA0KSwgMC4xLFxyXG4gICAgICAgICAgICBmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZGllXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSA0KjAuMSsxKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy54LTI1LCB0aGlzLnktMjUsIDkwKk1hdGguUEkvMTgwKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRHlpbmdPYmplY3Q7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAyNTApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA3LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDA7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRWFydGhSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0VhcnRoUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRWFydGgxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgODAsIG5ldyBFYXJ0aFJlc2lzdENvbXBvbmVudChudWxsKSwgNzIwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEwO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDQsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYkVhcnRoMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDUwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDEyNTA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvQm9zc2VzLnBuZ1wiLCAxLCAwLCAxNjAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTUwLCB0aGlzLmJvZHlDb21wb25lbnQueS01MCwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRWFydGgyO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkVhcnRoMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDgwLCBuZXcgRWFydGhSZXNpc3RDb21wb25lbnQobnVsbCksIDMwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDQ1MDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA2LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBFYXJ0aFJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRWFydGhSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JFYXJ0aDQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCA4MCwgbmV3IEVhcnRoUmVzaXN0Q29tcG9uZW50KG51bGwpLCAxMDAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTIwMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCA1LCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JFYXJ0aDQ7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTAgZXh0ZW5kcyBNb2Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMTAwKTtcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDI7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTA7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYkZpcmUxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTAwLCBuZXcgRmlyZVJlc2lzdENvbXBvbmVudChudWxsKSwgMTEwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxOTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAyLCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JGaXJlMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IEZpcmVSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L0ZpcmVSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JGaXJlMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEwMCwgbmV3IEZpcmVSZXNpc3RDb21wb25lbnQobnVsbCksIDIxMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNTA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMywgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzNjAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSA2MDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMCwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTM7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBGaXJlUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9GaXJlUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iRmlyZTQgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCA2MCwgdGlsZVNpemUsIHJvdXRlLCAxMDAsIG5ldyBGaXJlUmVzaXN0Q29tcG9uZW50KG51bGwpLCAzMDAwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvQm9zc2VzLnBuZ1wiLCA0LCAwLCAxNjAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTUwLCB0aGlzLmJvZHlDb21wb25lbnQueS01MCwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iRmlyZTQ7XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IE1vYk1vdmluZ0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Nb2JNb3ZpbmdDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBIUFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvSFBSZW5kZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IER5aW5nT2JqZWN0IGZyb20gXCIuL0R5aW5nT2JqZWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZUVtaXR0ZXIgZnJvbSBcIi4uL1BhcnRpY2xlRW1pdHRlclwiO1xyXG5pbXBvcnQgRmlyZVJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvRmlyZVJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWlyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9BaXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEVhcnRoUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9FYXJ0aFJlc2lzdENvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgTW9iIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgc2l6ZSwgdGlsZVNpemUsIHJvdXRlLCB0dXJuVGltZSwgcmVzaXN0LCBocCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAyO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLm1heEhwID0gaHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IGhwO1xyXG4gICAgICAgIHRoaXMucmVzaXN0ID0gcmVzaXN0O1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBzaXplLCBzaXplKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIC8vdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCA9IG5ldyBNb2JNb3ZpbmdDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCByb3V0ZSwgdGlsZVNpemUsIHR1cm5UaW1lKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLm1vYk1vdmluZ0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHBSZW5kZXJDb21wb25lbnQgPSBuZXcgSFBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmhwUmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBpZih0aGlzLmhwID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLm1vbmV5ICs9IHRoaXMuYm91bnR5O1xyXG4gICAgICAgICAgICAvLyBsZXQgZHlpbmdPYmplY3QgPSBuZXcgRHlpbmdPYmplY3QodGhpcy5nYW1lLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWUuc3RhdGUuYWRkR2FtZU9iamVjdChkeWluZ09iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSB7cjowLCBnOjAsIGI6MH07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEZpcmVSZXNpc3RDb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnIgPSAyMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpc3QgaW5zdGFuY2VvZiBXYXRlclJlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDIwMDtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIFNoYWRvd1Jlc2lzdENvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuciA9IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5iID0gMTUwO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXN0IGluc3RhbmNlb2YgQWlyUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5nID0gODA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMuYiA9IDI1NTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2lzdCBpbnN0YW5jZW9mIEVhcnRoUmVzaXN0Q29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5yID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLmcgPSAxODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgUGFydGljbGVFbWl0dGVyKHRoaXMuZ2FtZSwgMjAsIGNvbG9ycy5yLCBjb2xvcnMuZywgY29sb3JzLmIpO1xyXG4gICAgICAgICAgICBlbWl0dGVyLnNldExvY2F0aW9uKHRoaXMuYm9keUNvbXBvbmVudC54K3RoaXMuYm9keUNvbXBvbmVudC53LzIsIHRoaXMuYm9keUNvbXBvbmVudC55K3RoaXMuYm9keUNvbXBvbmVudC5oLzIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuYWRkR2FtZU9iamVjdChlbWl0dGVyKTtcclxuICAgICAgICAgICAgZW1pdHRlci5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKHRvd2VyLCBjb2VmKXtcclxuICAgICAgICBsZXQgcHVyZURhbWFnZSA9IHRvd2VyLnRvd2VyQ29tcG9uZW50LmF0dGFja0RhbWFnZSpjb2VmO1xyXG4gICAgICAgIGxldCBkYW1hZ2UgPSBwdXJlRGFtYWdlICogdGhpcy5yZXNpc3QucmVzaXN0c1t0b3dlci50b3dlckNvbXBvbmVudC5hdHRhY2tUeXBlXTtcclxuICAgICAgICBpZih0aGlzLmhwIDwgZGFtYWdlKXtcclxuICAgICAgICAgICAgdGhpcy5ocCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgc3VwZXIuZHJhd1VwcGVyKGluZGV4KTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTYsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzA7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgU2hhZG93UmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9TaGFkb3dSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JTaGFkb3cxIGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgNjAsIHRpbGVTaXplLCByb3V0ZSwgMTIwLCBuZXcgU2hhZG93UmVzaXN0Q29tcG9uZW50KG51bGwpLCA2MDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDIwMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Cb3NzZXMucG5nXCIsIDMsIDAsIDE2MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtNTAsIHRoaXMuYm9keUNvbXBvbmVudC55LTUwLCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JTaGFkb3cxO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93MiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgNDMwMCk7XHJcbiAgICAgICAgdGhpcy5yZXNpc3QuaG9zdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib3VudHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTcsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzI7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBTaGFkb3dSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1NoYWRvd1Jlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYlNoYWRvdzMgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMjAsIG5ldyBTaGFkb3dSZXNpc3RDb21wb25lbnQobnVsbCksIDE1MDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDMwMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Nb2JzTmV3LnBuZ1wiLCAxOCwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iU2hhZG93MzsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFNoYWRvd1Jlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvU2hhZG93UmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iU2hhZG93NCBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDEyMCwgbmV3IFNoYWRvd1Jlc2lzdENvbXBvbmVudChudWxsKSwgMjAwMDAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDE4MDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTksIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYlNoYWRvdzQ7IiwiaW1wb3J0IE1vYiBmcm9tIFwiLi4vTW9iXCI7XHJcbmltcG9ydCBXYXRlclJlc2lzdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9SZXNpc3QvV2F0ZXJSZXNpc3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uVXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL0FuaW1hdGlvblV0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2JXYXRlcjAgZXh0ZW5kcyBNb2Ige1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdGlsZVNpemUsIHJvdXRlKXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAzMCwgdGlsZVNpemUsIHJvdXRlLCAxMTAsIG5ldyBXYXRlclJlc2lzdENvbXBvbmVudChudWxsKSwgMzAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgOSwgMCwgODAsIDMpLFxyXG4gICAgICAgICAgICAwLjEsIHRydWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuc2V0Q3VycmVudEFuaW1hdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5hbmltYXRpb25Db250cm9sbGVyKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUodGhpcy5hbmltYXRpb25Db250cm9sbGVyLmN1cnJlbnRBbmltLmdldEZyYW1lKCksIHRoaXMuYm9keUNvbXBvbmVudC54LTI1LCB0aGlzLmJvZHlDb21wb25lbnQueS0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iV2F0ZXIwO1xyXG4iLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMSBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCA3NTApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gMTM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyID0gbmV3IEFuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLmFkZEFuaW1hdGlvbihcImRvd25cIiwgbmV3IEFuaW1hdGlvbihcclxuICAgICAgICAgICAgQW5pbWF0aW9uVXRpbHMuZ2V0RnJhbWVzKFwiYXNzZXRzL21vYnMvTW9ic05ldy5wbmdcIiwgMTAsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMTsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMiBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDMwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCA0MjAwKTtcclxuICAgICAgICB0aGlzLnJlc2lzdC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJvdW50eSA9IDc1O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDgsIDAsIDgwLCAzKSxcclxuICAgICAgICAgICAgMC4xLCB0cnVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250cm9sbGVyLnNldEN1cnJlbnRBbmltYXRpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5jdXJyZW50QW5pbS5nZXRGcmFtZSgpLCB0aGlzLmJvZHlDb21wb25lbnQueC0yNSwgdGhpcy5ib2R5Q29tcG9uZW50LnktMjUsIHRoaXMuYm9keUNvbXBvbmVudC5hbmdsZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYldhdGVyMjsiLCJpbXBvcnQgTW9iIGZyb20gXCIuLi9Nb2JcIjtcclxuaW1wb3J0IFdhdGVyUmVzaXN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Jlc2lzdC9XYXRlclJlc2lzdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCBBbmltYXRpb25VdGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvQW5pbWF0aW9uVXRpbHNcIjtcclxuXHJcbmNsYXNzIE1vYldhdGVyMyBleHRlbmRzIE1vYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aWxlU2l6ZSwgcm91dGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIDYwLCB0aWxlU2l6ZSwgcm91dGUsIDExMCwgbmV3IFdhdGVyUmVzaXN0Q29tcG9uZW50KG51bGwpLCA0MDAwMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYm91bnR5ID0gNjAwMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgQW5pbWF0aW9uQ29udHJvbGxlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuYWRkQW5pbWF0aW9uKFwiZG93blwiLCBuZXcgQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBBbmltYXRpb25VdGlscy5nZXRGcmFtZXMoXCJhc3NldHMvbW9icy9Cb3NzZXMucG5nXCIsIDAsIDAsIDE2MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtNTAsIHRoaXMuYm9keUNvbXBvbmVudC55LTUwLCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjM7XHJcbiIsImltcG9ydCBNb2IgZnJvbSBcIi4uL01vYlwiO1xyXG5pbXBvcnQgV2F0ZXJSZXNpc3RDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvUmVzaXN0L1dhdGVyUmVzaXN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL0FuaW1hdGlvbkNvbnRyb2xsZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEFuaW1hdGlvblV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9BbmltYXRpb25VdGlsc1wiO1xyXG5cclxuY2xhc3MgTW9iV2F0ZXI0IGV4dGVuZHMgTW9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHRpbGVTaXplLCByb3V0ZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgMzAsIHRpbGVTaXplLCByb3V0ZSwgMTEwLCBuZXcgV2F0ZXJSZXNpc3RDb21wb25lbnQobnVsbCksIDIzMDApO1xyXG4gICAgICAgIHRoaXMucmVzaXN0Lmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBBbmltYXRpb25Db250cm9sbGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5hZGRBbmltYXRpb24oXCJkb3duXCIsIG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgIEFuaW1hdGlvblV0aWxzLmdldEZyYW1lcyhcImFzc2V0cy9tb2JzL01vYnNOZXcucG5nXCIsIDExLCAwLCA4MCwgMyksXHJcbiAgICAgICAgICAgIDAuMSwgdHJ1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29udHJvbGxlci5zZXRDdXJyZW50QW5pbWF0aW9uKFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLmFuaW1hdGlvbkNvbnRyb2xsZXIuY3VycmVudEFuaW0uZ2V0RnJhbWUoKSwgdGhpcy5ib2R5Q29tcG9uZW50LngtMjUsIHRoaXMuYm9keUNvbXBvbmVudC55LTI1LCB0aGlzLmJvZHlDb21wb25lbnQuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JXYXRlcjQ7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuXHJcbmNsYXNzIFBhcnRpY2xlRW1pdHRlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNvdW50LCByLCBnLCBiKXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy52eG1heCA9IDEwMDtcclxuICAgICAgICB0aGlzLnZ5bWF4ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2F0aW9uKHgsIHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBwID0ge307XHJcbiAgICAgICAgICAgICAgICBwLnggPSB0aGlzLng7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSB0aGlzLnk7XHJcbiAgICAgICAgICAgICAgICBwLnIgPSB0aGlzLnI7XHJcbiAgICAgICAgICAgICAgICBwLmcgPSB0aGlzLmc7XHJcbiAgICAgICAgICAgICAgICBwLmIgPSB0aGlzLmI7XHJcbiAgICAgICAgICAgICAgICBwLnZ4ID0gTWF0aC5yYW5kb20oKSp0aGlzLnZ4bWF4KjItdGhpcy52eG1heDtcclxuICAgICAgICAgICAgICAgIHAudnkgPSBNYXRoLnJhbmRvbSgpKnRoaXMudnltYXgqMi10aGlzLnZ5bWF4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLnggKz0gZGVsdGEgKiB0aGlzLnBhcnRpY2xlc1tpXS52eDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ueSArPSBkZWx0YSAqIHRoaXMucGFydGljbGVzW2ldLnZ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IDIpe1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zdGF0ZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gdGhpcy5wYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkdhbWUucC5ub1N0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1haW5HYW1lLnAuZmlsbChwYXJ0LnIsIHBhcnQuZywgcGFydC5iKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWluR2FtZS5wLnJlY3QocGFydC54LCBwYXJ0LnksIDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlY3QocGFydC54LCBwYXJ0LnksIDQsIDQsIHBhcnQuciwgcGFydC5nLCBwYXJ0LmIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZUVtaXR0ZXI7IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IFRpbGVtYXBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1RpbGVtYXAvVGlsZW1hcFJlbmRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgVGlsZW1hcENvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9UaWxlbWFwQ29udGFpbmVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBUaWxlbWFwIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwQ29udGFpbmVyQ29tcG9uZW50ID0gbmV3IFRpbGVtYXBDb250YWluZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgVGlsZW1hcFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLnRpbGVtYXBDb250YWluZXJDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRpbGVtYXA7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBBaXJUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvQWlyVG93ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBaXJUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IEFpclRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gdGhpcy50ZXh0dXJlLmdldCgyKjQwLCAwLCA0MCwgNDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+e1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmltYWdlKHRoaXMucmVjdCwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy9tYWluR2FtZS5wLnRleHQodGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCtcIiBcIit0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgLHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgYWxsVG93ZXJzID0gbWFpbkdhbWUuc3RhdGUuZ2FtZU1lbnVCb3R0b20ua2lkcztcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhbGxUb3dlcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLnRvd2VyQ29tcG9uZW50LmF0dGFja1R5cGUgIT0gXCJhaXJcIil7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsVG93ZXJzW2ldLmJvZHlDb21wb25lbnQuZGlzdGFuY2VUbyh0aGlzLmJvZHlDb21wb25lbnQpIDwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRvd2Vyc1tpXS5idWZmc0NvbXBvbmVudC5jYW5jZWxCdWZmKFwic3BlZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWlyVG93ZXI7XHJcbiIsImltcG9ydCBUb3dlciBmcm9tIFwiLi9Ub3dlclwiO1xyXG5pbXBvcnQgRWFydGhUb3dlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Ub3dlcnMvRWFydGhUb3dlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEVhcnRoVG93ZXIgZXh0ZW5kcyBUb3dlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy50b3dlckNvbXBvbmVudCA9IG5ldyBFYXJ0aFRvd2VyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJDb21wb25lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBtYWluR2FtZS5wLmdpbWFnZXNbXCJhc3NldHMvdG93ZXJzL1Rvd2Vycy5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5yZWN0ID0gdGhpcy50ZXh0dXJlLmdldCgzKjQwLCAwLCA0MCwgNDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+e1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmltYWdlKHRoaXMucmVjdCwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy9tYWluR2FtZS5wLnRleHQodGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCtcIiBcIit0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgLHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgRWFydGhUb3dlcjtcclxuIiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBGaXJlVG93ZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL0ZpcmVUb3dlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEZpcmVUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IEZpcmVUb3dlckNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnRvd2VyQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbWFpbkdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3Rvd2Vycy9Ub3dlcnMucG5nXCJdO1xyXG4gICAgICAgIHRoaXMucmVjdCA9IHRoaXMudGV4dHVyZS5nZXQoMCwgMCwgNDAsIDQwKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCBudWxsKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kcmF3ID0gKCk9PntcclxuICAgICAgICAgICAgbWFpbkdhbWUucC5pbWFnZSh0aGlzLnJlY3QsIHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSk7XHJcbiAgICAgICAgICAgIC8vbWFpbkdhbWUucC50ZXh0KHRoaXMudG93ZXJDb21wb25lbnQudXBncmFkZVN0YXRzTGV2ZWwrXCIgXCIrdGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlQWJpbGl0eUxldmVsICx0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIDQwLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMucmVuZGVyQ29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlyZVRvd2VyO1xyXG4iLCJpbXBvcnQgVG93ZXIgZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IFNoYWRvd1Rvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9TaGFkb3dUb3dlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVuZGVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFNoYWRvd1Rvd2VyIGV4dGVuZHMgVG93ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJDb21wb25lbnQgPSBuZXcgU2hhZG93VG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXTtcclxuICAgICAgICB0aGlzLnJlY3QgPSB0aGlzLnRleHR1cmUuZ2V0KDQqNDAsIDAsIDQwLCA0MCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBuZXcgUmVuZGVyQ29tcG9uZW50KHRoaXMsIHRoaXMuYm9keUNvbXBvbmVudCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZHJhdyA9ICgpPT57XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAuaW1hZ2UodGhpcy5yZWN0LCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnkpO1xyXG4gICAgICAgICAgICAvL21haW5HYW1lLnAudGV4dCh0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVTdGF0c0xldmVsK1wiIFwiK3RoaXMudG93ZXJDb21wb25lbnQudXBncmFkZUFiaWxpdHlMZXZlbCAsdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55LCA0MCwgNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRvd1Rvd2VyO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9sb2dpYy9Cb2R5Q29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVG93ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJvZHlDb21wb25lbnQgPSBuZXcgQm9keUNvbXBvbmVudCh0aGlzLCB4LCB5LCBtYWluR2FtZS50aWxlU2l6ZSwgbWFpbkdhbWUudGlsZVNpemUpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG93ZXI7XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUb3dlckJ1aWxkZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvbG9naWMvVG93ZXJzL1Rvd2VyQnVpbGRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgVG93ZXJCdWlsZGVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdGlsZW1hcCl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJ1aWxkZXJDb21wb25lbnQgPSBuZXcgVG93ZXJCdWlsZGVyQ29tcG9uZW50KHRoaXMsIHRpbGVtYXApO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMudG93ZXJCdWlsZGVyQ29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3dlckJ1aWxkZXI7IiwiaW1wb3J0IFRvd2VyIGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCBXYXRlclRvd2VyQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL2xvZ2ljL1Rvd2Vycy9XYXRlclRvd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZW5kZXJDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvcmVuZGVyL1JlbmRlckNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F0ZXJUb3dlciBleHRlbmRzIFRvd2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KXtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5KTtcclxuICAgICAgICB0aGlzLnRvd2VyQ29tcG9uZW50ID0gbmV3IFdhdGVyVG93ZXJDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy50b3dlckNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy90b3dlcnMvVG93ZXJzLnBuZ1wiXTtcclxuICAgICAgICB0aGlzLnJlY3QgPSB0aGlzLnRleHR1cmUuZ2V0KDQwLCAwLCA0MCwgNDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gbmV3IFJlbmRlckNvbXBvbmVudCh0aGlzLCB0aGlzLmJvZHlDb21wb25lbnQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmRyYXcgPSAoKT0+e1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmltYWdlKHRoaXMucmVjdCwgdGhpcy5ib2R5Q29tcG9uZW50LngsIHRoaXMuYm9keUNvbXBvbmVudC55KTtcclxuICAgICAgICAgICAgLy9tYWluR2FtZS5wLnRleHQodGhpcy50b3dlckNvbXBvbmVudC51cGdyYWRlU3RhdHNMZXZlbCtcIiBcIit0aGlzLnRvd2VyQ29tcG9uZW50LnVwZ3JhZGVBYmlsaXR5TGV2ZWwgLHRoaXMuYm9keUNvbXBvbmVudC54LCB0aGlzLmJvZHlDb21wb25lbnQueSwgNDAsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXRlclRvd2VyO1xyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgV2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL1dhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgV2F2ZU1hc3RlciBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHRpbGVtYXApe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hc3RlckxvZ2ljQ29tcG9uZW50ID0gbmV3IFdhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCh0aGlzLCB0aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLndhdmVNYXN0ZXJMb2dpY0NvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYXZlTWFzdGVyOyIsImltcG9ydCBCdWZmc0NvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50cy9sb2dpYy9CdWZmcy9CdWZmc0NvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmtpZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLy9idWZmc1xyXG4gICAgICAgIHRoaXMuYnVmZnNDb21wb25lbnQgPSBuZXcgQnVmZnNDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cyA9IHt9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdSZWN0KHgsIHksIHcsIGgsIHIsIGcsIGIpe1xyXG4gICAgICAgIGxldCBwID0gbWFpbkdhbWUucDtcclxuICAgICAgICBwLnB1c2goKTtcclxuICAgICAgICBsZXQgaGFsZldpZHRoID0gdyowLjU7XHJcbiAgICAgICAgbGV0IGhhbGZIZWlnaHQgPSBoKjAuNTtcclxuICAgICAgICBwLnRyYW5zbGF0ZSh4K2hhbGZXaWR0aCwgeStoYWxmSGVpZ2h0KTtcclxuICAgICAgICBwLmZpbGwociwgZywgYik7XHJcbiAgICAgICAgcC5yZWN0KC1oYWxmV2lkdGgsIC1oYWxmSGVpZ2h0LCB3LCBoKTtcclxuICAgICAgICBwLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGUoaW1hZ2UsIHgsIHksIGFuZ2xlKXtcclxuICAgICAgICBsZXQgcCA9IG1haW5HYW1lLnA7XHJcbiAgICAgICAgcC5wdXNoKCk7XHJcbiAgICAgICAgbGV0IGhhbGZXaWR0aCA9IGltYWdlLndpZHRoKjAuNTtcclxuICAgICAgICBsZXQgaGFsZkhlaWdodCA9IGltYWdlLmhlaWdodCowLjU7XHJcbiAgICAgICAgcC50cmFuc2xhdGUoeCtoYWxmV2lkdGgsIHkraGFsZkhlaWdodCk7XHJcbiAgICAgICAgcC5yb3RhdGUoKC05MCAqIHAuUEkgLyAxODApK2FuZ2xlKTtcclxuICAgICAgICBwLmltYWdlKGltYWdlLCAtaW1hZ2Uud2lkdGgqMC41LCAtaW1hZ2UuaGVpZ2h0KjAuNSk7XHJcbiAgICAgICAgcC5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdVcHBlcihpbmRleCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLmRyYXdVcHBlcihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZENvbXBvbmVudChjKXtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoYyl7XHJcbiAgICAgICAgdGhpcy5raWRzLnB1c2goYyk7XHJcbiAgICAgICAgYy5wYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tUGFyZW50KCl7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnN0YXRlLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNvbXBvbmVudChjKXtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5raWRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlQ2xpY2tlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VQcmVzc2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VQcmVzc2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZURyYWdnZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0OyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBCb2R5Q29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2xvZ2ljL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBvbkFjdGlvbil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgeCAtPSAxNjcvMjtcclxuICAgICAgICB5IC09IDczLzI7XHJcbiAgICAgICAgdGhpcy5vbkFjdGlvbiA9IG9uQWN0aW9uO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IG5ldyBCb2R5Q29tcG9uZW50KHRoaXMsIHgsIHksIDE2NywgNzMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25JbWFnZSA9IGdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3VpL2J1dHRvbnNfbWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9pZGxlID0gYnV0dG9uSW1hZ2UuZ2V0KDAsIDczLCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkltYWdlX2hvdmVyID0gYnV0dG9uSW1hZ2UuZ2V0KDAsIDAsIDE2NywgNzMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCB0aGlzLmJ1dHRvbkltYWdlX2lkbGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LnVwZGF0ZSA9IChkZWx0YSk9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQubWFpbk1vdXNlSG92ZXIoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaG92ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbWFnZSA9IHRoaXMuYnV0dG9uSW1hZ2VfaWRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5tb3VzZVByZXNzZWQgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50Lm1haW5Nb3VzZUhvdmVyKCkpXHJcbiAgICAgICAgICAgICAgICBvbkFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudCh0aGlzLnJlbmRlckNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG4gXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IE1lbnVTdGF0ZSBmcm9tIFwiLi9NZW51U3RhdGVcIjtcclxuXHJcbmNsYXNzIEVuZFN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHZpY3Rvcnkpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudmljdG9yeSA9IHZpY3Rvcnk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSA0KXtcclxuICAgICAgICAgICAgbWFpbkdhbWUuc2V0U3RhdGUobmV3IE1lbnVTdGF0ZShtYWluR2FtZSkpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSl7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAudGV4dChcIlZJQ1RPUllcIiwgbWFpbkdhbWUucC5nYW1lV2lkdGgvMi0xMywgbWFpbkdhbWUucC5nYW1lSGVpZ2h0LzItNDgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1haW5HYW1lLnAudGV4dChcIkRFRkVBVFwiLCBtYWluR2FtZS5wLmdhbWVXaWR0aC8yLTEzLCBtYWluR2FtZS5wLmdhbWVIZWlnaHQvMi00OCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW5kU3RhdGU7XHJcbiIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi9TdGF0ZVwiO1xyXG5pbXBvcnQgVGlsZW1hcCBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL1RpbGVtYXBcIjtcclxuaW1wb3J0IFdhdmVNYXN0ZXIgZnJvbSBcIi4uL09iamVjdHMvR2FtZS9XYXZlTWFzdGVyXCI7XHJcbmltcG9ydCBNb2IgZnJvbSBcIi4uL09iamVjdHMvR2FtZS9Nb2JzL01vYlwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCBUb3dlckJ1aWxkZXIgZnJvbSBcIi4uL09iamVjdHMvR2FtZS9Ub3dlcnMvVG93ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBHYW1lQm90dG9tTWVudSBmcm9tIFwiLi4vT2JqZWN0cy9HYW1lL0dhbWVCb3R0b21NZW51XCI7XHJcbmltcG9ydCBNZW51U3RhdGUgZnJvbSBcIi4vTWVudVN0YXRlXCI7XHJcblxyXG5jbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgZ2FtZS5tb25leSA9IDEwMDtcclxuICAgICAgICBnYW1lLmxpZmVzID0gMTA7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gbmV3IFRpbGVtYXAoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMudGlsZW1hcCk7XHJcbiAgICAgICAgdGhpcy53YXZlTWFzdGVyID0gbmV3IFdhdmVNYXN0ZXIoZ2FtZSwgdGhpcy50aWxlbWFwKTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QodGhpcy53YXZlTWFzdGVyKTtcclxuICAgICAgICAvLyB0aGlzLnRvd2VyQnVpbGRlciA9IG5ldyBUb3dlckJ1aWxkZXIoZ2FtZSwgdGhpcy50aWxlbWFwKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEdhbWVPYmplY3QodGhpcy50b3dlckJ1aWxkZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU1lbnVCb3R0b20gPSBuZXcgR2FtZUJvdHRvbU1lbnUoZ2FtZSwgdGhpcy50aWxlbWFwLCB0aGlzLndhdmVNYXN0ZXIua2lkcyk7XHJcbiAgICAgICAgdGhpcy5hZGRHYW1lT2JqZWN0KHRoaXMuZ2FtZU1lbnVCb3R0b20pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzZWQoKSB7XHJcbiAgICAgICAgc3VwZXIua2V5UHJlc3NlZCgpO1xyXG4gICAgICAgIGlmIChtYWluR2FtZS5wLmtleUNvZGUgPT0gbWFpbkdhbWUucC5FU0NBUEUpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5zZXRTdGF0ZShuZXcgTWVudVN0YXRlKG1haW5HYW1lKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFpbkdhbWUucC5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gIXRoaXMucnVubmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIG1haW5HYW1lLnAuZmlsbCgyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgbWFpbkdhbWUucC50ZXh0KFwiTGl2ZXM6IFwiK21haW5HYW1lLmxpZmVzLCAxNSwgMjUpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlO1xyXG4iLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vT2JqZWN0cy9NZW51L0J1dHRvblwiO1xyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5cclxuY2xhc3MgTWVudVN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMSA9IG5ldyBCdXR0b24oZ2FtZSwgZ2FtZS5wLmdhbWVXaWR0aC8yLCBnYW1lLnAuZ2FtZUhlaWdodC8yLTMwLCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QodGhpcy5idXR0b24xKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgbWFpbkdhbWUuc2V0U3RhdGUobmV3IEdhbWVTdGF0ZShtYWluR2FtZSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICBtYWluR2FtZS5wLmltYWdlKG1haW5HYW1lLnAuZ2ltYWdlc1tcImFzc2V0cy9NZW51UG9zdGVyLmpwZ1wiXSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24xLnJlbmRlckNvbXBvbmVudC5kcmF3KCk7XHJcbiAgICAgICAgbWFpbkdhbWUucC5maWxsKDI1NSwgMjU1LCAwKVxyXG4gICAgICAgIG1haW5HYW1lLnAudGV4dChcIlN0YXJ0XCIsIG1haW5HYW1lLnAuZ2FtZVdpZHRoLzItMTMsIG1haW5HYW1lLnAuZ2FtZUhlaWdodC8yLTI4KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTdGF0ZTtcclxuIiwiY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEdhbWVPYmplY3Qobyl7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5wdXNoKG8pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVHYW1lT2JqZWN0KG8pe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGlmICAodGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGlmICAodGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG4gICAgICAgIGlmICAodGhpcy5ydW5uaW5nKVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgaWYgICh0aGlzLnJ1bm5pbmcpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0udXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0uZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpe1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLmZpbGwoMjU1LCAyNTUsIDApO1xyXG4gICAgICAgICAgICBtYWluR2FtZS5wLnRleHQoXCJQQVVTRVwiLCBtYWluR2FtZS5wLmdhbWVXaWR0aC8yLTEzLCBtYWluR2FtZS5wLmdhbWVIZWlnaHQvMi00OCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1VwcGVyKGluZGV4KXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmdhbWVPYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0c1tpXS5kcmF3VXBwZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzZWQoKXtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==