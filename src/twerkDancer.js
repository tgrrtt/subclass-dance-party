var TwerkDancer = function(top,left,timeBetweenSteps) {
  timeBetweenSteps = 40;
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("twerk");
}

TwerkDancer.prototype = Object.create(Dancer.prototype);
TwerkDancer.prototype.constructor = TwerkDancer;
TwerkDancer.prototype.step = function() {
  this.top += (Math.random()*20)-10;
  this.left += (Math.random()*20)-10;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
TwerkDancer.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};
