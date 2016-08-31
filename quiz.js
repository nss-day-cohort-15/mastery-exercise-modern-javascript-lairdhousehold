"use strict"
let robotWarz =(() =>{
  // establishing the object
  let rbt={};
  let player1, player2 = null;
  function init(e){
    // setting parameters for select
    let player1name = $('#player1name').val();
    let player2name = $('#player2name').val();
    let player1select = $('#player1-select').val.();
    let player2select = $('#player2-select').val();

    if(!player1name || !player2name){
      (.battle).append('<h3>Please give both players a Name');
    }
    else if ('!player1select || !player2select'){
      (.battle).html('');
      (.battle).append('<h3>Please select a robot for both players');
    }
    else{
      // setting varibale for players
      player1 = rbt.selection(player1select,player1name);
      player2 = rbt.selection(player2select,player2select);
      // clearing the div of error messages
      (.battle).html('');
    }

      function buildBattlefield() {
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
              <img src="${player1.img}">
              <p>Name: ${player1name}</p>
              <p>type: ${player1.type}</p>
              <p>Class: ${player1.class}</p>
            </div>
            <div class = "battledome col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h2>Player 2</h2>
              <div class="progress">
                <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 100%;" id="enemy-healthbar">
                  ${player2.health}
                </div>
              </div>
              <img src="${player2.img}">
              <p>Name: ${player2name}</p>
              <p>type: ${player2.type}</p>
              <p>Class: ${player2.class}</p>
            </div>
          </div>
          <button id="destroy">Destroy Each Other</button>
          <div id="battle-results"></div>
        </div>
      `);

return rbt
  }

})
