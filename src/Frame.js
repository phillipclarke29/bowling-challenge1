var Frames = function(){
 this.rolls = []
 this.currentFrame = 0;


};

Frames.prototype.roll = function(hits){
  this.rolls[this.currentFrame++] = hits;
};
