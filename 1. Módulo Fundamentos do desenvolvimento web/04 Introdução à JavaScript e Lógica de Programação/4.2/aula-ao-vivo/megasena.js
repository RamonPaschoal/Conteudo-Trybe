let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60); 
let secondNumber = Math.ceil(Math.random() * 60);
let thirdnumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdnumber, fourthNumber, fifthNumber, sixthNumber];

let turma12Play = [35, 8, 22, 14,2, 60];
let turma12Play2 = [1, 2, 3, 4, 5, 6];
let turma12Play3 = [7, 8, 9, 10, 11, 12];

let megaSenaGames = [turma12Play, turma12Play2, turma12Play3]; // array de arrays

for (let games = 0; games < megaSenaGames.length; games += 1) {
    let numberOfHits = 0;
    for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
        for (let indexPlay = 0; indexPlay < megaSenaGames[games].length; indexPlay += 1) {
            if (megaSenaNumbers[indexMega] === megaSenaGames[games][indexPlay]) {
                numberOfHits += 1;
            };
        };
    };
    console.log('Jogada ' + (games + 1));
    console.log(`Mega-Sena : ${megaSenaNumbers}`);
    console.log(`Jogo: ${megaSenaGames[games]}`);
    console.log(`Acertos: ${numberOfHits}`);
    console.log('---------------------');
};