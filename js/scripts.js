//1 - Bego necesita un generador de contraseñas. Debe crear 3 contraseñas únicas usando letras mayúsculas, minúsculas, números y símbolos. Cada contraseña debe tener 8 caracteres, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
//Ejemplo salida: ['aB9$Rty1', 'Cz7%Qw2$', 'Xy8&Re9P']

const passwordGenerator=()=>{
    const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password=""; //para guardar los strings

    for (let i= 0; i < 8; i++) {
        const randomIndex=Math.floor(Math.random()*characters.length); //indice random
        const randomCharacter= characters.charAt(randomIndex);
        password=password+randomCharacter;
    }
  return password //guarda esa info y la regresa despues al mencionar la función
}
// passwordGenerator(); //funcion que genera la contraseña

const passwordArrayGenerator=()=>{
    const passwordList=[]; //array donde guardar la contraseña
    for (let i =0;  i<3 ; i++) {
        passwordList.push(passwordGenerator());
    }
    console.log(passwordList);
}
passwordArrayGenerator();

//2 - Macarena quiere hacer un filtro de palabras. Tiene un array con palabras mezcladas y quiere devolver un nuevo array solo con las que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: ['Agua', 'Elefante', 'Oruga']

const wordFilter=(words)=>{
    const vowels="AEIOU";

    for (const word  of words) {
        for (const letter of word) {
            if(vowels.includes(letter.charAt(0).toUpperCase())) //las vocales incluyen la primer letra en mayusccula
            
        }
        if(word.charAt(0).includes(vowels)){

        }




        
    }
}
