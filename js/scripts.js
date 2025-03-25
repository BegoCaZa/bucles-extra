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
    const newArray=[];

    for (const word  of words) {
            if(vowels.includes(word.charAt(0).toUpperCase())){ //las vocales incluyen la primer letra en mayusccula?
                newArray.push(word);
            }  
    }
    console.log(newArray);
}
wordFilter(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

//3 - Bego está calculando la media aritmética de un array de números. Debe mostrar el promedio y el total de elementos en el array.
// Ejemplo entrada: [5, 10, 15, 20]
// Ejemplo salida: Promedio: 12.5 - Total de elementos: 4

const calculateAvarage =(numbers)=>{
    let addition=0;

    for (const number of numbers) {
        addition= addition+number;
    }
    let avarage= addition/numbers.length;

    console.log(`Promerio: ${avarage} - Total de elementos: ${numbers.length}`)
}

calculateAvarage([10, 20, 30, 40, 50]);

//4 - Camila quiere invertir un array sin usar el método .reverse(). El array debe mostrarse al revés y ser un nuevo array diferente al original.
// Ejemplo entrada: [1, 2, 3, 4]
// Ejemplo salida: [4, 3, 2, 1]

const reverseArray =(numbers)=>{
    const newArray=[];

    for (let i = numbers.length-1; i >= 0; i--) { //empieza en la ultima posicion del array hasta que llegue a 0
        newArray.push(numbers[i]); //insertar el numero en esa posicion
    }
    console.log(newArray);

}
reverseArray([1, 2, 3, 4]);

//5 - Bego está organizando números. Tiene un array de números positivos y negativos y quiere separarlos en dos arrays: uno con positivos y otro con negativos.
// Ejemplo entrada: [3, -2, -7, 4, 0, -1, 5]
// Ejemplo salida: Positivos: [3, 4, 0, 5] - Negativos: [-2, -7, -1]

const separatePositiveAndNegativeNumbers=(numbers)=>{
    const positives=[];
    const negatives=[];
    for (const number of numbers) {
        if (number>0){
            positives.push(number);
        }else{
            negatives.push(number);
        }
    }
    console.log(`Positivos: ${positives} - Negativos: ${negatives}`);
}
separatePositiveAndNegativeNumbers([3, -2, -7, 4, 0, -1, 5]);

//6 - Macarena necesita una función que genere un array con números del 1 al 100 que sean divisibles por 5 pero no por 3.
// Ejemplo salida: [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]

const numberGenerator=()=>{
    const numbersDividableBy5notBy3=[];

    for (let i = 0; i <=100; i++) {
        if(i%5==0 && i%3!==0){ //va a contar del 1 al 100 y revisar los numeros
            numbersDividableBy5notBy3.push(i);
        } 
    }
    console.log(numbersDividableBy5notBy3);
}
numberGenerator();

//7 - Abby quiere transformar un array de strings en un único string separado por comas, pero ignorando las palabras que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: 'Pan, Mesa'

const doesThisWordHasAVowel=(words)=>{
    const vowels='AEIOU';
    const noVowelWords=[];
     for (const word of words) {
        if(!vowels.includes(word.charAt(0).toUpperCase())){
            noVowelWords.push(word);
        }
     }
     console.log(noVowelWords);
}
doesThisWordHasAVowel(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

//8 - Bego tiene un array con números y debe devolver un nuevo array con solo los números impares multiplicados por 2.
// Ejemplo entrada: [3, 6, 9, 12, 15]
// Ejemplo salida: [6, 18, 30]

const isThisNumberUneven =(numbers)=>{
    const newArray=[];
    for (const number of numbers) {
        if(number%2 !==0){
            newArray.push(number*2)
        }
    }
    console.log(newArray);
}
isThisNumberUneven([3, 6, 9, 12, 15]);

//9 - Sabrina quiere crear un sistema para clasificar números. Recibe un array y debe mostrar cuántos son pares, cuántos son impares y cuántos son cero.
// Ejemplo entrada: [0, 3, 6, 9, 12, 0]
// Ejemplo salida: Pares: 2 - Impares: 3 - Ceros: 2

const numberClasificator=(numbers)=>{
    let evenNumbers=0;
    let unevenNumbers=0;
    let zeros=0;

    for (const number of numbers) {
        if(number%2===0){
            evenNumbers++;
        } else if (number%1===0){
            unevenNumbers++;
        } else {
            zeros++;
        }
    }
    console.log(`Pares: ${evenNumbers} - Impares: ${unevenNumbers} - Ceros: ${zeros}`)
}
numberClasificator([0, 3, 6, 9, 12, 0]);

//10 - Camila quiere un sistema que reciba un array de nombres y devuelva un array nuevo con las posiciones donde aparecen nombres con más de 5 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']
// Ejemplo salida: [2, 4]

const  onlyNamesWithFourLetters=(names)=>{
    let positionNamesWith4Letters=[];

    for (let i = 0; i <= names.length; i++) {
        if(names.length[i]===4){
            positionNamesWith4Letters.push(i);
        }        
    }
    console.log(positionNamesWith4Letters); 

} //sale el array vacio
onlyNamesWithFourLetters(['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']);

//11 - Macarena quiere generar un código de seguridad que se crea uniendo la primera letra de cada palabra en un array de frases.
// Ejemplo entrada: ['Fuego en el bosque', 'Refugio seguro', 'Suministros esenciales']
// Ejemplo salida: 'FRS'

const codeGenerator=(words)=>{
    let code="";

    for (const word of words) {
        code=code+word.charAt(0);
    }

    console.log(code);
}
codeGenerator(['Fuego en el bosque', 'Refugio seguro', 'Suministros esenciales']);

//12 - Bego quiere hacer un sistema que reciba dos arrays de números y devuelva un array con los números que aparecen en ambos arrays.
// Ejemplo entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo salida: [3, 4]

const whichNumberRepeats=()=>{
    const numbers1=[1, 2, 3, 4];
    const numbers2=[3, 4, 5, 6];
    let repeatedNumbers=[];

    for (let i = 0; i < numbers1.length; i++) {//debo revisar cada posicion y verificar si no se repite en el segundo array
        if(numbers1.includes(numbers2[i])){ //ën este indice de numbers2, esta alguno de number1?
            repeatedNumbers.push(numbers2[i]) //aaaah funciono con number 2, por?
        }
    }
    console.log(repeatedNumbers);
} 
whichNumberRepeats([]);

// 13 - Camila necesita generar un array que contenga todos los números entre dos números dados, inclusive.
// Ejemplo entrada: 5 y 10
// Ejemplo salida: [5, 6, 7, 8, 9, 10]

const numbersInBetween=(numbers)=>{
    let numbersBetween=[];
    for (let i = numbers[0]; i <= numbers[1]; i++) { //como se que el array tiene 2 numeros solamente, le digo que empiece en 0 y termine en 1
        numbersBetween.push(i);
    }
    console.log(numbersBetween);
} //omg funcionoooo
numbersInBetween([5,10]);

//14 - Macarena quiere un programa que devuelva el número total de vocales en cada palabra de un array.
// Ejemplo entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo salida: [2, 2, 3]

const howManyVowels=(words)=>{
    const vowels="AEIOUaeiou";
    let totalVowels=[];
    let vowel=0; //contador de vocales

    for (let i = 0; i < words.length; i++) {
        // let vowel=0; //contador de vocales
        for (const word of words) {
            if (vowels.includes(word)){
                vowel++;
            }
        }
        totalVowels.push(vowel);
        
    }
    console.log(totalVowels);
} //no pude:(
howManyVowels(['Hola', 'Mundo', 'JavaScript']);

//15 - Bego quiere que cada string en un array se muestre al revés.
// Ejemplo entrada: ['Hola', 'Mundo']
// Ejemplo salida: ['aloH', 'odnuM']

const reverseThisWord=(words)=>{
    const reversedWords=[];

    for (const word of words) {
        const reversedWord= word.split("").reverse().join('');
        reversedWords.push(reversedWord);
    }
    console.log(reversedWords);
}
reverseThisWord(['Hola', 'Mundo']);