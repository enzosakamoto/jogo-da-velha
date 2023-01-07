
const winConditions = [
 ["s1", "s2", "s3"],
 ["s4", "s5", "s6"],
 ["s7", "s8", "s9"],
 ["s1", "s4", "s7"],
 ["s2", "s5", "s8"],
 ["s3", "s6", "s9"],
 ["s1", "s5", "s9"],
 ["s3", "s5", "s7"]
];

export function checkWin(array) {
    for(let indexWins = 0; indexWins < winConditions.length; indexWins++) {
        let count = 0;
        for(let index = 0; index < winConditions[indexWins].length; index++) {
            for(let deepIndex = 0; deepIndex < array.length; deepIndex++) {
                if(array[deepIndex] === winConditions[indexWins][index]) count++;
            }
        }
        if(count === 3) return true;
    }
    return false;
}

const moves = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

export function botMove(arrayP1, arrayP2) {
    let randomIndex = Math.floor(Math.random() * (Math.floor(moves.length) - Math.ceil(0)) + Math.ceil(0));
    while((arrayP1.includes(moves[randomIndex])) || (arrayP2.includes(moves[randomIndex]))) {
        randomIndex = Math.floor(Math.random() * (Math.floor(moves.length) - Math.ceil(0)) + Math.ceil(0));
    }
    return moves[randomIndex];
}
