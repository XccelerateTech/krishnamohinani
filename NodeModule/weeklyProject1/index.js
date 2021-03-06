const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const upload = multer();
const app = express();

const port = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false}));
app.use(fileUpload());
app.use(express.static('storage'));

var storageDir = __dirname + path.sep + 'files';




function writeFile(name,body){
    return (new Promise((resolve,reject)=>{
        fs.writeFile(storageDir + path.sep + name, body,
            (err) => {
                if(err){
                    return reject(err);
                }
            resolve(name);
            });
    })).then(readFile);
}

function readFile(file){
    return(new Promise((resolve,reject) =>{
        fs.readFile(storageDir + path.sep + file, (err,body)=>{
           if(err){
               return reject(err);
           }
           resolve(body); 
        });
    }));
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'index.html');
});

app.get('/files/:name', (req,res)=>{
    if(caches[req.params.name]==null){
        caches[req.params.name] = readFile(req.params.name);
    }
    caches[req.params.name]
        .then((body)=>res.send(body))
        .catch((e)=>res.status(500).send(e.message));
});

app.post('/files', upload.single('file'), (req, res)=> {

    let file = req.files.upload.name
    let data  = req.files.upload.data
    caches[file] = writeFile(file, data);
    caches[file].then(()=> res.send('file uploaded'))
        .catch((e)=> res.status(500).send(e.message));
});

app.listen(port, ()=> console.log(`Dropbox with cache listening on port ${port}!`));
