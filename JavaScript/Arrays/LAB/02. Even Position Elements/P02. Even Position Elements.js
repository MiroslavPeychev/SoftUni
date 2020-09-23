function takeElementsOnEvenPositions(inputArr) {
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i += 2) {
        resultArr.push(inputArr[i]);
    }

    console.log(resultArr.join(' '));
}

takeElementsOnEvenPositions(['20', '30', '40'])