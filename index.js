// Code your solutions in this file

function writeCards(names, event) {
    const greetings = [];
    for (let i = 0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return greetings;
}

function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}