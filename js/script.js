'use strict'

const number = +prompt('Ведите число');
const degree = +prompt('Ведите степень');

function erection(num, deg = 1){

    if(Number.isNaN( num ) ){
        return 'some error';
    }else{
        return alert( 'Ваш результат ' + num ** deg );
    }

}

erection(number,degree);



