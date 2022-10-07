let value = +prompt('Введите числовое значение:');

if (isNaN(value) || value === 0 || typeof (value) !== 'number') {
    console.log('Упс, кажется вы ошиблись');
} else if (value % 2 === 0) {
    console.log('Введённое число - чётное.');
} else if (value % 1 === 0) {
    console.log('Введённое число - нечётное');
}

let x;

if (typeof (x) === 'number') {
    console.log('X - число');
} else if (typeof (x) === 'string') {
    console.log('X - строка');
} else if (typeof (x) === 'boolean') {
    console.log('Х - логический тип');
} else {
    console.log('Тип Х не определён');
}
