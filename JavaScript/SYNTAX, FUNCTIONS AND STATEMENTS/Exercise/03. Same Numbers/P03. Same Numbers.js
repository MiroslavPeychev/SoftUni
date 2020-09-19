function sameNumbers(input) {
    let numberAsString = String(input);
    let areEqual = false;

    for (let i = 0; i < numberAsString.length; i++) {
        
       let firstNumber = Number(numberAsString[i]);
       let secondNumber = Number(numberAsString[i + 1]); 

       if (firstNumber === secondNumber) {
           areEqual = true;
       }

    }

    let sum = Array.from(numberAsString, Number).reduce((a, b) => a + b, 0);

    console.log(areEqual);
    console.log(sum);
}

sameNumbers(1234);