module.exports.loop = function () {
    //This is the main game loop.  The code inside of these curly brackets will run once per tick.
    var message = "Idle";
    var currentActivity = "";
    
    //if our creep doesnt exist, create it from spawn
        //var result = Game.spawns["Spawn1"].spawnCreep([WORK, MOVE, CARRY, MOVE],"Init");
    Game.spawns["Spawn1"].spawnCreep([WORK, MOVE, CARRY, MOVE],"Init");
    
    //get a reference to our creep
    var mycreep = Game.creeps["Init"];
    
    // if a creep has no energy, go to the energy source and harvest some
    if(mycreep.store[RESOURCE_ENERGY] == 0) {
        
        var source = Game.getObjectById("e8cde9a43c0539328c9c5cf2");
        
        mycreep.moveTo(source);
        mycreep.harvest(source);
        
        currentActivity = "GATHER";
        message = currentActivity;
    } else {
        // but if creep does have energy, bring it to the controller and upgrade it. 
        var controller = mycreep.room.controller;
        
        mycreep.moveTo(controller);
        mycreep.upgradeController(controller);
        
        currentActivity = "Deposit";
        message = currentActivity;
    }
    mycreep.say(message);
}