"use strict"
let robotWars =(() =>{
  // establishing the object
  let rbt={};
  let player1, player2 = null;
  function battlex(e){
    // setting parameters for select
    let player1name = $('#player1Name').val();

    let player2name = $('#player2Name').val();
    let player1select = $('#player1-select').val();
    let player2select = $('#player2-select').val();
    let battleZone = $('battle').html('')
    let fightButton = $('#battle')

    if (!player1name || !player2name){
      $('.battle').append('<h3>Please give both players a Name');
    }
    else if (!player1select || !player2select){
      battleZone.html('');
      $('.battle').append('<h3>Please select a robot for both players');
    }
    else {
      fightButton.remove();
      // setting variable for players.
      player1 = rbt.selection(player1select,player1name);
      player2 = rbt.selection(player2select,player2name);
      // clearing the div of error messages
      battleZone.html('');

      buildBattleZone();
    }
}
rbt.selection = (selectValue, robotName) =>{
  switch(selectValue){
    case 'Howitzer': return new Howitzer(robotName);
    case 'Vulconizer': return new Vulconizer(robotName);
    case 'SwordBot': return new SwordBot(robotName);
    case 'FlyingLion': return new FlyingLion(robotName);
    case 'GunnerBot': return new GunnerBot(robotName);
    case 'MissileBot': return new MissileBot(robotName);

  }

}

      function buildBattleZone() {
      $('.battle').html(`
        <div class = "container">
          <div class="row">
            <div class = "battledome col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h2>Player 1</h2>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%;" id="player-healthbar">
                  ${player1.health}
                </div>
              </div>
              <div col-md-5>
                <img src= ${player1.img}
                <p>Name: ${player1.robotName}</p>
                <p>type: ${player1.type}</p>
              </div>
            </div>
            <div class = "battledome col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h2>Player 2</h2>
              <div class="progress">
                <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 100%;" id="enemy-healthbar">
                  ${player2.health}
                </div>
              </div>
              <div col-md-5>
               <img src= ${player2.img}
               <p>Name: ${player2.robotName}</p>
               <p>type: ${player2.type}</p>
              </div>
            </div>
          </div>
          <button id="destroy">Destroy Each Other</button>
          <div id="battle-results"></div>
        </div>
      `);

  }
  $('#battle').click(battlex)
return rbt

})()
