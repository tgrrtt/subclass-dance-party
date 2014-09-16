var BlinkyDancer = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
BlinkyDancer.prototype.lineUp = function() {
  var line = 200 + 30*Math.random();
  this.$node.css({left: line});
};
