

var WreckingBall = function(top,left,timeBetweenSteps) {
  timeBetweenSteps = 60;
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("wrecking-ball");
  this.$node.addClass("animated infinite");
  this.$node.addClass("swing");
  this.top = $("body").height()*0.25;
}

WreckingBall.prototype = Object.create(Dancer.prototype);
WreckingBall.prototype.constructor = WreckingBall;
WreckingBall.prototype.step = function() {

  this.left += (Math.random()*10)-5;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
WreckingBall.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};
