/* Chapitre 3

I : Path et Util


var path = require('path');
var util = require('util');

console.log(path.basename(__filename));
var mypath = (path.join(__dirname,'var','www','app'));

var msg = util.format('%s : %s', 'Le dossier est', mypath);
console.log(msg);

 II : readline  

 var readline = require('readline');
 var rl = readline.createInterface(process.stdin,process.stdout);

 var questions = [
    "Comment t'appeles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quelle est ton langage de progra préféré ?"
];

var personne = {
    name: '',
    hobby: '',
    lg: ''
}

var actualIndex = 0;

function getQuestion(){
    return questions[actualIndex];
};

rl.question(getQuestion(), function (rep){
    personne[actualIndex] = rep;
    actualIndex ++;
    //console.log(`Votre nom est ${personne.name}`);
    rl.setPrompt(getQuestion());
    rl.prompt();    
    //rl.close();
});

 III : Readline pt.2

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

 var questions = [
    "Comment t'appeles-tu ? ",
    "Que fais-tu dans la vie ? ",
    "Quelle est ton langage de progra préféré ? "
];

var personne = {};
var attribut = ['name', 'hobby', 'lg'];
var actualIndex = 0;

function getQuestion(){
    return questions[actualIndex];
};

function demande(){
    rl.question(getQuestion(), function (rep){
        personne[attribut[actualIndex]] = rep;
        actualIndex ++;

        if (actualIndex === questions.length) 
        {
            rl.close();
        }
        demande();
    });
}

demande();

rl.on('close', function(){
    console.log(personne);
    process.exit();
});

 IV : Création de module


var qa = require('./questionHandler');

var questions = [
    "Comment t'appeles-tu ? ",
    "Que fais-tu dans la vie ? ",
    "Quelle est ton langage de progra préféré ? "
];

var attribut = ['name', 'hobby', 'lg'];

qa 
    .setQuestions(questions)
    .setAttributes(attribut)
    .demande()
;

V : Child_process

var exec = require('child_process').exec;

exec('ls', function(err,stdout){
    if (err) 
    {
        throw err;   
    }
    console.log('Processus terminé : ');
    console.log(stdout);
});

VI : Spawn  */

var spawn = require('child_process').spawn;
var child = spawn('node', ['spawned.js']);

child.stdout.on('data', (data) => {
    process.stdout.write(data);
});

process.stdin.on('data',(data)=>{
    child.stdin.write(data);
    setTimeout(() =>{
        process.exit();
    },15);
    
});