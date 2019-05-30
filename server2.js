/*  Chapitre 2  */

/*    I : Exploiter les globals 

var title = 'Hello world';

console.log(title);

console.log(__filename);
*/

/* II : Utiliser les arguments 

console.log(process.argv); 

function collect(key){
    var key = process.argv.indexOf(key);

    return key === -1 ? null : process.argv[key+1];
}

var nom = collect('--name');
var message = collect('--message');

if (nom && message)
{   
    return console.log(`${nom}`,` : `,`${message}`);
}
console.log('Il n\'y a pas de message');  //Si la condition est remplie, le script s'arrête grace au return
*/

/*

/* III et IV : Sorties classiques  */

var questions = [
    "Comment t'appeles-tu ?",
    "Que fais-tu dans la vie ?",
    "Quelle est ton langage de progra préféré ?"
];

function ask(index){
    actualIndex = index
    process.stdout.write(`${questions[index]} > `);
    createTimeout();
}

var rep = [];

process.stdin.on('data', function(data){
    rep.push(data.toString());
    if (questions.length === rep.length) 
    {
        process.exit();
    }   
    ask(rep.length); 
});

ask(0);

process.on('exit', function(){
    process.stdout.write(`\n${questions[0]} : ${rep[0]} \n ${questions[1]} : ${rep[1]} \n ${questions[2]} : ${rep[2]} \n `);
});


var reaction = [
    "Tu es là ?",
    "Allo ?",
    "Bon..."
];

var actualIndex;

function createTimeout (){
    setTimeout(function(){
        askwithReact();
    }, 5000);
};

function askwithReact(index){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${reaction[actualIndex]} ${questions[actualIndex]} > `);
}