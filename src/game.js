var Game = function() {
  this.framesArray = []
  this.frameNumber = 1
  this.bonus = 0
  this.frameRolls = 0
  this.frameScore = []
};


Game.prototype.pinsHit = function(num) {
  if (num == 10) {
    this.frameScore.push(10) && this.frameScore.push('X')
    this.EndOfFrame()
  } else {
    if ((this.frameScore[0] + num) > 10) {
      throw new Error('Invalid frame score!');
    } else {
      this.frameScore.push(num)
      this.frameRolls++
        this.isFrameOver()
    };
  };
};

Game.prototype.isFrameOver = function() {
  if (this.frameRolls >= 2) {
    this.EndOfFrame()
  }
};

Game.prototype.EndOfFrame = function() {
  this.framesArray.push(this.frameScore)
  this.frameNumber++
    this.frameScore = []
  this.frameRolls = 0
};
