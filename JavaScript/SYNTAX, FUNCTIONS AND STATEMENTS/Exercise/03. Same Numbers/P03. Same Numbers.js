function sameNumbers(input) {
    let numberAsString = String(input);
    let areEqual = true;

    for (let i = 0; i < numberAsString.length -1; i++) {
        
       let firstNumber = Number(numberAsString[i]);
       let secondNumber = Number(numberAsString[i + 1]); 

       if (firstNumber !== secondNumber) {
           areEqual = false;
       }

    }

    let sum = Array.from(numberAsString, Number).reduce((a, b) => a + b, 0);

    console.log(areEqual);
    console.log(sum);
}

sameNumbers(2222222);