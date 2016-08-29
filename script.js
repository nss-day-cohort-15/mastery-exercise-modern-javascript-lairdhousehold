var robotWars = (function (robotWars){
  $(document).ready(function(){

  $('.howitzer1').on('click', function(){
      player1 = new robotWars.howitzer();
      player1.name = robotWars.name;
    })
  $('.vulconizer1').on('click', function(){
      player1 = new robotWars.vulconizer();
      player1.name = robotWars.name;
    })
  $('.sword1').on('click', function(){
      player1 = new robotWars.swordBot();
      player1.name = robotWars.name;
    })
  $('.flying1').on('click', function(){
      player1 = new robotWars.flyingLion();
      player1.name = robotWars.name;
    })
  $('.gunner1').on('click', function(){
      player1 = new robotWars.gunnerBot();
      player1.name = robotWars.name;
    })
  $('.missile1').on('click', function(){
      player1 = new robotWars.missileBot();
      player1.name = robotWars.name;
    })
    $('.howitzer2').on('click', function(){
      player2 = new robotWars.howitzer();
      player2.name = robotWars.name;
    })
  $('.vulconizer2').on('click', function(){
      player2 = new robotWars.vulconizer();
      player2.name = robotWars.name;
    })
  $('.sword2').on('click', function(){
      player2 = new robotWars.swordBot();
      player2.name = robotWars.name;
    })
  $('.flying2').on('click', function(){
      player2 = new robotWars.flyingLion();
      player2.name = robotWars.name;
    })
  $('.gunner2').on('click', function(){
      player2 = new robotWars.gunnerBot();
      player2.name = robotWars.name;
    })
  $('.missile2').on('click', function(){
      player2 = new robotWars.missileBot();
      player2.name = robotWars.name;
    })
  return robotWars
  })
})(robotWars||{})
