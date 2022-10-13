const arr = [1, 2, 3, 4, 10, 'string', undefined, 12, null, ',', 0, 0];

let zeroNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;
let NaNcount = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
        NaNcount += 1;
    }
    if (arr[i] === 0) {
        zeroNumbers += 1;
    } else if (arr[i] % 2 === 0) {
        evenNumbers += 1;
    } else {
        oddNumbers += 1;
    }
}

console.log(`В массиве: ${evenNumbers} четных, ${oddNumbers} нечётных, ${zeroNumbers} нулей, ${NaNcount} элементов не содержащих цифр.`)
