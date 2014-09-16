var TeleportDancer = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
}

TeleportDancer.prototype = Object.create(Dancer.prototype);
TeleportDancer.prototype.constructor = TeleportDancer;
TeleportDancer.prototype.step = function() {
  var newTop = this.top + 1000 * Math.random(); // 0 -1
  Dancer.prototype.step.call(this);
  this.$node.css({opacity:0.1, "border-color": "blue", top: this.top});
  this.$node.animate({opacity: 1, top: newTop}, 800);
}
TeleportDancer.prototype.lineUp = function() {
  this.$node.css({top: "0px"});
}
