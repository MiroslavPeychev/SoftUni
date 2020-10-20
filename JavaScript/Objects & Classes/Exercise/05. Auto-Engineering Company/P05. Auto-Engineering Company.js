function createCarRegister(inputData) {
    let results = new Map();
    inputData.forEach(line => {
        let [carBrand, carModel, producedCarsAsString] = line.split(' | ');
        let producedCars = Number(producedCarsAsString);

        if (!results.has(carBrand)) {
            results.set(carBrand, new Map());
        }

        let mapModels = results.get(carBrand);

        if (!mapModels.has(carModel)) {
            mapModels.set(carModel, 0);
        }

        mapModels.set(carModel, mapModels.get(carModel) + Number(producedCars));
    });

    for (const carBrand of results.keys()) {
        console.log(carBrand);

        let mapModels = results.get(carBrand);

        for (const carModel of mapModels.keys()) {
            console.log(`###${carModel} -> ${mapModels.get(carModel)}`);
        }
    }

}

createImageBitmap(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);