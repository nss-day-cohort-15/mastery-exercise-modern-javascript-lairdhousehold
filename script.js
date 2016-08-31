var robotWars = (function (robotWars){
  $(document).ready(function(){

  $('.howitzer1').on('click', function(){
      player1 = new robotWars.howitzer();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/Howitzer.jpg" alt="tankbot"/>');
    })
  $('.vulconizer1').on('click', function(){
      player1 = new robotWars.vulconizer();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/machine gun.jpg" alt="tankbot"/>');
    })
  $('.sword1').on('click', function(){
      player1 = new robotWars.swordBot();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/Sword Daddy.jpg" alt="tankbot"/>');
    })
  $('.flying1').on('click', function(){
      player1 = new robotWars.flyingLion();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/flying lion.jpg" alt="tankbot"/>');
    })
  $('.gunner1').on('click', function(){
      player1 = new robotWars.gunnerBot();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/air machine gun.jpg" alt="tankbot"/>');
    })
  $('.missile1').on('click', function(){
      player1 = new robotWars.missileBot();
      player1.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/air missile.jpg" alt="tankbot"/>');
    })
    $('.howitzer2').on('click', function(){
      player2 = new robotWars.howitzer();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/Howitzer.jpg" alt="tankbot"/>');
    })
  $('.vulconizer2').on('click', function(){
      player2 = new robotWars.vulconizer();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/machine gun.jpg" alt="tankbot"/>');
    })
  $('.sword2').on('click', function(){
      player2 = new robotWars.swordBot();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/Sword Daddy.jpg" alt="tankbot"/>');
    })
  $('.flying2').on('click', function(){
      player2 = new robotWars.flyingLion();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/flying lion.jpg" alt="tankbot"/>');
    })
  $('.gunner2').on('click', function(){
      player2 = new robotWars.gunnerBot();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/air machine gun.jpg" alt="tankbot"/>');
    })
  $('.missile2').on('click', function(){
      player2 = new robotWars.missileBot();
      player2.name = robotWars.name;
      (".batlle").append('<img class="pic"src="img/air missile.jpg" alt="tankbot"/>');
    })
  return robotWars
  })
})(robotWars||{})
