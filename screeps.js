//create vars for various types of workers
var initSpawnCount = 3;
var initName = "Init" + initSpawnCount;

var numbahTwoSpawnCount = 1;
var numbahTwoName = "NumbahTwo." + numbahTwoSpawnCount;

//create identifiers for various spawns
var homeBase = "Spawn1";

var bases = [homeBase];

//This is the main game loop.  The code inside of these curly brackets will run once per tick.
module.exports.loop = function () {

    //if creep doesnt not exist, create it from spawn
    Game.spawns[homeBase].spawnCreep([WORK, MOVE, MOVE, CARRY, CARRY], initName);
    Game.spawns[homeBase].spawnCreep([WORK, MOVE, MOVE, CARRY, CARRY], numbahTwoName);

        //currently spawning manually with "Game.spawns["Spawn1"].spawnCreep([WORK, MOVE, MOVE, CARRY, CARRY],"Init3");"

        // if creeps with role of harvester do not exist, create

            // if energy < x, create basic unit 

        // if creeps with role of X do not exist, create

            // if energy < x, create basic unit

        // if creeps with role of Y do not exist, create

            // if energy < x, create basic unit

        //set count of creeps

    //#region Havesters
    // create list of harvesters
    var harvesters = [initName, numbahTwoName];
    var message = "";
    var currentActivity = "";

    harvesters.forEach(harvester => {
       var mycreep = Game.creeps[harvester];

        // If creep has no energy, go gather energy
        if(mycreep.store.getFreeCapacity() > 0){
            var sources = mycreep.room.find(FIND_SOURCES);
            if(mycreep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                mycreep.moveTo(sources[0]);
            }

            currentActivity = "GATHER";
            message = currentActivity;
        }
        //for each base in bases
            // if spawn energy is < creep energy, deposit energy at spawn
            //else, upgrade controller
     /*   
            bases.forEach(base => {
            if(Game.spawns)
        })
        if(Game.spawns[])
     */

        // If Creep does have energy, then go deposit the energy at base
            //if base energy empty 
        else {
            if(mycreep.transfer(Game.spawns[homeBase], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                mycreep.moveTo(Game.spawns[homeBase]);
            }

            currentActivity = "Dep -" + homeBase;
            message = currentActivity;
        }

        // output creeps current activity to world
        mycreep.say(message);
    });

    //#endregion Havesters


}