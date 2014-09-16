

var MouseyDancer = function(top,left,timeBetweenSteps) {
  timeBetweenSteps = 40;
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("mousey");
}

MouseyDancer.prototype = Object.create(Dancer.prototype);
MouseyDancer.prototype.constructor = MouseyDancer;
MouseyDancer.prototype.step = function() {
  this.top += (Math.random()*20)-10;
  this.left += (Math.random()*20)-10;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
MouseyDancer.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};
