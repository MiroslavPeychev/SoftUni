function findLowestPriceIncities(inputArr) {
    let products = new Map();

    inputArr.forEach(row => {
        let [town, productName, price] = row.split(' | ');
        if (!products.has(productName)) {
            products.set(productName, new Map());
        }

        products.get(productName).set(town, Number(price));


        
    })

    for (let [key, value] of products) {
           let lowest = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }

            return a;
           }));

           console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}

findLowestPriceIncities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);


