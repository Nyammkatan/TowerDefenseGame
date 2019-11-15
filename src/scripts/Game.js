import MobFire0 from "./Objects/Game/Mobs/Fire/MobFire0";

class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;
        this.gameTime = 0;
        this.constants = {
            MOB_FIRE_0: MobFire0, 
            MOB_FIRE_1: 8,
            MOB_FIRE_2: 11,
            MOB_FIRE_3: 19,
            MOB_FIRE_4: 23,
            MOB_FIRE_5: 26,
            MOB_FIRE_6: 30,
            MOB_FIRE_7: 38,
            MOB_FIRE_8: 41,
            MOB_FIRE_9: 46,
            MOB_EARTH_0: 1,
            MOB_EARTH_1: 5,
            MOB_EARTH_2: 10,
            MOB_EARTH_3: 16,
            MOB_EARTH_4: 22,
            MOB_EARTH_5: 27,
            MOB_EARTH_6: 32,
            MOB_EARTH_7: 39,
            MOB_EARTH_8: 43,
            MOB_EARTH_9: 46,
            MOB_WATER_0: 2,
            MOB_WATER_1: 6,
            MOB_WATER_2: 12,
            MOB_WATER_3: 15,
            MOB_WATER_4: 24,
            MOB_WATER_5: 28,
            MOB_WATER_6: 31,
            MOB_WATER_7: 35,
            MOB_WATER_8: 40,
            MOB_WATER_9: 49,
            MOB_SHADOW_0: 3,
            MOB_SHADOW_1: 9,
            MOB_SHADOW_2: 14,
            MOB_SHADOW_3: 18,
            MOB_SHADOW_4: 21,
            MOB_SHADOW_5: 25,
            MOB_SHADOW_6: 33,
            MOB_SHADOW_7: 38,
            MOB_SHADOW_8: 44,
            MOB_SHADOW_9: 46,
            MOB_AIR_0: 4,
            MOB_AIR_1: 7,
            MOB_AIR_2: 13,
            MOB_AIR_3: 17,
            MOB_AIR_4: 20,
            MOB_AIR_5: 29,
            MOB_AIR_6: 34,
            MOB_AIR_7: 36,
            MOB_AIR_8: 42,
            MOB_AIR_9: 47,
        };

    }

    linearInterpolation(fx1, fx2, x1, x, x2){
        if (x >= x2) return fx2;
        if (x < x1) return fx1;
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
export default Game;