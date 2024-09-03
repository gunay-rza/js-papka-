"use strict";



const valyuta = confirm('odenis manatladir?');

if (valyuta) {
    const sahe = +prompt('evin sahesi ne qederdir');
    if (sahe >= 200) {
        console.log('meni qane edir');
        const qiymet = +prompt('evin qiymeti ne qederdir?');
        if (qiymet < 99999) {
            console.log('esl men isteyen evdir');
        }
        else {
            console.log('o pula deymir hec ALMIRAM');
        }

    }
    else {
        console.log('menlik deyik ,bu ev kicikdir');
    }

}
else {
    console.log('mene serf etmir,alasi olmadim');
}