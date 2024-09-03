"use strict";

const boy = +prompt('boyunuzu yazin');
const ceki = +prompt('cekinizi yazin');
const c = ceki / (boy * boy);

if ('c' <= 18.5) {
    console.log('BMI-si azdir, ariqdir.');
}
else if (18.5 < 'c' < 25) {
    console.log('BMI-si normal beden olcusune sahibdir.');
}
else if ('c' >= 30) {
    console.log('BMI-si kokdur');
}
else {
    console.log('obese');
}

