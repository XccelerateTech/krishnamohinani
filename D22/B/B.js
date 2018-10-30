var fs = require('fs');

function copy(dir) {

    var readable = fs.createReadStream(dir,{encoding:'utf8',highWaterMark:32*1024});
    var writeable = fs.createWriteStream(__dirname + '/yooo.txt');

    readable.pipe(writeable);
}

copy(__dirname+'/hi.txt');