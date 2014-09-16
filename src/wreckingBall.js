

var WreckingBall = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("wrecking-ball");
  this.$node.addClass("animated infinite");
  this.$node.addClass("swing");
}

WreckingBall.prototype = Object.create(Dancer.prototype);
WreckingBall.prototype.constructor = WreckingBall;
WreckingBall.prototype.step = function() {
  this.left += 6;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
WreckingBall.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};
