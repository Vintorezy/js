let availableCars = new Map([
    ['Ford', 'Focus'],
    ['Porshe', 'Cayenne'],
    ['Skoda', 'Karoq'],
    ['Chevrolet', 'Cruze']
]);

availableCars.forEach(function(value, key) {
    console.log(`Ключ — ${key}, значение - ${value}`);
});