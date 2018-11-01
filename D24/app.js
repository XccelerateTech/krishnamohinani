var fs = require('fs');

fs.readdir(`${__dirname}/files/files`,{withFileTypes:true},function(err,files){
    for (var i = 0;i<files.length;i++){
        if(files[i].isDirectory()){
            console.log(`${files[i].name} is a directory`);
        } else if (files[i].isFile()){
            console.log(`${files[i].name} is a file`);
        }
    }
})

// var fs = require('fs');

// fs.readdir(`${__dirname}/files/project_A`,function(err,files){
    
//     console.log(files.length);
//     // for(var i=0;i<files.length;i++){
//     //     if(files[i].isDirectory()){
//     //         console.log(`${files[i]} is a directory`);
//     //     } else if (files[i].isFile()){
//     //         console.log(`${files[i]} is a file`);
//     //     }
//     // }
// })