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



let game;

const s = (p) => {

    let lastTime;
    let currTime;

    p.crop = function(image, x, y, w, h){
        var cropped = p.createImage(w, h);
        cropped.copy(image, x, y, x + w, y + h, 0, 0, x + w, y + h)
        return cropped;

    }

    p.imagesArray = ["assets/ui/buttons_menu.png"];
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
        let canvas = p.createCanvas(960, 720);

        lastTime = (new Date()).getTime();
        currTime = 0;

        game = new _scripts_Game__WEBPACK_IMPORTED_MODULE_0__["default"](p);
        game.setState(new _scripts_States_MenuState__WEBPACK_IMPORTED_MODULE_1__["default"](game));
    
    };
    
    p.draw = function() {
        currTime = (new Date()).getTime();
        let delta = (currTime - lastTime)/1000;

        p.background(0);

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

    mouseClicked(){

    }

    mousePressed(){

    }

    mouseDragged(){

    }

}
/* harmony default export */ __webpack_exports__["default"] = (GameComponent);

/***/ }),

/***/ "./src/scripts/Components/physics/BodyComponent.js":
/*!*********************************************************!*\
  !*** ./src/scripts/Components/physics/BodyComponent.js ***!
  \*********************************************************/
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

}
/* harmony default export */ __webpack_exports__["default"] = (BodyComponent);

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
        this.width = image.width;
        this.height = image.height;
        this.scale = 1;

    }

    update(delta){
        this.width = this.image.width*this.scale;
        this.height = this.image.height*this.scale;

    }

    draw(){
        this.host.game.p.image(this.image, this.bodyComponent.x, this.bodyComponent.y, this.width, this.height);

    }

}
/* harmony default export */ __webpack_exports__["default"] = (RenderComponent);

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;

    }

    setState(state){
        this.state = state;

    }

    update(delta){
        this.state.update(delta);

    }

    draw(){
        this.state.draw();

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

/***/ "./src/scripts/Objects/GameObject.js":
/*!*******************************************!*\
  !*** ./src/scripts/Objects/GameObject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameObject {

    constructor(game){
        this.game = game;
        this.components = [];
        this.kids = [];

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

    addComponent(c){
        this.components.push(c);

    }

    addChild(c){
        this.kids.push(c);

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
/* harmony import */ var _Components_physics_BodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/physics/BodyComponent */ "./src/scripts/Components/physics/BodyComponent.js");
/* harmony import */ var _Components_render_RenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/render/RenderComponent */ "./src/scripts/Components/render/RenderComponent.js");




class Button extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(game, x, y, onAction){
        super(game);
        x -= 167/2;
        y -= 73/2;
        this.onAction = onAction;
        this.bodyComponent = new _Components_physics_BodyComponent__WEBPACK_IMPORTED_MODULE_1__["default"](this, x, y, 167, 73);
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

}
/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0NvbXBvbmVudHMvR2FtZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3BoeXNpY3MvQm9keUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Db21wb25lbnRzL3JlbmRlci9SZW5kZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9PYmplY3RzL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvT2JqZWN0cy9NZW51L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1N0YXRlcy9TdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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QTtBQUNBLGlDQUFpQyx5RUFBYTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLDBFQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDbkNyQjtBQUFBO0FBQUE7QUFBNEI7QUFDZ0I7O0FBRTVDLHdCQUF3Qiw4Q0FBSzs7QUFFN0I7QUFDQTtBQUNBLDBCQUEwQiw0REFBTTtBQUNoQztBQUNBLFNBQVM7QUFDVDtBQUNBLDBCQUEwQiw0REFBTTtBQUNoQztBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUM3QnhCO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNlLG9FQUFLLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9HYW1lXCI7XHJcbmltcG9ydCBNZW51U3RhdGUgZnJvbSBcIi4vc2NyaXB0cy9TdGF0ZXMvTWVudVN0YXRlXCI7XHJcblxyXG5sZXQgZ2FtZTtcclxuXHJcbmNvbnN0IHMgPSAocCkgPT4ge1xyXG5cclxuICAgIGxldCBsYXN0VGltZTtcclxuICAgIGxldCBjdXJyVGltZTtcclxuXHJcbiAgICBwLmNyb3AgPSBmdW5jdGlvbihpbWFnZSwgeCwgeSwgdywgaCl7XHJcbiAgICAgICAgdmFyIGNyb3BwZWQgPSBwLmNyZWF0ZUltYWdlKHcsIGgpO1xyXG4gICAgICAgIGNyb3BwZWQuY29weShpbWFnZSwgeCwgeSwgeCArIHcsIHkgKyBoLCAwLCAwLCB4ICsgdywgeSArIGgpXHJcbiAgICAgICAgcmV0dXJuIGNyb3BwZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAuaW1hZ2VzQXJyYXkgPSBbXCJhc3NldHMvdWkvYnV0dG9uc19tZW51LnBuZ1wiXTtcclxuICAgIHAuc291bmRzQXJyYXkgPSBbXCJhc3NldHMvSnVtcDMud2F2XCJdO1xyXG5cclxuICAgIHAuZ2ltYWdlcyA9IHt9O1xyXG4gICAgcC5nc291bmRzID0ge307XHJcblxyXG4gICAgcC5nYW1lV2lkdGggPSA5NjA7XHJcbiAgICBwLmdhbWVIZWlnaHQgPSA3MjA7XHJcblxyXG4gICAgcC5sb2FkR2FtZUltYWdlID0gZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICBwLmdpbWFnZXNbc3RyXSA9IHAubG9hZEltYWdlKHN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubG9hZEdhbWVTb3VuZCA9IGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgcC5nc291bmRzW3N0cl0gPSBwLmxvYWRTb3VuZChzdHIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLmltYWdlc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZUltYWdlKHAuaW1hZ2VzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwLnNvdW5kc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcC5sb2FkR2FtZVNvdW5kKHAuc291bmRzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gcC5jcmVhdGVDYW52YXMoOTYwLCA3MjApO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY3VyclRpbWUgPSAwO1xyXG5cclxuICAgICAgICBnYW1lID0gbmV3IEdhbWUocCk7XHJcbiAgICAgICAgZ2FtZS5zZXRTdGF0ZShuZXcgTWVudVN0YXRlKGdhbWUpKTtcclxuICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3VyclRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBkZWx0YSA9IChjdXJyVGltZSAtIGxhc3RUaW1lKS8xMDAwO1xyXG5cclxuICAgICAgICBwLmJhY2tncm91bmQoMCk7XHJcblxyXG4gICAgICAgIGdhbWUudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBnYW1lLmRyYXcocCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZTtcclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwLm1vdXNlQ2xpY2tlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZ2FtZS5tb3VzZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcC5tb3VzZVByZXNzZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdhbWUubW91c2VQcmVzc2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAubW91c2VEcmFnZ2VkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnYW1lLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBnYW1lcDUgPSBuZXcgcDUocywgXCJtYWluXCIpO1xyXG5cclxuXHJcbiIsImNsYXNzIEdhbWVDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Qpe1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VDbGlja2VkKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURyYWdnZWQoKXtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVDb21wb25lbnQ7IiwiaW1wb3J0IEdhbWVDb21wb25lbnQgZnJvbSBcIi4uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIEJvZHlDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCB4LCB5LCB3LCBoKXtcclxuICAgICAgICBzdXBlcihob3N0KTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUhvdmVyKCl7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHRoaXMuaG9zdC5nYW1lLnAubW91c2VYO1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSB0aGlzLmhvc3QuZ2FtZS5wLm1vdXNlWTtcclxuICAgICAgICBpZiAobW91c2VYID49IHRoaXMueCAmJiBtb3VzZVggPCB0aGlzLngrdGhpcy53KXtcclxuICAgICAgICAgICAgaWYgKG1vdXNlWSA+PSB0aGlzLnkgJiYgbW91c2VZIDwgdGhpcy55K3RoaXMuaCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxhcHMoYm9keUNvbXBvbmVudCl7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IGJvZHlDb21wb25lbnQueCArIGJvZHlDb21wb25lbnQudyAmJlxyXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLncgPiBib2R5Q29tcG9uZW50LnggJiZcclxuICAgICAgICAgICAgdGhpcy55IDwgYm9keUNvbXBvbmVudC55ICsgYm9keUNvbXBvbmVudC5oICYmXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaCA+IGJvZHlDb21wb25lbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCb2R5Q29tcG9uZW50OyIsImltcG9ydCBHYW1lQ29tcG9uZW50IGZyb20gXCIuLi9HYW1lQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBSZW5kZXJDb21wb25lbnQgZXh0ZW5kcyBHYW1lQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBib2R5Q29tcG9uZW50LCBpbWFnZSl7XHJcbiAgICAgICAgc3VwZXIoaG9zdCk7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50ID0gYm9keUNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpe1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoKnRoaXMuc2NhbGU7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodCp0aGlzLnNjYWxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5ob3N0LmdhbWUucC5pbWFnZSh0aGlzLmltYWdlLCB0aGlzLmJvZHlDb21wb25lbnQueCwgdGhpcy5ib2R5Q29tcG9uZW50LnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNvbXBvbmVudDsiLCJjbGFzcyBHYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwKXtcclxuICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kcmF3KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1vdXNlUHJlc3NlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VDbGlja2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUubW91c2VEcmFnZ2VkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIEdhbWVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5raWRzID0gW107XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRDb21wb25lbnQoYyl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGMpe1xyXG4gICAgICAgIHRoaXMua2lkcy5wdXNoKGMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb21wb25lbnQoYyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoYyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGMpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMua2lkcy5pbmRleE9mKGMpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZUNsaWNrZWQoKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmNvbXBvbmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0ubW91c2VDbGlja2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMua2lkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMua2lkc1tpXS5tb3VzZUNsaWNrZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuY29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXS5tb3VzZVByZXNzZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5raWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5raWRzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VEcmFnZ2VkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb21wb25lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmtpZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmtpZHNbaV0ubW91c2VEcmFnZ2VkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdDsiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgQm9keUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9waHlzaWNzL0JvZHlDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlbmRlckNvbXBvbmVudCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9yZW5kZXIvUmVuZGVyQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBvbkFjdGlvbil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgeCAtPSAxNjcvMjtcclxuICAgICAgICB5IC09IDczLzI7XHJcbiAgICAgICAgdGhpcy5vbkFjdGlvbiA9IG9uQWN0aW9uO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbXBvbmVudCA9IG5ldyBCb2R5Q29tcG9uZW50KHRoaXMsIHgsIHksIDE2NywgNzMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHRoaXMuYm9keUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25JbWFnZSA9IGdhbWUucC5naW1hZ2VzW1wiYXNzZXRzL3VpL2J1dHRvbnNfbWVudS5wbmdcIl07XHJcbiAgICAgICAgdGhpcy5idXR0b25JbWFnZV9pZGxlID0gZ2FtZS5wLmNyb3AoYnV0dG9uSW1hZ2UsIDAsIDczLCAxNjcsIDczKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkltYWdlX2hvdmVyID0gZ2FtZS5wLmNyb3AoYnV0dG9uSW1hZ2UsIDAsIDAsIDE2NywgNzMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IG5ldyBSZW5kZXJDb21wb25lbnQodGhpcywgdGhpcy5ib2R5Q29tcG9uZW50LCB0aGlzLmJ1dHRvbkltYWdlX2lkbGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LnVwZGF0ZSA9IChkZWx0YSk9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQubW91c2VIb3ZlcigpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmltYWdlID0gdGhpcy5idXR0b25JbWFnZV9ob3ZlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50LmltYWdlID0gdGhpcy5idXR0b25JbWFnZV9pZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50Lm1vdXNlUHJlc3NlZCA9ICgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlDb21wb25lbnQubW91c2VIb3ZlcigpKVxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQodGhpcy5yZW5kZXJDb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vT2JqZWN0cy9NZW51L0J1dHRvblwiO1xyXG5cclxuY2xhc3MgTWVudVN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIGxldCBidXR0b24xID0gbmV3IEJ1dHRvbihnYW1lLCBnYW1lLnAuZ2FtZVdpZHRoLzIsIGdhbWUucC5nYW1lSGVpZ2h0LzItMTAwLCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEdhbWVPYmplY3QoYnV0dG9uMSk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKGdhbWUsIGdhbWUucC5nYW1lV2lkdGgvMiwgZ2FtZS5wLmdhbWVIZWlnaHQvMisxMDAsICgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0T3B0aW9ucygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkR2FtZU9iamVjdChidXR0b24yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIHN0YXJ0ZWRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0T3B0aW9ucygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3B0aW9ucyBzdGFydFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTdGF0ZTsiLCJjbGFzcyBTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEdhbWVPYmplY3Qobyl7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5wdXNoKG8pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVHYW1lT2JqZWN0KG8pe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlQ2xpY2tlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlUHJlc3NlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlRHJhZ2dlZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuZ2FtZU9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzW2ldLm1vdXNlRHJhZ2dlZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0udXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5nYW1lT2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHNbaV0uZHJhdygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9