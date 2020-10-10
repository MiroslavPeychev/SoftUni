function findLowestPriceIncities(input) {
    let products = {};
    let towns = [];

    input.forEach(row => {
        let [town, productName, priceAsText] = row.split(' | ');
        let price = Number(priceAsText);
        towns.push(town);
        let tempTown = town;


        if (!products[productName] || products[productName].price > price || products[productName].town == town) {
            products[productName] = {
                
                
                town: town,
                price: price,
            };
        }
    });

    Object.keys(products).forEach(product =>
        console.log(`${product} -> ${products[product].price} (${products[product].town})`)
    );
}

findLowestPriceIncities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);


function solve() {
    const recipes = {
      apple: {
        carbohydrate: 1,
        flavour: 2
      }, 
      lemonade: {
        carbohydrate: 10,
        flavour: 20
      },
      burger: {
        carbohydrate: 5,
        fat: 7,
        flavour: 3
      },
      eggs: {
        protein: 5,
        fat:1,
        flavour: 1
      },
      turkey: {
        protein:10,
        fat: 10,
        carbohydrates: 10,
        flavour: 10,
      }
    }
   
    const stocks = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0
    };
   
    const commands = {
      restock : (microelement, quantity) =>  {
        stocks[microelement] += quantity
        return 'Success';
      },
      prepare: (product, quanity) => { 
        let recipe = Object.entries(recipes[product]);
   
        for(let[item,countNeeded] of recipe) {
            if(stocks[item] < countNeeded * quanity) {
              return `Error: not enough ${item} in stock`;
            }
        }
   
        recipe.forEach(([item, countNeeded]) => {
          stocks[item] -= countNeeded * quanity;
        });
   
        return 'Success'
   
      },
      report : () => Object.
                      entries(stocks).
                      map(([microelement, count]) => `${microelement}=${count}` ).
                      join(' ')
   
    };
   
    return (input) => {
      let [command, item, count] = input.split(' ');
      return commands[command](item, +count);
    }
  }