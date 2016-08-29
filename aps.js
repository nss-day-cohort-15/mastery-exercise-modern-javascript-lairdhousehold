var robotWars = (function (robotWars){
 $(document).ready(function(){
  robotWars.robot = function(){
    this.name ='';
    this.type = null;
    this.subtype = null;
    this.health = 0;
    this.damage = 0;
    console.log(robotWars.robot)

  };
  function randomHealth(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(min-max))+ min;
  console.log(robotWars)
  }
  function randomAttack(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(min-max))+ min;
  }

  robotWars.TankBot = function(){
    this.type = 'Tankbot';
    console.log(TankBot)
  };
    robotWars.Tankbot.prototype = new robotWars.robot();
  robotWars.Voltron = function(){
    this.type = 'Voltron';
  };
    robotWars.Voltron.prototype = new robotWars.robot();
  robotWars.AerialMech = function(){
    this.type = 'Aerial-Mech';
  };
    robotWars.AerialMech.prototype = new robotWars.robot();
  robotWars.howitzer = function(){
    this.subtype = 'howitzer'
    this.health = randomHealth(50,120);
    this.damage = randomAttack(25,100);
    this.img = '<img class="pic"src="img/Howitzer.jpg" alt="tankbot"/>'
  };
  robotWars.howitzer.prototype = new robotWars.TankBot

  robotWars.vulconizer = function(){
    this.subtype = 'vulconizer'
    this.health = randomHealth(45,100);
    this.damage = randomAttack(45,80);
    this.img = '<img class="pic"src="img/machine gun.jpg" alt="tankbot"/>'
  };
  robotWars.vulconizer.prototype = new robotWars.TankBot()

  robotWars.swordBot = function(){
    this.subtype = 'swordBot'
    this.health = randomHealth(25,100);
    this.damage = randomAttack(60,75);
    this.img = '<img class="pic"src="img/Sword Daddy.jpg" alt="tankbot"/>'
  };
  robotWars.swordBot.prototype = new robotWars.Voltron()

  robotWars.flyingLion = function(){
    this.subtype = 'flyingLion'
    this.health = randomHealth(50,95);
    this.damage = randomAttack(40,90);
    this.img = '<img class="pic"src="img/flying lion.jpg" alt="tankbot"/>'
  };
  robotWars.flyingLion.prototype = new robotWars.Voltron()
  robotWars.gunnerBot = function(){
    this.subtype = 'gunnerBot'
    this.health = randomHealth(50,80);
    this.damage = randomAttack(25,100);
    this.img = '<img class="pic"src="img/air machine gun.jpg" alt="tankbot"/>'
  };
  robotWars.missleBot.prototype = new robotWars.AerialMech()
  robotWars.missleBot = function(){
    this.subtype = 'missleBot'
    this.health = randomHealth(50,100);
    this.damage = randomAttack(60,70);
    this.img = '<img class="pic"src="img/air missile.jpg" alt="tankbot"/>'
  };
  robotWars.missileBot.prototype = new robotWars.AerialMech()
 });
return robotWars
})(robotWars||{});

