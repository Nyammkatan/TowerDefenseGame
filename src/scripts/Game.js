import MobFire0 from "./Objects/Game/Mobs/Fire/MobFire0";

class Game {

    constructor(p){
        this.p = p;
        this.state = null;
        this.mouseDown = false;
        this.gameTime = 0;
        this.constants = {
            MOB_FIRE_0: MobFire0, 
            MOB_FIRE_1: MobFire1,
            MOB_FIRE_2: MobFire2,
            MOB_FIRE_3: MobFire3,
            MOB_FIRE_4: MobFire4,
            MOB_FIRE_5: MobFire5,
            MOB_FIRE_6: MobFire6,
            MOB_FIRE_7: MobFire7,
            MOB_FIRE_8: MobFire8,
            MOB_FIRE_9: MobFire9,
            MOB_EARTH_0: MobEarth0,
            MOB_EARTH_1: MobEarth1,
            MOB_EARTH_2: MobEarth2,
            MOB_EARTH_3: MobEarth3,
            MOB_EARTH_4: MobEarth4,
            MOB_EARTH_5: MobEarth5,
            MOB_EARTH_6: MobEarth6,
            MOB_EARTH_7: MobEarth7,
            MOB_EARTH_8: MobEarth8,
            MOB_EARTH_9: MobEarth9,
            MOB_WATER_0: MobWater0,
            MOB_WATER_1: MobWater1,
            MOB_WATER_2: MobWater2,
            MOB_WATER_3: MobWater3,
            MOB_WATER_4: MobWater4,
            MOB_WATER_5: MobWater5,
            MOB_WATER_6: MobWater6,
            MOB_WATER_7: MobWater7,
            MOB_WATER_8: MobWater8,
            MOB_WATER_9: MobWater9,
            MOB_SHADOW_0: MobShadow0,
            MOB_SHADOW_1: MobShadow1,
            MOB_SHADOW_2: MobShadow2,
            MOB_SHADOW_3: MobShadow3,
            MOB_SHADOW_4: MobShadow4,
            MOB_SHADOW_5: MobShadow5,
            MOB_SHADOW_6: MobShadow6,
            MOB_SHADOW_7: MobShadow7,
            MOB_SHADOW_8: MobShadow8,
            MOB_SHADOW_9: MobShadow9,
            MOB_AIR_0: MobAir0,
            MOB_AIR_1: MobAir1,
            MOB_AIR_2: MobAir2,
            MOB_AIR_3: MobAir3,
            MOB_AIR_4: MobAir4,
            MOB_AIR_5: MobAir5,
            MOB_AIR_6: MobAir6,
            MOB_AIR_7: MobAir7,
            MOB_AIR_8: MobAir8,
            MOB_AIR_9: MobAir9,
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