function createTownRegister(input) {

    let towns = {};

    input.forEach(line => {
        
        let [town, populationInput] = line.split(' <-> ');
        
        let population = Number(populationInput);
        if (!towns[town]) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    });

    Object.keys(towns).forEach(town => console.log(`${town} : ${towns[town]}`));
}

createTownRegister(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);