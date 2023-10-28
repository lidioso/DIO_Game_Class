
const prompt = require('prompt-sync')({ sigint: true});

/*---------------------------------------------------------*/
/*Classe:       Heroi
/*Description:  Cria um objeto com as propriedades de um heroi
/*Author:       Lidio Oliveira
/*Propriedades: cname, cage, ctype
/*---------------------------------------------------------*/
class Heroi {
    
    constructor(cname, cage, ctype){
        this.cname   = cname;
        this.cage    = cage;
        this.ctype   = ctype;
    }
}


//Solicita ao usuário os dados do herói
var cname   = "";
var cage    = "";
var ctype   = "";
var lOk     = false;

while (!cname){
    cname = entrada("Qual o nome do Heroi? ");
}

while (!cage){
    cage = entrada("Qual é a idade do Herói? ");
}

while (!ctype || lOk === false){
       
    ctype = entrada("Qual é o tipo do Herói? mago, guerreiro, monge ou ninja? ");
        
    if( ctype === "mago" || ctype === "guerreiro" || ctype === "monge" || ctype === "ninja"){
        lOk = true;
    }

}


//Cria o Herói
const personagem = new Heroi(cname, cage, ctype);

//Executa a função responsável pelo ataque
attack(personagem)



/*---------------------------------------------------------*/
/*Funcion:     entrada
/*Description:  Solicita informação ao usuáro
/*Author:       Lidio Oliveira
/*Params:       cMessage (caracter) - texto da solicitação
/*Return:       info - informação incluída pelo usuário
/*---------------------------------------------------------*/
function entrada(cMessage){
    
    var info = prompt(cMessage);
    
    return info
}


/*---------------------------------------------------------*/
/*Funcion:     entrada
/*Description:  Solicita informação ao usuáro
/*Author:       Lidio Oliveira
/*Params:       cMessage (caracter) - texto da solicitação
/*Return:       info - informação incluída pelo usuário
/*---------------------------------------------------------*/
function attack(heroi){
    
    var tipo = heroi.ctype;
    let ataque = "";

    if(tipo === "mago"){
        ataque = "magia";
    }
    else if(tipo === "guerreiro"){
        ataque = "espada";
    }
    else if(tipo === "monge"){
        ataque = "artes marcias";
    }
    else if(tipo === "ninja"){
        ataque = "shuriken";
    }
     
    return console.log("o heroi " + heroi.cname + " do tipo " + tipo + " atacou usando " + ataque);
}