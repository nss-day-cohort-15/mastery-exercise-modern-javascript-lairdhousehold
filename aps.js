var BattleBots =(function (BattleBot ){
  $(".card__link").click.(funcntion (){
    var nextCard =$(this).("next")
    var moveAlong = false;
    switch (nextCard){
      case "card--class":
      moveAlong = ($(#player-name).val() !=="");
    break ;
      case "card--weapon";
    moveAlong = ($(#player-name).val() !=="");
      break;
    }
    if (moveAlong){
      $(".card").hide();
      $("."+nextCard).show();
    }

    }
  })
})
