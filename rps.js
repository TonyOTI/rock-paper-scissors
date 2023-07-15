// rock paper and a scissors, oh yaeh

function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());