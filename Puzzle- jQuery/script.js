$(function() {  
  "use strict";
  var clickedItems = [], i = 1;
  $(".card").on("click",function() { 
    if($(this).hasClass("matched") || $(this).hasClass("flipped")) {
      return;
    }
    $(this).toggleClass('flipped');
    var classArray = $(this).find("i").attr("class").split(" ");
    var className = classArray[1];
    clickedItems.unshift(className);
    if(i%2 == 0) { 
      if(clickedItems[0] === clickedItems[1]) { 
        actionDelay($("."+clickedItems[0]).parents(".card"),"flipped matched");
      } else {
        actionDelay($(this),"flipped");
        actionDelay($("."+clickedItems[1]).parents(".card.flipped"),"flipped");
      }
    }
    ++i;
  });
  function actionDelay(elem,className) { 
    setTimeout(function() {
      $(elem).toggleClass(className);
      if($(".card.matched").length === 16) { $(".card").toggleClass("matched")
        /*if(confirm("Game over! Do you want to play again?")) {*/
          $(".card").toggleClass("flipped");
          actionDelay($(".card"),"flipped");
        /*}*/
      }
    },600);
  }
});
