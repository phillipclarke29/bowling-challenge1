var Game = function() {
  this.rolls = [];
  this.bonuses = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(hits) {
  this.rolls[this.currentRoll++] = hits;
};

Game.prototype.totalGameScore = function() {
  // var totalstrikeBonus = (this._findStrikes() || 0);
  var totalSpareBonus = (this._findSpares() || 0);
  // var totalTwoStrikesbonus = (this._findTwoStrikes() || 0);
  // var totalScore = this.rolls.reduce(add, 0);
  // function add(a, b) {
  //   return a + b;
  // }

  return totalSpareBonus + this._findStrikes() + this._findTwoStrikes() + this._totalScores();
};

Game.prototype._totalScores = function() {
  var totalScore = 0;
    this.rolls.map(function(item){
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
  for (i = 0; i < this.rolls.length; i++) {
    if ((i % 2 != 0)) {
      if ((this.rolls[i] + this.rolls[i - 1] === 10) && (this.rolls[i - 1] != 10)) {
        return (this.rolls[i + 1]);
      }
    }
  }
};

Game.prototype._LastFrameScore
