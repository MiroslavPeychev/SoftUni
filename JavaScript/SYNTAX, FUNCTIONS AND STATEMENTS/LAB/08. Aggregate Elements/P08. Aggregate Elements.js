function solve(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    let newArray = array.map(convertElements);

    function convertElements(num) {
        return 1 / num;
    }

    let sumReversedArray = newArray.reduce((a, b) => a + b, 0);
    let concatElements = array.join('');

    console.log(sum);
    console.log(sumReversedArray);
    console.log(concatElements);
}

solve([1, 2, 3])