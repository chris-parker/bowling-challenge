describe('game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts off at a score of 0', function() {
    expect(game.getScore()).toEqual(0);
  });

  it('skips to next frame when a strike is bowled', function() {
    game.bowl(10);
    expect(game.getCurrentFrame()).toEqual(2);
  });

  it('doubles score twice after a strike is bowled', function() {
    game.bowl(10);
    game.bowl(5);
    game.bowl(3);
    expect(game.getScore()).toEqual(26);
  });

  it('skips to next frame after two bowls', function() {
    game.bowl(5);
    game.bowl(3);
    expect(game.getCurrentFrame()).toEqual(2);
  });

});
