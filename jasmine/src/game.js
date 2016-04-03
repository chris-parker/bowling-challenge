function Game() {
  this.totalScore = 0;
  this.currentFrame = 1;
  this.doubleScore = 0;
  this.midFrame = false;
  this.currentFrameScore = 0;
}

Game.prototype.bowl = function(score) {
  if (this.currentFrame === 10) {
    this.frameTenBowl(score);
  } else if (score === 10) {
    this.allPinsDown();
  } else if (this.midFrame === false) {
    this.midFrame = true;
    this.firstBowl(score);
  } else {
    this.secondBowl(score);
  }
};

Game.prototype.allPinsDown = function() {
  this.addScore(10);
  this.midFrame ? this.doubleScore = 1 : this.doubleScore = 2;
  this.endFrame();
};

Game.prototype.firstBowl = function(score) {
  this.currentFrameScore += score;
  this.addScore(score);
};

Game.prototype.secondBowl = function(score) {
  this.currentFrameScore += score;
  this.addScore(score);
  if (this.currentFrameScore === 10) {
    this.doubleScore = 1;
  }
  this.endFrame();
};

Game.prototype.frameTenBowl = function(score) {

}

Game.prototype.addScore = function(score) {
  if (this.doubleScore > 0) {
    this.totalScore += ( score * 2 );
    this.doubleScore -= 1;
  } else {
    this.totalScore += score;
  }
};

Game.prototype.getScore = function() {
  return this.totalScore;
};

Game.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};

Game.prototype.endFrame = function() {
  this.currentFrame += 1;
  this.currentFrameScore = 0;
  this.midFrame = false;
};
