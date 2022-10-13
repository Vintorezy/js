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