function sumFirstWithLastElement(inputArr) {
    let numbersArr = inputArr.map(Number);
    let arrayLength = numbersArr.length;
    let sum = 0;

    if (arrayLength === 1) {
        sum = numbersArr[0] * 2;
    } else if (arrayLength === 2) {
        sum = numbersArr[0] + numbersArr[1];
    } else if (arrayLength > 2) {
        sum = numbersArr.pop() + numbersArr.shift();
    }

    console.log(sum);
}

sumFirstWithLastElement(['20', '30', '40'])