"use strict"
class Robot {
  constructor(name){
    return this.name
    // this.name ='';
  }
  health(min, max){
    this.health = Math.floor(Math.random()*(min-max))+ min;
  }
  attack(min, max){
    this.attack = this.health = Math.floor(Math.random()*(min-max))+ min;
  }
}
  console.log()

class TankBot extends Robot{}
class Howitzer extends TankBot{
  constructor(name){
    super(name);
    this.robotName = name0.

    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "Howitzer";
    this.img ='https://s-media-cache-ak0.pinimg.com/564x/49/ea/e4/49eae446786cd52a280b03582a673fa6.jpg'
  };

}
class Vulconizer extends TankBot{
  constructor(name){
    super(name);
    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "Vulconizer";
    this.img = 'https://s-media-cache-ak0.pinimg.com/564x/cf/d5/46/cfd546668b1da3956b253e0267167da4.jpg'
  }
}
class Voltron extends Robot{}
class SwordBot extends Voltron {
  constructor(name){
    super(name);
    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "SwordBot";
    this.img ='http://static.srcdn.com/slir/w1000-h500-q90-c1000:500/wp-content/uploads/Voltron-Destroys-the-Gladiator-with-Sword.jpg'
  };

}
class FlyingLion extends Voltron{
  constructor(name){
    super(name);
    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "FlyingLion";
    this.img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosYUV0M0GUSn8Ufzs8TNo8IBXCt0G2Z0vKKcNpBBaJQcAhUQb'
  }
}
class  AerialMech extends Robot{}
class GunnerBot extends AerialMech{
  constructor(name){
    super(name);
    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "GunnerBot";
    this.img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhqWpju6FoyuO_NzljSG85W2VEper6dVUd_Fqhn7YWcFxCP6n'
  };

}
class MissileBot extends AerialMech{
  constructor(name){
    super(name);
    this.health = (50, 120);
    this.attack = (25,100);
    this.type = "MissileBot";
    this.img ='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2nYn0p1WSsH6n'
  }
}


