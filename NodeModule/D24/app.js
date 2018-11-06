var fs = require('fs');

function fileTypes(dir) {
    fs.readdir(dir,{withFileTypes:true},function(err,files){
        for (var i = 0;i<files.length;i++){
            if(files[i].isDirectory()){
                console.log(`${files[i].name} is a directory`);    
            } else if (files[i].isFile()){
                console.log(`${files[i].name} is a file`);
            }
        }
    })
}

fileTypes(__dirname);



// fs.readdir(`${__dirname}/files/files`,{withFileTypes:true},function(err,files){
//     for (var i = 0;i<files.length;i++){
//         if(files[i].isDirectory()){
//             console.log(`${files[i].name} is a directory`);

//         } else if (files[i].isFile()){
//             console.log(`${files[i].name} is a file`);
//         }
//     }
// })

