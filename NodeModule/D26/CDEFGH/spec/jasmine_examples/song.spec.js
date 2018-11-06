// describe("Player", function() {

  var Song = require('../../lib/jasmine_examples/Song');
  
  var song;
  var song1;
  var song2;
  
  
  
  
  beforeEach(function(){
      song = new Song("Numb","Meteora","Linkin Park");
      song1 = new Song("Business","The Eminem Show", "Eminem");
      song2 = new Song("In the End","Meteora","Linkin Park");
  });
  
  it("it should correctly name the song",function(){
      expect(song.name).toEqual("Numb");
      expect(song1.name).toEqual("Business");
      expect(song2.name).toEqual("In the End");
  });
  
  it("should correctly identify artist",function(){
      expect(song.author).toEqual("Linkin Park");
      expect(song1.author).toEqual("Eminem");
      expect(song2.author).toEqual("Linkin Park");
  });
  
  
  it("should save album name",function(){
      expect(song.album).toEqual("Meteora");
      expect(song1.album).toEqual("The Eminem Show");
      expect(song2.album).toEqual("Meteora"); 
  });
  
  it("should describe a song properly",function(){
      expect(song.getDescription()).toMatch("The name of this song is Numb and it is from the album Meteora. It is written by Linkin Park");
  });
  
  it("should be able to match albums",function(){
      expect(song.album==song2.album).toBeTruthy();
      expect(song.album==song1.album).toBeFalsy();
  })
  
  describe("check function", function(){
      it("should work",function(){
          expect(song1).toBeInTheSameAlbumAs(song2);
      })
  })
  
  //toEqual means they have the same value
  //to be means they have the same value since the data is retrieved from the same memory block
  