const fs = require ('fs');
const path = require('path');
const fse = require('fs-extra');


fs.readdir('./Folder', (err, files) =>{
   
    if(
        files.forEach(file =>{
            if(path.extname(file) == ".txt")
            {
                let txtFile = file;
                fs.mkdir(path.join('./Folder', 'TextFiles'), (err) =>{});
                fse.move(`./Folder/${txtFile}`, `./Folder/TextFiles/${txtFile}`, (err) =>{});
            }
        })
    );
    else if(
        files.forEach(file =>{
            if(path.extname(file) == ".jpg" || path.extname(file) == ".png")
            {
                let image = file;
                fs.mkdir(path.join('./Folder', 'Images'), (err) =>{});
                fse.move(`./Folder/${image}`, `./Folder/Images/${image}`, (err) =>{});
            }
        })
    );

    else(
        files.forEach(file =>{
               // if(path.extname(file) == ".pdf")
                {
                let other = file;
                fs.mkdir(path.join('./Folder', 'Other'), (err) =>{});
               fse.move(`./Folder/${other}`, `./Folder/Other/${other}`, (err) =>{});
                }
        })
    );
})