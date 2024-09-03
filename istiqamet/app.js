"use strict"

const up = prompt('ingilis dilinde  "UP" hansi istiqameti bildirir?');



if (up === 'yuxari') {
    console.log('1.yuxari gedin');
    const right = prompt('ingilis dilinde  "RIGHT" hansi istiqameti bildirir?');


    if (right === 'sag') {
        console.log('2.saga gedin');
        const down = prompt('ingilis dilinde  "DOWN" hansi istiqameti bildirir?');


        if (down === 'asagi') {
            console.log('3. asagi gedin');
            const left = prompt('ingilis dilinde  "LEFT" hansi istiqameti bildirir?');

            if (left === 'sol') {
                console.log('4. sola gedin');
            }

            else {
                console.log('yalnis');
            }
        }
        else {
            console.log('yalnis');
        }


    }
    else {
        console.log('yalnis');
    }

}

else {
    console.log('yalnis');
}