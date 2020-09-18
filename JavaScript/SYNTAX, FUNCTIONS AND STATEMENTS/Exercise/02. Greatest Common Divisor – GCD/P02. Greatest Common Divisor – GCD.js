function greatestCommonDivisor(firstNumber, secondNumber) {

    let result;
    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);

    while(secondNumber) {
        let tempNumber = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = tempNumber;
    }

    console.log(firstNumber);
}

greatestCommonDivisor(15, 5)