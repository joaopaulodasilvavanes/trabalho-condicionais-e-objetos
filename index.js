joao paulo
// interpretação de codigo
// ---------------1---------------------------------------
// A) o codigo serve para puxar as informaçoes da pessoa e saber se a pessoa pode digirir de acordo com a idade
// B)quando a alice falar se é de maior ou menor de idade

// ---------------------2----------------------

// A)ver se o animal é ou não é carnívoro
// B)leão é um animal carnívoro

// -----------------------3---------------------

// A)ve se o numero maior ou menor que 5 e se é  impar ou par
// B)O número é maior do que 5.O número é par.
// 


//Escrita de Código

// 1)
/*
function info(idade){
    if ( idade >= 18 && 18){
       return 'voce é maior de idade';
    }else{return "voce é menor de idade"}
}
console.log(info(
    Number(prompt('qual a sua idade')),

));

// 2

function escola (turno){



    if (turno === 'M' ) {

        return 'bom dia'

    
}
 else if (turno === 'T' ){

    return 'boa tarde'


}
else if (turno === 'N'){

    return 'boa noite'

}

else {

return 'turno nao reconhecido'

}

}
let turnoFornecido = (prompt('qual seu turno de escola'));

console.log(escola(turnoFornecido))


// 3)

let turno = prompt('qual turno você estuda?');
switch (turno){
 case 'M':
    console.log('bom dia')
    break
      case 'T':
        console.log('boa tarde')
        break
          case 'N':
            console.log('boa noite')
            break
            default:
              console.log('nao estuda')
}


// 4)

let aluno  = {

    nome: (prompt('qual seu nome')),
    
    idade: Number(prompt('qual sua idade')),

    tipodecurso: Boolean(prompt('voce faz algum curso (true/false): ')),

    tembolsa: Boolean(prompt('voce tem bolsa'))

}

 function candidatar (aluno){

    if (aluno.idade < 30){
        if (aluno.tipodecurso === true ){
                if (aluno.tembolsa === false){

          }
         }

         return 'voce esta apto para candidato'

    }
else {

return 'voce nao esta apto para se canditatar'


}


} 





console.log(candidatar (aluno)); 


5)



*/


// exercicios complementar  


function soma(soma1,soma2){
    return soma1 + soma2
  
  }
  function subtraçao(sub1,sub2){
    return sub1 - sub2
  }
  function multiplicaçao(multi1,multi2){
    return multi1 * multi2 
  }
  function divisao(divi1,divi2){
    return divi1 / divi2
  }
  
  let num1 = Number(prompt("digite um numero "));
  let num2 = Number(prompt("digite outro numero"));
  console.log(soma(num1,num2), 
  subtraçao(num1,num2), 
  multiplicaçao(num1,num2),
   divisao(num1,num2));

function calcularmedia([a,b,c,d,e]) {

a + b
c + d
return calcularmedia
}
