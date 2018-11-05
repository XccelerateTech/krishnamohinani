class Song {
    constructor(name,album,author){
        this.name=name;
        this.album=album;
        this.author=author;
    }

    getDescription(){
        let a = "The name of this song is " + this.name + " and it is from the album " + this.album + ". It is written by " + this.author;
        return a;
    }

    persistFavoriteStatus(value) {
        throw new Error("not yet done");
    }



}



module.exports = Song;