"use strict";

const gender = prompt('cinsiyyet(k/q)');
const username = prompt('enter your username');
if (gender === 'k') {
    console.log(`salam cenab, ${username}`);

}
else if (gender === 'K') {
    console.log(`salam cenab, ${username}`);

}

else if (gender === 'q') {
    console.log(`salam xanim, ${username}`);

}
else if (gender === 'Q') {
    console.log(`salam xanim, ${username}`);

}
else {
    console.log('duzgun qeyd edin');
}