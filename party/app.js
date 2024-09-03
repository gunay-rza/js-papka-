"use strict";

const age = +prompt('yawinizi qeyd edin');




if (age > 18) {
    const gender = prompt('cinsiyyetiniz (k/q)');


    if (gender === 'q') {
        const name = prompt('adinizi qeyd edin');

        console.log(`salam xanim, ${name} xos gelmissiniz`);

    }
    else if (gender === 'Q') {
        const name = prompt('adinizi qeyd edin');

        console.log(`salam xanim, ${name} xos gelmissiniz`);
    }
    else if (gender === 'k') {
        const name = prompt('adinizi qeyd edin');

        console.log(`salam cenab, ${name} xos gelmissiniz`);

    }
    else if (gender === 'K') {
        const name = prompt('adinizi qeyd edin');

        console.log(`salam cenab, ${name} xos gelmissiniz`);

    }
    else {
        console.log('duzgun qeyd edin');
    }
}


else {
    console.log('yasiniz catmir');
}