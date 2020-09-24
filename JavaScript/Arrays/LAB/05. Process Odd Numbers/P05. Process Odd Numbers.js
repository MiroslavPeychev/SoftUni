function processOddNumbers(inputArr) {
    let oddElements = inputArr.filter(function(inputArr, index) {
        return index % 2 !== 0})
        .reverse()
        .map(n => n * 2);
        
    console.log(oddElements.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);