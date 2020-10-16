function getProductAndQuantitylve(inputData) {
    let results = {};
    let juices = {};

    inputData.forEach(line => {
        let [fruit, quantityAsStr] = line.split(' => ');
        let quantity = Number(quantityAsStr);

        if (!results[fruit]) {
            results[fruit] = quantity;
        } else {
            results[fruit] += quantity;
        }

        if (results[fruit] >= 1000) {
            juices[fruit] = 0;
        }
    });

    Object.keys(results).forEach(fruit => {
        if (juices[fruit] !== undefined) {
            juices[fruit] += parseInt(results[fruit] / 1000);
        }
    });

    Object.keys(juices).forEach(fruit => console.log(`${fruit} => ${juices[fruit]}`));
}

getProductAndQuantitylve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);