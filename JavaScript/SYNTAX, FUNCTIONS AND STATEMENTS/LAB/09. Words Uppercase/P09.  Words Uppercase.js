function solve(input) {
    let regex = /\b\w+\b/g;
    let matches = input.match(regex);

    let resultArray = matches.map(element => {
        return element.toUpperCase();
    });

    console.log(resultArray.join(', '));
}

solve('hello');