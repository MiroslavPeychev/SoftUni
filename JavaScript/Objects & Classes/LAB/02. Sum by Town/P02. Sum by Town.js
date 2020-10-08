function sumTownsIncome(input) {

    let result = {};

    while (input.length != 0) {
        let town = input.shift();
        let income = Number(input.shift());

        if (!result[town]) {
            result[town] = income;
        }
         
        result[town] += income;
    }

    console.log(JSON.stringify(result));
}

sumTownsIncome(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
//expected output {"Sofia":45,"Varna":10}
