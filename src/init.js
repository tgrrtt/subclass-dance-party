$(document).ready(function(){
  window.dancers = [];
  var score = 0;
  $(".addWreckingBall").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(-20,-300,40);
    $('body').append(dancer.$node);
    var song = $('.song').get(0);
    song.play();
  })
  $(".addDancerButton").on("click", function(event){

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.7 + 100,
      $("body").width() * Math.random()  * 0.7 + 300,
      Math.random() * 1500
    );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
  });

  $(".lineUp").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      //set windowdancers position to left 30;
      window.dancers[i].lineUp()
    };
  });

  $("body").on("click",".dancer", function(event){
    $(this).addClass("explosion");
    var removee = $(this);
    setTimeout(function() {
      removee.remove();
    }, 820)
    score++;
    $(".score").text(score)
  })


});

