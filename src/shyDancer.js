var ShyDancer = function(top,left,timeBetweenSteps) {
  timeBetweenSteps = 120;
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass("shy");
  this.id = ShyDancer.prototype.count;
  ShyDancer.prototype.count++;
  this.$node.attr("id", this.id);
  this.right = this.left+ 150;
}

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;
ShyDancer.prototype.step = function() {
  this.top += (Math.random()*14)-7;
  this.left += (Math.random()*14)-7;
  this.right = this.left + 150;
  this.setPosition.call(this);
  Dancer.prototype.step.call(this);
};
ShyDancer.prototype.lineUp = function() {
  this.left = 1400;
  this.setPosition.call(this);
};

ShyDancer.prototype.runAway = function() {
  this.left += Math.random()*200-100;
  this.top += Math.random()*200-100;
  this.$node.animate({left: this.left, top: this.top}, 150);
}

ShyDancer.prototype.count = 0;
