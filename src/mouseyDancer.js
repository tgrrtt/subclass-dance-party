

var MouseyDancer = function(top,left,timeBetweenSteps) {
  timeBetweenSteps = 60;
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("mousey");
  this.$node.addClass("animated infinite");
  this.$node.addClass("swing")
}

MouseyDancer.prototype = Object.create(Dancer.prototype);
MouseyDancer.prototype.constructor = MouseyDancer;
MouseyDancer.prototype.step = function() {
  this.top += (Math.random()*10)-5;
  this.left += (Math.random()*10)-5;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
MouseyDancer.prototype.lineUp = function() {
  this.left = 100;
  this.setPosition.call(this);
};
