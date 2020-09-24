function findTwoSmallestNumbers(inputArr) {
    let result = inputArr
    .sort((a, b) => a-b)
    .slice(0, 2)

    console.log(result.join("\r\n"));
}

findTwoSmallestNumbers([3, 0, 10, 4, 7, 3]);