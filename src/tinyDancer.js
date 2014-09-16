
var TinyDancer = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("white");
}

TinyDancer.prototype = Object.create(Dancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;
TinyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("tiny-dancer");

}
