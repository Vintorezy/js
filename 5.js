const example = [1, 2, 3, 4, 5, 6, 7];
console.log('Количество элементов в массиве: '+ example.length);

for (let i=0; i < example.length; i++) {
     console.log(example[i]);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log('Количество элементов в массиве: '+ arr.length);

arr.forEach(function(item, index, array) {
  console.log(item);
});

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log('Количество элементов в массиве: '+ arr1.length);

arr1.map(function(item, index, array) {
  console.log(item);
});