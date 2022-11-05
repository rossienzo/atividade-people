import people from './people.json';

// https://www.unimed.coop.br/viver-bem/pais-e-filhos/estatura-por-idade

/** Faça a implementação da função alturaMedia, que deve receber um argumento IPeople, e verificar se a pessoa está acima, abaixo ou exatamente na altura média
 *  OBS: as idades utilizadas serão 5, 10 e 15 apenas.
 */


interface IPeople  {
    nome: string,
    sexo: string,
    idade: number,
    altura: number
}

people.forEach(ppl => {
    console.log(alturaMedia(ppl))
});

export function alturaMedia(people:IPeople) {
    
    let sexo = people.sexo;
    let altura = people.altura;
    let resultado: String = "";

    switch(people.idade)
    {
        case 5: 
            if( (sexo == 'F' && altura < 109.1) || (sexo == 'M' && altura < 108.7) )
                resultado = "Abaixo da ";

            else if( (sexo == 'F' && altura == 109.1) || (sexo == 'M' && altura == 108.7) ) 
                resultado = "Está exatamente na ";

            else if( (sexo == 'F' && altura > 109.1) || (sexo == 'M' && altura > 108.7) )
                resultado = "Acima da ";
            break;
            
        case 10:
            if( (sexo == 'F' && altura < 138.6) || (sexo == 'M' && altura < 140.3) )
                resultado = "Abaixo da ";

            else if( (sexo == 'F' && altura == 138.6) || (sexo == 'M' && altura == 140.3) )
                resultado = "Está exatamente na ";

            else if( (sexo == 'F' && altura > 138.6) || (sexo == 'M' && altura > 140.3) )
                resultado = "Acima da ";
            break;
            
        case 15:
            if( (sexo == 'F' && altura < 161.1) || (sexo == 'M' && altura < 167.8) )
                resultado = "Abaixo da ";

            else if( (sexo == 'F' && altura == 161.1) || (sexo == 'M' && altura == 167.8) )
                resultado = "Está exatamente na ";

            else if( (sexo == 'F' && altura > 161.1) || (sexo == 'M' && altura > 167.8) )
                resultado = "Acima da ";
            break;
        
        default:
            return "Altura inválida!";
    }

    return `${resultado} altura média`;
}
