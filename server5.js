var fs = require('fs');

/*
//var file = fs.readdirSync('./');
var file = fs.readdir('./', (err, file) => {
    console.log(file);
});

console.log('Read : ');


//var content = fs.readFileSync('server.js', 'UTF-8');
console.log(content);
------------------------------------------------------------------

fs.readdir('./', (err, file) =>{
    file.forEach( (filename) => {
        console.log('================================  '+filename+'  ================================');
        var content = fs.readFileSync(`${filename}`, 'UTF-8');
        console.log(content);
        //var stat = fs.statSync(filename);
        //console.log(stat.isFile());//console.log(stat);
        
    });
    
})

-------------------------------------------------------------------

var content = `Inter quos Paulus eminebat notarius ortus in Hi admissum est facinus impium, quod Constanti tempus nota inusserat sempiterna.`;

fs.writeFile('test.txt', content.trim(), (err,file) =>{   // Ou appendFile
    console.log('Fichier créer');
});

if(fs.existsSync('lib')){
    console.log('Le répertoire existe déja. ');
}

fs.mkdir('lib', (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log('Répertoire créer.');
    }
});

-------------------------------------------------------------------

if (fs.existsSync('test.txt')) {
    fs.renameSync('test.txt', 'change.txt');        //fs.renameSync('lib/asset', './assets'); pour les dossiers
    console.log('Fichier renomé.');
}
else{
    console.log('Le fichier n\'existe pas.');
}

try{
    fs.unlinkSync('change.txt');                    //fs.rmdirSync('lib')  => Supprime les dossiers vides
} catch (error) {
    console.log( `error on ${error.path}`);
}
console.log('Fichier supprimer.');

------------------------------------------------------------------- 
*/

var stream = fs.createReadStream('lid/lorem.txt', 'UTF-8');

stream.once('data', ()=>{
    console.log('Start');
});

stream.on('data', (chunk)=>{
    process.stdout.write(`Chunk : ${chunk.length} `);
});

stream.on('end', ()=>{
    console.log('Fin.');
});