import GameComponent from "../GameComponent";
import Mob from "../../Objects/Game/Mobs/Mob";

class WaveMasterLogicComponent extends GameComponent {

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
export default WaveMasterLogicComponent;