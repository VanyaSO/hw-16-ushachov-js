'use strict'

const number = +prompt('Ведите любое число');
const degree = +prompt('Ведите степень');

function erection(num, deg = 1){

    if(isNaN(num) || isNaN(deg)){
        return alert('some error');
    }else{
        return alert( 'Ваш результат ' + num ** deg );
    }

}

erection(number,degree);


