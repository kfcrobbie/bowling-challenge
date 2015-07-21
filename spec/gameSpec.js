describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

    it('can take a score', function() {
      game.pinsHit(5); 
      expect(game.frameScore).toEqual([5]);
    });

   it('adds two roll scores to the frames array', function() {
    game.pinsHit(3);
    game.pinsHit(4)
   	expect(game.framesArray).toEqual([[3,4]]);
   });

  it('marks a strike when 10 is scored off the first roll', function(){
   game.pinsHit(10);
   expect(game.framesArray).toEqual([[10, 'X']]);
});

  it('can correctly take two completed frames', function() {
    game.pinsHit(3);
    game.pinsHit(5);
    game.pinsHit(7);
    game.pinsHit(1)
    expect(game.framesArray).toEqual([[3,5],[7,1]])
  })


});