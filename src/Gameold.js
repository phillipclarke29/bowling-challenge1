var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
  this.lastHits = [];
  this.sum = 0;
};

Game.prototype.roll = function(hits) {
  this.rolls[this.currentRoll++] = hits;
};

Game.prototype._totalGameScore = function() {
  if (this.currentRoll < 20) {
    return this._findSpares() + this._findStrikes() + this._findTwoStrikes() + this._totalScores();
  } else if (this.currentroll === 19 && this.roll[19] === 10) {
    console.log('You got a strike on your last frame - you get two extra rolls');
  } else {
    console.log('Game Over');
  }
};

Game.prototype._totalScores1 = function() {
  var totalScore = 0;
  this.rolls.map(function(item) {
    totalScore += item;
  });
  return totalScore;
};

Game.prototype.currentGameRoll = function() {
  var roll = (this.currentRoll);
  return roll;
};

Game.prototype.currentGameFrame = function() {
  var frame = (Math.round(this.currentRoll / 2));
  return frame;
};

Game.prototype._findStrikes = function() {
  var totalStrikeBonus = totalStrikeBonus || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if (i % 2 == 0) {
      if ((this.rolls[i] === 10) || (this.rolls[i] === 20)) {
        totalStrikeBonus = totalStrikeBonus + ((this.rolls[i + 2] || 0) + (this.rolls[i + 3] || 0));
      }
    }
  } return totalStrikeBonus;
};

Game.prototype._findTwoStrikes = function() {
  var totalTwoStrikes = totalTwoStrikes || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if (i % 2 == 0) {
      if ((this.rolls[i] === 10) && (this.rolls[i + 2] === 10)) {
        this.rolls[i] = 20;
      }
    }
  } return totalTwoStrikes;
};

Game.prototype._findSpares = function() {
  var totalSpareBonus = totalSpareBonus || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if ((i % 2 != 0)) {
      if ((this.rolls[i] + this.rolls[i - 1] === 10) && (this.rolls[i - 1] != 10) && (this.currentRoll != 2)) {
        totalSparebonus = totalSparebonus + (this.rolls[i + 1]);
      }
    }
  } return totalSpareBonus;
};

Game.prototype._lastRoll = function(num) {
  this.lastHits.push(num);
  lastHitsFloat = 0;
  sum = this.lastHits.reduce(function(a, b) {return a + b;});
};

Game.prototype._grandTotal = function() {
  return sum + this._totalGameScore();

};
