var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

function questionHandler(){
    this.actualIndex = 0;
    this.question;
    this.rep = [];
    this.attribut;

    this.getQuestion = function(){
        return this.question[this.actualIndex];
    }    

    this.setQuestions = function(question){
        this.question = question;
        return this;
    }

    this.setAttributes = function(attribut){
        this.attribut = attribut;
        return this;
    }


    this.demande = function(){
        var that = this;
        rl.question(this.getQuestion(), function (rep){            
            that.rep[that.attribut[that.actualIndex]] = rep;
            that.actualIndex ++;
    
            if (that.actualIndex === that.question.length) 
            {
                console.log(that.rep);
                rl.close();
            }
            that.demande();
        });
    }    
}

rl.on('close', function(){
    process.exit();
});

module.exports = new questionHandler();