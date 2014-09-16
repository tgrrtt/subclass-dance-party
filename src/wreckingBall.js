

var WreckingBall = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("wrecking-ball");
  this.$node.addClass("animated infinite");
  this.$node.addClass("swing");
  this.right = this.left + 600;
  this.bottom = this.top + 1000;
}

WreckingBall.prototype = Object.create(Dancer.prototype);
WreckingBall.prototype.constructor = WreckingBall;
WreckingBall.prototype.step = function() {
  this.left += 8;
  this.right += 8;
  this.setPosition.call(this);
  for (var i = 0; i < window.dancers.length; i++) {
    var targetDancer = window.dancers[i];
    if (this.right >= targetDancer.left && this.right < targetDancer.right) {
      targetDancer.$node.trigger("click");
    }

  }
  $('.dancefloor').toggleClass("flash")

  Dancer.prototype.step.call(this);
};
WreckingBall.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};

// get wreckingball offsets
// get all other dancers
// get dancer offsets
// if wreckingball & other dancer offset overlap, triggerClick on dancer
